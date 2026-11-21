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
    // DRAFT content — pending owner review and approval.
    // Uses only examples named in the master brief. No verified Tasmanian
    // specific claims; items requiring verification are marked [VERIFY] in
    // the corresponding docs/Module_01_Content.md.
    learningOutcomes: [
      "Explain why weed management in natural environments requires a site-first approach, not just a treatment-first approach.",
      "Identify the kinds of site information a contractor should gather before starting work.",
      "Explain why the same weed may require different approaches at different sites.",
    ],
    sections: [
      {
        heading: "What counts as a natural environment",
        body: [
          "In this programme, \"natural environment\" is used broadly. It includes bushland, reserves, roadsides, riparian areas, coastal environments and restoration sites — settings where the aim is to protect or recover ecological values rather than to maximise production from a paddock.",
          "Natural environments differ from agricultural settings in ways that matter to a contractor: vegetation structure and composition are usually more varied; disturbance history is often uneven; management objectives are usually about maintaining or improving ecological condition; and the consequences of a mistake can be harder to see immediately and can persist longer.",
          "None of this makes natural-environment work more important than agricultural work — it makes it different. It changes what you should look for before you start.",
        ],
      },
      {
        heading: "Reading the site",
        body: [
          "A site-first approach means gathering enough information to make an informed decision about whether, how, when and where to work. In practice that usually means checking landform and soils; water and where it goes; vegetation condition; habitat features; disturbance history; access and constraints; the site's objectives; and any regulatory context that applies.",
          "You will not always be able to answer all of these before you start. The point is to ask, to notice what you cannot answer, and to pause and seek advice when something does not add up.",
        ],
      },
      {
        heading: "Why the same weed can need different approaches",
        body: [
          "The target weed is only one input into a control decision. Blackberry beside a creek with native vegetation is a different job from blackberry on a dry, accessible bank with no native understorey. Gorse mixed with native shrubs is a different job from gorse in a dense, single-species infestation. A roadside infestation may be constrained by traffic and visibility in ways a bushland reserve is not. A coastal site may have sensitive soils, wind exposure and species easily damaged by machinery or foot traffic.",
          "The same principle applies across all of them: the site constrains the method. A contractor who knows the site can make a defensible choice. A contractor who only knows the weed is guessing. This is also why \"what did we do last time?\" is only a starting point — last time's site may have been different in ways that matter.",
        ],
      },
      {
        heading: "Your role and scope",
        body: [
          "Contractors are not usually the only decision-makers on a natural-environment site. The client or site manager holds the objectives, the site knowledge and often the approvals. Your role is to gather and communicate the site information you can see; identify when something is outside your scope or knowledge; pause and escalate when the site presents risks or values you cannot confidently handle; and work to the site plan and the client's direction, raising concerns if what you are seeing does not match what you have been told.",
          "This programme does not make you an ecologist, a chemical adviser or a regulator. It helps you recognise when those people need to be involved, and what to tell them.",
        ],
      },
    ],
    fieldContext: {
      heading: "Tasmanian field context",
      body:
        "Placeholder example, structurally realistic and generic — to be replaced with a verified Tasmanian example before publication. A contractor is asked to treat a blackberry infestation on a reserve block. Before starting, they walk the site with the site manager. They notice the infestation runs along a shallow drainage line feeding into a creek below the block, that native shrubs are mixed through the outer edge, and that there is a patch of bare, eroded ground where blackberry has died back previously. The site manager mentions the block is being managed for regeneration of native understorey, and that the creek is a value they are trying to protect. The contractor's notes before work begins record the drainage line and its connection to the creek, the mixed native shrubs, the erosion patch, the site objective, and a question for the site manager about whether the creek downstream has any specific requirements. [VERIFY before publication.]",
    },
    activity: {
      heading: "Interactive activity",
      body:
        "Placeholder text. In the built module, this section will contain an interactive site-observation or decision activity. Draft concept: the learner is shown (or described) a site and asked to identify three environmental features they would want to know more about before starting work, and one thing they would escalate to the site manager. The activity tests observation and judgement, not recall.",
    },
    knowledgeCheck: {
      heading: "Knowledge check",
      note:
        "These questions test reasoning rather than recall. They carry no pass/fail meaning in this draft and are pending approval with the rest of the module.",
      questions: [
        {
          id: "q1",
          prompt:
            "A contractor is asked to treat gorse on a site. They have treated gorse many times before. What is the most useful first step?",
          options: [
            "Apply the method that worked on the last gorse job.",
            "Check the site, the surrounding vegetation and the site objectives before choosing a method.",
            "Choose the fastest available method to reduce cost.",
            "Defer to the client to specify the method.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — the site constrains the method. What worked last time may not be appropriate here.",
          feedbackIncorrect:
            "The same weed can need different approaches at different sites. Start with the site and its objectives.",
        },
        {
          id: "q2",
          prompt:
            "Which of these best describes the contractor's role on a natural-environment site?",
          options: [
            "To make all ecological decisions independently.",
            "To gather site information, work to the site plan, and escalate when something is outside their scope.",
            "To avoid communicating with the client unless there is a problem.",
            "To apply the same treatment across all sites for consistency.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — contractors contribute site knowledge and escalate when needed.",
          feedbackIncorrect:
            "Contractors are not the only decision-makers. Gathering information and escalating appropriately is central to the role.",
        },
        {
          id: "q3",
          prompt:
            "A contractor notices native shrubs mixed through the outer edge of a blackberry infestation. What is the most appropriate response?",
          options: [
            "Treat the whole area the same way and accept some native loss.",
            "Note the mixed vegetation and consider how the method and timing will affect it before proceeding.",
            "Remove the native shrubs first to simplify the job.",
            "Ignore the shrubs — they are not the target weed.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — non-target vegetation is part of the site information that should influence the decision.",
          feedbackIncorrect:
            "Native vegetation is an environmental value the contractor should protect, not an obstacle.",
        },
        {
          id: "q4",
          prompt:
            "Which of these is the best example of a site feature that should influence a control decision?",
          options: [
            "The colour of the contractor's vehicle.",
            "The presence of a drainage line feeding into a creek below the site.",
            "The day of the week the work is scheduled.",
            "The number of workers on the crew.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — water movement and downstream values are core site considerations.",
          feedbackIncorrect:
            "Look for features that affect environmental values or how the work can be done safely and appropriately.",
        },
        {
          id: "q5",
          prompt:
            "What should a contractor do when a site feature is unclear or outside their knowledge?",
          options: [
            "Proceed and note it afterwards.",
            "Pause and seek advice or escalate to the site manager before continuing.",
            "Assume it is not important if the target weed is obvious.",
            "Ask another contractor to make the decision.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — pausing and escalating is part of professional practice, not a failure.",
          feedbackIncorrect:
            "Recognising the limits of your knowledge and escalating is a core skill, not an admission of weakness.",
        },
      ],
    },
    takeaway: {
      heading: "Practical takeaway",
      body:
        "Before your next job in a natural environment, walk the site (or review the site information) with three questions in mind: What else is here besides the target weed? What is this site being managed for? What am I not sure about? Note what you find and raise anything unclear with the site manager before you start, not after. If you can answer those three questions, you are already making better decisions than a contractor who only knows the weed.",
    },
    references: {
      heading: "References and further guidance",
      note:
        "RESEARCH REQUIRED — no reference below is cited as supporting a specific statement in this module until it has been verified and recorded in docs/Source_Register.md.",
      items: [
        "NRE Tas (Natural Resources and Environment Tasmania) — general environmental and land management guidance. [VERIFY: specific page(s) and date checked]",
        "Biosecurity Act 2019 (Tas) — general biosecurity duty and any relevant notification or permit requirements. [VERIFY: specific sections and current commencement status]",
        "Weed Society of Tasmania — practitioner guidance. [VERIFY: suitability as an authoritative source for this module]",
      ],
    },
  },

  m2: {
    // DRAFT content — pending owner review and approval.
    // Uses only examples named in the master brief. No verified Tasmanian
    // specific claims; items requiring verification are marked [VERIFY] in
    // the corresponding docs/Module_02_Content.md.
    learningOutcomes: [
      "Explain why accurate identification of the target weed matters before any control decision is made.",
      "Recognise the risk of confusing native or other non-target vegetation with the target weed.",
      "Describe how a weed's life cycle, reproduction and spread pathways influence the ecological impacts it causes.",
      "Identify when identification should be confirmed by a suitably qualified person before work proceeds.",
    ],
    sections: [
      {
        heading: "Why identification comes before treatment",
        body: [
          "A control decision depends on knowing what you are controlling. If the target is misidentified, the method, timing and site selection can all be wrong — and the work may damage what you were trying to protect.",
          "Identification uncertainty is normal in the field. A contractor does not need to be a botanist, but they do need to recognise when they are not certain, and to know what to do about it. The safe response to uncertainty is not to guess and proceed. It is to pause, gather more information, and escalate if needed.",
        ],
      },
      {
        heading: "Target weeds and non-target vegetation",
        body: [
          "In a natural-environment site, the target weed is rarely the only plant present. Native shrubs, groundcovers, grasses, sedges and regenerating seedlings may be mixed through or adjacent to the infestation. Some of them may look similar to the weed at certain growth stages or in certain conditions.",
          "Treating the whole area on the assumption that everything is the target is one of the most avoidable causes of environmental damage in weed control. The contractor's job is to notice what else is present, and to consider how the method and timing will affect it.",
          "Examples the brief names, used illustratively: blackberry may be mixed with native shrubs and groundcovers along a riparian edge, making a blanket treatment inappropriate; gorse seedlings can be confused with some native shrubs at early growth stages, and dense gorse can hide native regeneration beneath it; Spanish heath presents similar identification challenges in some settings [VERIFY: confirm Tasmanian relevance and any look-alike native species before publication]. The principle is the same across all of them: know what you are treating, and know what you are not.",
        ],
      },
      {
        heading: "Life cycles, reproduction and spread",
        body: [
          "A weed's life cycle tells you when it is most vulnerable and when it is most likely to spread. Reproduction and spread pathways tell you where the next infestation is likely to come from.",
          "Key concepts a contractor should be able to recognise, without needing to memorise species-specific detail: annual, biennial and perennial life cycles; seed banks that can persist in soil for years; vegetative reproduction from fragments, rhizomes or runners; and spread pathways including machinery, vehicles, tools, boots, clothing, water, wind and animals. Some spread pathways are covered in more depth in Module 5. [VERIFY: link to a Tasmanian weed biology reference for contractors, once identified.]",
        ],
      },
      {
        heading: "Ecological impacts",
        body: [
          "Weed control in natural environments is worth doing because weeds cause harm. Understanding the harm helps a contractor make defensible decisions about whether and how to intervene.",
          "Impacts a contractor should be able to recognise: competition with native plants for light, water and nutrients; altered vegetation structure; habitat change for fauna; fire and disturbance interactions; and downstream or off-site impacts such as sediment, altered water flow, or spread into adjacent areas. [VERIFY: link to an authoritative Tasmanian or Australian source on ecological impacts of the named weeds, once identified.]",
          "None of this makes every weed a priority everywhere. It helps a contractor ask: what is this weed doing here, and what would change if it were controlled?",
        ],
      },
      {
        heading: "When to confirm identification",
        body: [
          "There are situations where a contractor should not proceed on their own identification: when the target cannot be confidently distinguished from a native or protected species; when the site may contain a species of conservation significance; when the weed is unfamiliar or the infestation is in an unfamiliar vegetation community; or when the site plan or client direction assumes an identification the contractor cannot verify.",
          "In these cases, the appropriate response is to pause and seek confirmation from a suitably qualified person — a botanist, an ecologist, or the site manager's nominated adviser — before work proceeds. This is not a failure of competence. It is professional practice, and it is consistent with the contractor's role described in Module 1.",
        ],
      },
    ],
    fieldContext: {
      heading: "Tasmanian field context",
      body:
        "Placeholder example, structurally realistic and generic — to be replaced with a verified Tasmanian example before publication. A contractor is asked to treat a gorse infestation on a bushland reserve block. Before starting, they walk the site and notice that the outer edge of the gorse is mixed with native shrubs, some of which are at a similar height and have a similar growth habit. In one corner, the gorse appears to be hiding lower native regeneration. The contractor cannot confidently separate the gorse seedlings from the native seedlings in that corner without closer inspection. The contractor's notes before work begins record the mixed native shrubs, the area where gorse and native regeneration overlap, the uncertainty about seedling identification, and a request to the site manager to arrange confirmation by a suitably qualified person before that corner is treated. [VERIFY before publication.]",
    },
    activity: {
      heading: "Interactive activity",
      body:
        "Placeholder text. In the built module, this section will contain an interactive identification or observation activity. Draft concept: the learner is shown or described a site with a target weed and mixed surrounding vegetation, and asked to identify which plants they are confident are the target, which they are not confident about, and what they would do next — proceed, gather more information, or escalate. A second concept mirrors the brief's suggestion to compare two sites with the same weed but different surrounding values, and ask which ecological impacts are most relevant at each site and why. The activities test observation, uncertainty recognition and judgement, not recall.",
    },
    knowledgeCheck: {
      heading: "Knowledge check",
      note:
        "These questions test reasoning rather than recall. They carry no pass/fail meaning in this draft and are pending approval with the rest of the module.",
      questions: [
        {
          id: "q1",
          prompt:
            "A contractor is confident they have identified the target weed on a site, but notices native seedlings mixed through the outer edge of the infestation. What is the most appropriate first response?",
          options: [
            "Treat the whole area and accept some native seedling loss.",
            "Note the mixed vegetation and pause to consider how the method and timing will affect the native seedlings before proceeding.",
            "Remove the native seedlings first to simplify the job.",
            "Ignore the seedlings — they are not the target weed.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — non-target vegetation is part of the identification picture and should influence the decision.",
          feedbackIncorrect:
            "Native seedlings are an environmental value to protect, not an obstacle. Notice them and factor them in.",
        },
        {
          id: "q2",
          prompt:
            "Which of these best describes why a weed's life cycle matters to a contractor?",
          options: [
            "It determines the colour of the flowers.",
            "It affects when the plant is most vulnerable and when it is most likely to set seed and spread.",
            "It only matters for agricultural weeds.",
            "It determines which herbicide is legal to use.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — life cycle informs timing, follow-up and spread risk.",
          feedbackIncorrect:
            "Life cycle affects vulnerability and spread timing, which shape control decisions.",
        },
        {
          id: "q3",
          prompt:
            "A contractor is unfamiliar with a plant they believe is the target weed, and the site may contain a species of conservation significance. What should they do?",
          options: [
            "Proceed with the treatment and note the uncertainty afterwards.",
            "Pause and seek confirmation from a suitably qualified person before proceeding.",
            "Assume the plant is the target because the site plan says so.",
            "Ask another contractor to make the decision.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — pausing and escalating is professional practice when identification is uncertain.",
          feedbackIncorrect:
            "Recognising the limits of your identification and escalating is a core skill.",
        },
        {
          id: "q4",
          prompt:
            "Which of these is the best example of an ecological impact a weed might cause on a natural-environment site?",
          options: [
            "The contractor's vehicle uses more fuel.",
            "The weed changes the structure of the understorey and reduces habitat for small fauna.",
            "The weed is a different colour from the surrounding vegetation.",
            "The weed grows on a different day of the week.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — altered vegetation structure and habitat change are core ecological impacts.",
          feedbackIncorrect:
            "Look for impacts on native vegetation, fauna habitat or ecosystem processes.",
        },
        {
          id: "q5",
          prompt:
            "Which statement best describes a contractor's identification responsibilities?",
          options: [
            "A contractor must be able to identify every plant on a site before starting work.",
            "A contractor should identify the target weed with reasonable confidence and escalate when uncertain, especially where native or significant species may be present.",
            "A contractor should rely entirely on the site plan's identification.",
            "A contractor should only identify the target weed and ignore everything else.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — reasonable confidence plus escalation when uncertain is the professional standard.",
          feedbackIncorrect:
            "The contractor is not expected to be a botanist, but is expected to recognise uncertainty and act on it.",
        },
      ],
    },
    takeaway: {
      heading: "Practical takeaway",
      body:
        "Before your next job in a natural environment, ask three identification questions. What am I confident is the target weed? What am I not confident about — which plants can I not confidently separate from the target, and where are they? What else is here that I need to protect — native vegetation, regeneration, habitat features, significant species? If you cannot answer the second question with confidence, that is the signal to pause and escalate, not to proceed and hope.",
    },
    references: {
      heading: "References and further guidance",
      note:
        "RESEARCH REQUIRED — no reference below is cited as supporting a specific statement in this module until it has been verified and recorded in docs/Source_Register.md.",
      items: [
        "NRE Tas (Natural Resources and Environment Tasmania) — weed identification and ecological impact guidance. [VERIFY: specific page(s) and date checked]",
        "Biosecurity Act 2019 (Tas) — any relevant identification, notification or declaration requirements. [VERIFY: specific sections and current commencement status]",
        "Weed Society of Tasmania — practitioner identification guidance. [VERIFY: suitability as an authoritative source for this module]",
        "A recognised Tasmanian or Australian native plant identification reference — for non-target vegetation awareness. [VERIFY: title, publisher and suitability]",
      ],
    },
  },

  m3: {
    // DRAFT content — pending owner review and approval.
    // Uses only examples named in the master brief. No verified Tasmanian
    // specific claims; items requiring verification are marked [VERIFY] in
    // the corresponding docs/Module_03_Content.md.
    //
    // CHEMICAL-USE BOUNDARY: this module discusses herbicides only as one of
    // several broad approaches. It contains no product names, rates, mixtures,
    // application methods, withholding periods or label paraphrases. See
    // PROJECT_BRIEF.md §2.3 and §4 (Module 3, "Important").
    learningOutcomes: [
      "Explain integrated weed management as a planned combination of methods, not a single treatment.",
      "Identify the broad categories of control approach and what each is suited to.",
      "Describe the factors that should influence method selection on a natural-environment site.",
      "Explain why timing, staged treatment and follow-up capacity shape a defensible decision.",
      "Recognise the boundary between method-selection reasoning and decisions that require specialist or authorised input.",
    ],
    sections: [
      {
        heading: "Integrated weed management",
        body: [
          "Integrated weed management means combining methods in a planned way, rather than relying on a single approach. The point is not to use every method available — it is to choose a combination that fits the species, the site, the objectives and what can realistically be followed up.",
          "A planned combination usually does three things: addresses the plant at more than one point in its life cycle (for example, reducing seed set now, and reducing the seed bank or regrowth later); uses the site's constraints as design inputs (access, terrain, water, non-target vegetation, weather, and what the site manager can support); and builds in follow-up, because a single treatment rarely ends an infestation. [VERIFY: link to a Tasmanian or Australian integrated weed management reference, once identified.]",
        ],
      },
      {
        heading: "The broad approaches",
        body: [
          "The brief names six broad categories. They are not a hierarchy — they are options, and the right one (or combination) depends on the situation: manual (hand-pulling, cutting, digging, and similar — suited to small infestations, sensitive sites, or situations where machinery or chemicals are not appropriate); mechanical (machinery-based removal, slashing, mulching, cultivation — suited to larger or more accessible infestations, but with greater risk of soil disturbance, non-target damage and spread); chemical (the use of registered herbicides, selected with specialist input and applied in accordance with the product label and current authorisations — this course does not provide chemical directions); biological (where an approved biological control agent is relevant and available — not a general-purpose option, its use depends on approval, suitability and site context); cultural or site management (grazing, fire, shading, competition from desirable vegetation, and other site-level practices that change conditions for the weed); and prevention (hygiene, early detection, and stopping spread before it starts, covered in more depth in Module 5). [VERIFY: link to an authoritative Tasmanian or Australian source describing these approaches for contractors, once identified.]",
        ],
      },
      {
        heading: "Factors that influence method selection",
        body: [
          "Method selection is not a free choice. It is constrained by the species, the site, the objectives, the risks and what can be followed up. A contractor should be able to identify the factors that matter on a given site: species and growth stage; infestation size and pattern; access and terrain; weather and season; soil and water; non-target vegetation and fauna habitat; people and safety; follow-up capacity; objectives and success criteria; and regulatory and approval context. [VERIFY: link to NRE Tas guidance on method selection or site assessment for contractors, once identified.]",
          "You will not always be able to resolve every factor before starting. The point is to notice which ones are unresolved, and to pause and seek advice when an unresolved factor could change the decision.",
        ],
      },
      {
        heading: "Timing and staged treatment",
        body: [
          "When a treatment is done can matter as much as what is done. Timing affects effectiveness (some methods work best at particular growth stages); non-target risk (some methods are more damaging to native vegetation at certain times); fauna (nesting, breeding and seasonal movement can make some times unsuitable); spread risk (treating after seed set may spread seed rather than reduce it); and follow-up (the timing of the first treatment shapes when follow-up is needed and what it should be).",
          "Staged treatment means planning more than one pass, at intervals that reflect the weed's biology and the site's capacity. It is usually more realistic than a single-event approach, and it is often the only way to reduce a seed bank or a persistent infestation over time.",
        ],
      },
      {
        heading: "The role and limits of herbicides",
        body: [
          "Herbicides are one option among several. Where they are considered, the decision about which product, at what rate, in what mixture, and by what application method is not made in this course. Those decisions require appropriately trained and authorised people; must follow the product label and safety data sheet; must comply with permits, legislation and regulator directions; and must be made with site-specific information and, where relevant, specialist advice.",
          "This course explains that herbicides are one of the broad approaches and that they are selected with specialist input. It does not provide product names, rates, mixtures, application methods, withholding periods or label paraphrases. If you need those, they come from the label, the relevant training, and authorised advice — not from a general course. [VERIFY: link to the authoritative source for chemical-use training and label requirements in Tasmania, once identified — likely ChemCERT and the relevant Tasmanian regulator.]",
        ],
      },
      {
        heading: "When to pause and seek specialist input",
        body: [
          "Method selection is a decision that sometimes goes beyond the contractor's scope. Pause and seek input when: the species, its life cycle or its response to a method is uncertain; the site contains values (species, habitat, cultural, water) that could be affected in ways you cannot confidently assess; the proposed method requires approvals, permits or specialist authorisation; the objectives or success criteria are unclear; or the follow-up capacity is uncertain and the treatment could make things worse without it.",
          "This is consistent with the contractor's role described in Module 1, and with the 'when to confirm identification' section in Module 2. It is professional practice, not a gap in competence.",
        ],
      },
    ],
    fieldContext: {
      heading: "Tasmanian field context",
      body:
        "Placeholder example, structurally realistic and generic — to be replaced with a verified Tasmanian example before publication. A contractor is asked to plan control for a blackberry infestation along a riparian edge on a bushland reserve. The site manager's objective is to protect native understorey and the creek, not to eradicate blackberry in a single season. Walking the site, the contractor notes that the infestation is dense in the core and scattered along the edge with native shrubs mixed through the outer zone; that the ground near the creek is soft and erosion-prone; that access for machinery is limited by the creek and by the native vegetation; that the site manager can support follow-up visits but not a large machinery operation; and that the site is being managed for regeneration, so non-target damage matters as much as blackberry kill. The contractor's notes before the method conversation record these features, and flag that the choice of approach (or combination) needs to reflect them. The contractor does not select a method unilaterally — they bring the site information to the site manager and, where relevant, to a specialist, and the decision is made together. [VERIFY before publication.]",
    },
    activity: {
      heading: "Interactive activity",
      body:
        "Placeholder text. In the built module, this section will contain an interactive method-selection or decision activity. Draft concept: the learner is shown or described a site with a target weed and a set of site factors, and asked to identify which factors are most important, propose a combination of broad approaches that fits the site and objectives, and identify what information is missing or needs specialist input. A second concept compares two sites with the same weed but different constraints (for example, a riparian site and a dry accessible bank), and asks how the method combination would differ and why. The activities test reasoning about method selection, not recall of products or methods.",
    },
    knowledgeCheck: {
      heading: "Knowledge check",
      note:
        "These questions test reasoning rather than recall. They carry no pass/fail meaning in this draft and are pending approval with the rest of the module.",
      questions: [
        {
          id: "q1",
          prompt:
            "Which statement best describes integrated weed management?",
          options: [
            "Using every available method on every site.",
            "A planned combination of methods chosen to fit the species, site, objectives and follow-up capacity.",
            "Always using the fastest method to reduce cost.",
            "Replacing chemical methods with manual methods everywhere.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — integration is about a planned combination that fits the situation, not about using everything.",
          feedbackIncorrect:
            "Integration is a planning approach, not a fixed rule about which methods to use.",
        },
        {
          id: "q2",
          prompt:
            "A contractor is planning control on a riparian site. Which factor is most likely to constrain the choice of method?",
          options: [
            "The colour of the contractor's vehicle.",
            "The proximity of the site to a creek and the risk of erosion and runoff.",
            "The day of the week the work is scheduled.",
            "The number of workers on the crew.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — water, erosion and runoff are core site constraints on a riparian site.",
          feedbackIncorrect:
            "Look for factors that affect environmental values, safety or feasibility.",
        },
        {
          id: "q3",
          prompt:
            "Why does timing matter in method selection?",
          options: [
            "It only matters for chemical methods.",
            "It affects effectiveness, non-target risk, fauna, spread risk and follow-up.",
            "It only matters for large infestations.",
            "It does not matter as long as the method is correct.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — timing affects effectiveness, risk and follow-up, not just one of them.",
          feedbackIncorrect:
            "Timing is a core design input, not an afterthought.",
        },
        {
          id: "q4",
          prompt:
            "Which statement best describes the role of herbicides in this course?",
          options: [
            "The course provides product names and rates for common weeds.",
            "Herbicides are one of several broad approaches; product, rate, mixture and application decisions are made by appropriately trained and authorised people, in accordance with the label and relevant approvals.",
            "Herbicides are not mentioned in this course at all.",
            "Herbicides are always the first choice on natural-environment sites.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — herbicides are one option, and the specific decisions sit outside this course.",
          feedbackIncorrect:
            "The course is explicit that product-specific chemical decisions are outside its scope and require specialist and authorised input.",
        },
        {
          id: "q5",
          prompt:
            "When should a contractor pause and seek specialist input on method selection?",
          options: [
            "Only when the client asks them to.",
            "When the species, site values, approvals, objectives or follow-up capacity are uncertain enough that a wrong decision could cause avoidable harm.",
            "Never — method selection is always within the contractor's scope.",
            "Only when chemicals are involved.",
          ],
          correctIndex: 1,
          feedbackCorrect:
            "Correct — pausing when uncertainty could cause harm is professional practice.",
          feedbackIncorrect:
            "Method selection sometimes goes beyond the contractor's scope; recognising that is a core skill.",
        },
      ],
    },
    takeaway: {
      heading: "Practical takeaway",
      body:
        "Before your next method-selection conversation, prepare three things. The site factors that constrain the choice — species and growth stage, infestation pattern, access and terrain, weather and season, soil and water, non-target vegetation and fauna, safety, follow-up capacity, objectives and approvals. A proposed combination, not a single method — at least two approaches that fit the site and objectives, and why they fit. The unresolved questions — what you cannot confidently answer, and who should be asked: the site manager, a specialist, or an authorised chemical adviser. If you can bring those three things to the conversation, you are contributing to a defensible method decision, not just executing one.",
    },
    references: {
      heading: "References and further guidance",
      note:
        "RESEARCH REQUIRED — no reference below is cited as supporting a specific statement in this module until it has been verified and recorded in docs/Source_Register.md.",
      items: [
        "NRE Tas (Natural Resources and Environment Tasmania) — method selection, site assessment or integrated weed management guidance for contractors. [VERIFY: specific page(s) and date checked]",
        "Biosecurity Act 2019 (Tas) — any relevant permit, approval or notification requirements for control methods. [VERIFY: specific sections and current commencement status]",
        "Weed Society of Tasmania — practitioner guidance on integrated weed management. [VERIFY: suitability as an authoritative source for this module]",
        "ChemCERT or the relevant Tasmanian chemical-use training authority — for the boundary between method-selection reasoning and chemical-use decisions. [VERIFY: correct body, current name and source]",
      ],
    },
  },
};

/* Generate placeholder entries for modules m4–m7 from the same template. */
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

for (const id of ["m4", "m5", "m6", "m7"]) {
  if (!moduleContent[id]) moduleContent[id] = templateFor(id);
}

export function getModuleContent(id) {
  return moduleContent[id] ?? null;
}
