# Environmental Weed Management — Prototype

Non-accredited professional development for weed management contractors in Tasmania.

This repository is a **working front-end prototype**. It is not a production application.
Content is provisional, and no real learner data is collected, transmitted or stored.

---

## What's in this prototype

Four static pages, sharing a design system:

| Page | File | Purpose | Data |
|------|------|---------|------|
| Landing | `index.html` | Public-facing programme overview | Rendered from `course-config.js` |
| Registration | `register.html` | Demonstration registration form | **Nothing collected or stored** |
| Dashboard | `dashboard.html` | Mock learner dashboard | **Fictional demo data only** |
| Module | `module.html` | Renders any module via `?id=` | Rendered from `module-content.js` (draft M1–M3, placeholder M4–M7) |

### Status

- **Landing page** — complete for prototype. Mobile hero image displays correctly.
- **Registration page** — complete for prototype. Full client-side validation; a clearly labelled demonstration submit that clears the form and shows a success panel. No `fetch`, no `localStorage`, no `sessionStorage`, no console logging of entered values.
- **Dashboard** — complete for prototype. Mock learner, mock progress, mock activity, certificate placeholder. Openly reachable (no auth) — see **Known limitations** below.
- **Module page** — complete for prototype. Renders any module from `module-content.js` via `?id=`. Unknown IDs render a safe "Module not found" state. Knowledge check is a demonstration with immediate feedback; "mark complete" is visual only (D-0010).
- **Module content** — M1–M3 drafted as DRAFT pending owner review; M4–M7 are placeholders. All content is provisional.
- **Project log** — `DECISIONS.md` and `CHANGELOG.md` are maintained as decisions and stages progress.

---

## Run locally

The application uses ES modules (`<script type="module">`), so it must be served over HTTP — opening `index.html` directly via `file://` will not work.

From the project root:

```bash
# Option 1 — Node (no install needed beyond Node/npx)
npx serve .

# Option 2 — Python 3
python3 -m http.server 8080

# Option 3 — VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
Then open the port shown (e.g. http://localhost:8080/).

To test all four pages, navigate to:

http://localhost:8080/index.html

http://localhost:8080/register.html

http://localhost:8080/dashboard.html

http://localhost:8080/module.html?id=m1 (try m1, m2, m3, and an unknown id to see the not-found state)

Project structure
text
Environmental-Weed-Management/
├── PROJECT_BRIEF.md            Master project brief (do not edit without approval)
├── DECISIONS.md                Decision log (per master brief §15.3)
├── CHANGELOG.md                Stage-by-stage record of completed work
├── README.md                   This file
│
├── index.html                  Landing page
├── register.html               Registration page (demonstration only)
├── dashboard.html              Learner dashboard (mock data only)
├── module.html                 Module page (renders one module via ?id=)
│
├── images/
│   └── landing/
│       └── hero-image.<ext>    Hero photograph (owner-supplied)
│
├── css/
│   ├── tokens.css              Design tokens: colour, type, spacing, radius, motion
│   ├── base.css                Reset, typography, layout primitives
│   ├── components.css          Shared UI: buttons, header, cards, callout, footer
│   └── pages/
│       ├── landing.css         Landing-page layout
│       ├── register.css        Registration-page layout
│       ├── dashboard.css       Dashboard layout
│       └── module.css          Module-page layout
│
└── js/
    ├── config/
    │   ├── course-config.js    Programme-level content and mock data
    │   └── module-content.js   Per-module curriculum content (M1–M3 draft; M4–M7 placeholder)
    ├── landing.js              Renders landing page from config
    ├── register.js             Registration validation and demonstration submit
    ├── dashboard.js            Renders dashboard from mock data
    └── module.js               Renders a single module from module-content.js
Configuration
There are two config files, serving different purposes:

js/config/course-config.js — programme-level content and mock data. Editing it updates the landing page, registration copy, and dashboard without touching HTML or page-level JS.

js/config/module-content.js — per-module curriculum content (M1–M3 draft, M4–M7 placeholder). module.html reads this file via ?id= through getModuleContent(id).

course-config.js exports
programme — title, subtitle, status label, value line, description, CTA labels. (Working title is provisional — see master brief §17.)

modules — seven provisional modules (names, summaries, durations, provisional: true flag).

gains — "What learners will gain" card content.

audience — "Who should participate" list.

learningApproach — three-step learning approach.

completion — certificate heading, body and non-accredited disclaimer.

registration — demonstration copy, bound into register.html via register.js (D-0006, CONFIRMED).

mockLearner, mockProgress, mockActivity — fictional dashboard data.

module-content.js exports
moduleContent — object keyed by module id (m1 … m7).

getModuleContent(id) — returns the module object, or null for an unknown id.

All curriculum content is provisional until formally approved. It is marked as such in the UI.

Non-accredited positioning
The programme is non-accredited professional development. It does not confer a licence, permit, endorsement, nationally recognised qualification or independent chemical application competence. It does not replace ChemCERT or any other required chemical-use training.

This is stated on:

The landing page (completion section and footer)

The registration page (intro points and footnote)

The dashboard (prototype notice, certificate panel, footer)

Every module page (provisional banner, "not advice" callout, footer)

It must remain stated wherever the programme is promoted or delivered.

Known limitations and prototype caveats
These are deliberate and documented in DECISIONS.md. They must be resolved before any public production deployment.

The dashboard is openly reachable with no authentication (D-0003, D-0007). It uses only fictional data and must not be deployed to a public production domain until real authentication exists.

Registration collects no data and stores no passwords (D-0005). It is a demonstration only. A real backend and secure authentication have not been built.

No persistence. Nothing is written to localStorage, sessionStorage, cookies or any server. Refreshing any page resets it. "Mark module complete" (D-0010) is visual only.

Progress calculation is a demonstration model (D-0008), not an agreed academic or completion rule.

Certificate is a placeholder only. No issuance logic exists; the certificate wording in the master brief §2.4 has not yet been implemented.

Hero image is owner-supplied; confirm licensing and optimise file size before public deployment (target ≤ 300 KB as WebP or JPEG).

All programme and module content is provisional. Module names and descriptions must not be presented as approved curriculum. M1–M3 are DRAFT; M4–M7 are placeholders.

No PWA manifest or service worker yet. Offline capability and installability are not implemented.

Accessibility
The prototype has been built with accessibility in mind:

Semantic landmarks (header, main, footer, nav, section with aria-labelledby).

Skip-to-content link on every page.

Focus-visible outlines retained.

Form fields have explicit <label>s, aria-required, aria-describedby, and error messages with role="alert".

Errors are announced and focus moves to the first invalid field on failed submit.

Locked dashboard module links are correctly removed from tab order (aria-disabled="true", tabindex="-1").

Progress bar uses role="progressbar" with aria-valuenow.

Mobile nav uses aria-expanded.

prefers-reduced-motion respected.

Colour contrast targets WCAG AA.

Please still run your own accessibility check before public release.

Testing
Each stage in CHANGELOG.md has a corresponding test list. Key checks worth running after any change:

Landing page (index.html)

Hero image fills the hero at 360px, 768px, 1024px, 1440px without distortion.

All sections render from course-config.js (changes to the config appear without editing HTML).

Both hero CTAs work (primary → register.html, secondary → #programme).

Mobile menu opens and closes; aria-expanded toggles.

Keyboard: skip link appears on first Tab; all interactive elements show focus.

Registration page (register.html)

Empty submit shows errors on every required field; focus moves to first invalid.

Password mismatch and short-password errors appear live once fields are touched.

Valid submit hides the form and shows the "Demonstration complete" panel.

DevTools → Application → Local Storage / Session Storage / Cookies: all empty.

DevTools → Network: no request on submit.

Console: no entered values logged.

Dashboard (dashboard.html)

Header shows "Demo Learner" with initials; profile panel toggles.

Progress bar, stats and module list render from mock data.

Module states: 2 completed, 1 in-progress, 4 locked.

Locked module links are not focusable.

Module action links navigate to module.html?id=….

Certificate panel shows the placeholder (all modules not complete).

Prototype notice is visible.

DevTools → Application: no storage used.

Module page (module.html)

?id=m1, ?id=m2, ?id=m3 render the draft content.

?id=m4 … ?id=m7 render placeholder content.

Unknown ?id= renders the "Module not found" state.

Knowledge check shows immediate feedback and a summary score; repeat attempts allowed.

"Mark module complete" shows a visual confirmation and does not persist (D-0010).

Prev/next navigation works; no broken links at the ends of the list.

DevTools → Application: no storage used.

Cross-cutting

Responsive behaviour at 360px / 768px / 1024px / 1440px.

Reduced motion (OS setting) disables smooth transitions.

Footer disclaimer and non-accredited wording present on all four pages.

What has not been built
The following are out of scope for the current prototype and are flagged in CHANGELOG.md and DECISIONS.md:

Secure learner authentication (real accounts, sign-in, sessions).

Learner profile management backed by a database.

Verified module content (M1–M3 are DRAFT; M4–M7 are placeholder).

Assessment records and final assessment.

Practical activities and submissions.

Progress tracking persisted across sessions.

Certificate issuance.

Administrative dashboard.

Organisation and group management, bulk enrolment codes, reporting.

Payment and enrolment workflow.

PWA manifest and service worker.

Hosting, authentication, database and payment provider selection — see master brief §7.4 and §17.

Privacy and legal review required before commercial launch.

IP and secondary-employment checks required before commercial development.

Deployment (static only)
The prototype is static and can be deployed to Netlify as-is for internal testing only. It must not be deployed to a public domain while dashboard.html is openly reachable and the programme title and curriculum remain provisional.

Before any public deployment, the following must be complete:

D-0003 and D-0007 resolved (dashboard not publicly reachable).

Hero image licence confirmed and file optimised.

Privacy and terms placeholders replaced with real content and legal review.

Final programme title confirmed.

Curriculum formally approved (M1–M3 DRAFT resolved; M4–M7 replaced with approved content).

Accessibility and security review completed.

Next steps
See CHANGELOG.md for what has been completed and DECISIONS.md for open questions. The recommended next stages are:

Module 4 draft content ("Environmental risks of weed control").

Tidy pass: verify landing.js completeness, course-config.js exports, js/module.js behaviour, and css/pages/module.css presence.

Resolve outstanding [VERIFY] items in the source register.

PWA manifest and service worker.

Real module content for M4–M7 — only after curriculum and learning outcomes are formally approved.

For the full project context, boundaries and staged plan, see PROJECT_BRIEF.md.

Licence
Prototype. Not for public distribution. Content ownership and licensing to be confirmed per master brief §9.
