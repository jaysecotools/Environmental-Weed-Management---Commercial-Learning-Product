// js/module.js
// Renders a single module page from placeholder content in module-content.js.
// Placeholder content only — no factual claims about weeds, chemicals, ecology
// or regulation. No data is stored or transmitted.
//
// Progress is not persisted. "Mark module complete" is a demonstration only.

import { modules, modulePlaceholderCopy } from "./config/course-config.js";
import { getModuleContent } from "./config/module-content.js";

const params = new URLSearchParams(window.location.search);
const moduleId = params.get("id") || "m1";

const moduleMeta = modules.find((m) => m.id === moduleId) || null;
const content = getModuleContent(moduleId);

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((el) => { el.textContent = value; });
}
function setHtml(selector, value) {
  document.querySelectorAll(selector).forEach((el) => { el.innerHTML = value; });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ---- Handle unknown module id ---- */
if (!moduleMeta || !content) {
  setText('[data-bind="module-title"]', "Module not found");
  setText('[data-bind="module-summary"]', "This module ID was not recognised. Please return to the dashboard and choose a module.");
  setText('[data-bind="module-order"]', "Error");
  setText('[data-bind="module-duration"]', "");
  document.getElementById("outcomes-list")?.replaceChildren();
  document.getElementById("content-sections")?.replaceChildren();
  document.getElementById("quiz-container")?.replaceChildren();
  const nav = document.querySelector(".module-nav");
  if (nav) nav.hidden = true;
  const complete = document.querySelector(".module-complete");
  if (complete) complete.hidden = true;
} else {
  renderModule();
}

/* ---- Shared copy ---- */
function renderSharedCopy() {
  setText('[data-bind="provisional-banner"]', modulePlaceholderCopy.provisionalBanner);
  setText('[data-bind="not-advice"]', modulePlaceholderCopy.notAdviceNotice);
  setText('[data-bind="back-dashboard"]', modulePlaceholderCopy.backToDashboard);
  setText('[data-bind="complete-cta"]', modulePlaceholderCopy.completionCta);
  setText('[data-bind="prev-label"]', modulePlaceholderCopy.prevLabel);
  setText('[data-bind="next-label"]', modulePlaceholderCopy.nextLabel);
}

/* ---- Module metadata ---- */
function renderModuleHeader() {
  setText('[data-bind="module-order"]', `Module ${moduleMeta.order} of ${modules.length}`);
  setText('[data-bind="module-title"]', moduleMeta.title);
  setText('[data-bind="module-summary"]', moduleMeta.summary);
  setText('[data-bind="module-duration"]', moduleMeta.duration);
  setText('[data-bind="module-breadcrumb"]', moduleMeta.title);
  document.title = `${moduleMeta.title} — Environmental Weed Management`;
}

/* ---- Outcomes ---- */
function renderOutcomes() {
  const list = document.getElementById("outcomes-list");
  if (!list) return;
  list.innerHTML = content.learningOutcomes
    .map((o) => `<li>${escapeHtml(o)}</li>`)
    .join("");
}

/* ---- Core content ---- */
function renderContent() {
  const container = document.getElementById("content-sections");
  if (!container) return;
  container.innerHTML = content.sections
    .map(
      (s) => `
      <div class="content-subsection">
        <h3>${escapeHtml(s.heading)}</h3>
        ${s.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
      </div>`
    )
    .join("");
}

/* ---- Field context, activity, takeaway, references ---- */
function renderSingleSections() {
  setText('[data-bind="field-heading"]', content.fieldContext.heading);
  setText('[data-bind="field-body"]', content.fieldContext.body);
  setText('[data-bind="activity-heading"]', content.activity.heading);
  setText('[data-bind="activity-body"]', content.activity.body);
  setText('[data-bind="takeaway-heading"]', content.takeaway.heading);
  setText('[data-bind="takeaway-body"]', content.takeaway.body);
  setText('[data-bind="quiz-heading"]', content.knowledgeCheck.heading);
  setText('[data-bind="quiz-note"]', content.knowledgeCheck.note);
  setText('[data-bind="refs-heading"]', content.references.heading);
  setText('[data-bind="refs-note"]', content.references.note);

  const refs = document.getElementById("refs-list");
  if (refs) {
    refs.innerHTML = content.references.items.length
      ? content.references.items.map((r) => `<li>${escapeHtml(r)}</li>`).join("")
      : `<li><em>No references yet — placeholder only.</em></li>`;
  }
}

/* ---- Knowledge check ---- */
function renderQuiz() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  const answered = new Map(); // questionId -> boolean correct
  const total = content.knowledgeCheck.questions.length;

  container.innerHTML =
    content.knowledgeCheck.questions
      .map((q, i) => {
        const options = q.options
          .map((opt, idx) => `
            <label class="quiz-option" data-q="${q.id}" data-opt="${idx}">
              <input type="radio" name="${q.id}" value="${idx}" />
              <span>${escapeHtml(opt)}</span>
            </label>`)
          .join("");
        return `
          <fieldset class="quiz-question" data-question="${q.id}">
            <legend>${i + 1}. ${escapeHtml(q.prompt)}</legend>
            <div class="quiz-options">${options}</div>
            <p class="quiz-feedback" data-feedback="${q.id}" hidden></p>
          </fieldset>`;
      })
      .join("") +
    `<div class="quiz-summary" id="quiz-summary" hidden>
       <p id="quiz-summary-text"></p>
     </div>`;

  content.knowledgeCheck.questions.forEach((q) => {
    const fieldset = container.querySelector(`[data-question="${q.id}"]`);
    if (!fieldset) return;
    fieldset.addEventListener("change", (e) => {
      if (e.target.name !== q.id) return;
      const selected = Number(e.target.value);
      const correct = selected === q.correctIndex;

      // Disable further changes to this question once answered
      fieldset.querySelectorAll("input").forEach((inp) => { inp.disabled = true; });

      // Style options
      fieldset.querySelectorAll(".quiz-option").forEach((optEl) => {
        const idx = Number(optEl.dataset.opt);
        optEl.classList.remove("is-correct", "is-incorrect");
        if (idx === q.correctIndex) optEl.classList.add("is-correct");
        else if (idx === selected) optEl.classList.add("is-incorrect");
      });

      const feedback = fieldset.querySelector(`[data-feedback="${q.id}"]`);
      if (feedback) {
        feedback.hidden = false;
        feedback.textContent = correct ? q.feedbackCorrect : q.feedbackIncorrect;
        feedback.classList.add(correct ? "quiz-feedback--correct" : "quiz-feedback--incorrect");
      }

      answered.set(q.id, correct);
      updateSummary();
    });
  });

  function updateSummary() {
    if (answered.size < total) return;
    const correctCount = [...answered.values()].filter(Boolean).length;
    const summary = document.getElementById("quiz-summary");
    const text = document.getElementById("quiz-summary-text");
    if (summary && text) {
      summary.hidden = false;
      text.textContent = `Knowledge check (demonstration): ${correctCount} of ${total} correct. This is a placeholder assessment and carries no pass/fail meaning.`;
    }
  }
}

/* ---- Previous / next module links ---- */
function renderModuleNav() {
  const idx = modules.findIndex((m) => m.id === moduleMeta.id);
  const prev = modules[idx - 1];
  const next = modules[idx + 1];

  const prevLink = document.getElementById("prev-link");
  const nextLink = document.getElementById("next-link");

  if (prevLink) {
    if (prev) prevLink.href = `module.html?id=${prev.id}`;
    else { prevLink.setAttribute("aria-disabled", "true"); prevLink.setAttribute("tabindex", "-1"); }
  }
  if (nextLink) {
    if (next) nextLink.href = `module.html?id=${next.id}`;
    else { nextLink.setAttribute("aria-disabled", "true"); nextLink.setAttribute("tabindex", "-1"); }
  }
}

/* ---- Completion (demonstration only) ---- */
function setupCompletion() {
  const btn = document.getElementById("complete-button");
  const status = document.getElementById("complete-status");
  if (!btn || !status) return;
  btn.addEventListener("click", () => {
    status.hidden = false;
    status.textContent = modulePlaceholderCopy.completionDone;
    btn.disabled = true;
    btn.textContent = "Marked complete (demonstration)";
  });
}

/* ---- Misc ---- */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---- Init ---- */
function renderModule() {
  renderSharedCopy();
  renderModuleHeader();
  renderOutcomes();
  renderContent();
  renderSingleSections();
  renderQuiz();
  renderModuleNav();
  setupCompletion();
  setYear();
}
