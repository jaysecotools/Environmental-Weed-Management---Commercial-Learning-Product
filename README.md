# Environmental Weed Management — Prototype

Non-accredited professional development for weed management contractors in Tasmania.
This repository is a prototype. Content is provisional and no real learner data is collected.

## Run locally
Because the app uses ES modules, open it via a local server (not `file://`).
From the project root:

    npx serve .

or

    python3 -m http.server 8080

Then open http://localhost:8080/ (or the port shown).

## Structure (Stage 1)
- `index.html` — landing page
- `css/tokens.css`, `css/base.css`, `css/components.css`, `css/pages/landing.css`
- `js/config/course-config.js` — provisional programme/module data
- `js/landing.js` — renders landing content from config
- `PROJECT_BRIEF.md`, `DECISIONS.md`, `CHANGELOG.md`, `README.md`

## Status / known limitations
- Curriculum content is PROVISIONAL and marked as such in the UI.
- The programme is non-accredited; no licence, permit or nationally recognised qualification is conferred.
- Hero image is a placeholder; licence-cleared imagery is required before public deployment.
- No registration, dashboard, backend, authentication or data storage in this stage.
- `dashboard.html` (Stage 3) will be mock-only and openly reachable — must not be deployed publicly until real auth exists (see `DECISIONS.md` D-0003).

## Next stage
Registration placeholder (`register.html`) and dashboard placeholder (`dashboard.html`), per the development prompt.
