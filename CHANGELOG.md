# Changelog

## [Unreleased] — Stage 4: Module shell (placeholder)
### Added
- `module.html` — single template used by all seven modules via `?id=` query string.
- `css/pages/module.css`.
- `js/module.js` — renders module from `module-content.js`; handles unknown IDs; knowledge-check component; prev/next navigation; demonstration "mark complete".
- `js/config/module-content.js` — placeholder content for m1 and a generated template for m2–m7.
- `modulePlaceholderCopy` export in `course-config.js`.

### Changed
- `js/dashboard.js` — module action links now navigate to `module.html?id=…`; click-prevention removed.
- `DECISIONS.md` — added D-0009 (URL scheme), D-0010 (progress not persisted), D-0011 (placeholder content file).

### Notes
- All module content is placeholder. No factual claims about weeds, chemicals, ecology or regulation.
- "Mark module complete" is demonstration only; no persistence (D-0010).
- Knowledge checks are placeholder questions with immediate feedback and a summary score. No pass/fail enforcement.
- No data collected, transmitted or stored.

### Not yet built
- Real module content (blocked pending curriculum approval).
- Persistence of progress.
- PWA manifest and service worker.
- Real auth, backend, certificates, reporting.

## [Unreleased] — D-0006: Registration copy bound from config
### Changed
- `js/config/course-config.js` — expanded `registration` export to include all compliance-critical and positioning strings.
- `register.html` — added `data-bind` attributes to the intro block, footnote and success panel; points list is now rendered from config.
- `js/register.js` — imports `registration`, binds strings on load via `bindCopy()`.

### Notes
- Form field labels and hints remain hard-coded by design (D-0006).
- No functional change to validation or the demonstration submit behaviour.
- No data collected, transmitted or stored.

dashboard (mock)
### Added
- `dashboard.html` — learner dashboard with sticky app header, profile panel, welcome, progress overview, module list, recent activity, certificate placeholder, prototype notice.
- `css/pages/dashboard.css`.
- `js/dashboard.js` — renders dashboard from mock data; no auth, no persistence.
- `mockLearner`, `mockProgress`, `mockActivity` exports in `js/config/course-config.js`.

### Notes
- Demonstration data only; dashboard is openly reachable in prototype (see D-0007).
- No data written to or read from localStorage/sessionStorage/cookies.
- Certificate is a placeholder; no issuance logic.
- Progress calculation is a demonstration model (see D-0008).
- Programme remains non-accredited; page states this explicitly.

### Not yet built
- PWA manifest and service worker.
- Real auth, persistence, backend, organisation accounts, reporting.
- Final assessment and certificate issuance.

## [Unreleased] — Stage 2: Registration page (demonstration)
### Added
- `register.html` — registration page with header, intro, demonstration notice, and form.
- `css/pages/register.css`.
- `js/register.js` — client-side validation and isolated `simulateRegistration()` demonstration handler.
- `registration` object in `js/config/course-config.js` (copy not yet wired — see D-0006).

### Notes
- Demonstration only: no data transmitted, stored or logged; passwords cleared from the DOM after submit.
- Form is accessible: labels, `aria-invalid`, `role="alert"` error messages, focus management.
- Curriculum/programme content remains provisional.
- No real backend, auth or persistence added.

### Not yet built
- Dashboard (`dashboard.html`).
- PWA manifest and service worker.
- Real auth, persistence or backend.

## [Unreleased] — Stage 1: Landing page
### Added
- `index.html` — responsive landing page (hero, why, gains, programme, who, approach, completion, final CTA, footer).
- `css/tokens.css`, `css/base.css`, `css/components.css`, `css/pages/landing.css`.
- `js/config/course-config.js` — provisional programme and module data (single source of truth).
- `js/landing.js` — content binding, section rendering, mobile nav, year.
- `DECISIONS.md`, `CHANGELOG.md`, `README.md`.

### Notes
- All curriculum/module content is marked provisional in the UI.
- Programme is identified throughout as non-accredited professional development.
- Hero imagery is a placeholder pending licence-cleared assets.
- No data is collected, transmitted or stored.

### Not yet built
- Registration page.
- Dashboard.
- PWA manifest and service worker.
- Any backend, auth or persistence.

## [Unreleased] — Stage 3: Learner 
