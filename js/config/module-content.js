// js/config/module-content.js
// PLACEHOLDER module content. Every string here is provisional and for layout
// and interaction testing only. Do not treat any of it as approved curriculum,
// factual advice, or a statement about weeds, chemicals, ecology or regulation.
//
// Real content will replace these placeholders only after curriculum approval
// (master brief Stage 2 gate). Anything factual — species, distributions,
// chemical directions, legislative references — must be sourced, verified and
// recorded in the source register before publication.

export const moduleContent = {
  m1: {
    learningOutcomes: [
      "Placeholder outcome 1 — describe the shift from a weed-and-treatment mindset to a site-and-values mindset.",
      "Placeholder outcome 2 — identify the kinds of site information a contractor should gather before starting.",
      "Placeholder outcome 3 — explain why the same weed might warrant different approaches at different sites.",
    ],
    sections: [
      {
        heading: "What is a natural environment?",
        body: [
          "Placeholder paragraph. Real content will describe the range of natural environments encountered in contractor work, distinguishing them from agricultural production settings.",
          "Placeholder paragraph. Real content will introduce ecosystems, vegetation communities, habitat and ecological processes in plain English.",
        ],
      },
      {
        heading: "Reading the site",
        body: [
          "Placeholder paragraph. Real content will cover landform, soils, slope, drainage, water, vegetation condition and disturbance as things a contractor should observe.",
          "Placeholder paragraph. Real content will explain why the same weed may require different approaches at different sites.",
        ],
      },
      {
        heading: "Your role and scope",
        body: [
          "Placeholder paragraph. Real content will clarify the contractor's role, scope of work and communication with the client or site manager.",
        ],
      },
    ],
    fieldContext: {
      heading: "Tasmanian field context (placeholder)",
      body:
        "Placeholder. A verified Tasmanian field example will be inserted here once curriculum is approved and the example has been checked against authoritative sources. No specific location, species or regulatory claim is made in this placeholder.",
    },
    activity: {
      heading: "Interactive activity (placeholder)",
      body:
        "Placeholder. A site-observation, sorting or decision activity will be built here. For now, use the knowledge check below to confirm the page structure works.",
    },
    knowledgeCheck: {
      heading: "Knowledge check (placeholder questions)",
      note:
        "These questions are placeholders to demonstrate the assessment component. They are not part of the approved curriculum and carry no pass/fail meaning.",
      questions: [
        {
          id: "q1",
          prompt: "Placeholder question 1 — which of these best describes a site-first approach?",
          options: [
            "Placeholder option A — apply the same treatment everywhere for consistency.",
            "Placeholder option B — identify environmental values and constraints before deciding on an approach.",
            "Placeholder option C — always choose the fastest method.",
          ],
          correctIndex: 1,
          feedbackCorrect: "Placeholder feedback. In real content, this would explain why site-first thinking matters.",
          feedbackIncorrect: "Placeholder feedback. In real content, this would guide the learner toward the site-first approach.",
        },
        {
          id: "q2",
          prompt: "Placeholder question 2 — what should a contractor do when a site feature is unclear?",
          options: [
            "Placeholder option A — proceed and note it afterwards.",
            "Placeholder option B — pause and seek advice, permissions or specialist input as appropriate.",
            "Placeholder option C — ignore it if the target weed is obvious.",
          ],
          correctIndex: 1,
          feedbackCorrect: "Placeholder feedback. In real content, this would reinforce pausing and escalating as appropriate.",
          feedbackIncorrect: "Placeholder feedback. In real content, this would explain why pausing and seeking advice is preferable to proceeding.",
        },
        {
          id: "q3",
          prompt: "Placeholder question 3 — which of these is not part of this module's scope?",
          options: [
            "Placeholder option A — understanding ecological context.",
            "Placeholder option B — providing chemical application directions.",
            "Placeholder option C — recognising when specialist input is needed.",
          ],
          correctIndex: 1,
          feedbackCorrect: "Placeholder feedback. In real content, this would confirm that chemical directions are outside this programme's scope.",
          feedbackIncorrect: "Placeholder feedback. In real content, this would clarify the programme's non-accredited, non-chemical-advice boundary.",
        },
      ],
    },
    takeaway: {
      heading: "Practical takeaway (placeholder)",
      body:
        "Placeholder. In the real module, this section would state clearly and concisely what the learner should do differently on their next job as a result of this module.",
    },
    references: {
      heading: "References and further guidance (placeholder)",
      note:
        "No references are listed in this placeholder version. Real references will be added only after they are verified against authoritative sources and recorded in the source register (master brief §8.3).",
      items: [],
    },
  },
  // The remaining modules inherit the same placeholder structure so every
  // module URL can be tested. Real content will be added module by module.
};

/* Generate placeholder entries for modules m2–m7 from the same template. */
const templateFor = (moduleId) => ({
  learningOutcomes: [
    `Placeholder outcome for ${moduleId} — outcome 1.`,
    `Placeholder outcome for ${moduleId} — outcome 2.`,
    `Placeholder outcome for ${moduleId} — outcome 3.`,
  ],
  sections: [
    {
      heading: "Placeholder section 1",
      body: [
        `Placeholder paragraph for ${moduleId}. This section will hold the core learning content once approved.`,
      ],
    },
    {
      heading: "Placeholder section 2",
      body: [
        `Placeholder paragraph for ${moduleId}. Structure only — no factual content is asserted.`,
      ],
    },
  ],
  fieldContext: {
    heading: "Tasmanian field context (placeholder)",
    body: "Placeholder. A verified Tasmanian field example will appear here after curriculum approval.",
  },
  activity: {
    heading: "Interactive activity (placeholder)",
    body: "Placeholder. An interactive activity will appear here in the real module.",
  },
  knowledgeCheck: {
    heading: "Knowledge check (placeholder questions)",
    note: "Placeholder questions only. Not part of approved curriculum.",
    questions: [
      {
        id: "q1",
        prompt: `Placeholder question 1 for ${moduleId}.`,
        options: ["Placeholder A", "Placeholder B", "Placeholder C"],
        correctIndex: 1,
        feedbackCorrect: "Placeholder correct feedback.",
        feedbackIncorrect: "Placeholder incorrect feedback.",
      },
      {
        id: "q2",
        prompt: `Placeholder question 2 for ${moduleId}.`,
        options: ["Placeholder A", "Placeholder B", "Placeholder C"],
        correctIndex: 1,
        feedbackCorrect: "Placeholder correct feedback.",
        feedbackIncorrect: "Placeholder incorrect feedback.",
      },
      {
        id: "q3",
        prompt: `Placeholder question 3 for ${moduleId}.`,
        options: ["Placeholder A", "Placeholder B", "Placeholder C"],
        correctIndex: 1,
        feedbackCorrect: "Placeholder correct feedback.",
        feedbackIncorrect: "Placeholder incorrect feedback.",
      },
    ],
  },
  takeaway: {
    heading: "Practical takeaway (placeholder)",
    body: `Placeholder takeaway for ${moduleId}. What the learner should do differently on the next job.`,
  },
  references: {
    heading: "References and further guidance (placeholder)",
    note: "No references are listed in this placeholder version.",
    items: [],
  },
});

for (const id of ["m2", "m3", "m4", "m5", "m6", "m7"]) {
  if (!moduleContent[id]) moduleContent[id] = templateFor(id);
}

export function getModuleContent(id) {
  return moduleContent[id] ?? null;
}
