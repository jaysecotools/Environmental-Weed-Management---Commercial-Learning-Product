// js/config/course-config.js
// Single source of truth for programme display data during the prototype.
// All module and programme details here are PROVISIONAL until the curriculum
// is formally approved (see PROJECT_BRIEF.md §4 and §17).
// Do not treat anything in this file as approved curriculum content.

export const programme = {
  // Provisional working title from the master brief.
  // Status: OPEN QUESTION — final product name not yet confirmed.
  title: "Environmental Weed Management",
  subtitle: "A Conservation and Ecosystem Management Approach",
  statusLabel: "Provisional — non-accredited professional development",
  location: "Tasmania, Australia",
  // Short value line used in the hero.
  valueLine:
    "Practical, evidence-informed professional development for weed management contractors working in natural environments.",
  // Long supporting description.
  description:
    "Effective weed management in natural environments is more than killing the target weed. It requires understanding the site, selecting an appropriate intervention, minimising harm to environmental values, preventing further spread and supporting long-term ecosystem recovery. This programme complements existing chemical-use training such as ChemCERT. It does not replace it.",
  ctas: {
    primary: { label: "Register your interest", href: "register.html" },
    secondary: { label: "Explore the programme", href: "#programme" },
  },
};

// PROVISIONAL module list — derived from master brief §4.
// Names and descriptions must remain configurable until curriculum approval.
// The `provisional: true` flag is surfaced in the UI.
export const modules = [
  {
    id: "m1",
    order: 1,
    title: "Understanding the environment you're working in",
    summary:
      "Move from a weed-and-treatment mindset to a site-and-environmental-values mindset.",
    duration: "~25 min",
    provisional: true,
  },
  {
    id: "m2",
    order: 2,
    title: "Weed identification and ecological impacts",
    summary:
      "Identify target weeds accurately, recognise non-target vegetation and understand ecological impacts.",
    duration: "~35 min",
    provisional: true,
  },
  {
    id: "m3",
    order: 3,
    title: "Selecting appropriate control methods",
    summary:
      "Base control selection on species, site, objectives, risks and likely outcomes.",
    duration: "~40 min",
    provisional: true,
  },
  {
    id: "m4",
    order: 4,
    title: "Environmental risks of weed control",
    summary:
      "Identify potential harm caused by the control activity itself — and how to reduce it.",
    duration: "~45 min",
    provisional: true,
  },
  {
    id: "m5",
    order: 5,
    title: "Hygiene, biosecurity and preventing weed spread",
    summary:
      "Make prevention part of every job through sound hygiene and biosecurity practices.",
    duration: "~30 min",
    provisional: true,
  },
  {
    id: "m6",
    order: 6,
    title: "Restoration, monitoring and follow-up",
    summary:
      "Connect weed control to ecosystem recovery, follow-up treatment and monitoring.",
    duration: "~30 min",
    provisional: true,
  },
  {
    id: "m7",
    order: 7,
    title: "Practical scenarios and final knowledge check",
    summary:
      "Apply learning to realistic contractor situations and complete a final knowledge check.",
    duration: "~35 min",
    provisional: true,
  },
];

export const learningApproach = [
  {
    step: "01",
    title: "Self-directed online modules",
    body: "Concise, scenario-led modules you complete at your own pace, on desktop, tablet or mobile.",
  },
  {
    step: "02",
    title: "Interactive scenarios and knowledge checks",
    body: "Realistic Tasmanian situations that test your judgement, not just your recall.",
  },
  {
    step: "03",
    title: "Optional facilitated workshops",
    body: "Add a face-to-face session for discussion, local examples and practical field decisions.",
  },
];

export const audience = [
  "Weed management contractors working in bushland, reserves, roadsides, riparian and coastal environments",
  "Employees of contractors undertaking environmental weed control",
  "Organisations engaging contractors to manage weeds in natural environments",
  "Council staff and environmental field workers",
  "Landcare and natural resource management personnel",
  "Environmental restoration practitioners and supervisors",
];

export const gains = [
  {
    title: "Read the site, not just the weed",
    body: "Recognise environmental values, site constraints and ecological context before work begins.",
  },
  {
    title: "Make better control decisions",
    body: "Compare control approaches and identify the factors that should influence method selection.",
  },
  {
    title: "Reduce avoidable harm",
    body: "Identify potential impacts on native vegetation, fauna habitat, waterways, soils and cultural values.",
  },
  {
    title: "Stop the spread",
    body: "Apply hygiene and biosecurity practices that reduce the risk of spreading weeds, pathogens and pests.",
  },
  {
    title: "Support recovery",
    body: "Connect weed control to regeneration, revegetation and longer-term ecosystem recovery.",
  },
  {
    title: "Know when to pause",
    body: "Recognise when work should stop and advice, permissions or specialist input should be sought.",
  },
];

export const completion = {
  heading: "A certificate of completion, honestly framed",
  body: "Learners who satisfy the programme's completion requirements receive a Certificate of Completion. This programme is non-accredited professional development. It does not confer a licence, permit, nationally recognised qualification or independent chemical application competence, and it does not replace ChemCERT or other required chemical-use training.",
  disclaimer:
    "Non-accredited professional development. Not a nationally recognised qualification or Statement of Attainment.",
};

// Registration copy (provisional). Kept in config so compliance-critical
// wording is easy to keep consistent with the landing page.
// Field labels and hints remain hard-coded in register.html (stable, unlikely to change).
export const registration = {
  eyebrow: "Register your interest",
  heading: "Join the pilot",
  lede:
    "Register your interest in the Environmental Weed Management professional development programme. We'll use this to gauge demand and invite a small group of pilot learners.",
  demoNoticeStrong: "Demonstration only.",
  demoNoticeBody:
    "This is a prototype registration page. No information is sent anywhere or stored. Passwords are not collected or saved. You can use fictitious details.",
  points: [
    "Non-accredited professional development",
    "Approximately 3–4 hours of online learning",
    "Optional facilitated workshop",
    "Certificate of Completion for successful participants",
  ],
  footnote:
    "This is a demonstration. No account is created, nothing is transmitted or stored, and no passwords are saved. Your test entries disappear when you leave the page.",
  successHeading: "Demonstration complete",
  successBody:
    "Thanks — this is where a real registration would be created. Nothing was sent or stored.",
  successNext:
    "In a live product, the next step would be to sign in to the learner dashboard.",
  successPrimaryCta: "Continue to demo dashboard",
  successSecondaryCta: "Back to home",
};

// Mock learner and progress — DEMONSTRATION ONLY.
// Fictional data; not a real person. Not persisted anywhere.
export const mockLearner = {
  firstName: "Demo",
  lastName: "Learner",
  displayName: "Demo Learner",
  email: "demo.learner@example.com",
  organisation: "Example Environmental Services (placeholder)",
  role: "Weed management contractor",
  enrolledDate: "2026-11-20",
  certificateStatus: "locked", // "locked" | "available" | "issued"
  certificateId: null,
};

// Per-module mock state. moduleId values must match `modules` in this file.
// state: "completed" | "in-progress" | "locked"
export const mockProgress = {
  m1: { state: "completed", score: 4, scoreTotal: 5, completedOn: "2026-11-18" },
  m2: { state: "completed", score: 5, scoreTotal: 5, completedOn: "2026-11-19" },
  m3: { state: "in-progress", lastPosition: 0.4 }, // 40% through the module
  m4: { state: "locked" },
  m5: { state: "locked" },
  m6: { state: "locked" },
  m7: { state: "locked" },
};

// Mock recent activity, newest first. Fictional; for layout demonstration only.
export const mockActivity = [
  { date: "2026-11-19", label: "Completed knowledge check", detail: "Module 2 — 5/5" },
  { date: "2026-11-19", label: "Completed module", detail: "Module 2 — Weed identification and ecological impacts" },
  { date: "2026-11-18", label: "Completed knowledge check", detail: "Module 1 — 4/5" },
  { date: "2026-11-18", label: "Completed module", detail: "Module 1 — Understanding the environment you're working in" },
  { date: "2026-11-20", label: "Enrolled in pilot", detail: "Demonstration enrolment" },
];

// Shared placeholder copy for module pages. The real module content lives
// in module-content.js; these strings are common UI text used by all modules.
// Everything here is PROVISIONAL and marked as such in the UI.
export const modulePlaceholderCopy = {
  provisionalBanner:
    "Placeholder content. This module is a structural demonstration only. All text, examples, activities and questions are provisional and must not be treated as approved curriculum.",
  notAdviceNotice:
    "Nothing on this page constitutes chemical, environmental, legal or site-specific advice. Always follow product labels, permits, legislation and the direction of appropriately trained and authorised people.",
  completionCta: "Mark module complete (demonstration)",
  completionDone: "Module marked complete in this session (not saved).",
  backToDashboard: "Back to dashboard",
  prevLabel: "Previous module",
  nextLabel: "Next module",
};
