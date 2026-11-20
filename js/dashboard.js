// js/dashboard.js
// Renders the learner dashboard from mock data in course-config.js.
// No authentication, no persistence, no real learner data.
// All values are demonstration data. Do not wire this to a real backend
// until the security/privacy decisions in the project brief are resolved.

import {
  modules,
  programme,
  mockLearner,
  mockProgress,
  mockActivity,
} from "./config/course-config.js";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDate(iso) {
  if (!iso) return "—";
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-AU", {
      day: "numeric", month: "short", year: "numeric",
    });
  } catch {
    return iso;
  }
}

/* ---- Profile + header ---- */
function renderProfile() {
  const initials = `${(mockLearner.firstName?.[0] ?? "").toUpperCase()}${(mockLearner.lastName?.[0] ?? "").toUpperCase()}`;
  setText("avatar-initials", initials || "??");
  setText("header-display-name", mockLearner.displayName);
  setText("welcome-name", mockLearner.firstName);
  setText("profile-name", `${mockLearner.firstName} ${mockLearner.lastName}`.trim());
  setText("profile-email", mockLearner.email);
  setText("profile-organisation", mockLearner.organisation || "—");
  setText("profile-role", mockLearner.role || "—");
  setText("profile-enrolled", formatDate(mockLearner.enrolledDate));
}

function setupProfilePanel() {
  const btn = document.getElementById("profile-button");
  const panel = document.getElementById("profile-panel");
  if (!btn || !panel) return;
  btn.addEventListener("click", () => {
    const isOpen = panel.hidden;
    panel.hidden = !isOpen;
    btn.setAttribute("aria-expanded", String(isOpen));
  });
}

/* ---- Overview ---- */
function computeOverview() {
  const total = modules.length;
  const completed = modules.filter((m) => mockProgress[m.id]?.state === "completed").length;
  const inProgress = modules.filter((m) => mockProgress[m.id]?.state === "in-progress");

  // Progress model (demonstration):
  // completed module = 1.0, in-progress = its lastPosition (or 0.25 if unknown), locked = 0.
  const fractional = modules.reduce((sum, m) => {
    const p = mockProgress[m.id];
    if (!p) return sum;
    if (p.state === "completed") return sum + 1;
    if (p.state === "in-progress") return sum + (typeof p.lastPosition === "number" ? p.lastPosition : 0.25);
    return sum;
  }, 0);
  const percent = Math.round((fractional / total) * 100);

  const checksPassed = modules.filter((m) => {
    const p = mockProgress[m.id];
    return p?.state === "completed" && typeof p.score === "number" && p.score === p.scoreTotal;
  }).length;

  // Estimate remaining time from module durations (parsed crudely; demonstration only).
  const remainingMinutes = modules.reduce((sum, m) => {
    const p = mockProgress[m.id];
    if (p?.state === "completed") return sum;
    const match = /(\d+)/.exec(m.duration || "");
    const mins = match ? Number(match[1]) : 0;
    if (p?.state === "in-progress") {
      const remaining = 1 - (typeof p.lastPosition === "number" ? p.lastPosition : 0.25);
      return sum + Math.round(mins * remaining);
    }
    return sum + mins;
  }, 0);

  return { total, completed, inProgressCount: inProgress.length, percent, checksPassed, remainingMinutes };
}

function renderOverview() {
  const o = computeOverview();

  setText("overall-progress-value", `${o.percent}%`);
  const bar = document.getElementById("overall-progress-bar");
  const fill = bar?.querySelector(".progress-fill");
  if (bar) bar.setAttribute("aria-valuenow", String(o.percent));
  if (fill) fill.style.width = `${o.percent}%`;

  setText(
    "overall-progress-detail",
    `${o.completed} of ${o.total} modules completed`
  );
  setText("stat-completed", String(o.completed));
  setText("stat-checks", String(o.checksPassed));
  setText("stat-time", o.remainingMinutes > 0 ? `~${o.remainingMinutes} min` : "Complete");
}

/* ---- Modules ---- */
const STATE_LABEL = {
  completed: "Completed",
  "in-progress": "In progress",
  locked: "Locked",
};

const ACTION_LABEL = {
  completed: "Review module",
  "in-progress": "Continue",
  locked: "Locked",
};

function renderModules() {
  const list = document.getElementById("module-list");
  if (!list) return;

  list.innerHTML = modules
    .map((m) => {
      const p = mockProgress[m.id] || { state: "locked" };
      const state = ["completed", "in-progress", "locked"].includes(p.state) ? p.state : "locked";
      const disabled = state === "locked";
      const scoreLine =
        state === "completed" && typeof p.score === "number"
          ? `Knowledge check: ${p.score}/${p.scoreTotal}${p.completedOn ? ` · ${formatDate(p.completedOn)}` : ""}`
          : state === "in-progress"
          ? "In progress — continue where you left off"
          : "Available once prior modules are complete";

      const miniProgress =
        state === "in-progress"
          ? `<div class="mini-progress" aria-label="Module progress"><span style="width:${Math.round((p.lastPosition ?? 0.25) * 100)}%"></span></div>`
          : "";

      return `
        <li class="module-item" data-state="${state}" data-module-id="${escapeHtml(m.id)}">
          <span class="module-index" aria-hidden="true">${String(m.order).padStart(2, "0")}</span>
          <div class="module-body">
            <h3>${escapeHtml(m.title)}</h3>
            <p>${escapeHtml(scoreLine)}</p>
            ${miniProgress}
          </div>
          <div class="module-status">
            <span class="status-badge status-badge--${state}">${STATE_LABEL[state]}</span>
            <a
              class="module-action"
              href="module.html?id=${escapeHtml(m.id)}"
              ${disabled ? 'aria-disabled="true" tabindex="-1"' : ""}
              data-module-action="${escapeHtml(m.id)}"
            >${ACTION_LABEL[state]}</a>
          </div>
        </li>`;
    })
    .join("");
}

/* ---- Activity ---- */
function renderActivity() {
  const list = document.getElementById("activity-list");
  if (!list) return;
  list.innerHTML = mockActivity
    .map(
      (a) => `
      <li>
        <span class="activity-label">${escapeHtml(a.label)}</span>
        <span class="activity-detail">${escapeHtml(a.detail)}</span>
        <span class="activity-date">${escapeHtml(formatDate(a.date))}</span>
      </li>`
    )
    .join("");
}

/* ---- Certificate ---- */
function renderCertificate() {
  const block = document.getElementById("certificate-block");
  if (!block) return;

  const o = computeOverview();
  const status = mockLearner.certificateStatus;

  if (status === "issued" && mockLearner.certificateId) {
    block.innerHTML = `
      <p>Certificate of Completion issued for this demonstration profile.</p>
      <p class="certificate-ref">Reference: ${escapeHtml(mockLearner.certificateId)}</p>
      <p class="certificate-ref">Non-accredited professional development — not a nationally recognised qualification.</p>
    `;
    return;
  }

  if (o.completed === o.total) {
    block.innerHTML = `
      <p>All modules complete. In a live product, the certificate would be available here once final assessment is passed.</p>
      <p class="certificate-ref">Non-accredited professional development — not a nationally recognised qualification.</p>
    `;
    return;
  }

  block.innerHTML = `
    <div class="certificate-placeholder" role="note">
      <h3>Certificate of Completion</h3>
      <p>Available when all modules and the final knowledge check are completed.</p>
      <p>Progress: ${o.completed} of ${o.total} modules complete.</p>
    </div>
    <p class="certificate-ref" style="margin-top: var(--sp-3); font-size: var(--fs-300);">
      This programme is non-accredited professional development. It is not a nationally recognised qualification
      and does not confer a licence, permit or chemical-use authorisation.
    </p>
  `;
}

/* ---- Misc ---- */
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---- Init ---- */
renderProfile();
setupProfilePanel();
renderOverview();
renderModules();
renderActivity();
renderCertificate();
setYear();
