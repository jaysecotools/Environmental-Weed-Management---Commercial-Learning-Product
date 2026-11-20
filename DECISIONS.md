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

## D-0006 — Registration copy binding scope
- **Date:** 2026-11-20
- **Status:** CONFIRMED
- **Decision:** Bind compliance-critical and positioning copy (eyebrow, heading, lede, demonstration notice, points list, footnote, success panel text and CTAs) from `registration` in `course-config.js`. Leave form field labels and hints hard-coded in `register.html`, as they are stable and unlikely to change.
- **Reason:** Keeps the "no data collected" and "non-accredited" statements consistent with the landing page, and makes future revision a one-line config change. Field labels are low-value to bind and add noise to the config.
- **Alternatives considered:** Full binding of every string (rejected as over-engineering for this stage); hard-coding all copy (rejected — risks drift with landing page and master brief positioning).
- **Impact:** Minor. `register.js` imports `registration` and binds strings at load. The `registration` export now covers every compliance-relevant string.
- **Approver:** Owner

## D-0007 — Dashboard is mock-data only and openly reachable
- **Date:** 2026-11-20
- **Status:** PROPOSED (pending owner confirmation; supersedes the prototype-limitation note in D-0003)
- **Decision:** `dashboard.html` renders a fictional learner (`mockLearner`), fictional progress (`mockProgress`) and fictional activity (`mockActivity`) from `course-config.js`. It is reachable without authentication. No data is written or read from storage. A visible prototype notice on the page and a note in the README explain the limitation.
- **Reason:** Real authentication and learner records are out of scope for this stage (master brief §7.4). A safe, clearly-flagged mock allows UX validation without prematurely committing to an auth/DB provider.
- **Risk:** The page must not be deployed to a public production domain while openly reachable. This will be re-flagged before any deployment. The mock data must never be replaced with real learner data until auth and privacy review are complete.
- **Approver:** Owner (pending)

## D-0008 — Progress model (demonstration)
- **Date:** 2026-11-20
- **Status:** PROPOSED
- **Decision:** Overall progress is computed as `(completed modules + in-progress position) / total modules`, rounded to the nearest percent. This is a UI demonstration, not an agreed academic or completion rule.
- **Reason:** The master brief does not yet define a final progress calculation. This is a placeholder that can be replaced when completion rules are approved.
- **Approver:** Owner (pending)

## D-0009 — Module page URL scheme
- **Date:** 2026-11-20
- **Status:** PROPOSED
- **Decision:** A single `module.html` renders any module via query string (`module.html?id=m1`). Content is looked up from `module-content.js` using the `id` parameter. Unknown IDs render a safe "Module not found" state.
- **Reason:** Simple, static-hostable, easy to test, and leaves room for server-side routing later. One file to maintain instead of seven.
- **Alternatives considered:** Separate HTML file per module (rejected — duplication); hash routing (rejected — less conventional for static hosting).
- **Approver:** Owner (pending)

## D-0010 — Module progress not persisted
- **Date:** 2026-11-20
- **Status:** PROPOSED
- **Decision:** "Mark module complete" on the module page is a visual-only demonstration. It does not persist and does not update the dashboard's mock data. This keeps mock data in the dashboard as the single fictional source until persistence is decided (D-0008).
- **Reason:** Avoids inventing a persistence model before the real auth/DB decision (master brief §7, §17). Keeps the module page a faithful structural template.
- **Risk:** Learners testing the module shell will see a completion confirmation that is not reflected anywhere else. This is clearly stated on the page and in the README.
- **Approver:** Owner (pending)

## D-0011 — Module content is a placeholder file
- **Date:** 2026-11-20
- **Status:** PROPOSED
- **Decision:** All module content lives in `js/config/module-content.js`, separate from `course-config.js`, so it can be replaced incrementally, module by module, as content is approved. Every string is placeholder and no factual claims are made.
- **Reason:** Matches master brief §7.4 (separate course content from application logic) and the Stage 2 gate (curriculum approval). Placeholder content must not be mistaken for curriculum.
- **Approver:** Owner (pending)
