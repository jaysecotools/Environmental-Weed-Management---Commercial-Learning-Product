// js/landing.js
// Renders landing-page content from the provisional course config and wires
// up minimal interactions. No data is collected, transmitted or stored.

import {
  programme,
  modules,
  gains,
  audience,
  learningApproach,
  completion,
} from "./config/course-config.js";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function setText(selector, value) {
  $$(selector).forEach((el) => { el.textContent = value; });
}
function setHref(selector, value) {
  $$(selector).forEach((el) => { el.setAttribute("href", value); });
}

/* ---- Bind programme-level content ---- */
setText('[data-bind="programme-title"]', programme.title);
setText('[data-bind="programme-subtitle"]', programme.subtitle);
setText('[data-bind="programme-location"]', programme.location);
setText('[data-bind="programme-status"]', programme.statusLabel);
setText('[data-bind="programme-valueLine"]', programme.valueLine);
setText('[data-bind="programme-description"]', programme.description);
setText('[data-bind="completion-heading"]', completion.heading);
setText('[data-bind="completion-body"]', completion.body);
setText('[data-bind="completion-disclaimer"]', completion.disclaimer);

setHref('[data-bind-href="cta-primary"]', programme.ctas.primary.href);
setHref('[data-bind-href="cta-secondary"]', programme.ctas.secondary.href);
setText('[data-bind-label="cta-primary"]', programme.ctas.primary.label);
setText('[data-bind-label="cta-secondary"]', programme.ctas.secondary.label);

/* ---- Gains ---- */
function renderGains() {
  const grid = $("#gains-grid");
  if (!grid) return;
  grid.innerHTML = gains
    .map(
      (g) => `
      <li class="card">
        <h3>${escapeHtml(g.title)}</h3>
        <p>${escapeHtml(g.body)}</p>
      </li>`
    )
    .join("");
}

/* ---- Modules ---- */
function renderModules() {
  const grid = $("#module-grid");
  if (!grid) return;
  grid.innerHTML = modules
    .map(
      (m) => `
      <li class="module-card">
        <p class="module-order" aria-hidden="true">${String(m.order).padStart(2, "0")}</p>
        <h3>${escapeHtml(m.title)}</h3>
        <p>${escapeHtml(m.summary)}</p>
        <div class="module-meta">
          <span class="badge">${escapeHtml(m.duration)}</span>
          ${m.provisional ? '<span class="badge badge--provisional">Provisional</span>' : ""}
        </div>
      </li>`
    )
    .join("");
}

/* ---- Audience ---- */
function renderAudience() {
  const list = $("#audience-list");
  if (!list) return;
  list.innerHTML = audience.map((a) => `<li>${escapeHtml(a)}</li>`).join("");
}

/* ---- Approach ---- */
function renderApproach() {
  const grid = $("#approach-grid");
  if (!grid) return;
  grid.innerHTML = learningApproach
    .map(
      (s) => `
      <li class="step">
        <p class="step-num" aria-hidden="true">${escapeHtml(s.step)}</p>
        <h3>${escapeHtml(s.title)}</h3>
        <p>${escapeHtml(s.body)}</p>
      </li>`
    )
    .join("");
}

/* ---- Mobile nav ---- */
function setupNav() {
  const toggle = $(".nav-toggle");
  const nav = $("#primary-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---- Misc ---- */
function setYear() {
  const el = $("#year");
  if (el) el.textContent = new Date().getFullYear();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ---- Init ---- */
renderGains();
renderModules();
renderAudience();
renderApproach();
setupNav();
setYear();
