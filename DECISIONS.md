# Decisions

Log of significant project decisions. Follows the master brief §15.3 format.
AI proposals are recorded as PROPOSED until the owner confirms them.

---

## D-0001 — Landing page stack and structure
- **Date:** 2026-11-20
- **Status:** PROPOSED (pending owner confirmation)
- **Decision:** Build the landing page as static HTML5 + vanilla JS ES modules, no framework, no build step. Separate CSS into tokens / base / components / page-specific files. Module and programme data live in `js/config/course-config.js` as a single configurable source of truth, marked provisional in the UI.
- **Reason:** Matches preferred stack in the development prompt; keeps the prototype easy to test on Netlify; isolates provisional curriculum data from markup so curriculum approval does not require rewriting pages.
- **Alternatives considered:** A minimal SPA router (rejected for prototype simplicity); a static site generator (rejected for unnecessary dependency).
- **Impact on scope/tech:** None on scope. Future auth/DB can replace mock behaviour without changing HTML structure.
- **Approver:** Owner (pending)

## D-0002 — Course config is the single source of truth
- **Date:** 2026-11-20
- **Status:** PROPOSED
- **Decision:** Landing page renders its Programme section and content bindings from `course-config.js`. The future registration and dashboard pages will also read from it.
- **Reason:** Keeps provisional curriculum data in one place; supports the brief's requirement that module details remain configurable until formally approved.
- **Impact:** Changes to module names/descriptions require editing only the config file.
- **Approver:** Owner (pending)

## D-0003 — Dashboard prototype is openly reachable
- **Date:** 2026-11-20
- **Status:** ASSUMPTION (prototype limitation; must be resolved before public deployment)
- **Decision:** `dashboard.html` will be a static page with mock data, reachable without authentication in the prototype.
- **Reason:** Real authentication is explicitly out of scope for this stage. Mock data only; no real learner information.
- **Risk:** Page must not be deployed to a public production domain while openly reachable. Recorded in README and will be re-flagged before any deployment.
- **Approver:** Owner (pending)

## D-0004 — Placeholder imagery
- **Date:** 2026-11-20
- **Status:** ASSUMPTION
- **Decision:** Hero uses a styled placeholder with a visible "licence to be confirmed" note until licence-cleared Tasmanian environmental photographs are supplied.
- **Reason:** RESEARCH REQUIRED — imagery licensing per master brief §8.3 and development rule 9.
- **Approver:** Owner (pending)

## D-0005 — Registration page is a non-collecting demonstration
- **Date:** 2026-11-20
- **Status:** PROPOSED (pending owner confirmation)
- **Decision:** `register.html` implements full client-side validation and a demonstration submit. On submit, the form is reset, field values are cleared from the DOM, and a success panel is shown. No `fetch`, no `localStorage`, no `sessionStorage`, no console logging of entered values.
- **Reason:** Satisfies the development prompt requirement ("do not collect or transmit real personal information; do not store real passwords; clearly treat registration as a demonstration") without prematurely committing to an auth provider.
- **Alternatives considered:** A real backend with hashed passwords (deferred — out of scope for this stage); a fully static form that does nothing on submit (rejected — poorer UX and doesn't demonstrate the intended workflow).
- **Impact:** `simulateRegistration()` is a single, clearly isolated function so a real backend can replace it without touching markup.
- **Approver:** Owner (pending)

## D-0006 — Registration copy kept as bindings vs hard-coded (OPEN)
- **Date:** 2026-11-20
- **Status:** OPEN QUESTION
- **Decision needed:** Whether to move the demonstration notice, success heading and success body into `course-config.js` (consistent with D-0002) or keep them inline in `register.html` (simpler for one-off pages).
- **Current state:** Inline in `register.html`; `registration` object added to config but not yet wired.
- **Approver:** Owner
