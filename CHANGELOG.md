# Changelog

## [Unreleased] — Module 3 draft content
### Added
- `docs/Module_03_Content.md` — draft content for Module 3 ("Selecting appropriate control methods"), following the Module 1/2 pattern.
- `m3` entry in `js/config/module-content.js` — explicit draft content; `templateFor` loop now fills `m4`–`m7` only.
- Source register entries S-0008 through S-0012 (Module 3 candidate sources), all `RESEARCH REQUIRED`.

### Changed
- `js/config/module-content.js` — `m3` no longer generated from `templateFor`.
- `docs/Source_Register.md` — restored `# Source register` heading and `**Notes:**` block; added S-0008–S-0012.

### Notes
- Module 3 is the module closest to the brief's chemical-use boundary (§2.3, §4 Module 3 "Important"). It stays strictly on method-selection reasoning. No product names, rates, mixtures, application methods or label paraphrases.
- All Module 3 content is DRAFT, pending owner review. No factual claims about weeds, chemicals, ecology or regulation.
- No data collected, transmitted or stored.

### Not yet built
- Verified content for any module (blocked pending curriculum approval and [VERIFY] resolution).
- Persistence of progress.
- PWA manifest and service worker.
- Real auth, backend, certificates, reporting.

## [Unreleased] — Documentation tidy
### Changed
- `README.md` — added `module.html`, `js/module.js`, `css/pages/module.css` to structure and page table; split Configuration section into `course-config.js` and `module-content.js`; updated status, known limitations, testing and next steps to match the four-page prototype; corrected stale `registration` note (D-0006 is CONFIRMED); removed duplicated handover fragment from the tail.
- `CHANGELOG.md` — re-saved as UTF-8 (previous version had mojibake in em dashes, en dashes and section signs); folded the un-prefixed `dashboard (mock)` block into a proper Stage 3 heading; removed the dangling `## [Unreleased] — Stage 3: Learner` heading with no body.
- `DECISIONS.md` — D-0005, D-0007, D-0008 statuses moved from PROPOSED to CONFIRMED.

### Notes
- No code changes. Documentation-only pass.

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

## [Unreleased] — Stage 3: Learner dashboard (mock)
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
