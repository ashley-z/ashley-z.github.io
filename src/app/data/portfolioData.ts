export interface Feature {
  name: string;
  description: string;
  image?: string;
}

export interface Takeaway {
  title: string;
  description: string;
}

export interface Callout {
  title: string;
  description: string;
}

export interface ProcessSection {
  title: string;
  content: string;
  callouts?: Callout[];
}

export interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  description: string;
  role: string;
  team?: string;
  technologies: string;
  purpose: string;
  timeline?: string;
  heroImage: string;
  challenge: string;
  challengeCallouts: Callout[];
  solution: string;
  processSections: ProcessSection[];
  features: Feature[];
  takeaways: Takeaway[];
  takeawaysSummary?: string;
  quote?: string;
  whatsNext: string;
  demoUrl?: string;
}

export const projects = [
  {
    id: "polytrace",
    title: "Neuron Detection Software",
    tag: "Product Design",
    description: "Six-stage product interface for a machine learning pipeline — replaced a text-editor workflow with real-time visual feedback. Customer success rate: 0% → 60%.",
    image: "/assets/Homepage.png"
  },
  {
    id: "dashboard",
    title: "Sales Intelligence Dashboard",
    tag: "Data Product",
    description: "Python/SQL intelligence pipeline on four years of messy CRM data; surfaced a $1.2M revenue leak hiding in free-text notes no one had ever aggregated.",
    image: "/assets/dashboard.png"
  },
  {
    id: "layout",
    title: "Layout Management Tool",
    tag: "Shipped Internally · Vibe-coded",
    description: "Recurring support burden turned into a self-serve drag-and-drop workspace tool. Prototyped solo with AI-assisted development, validated with two expert audiences before engineering handoff.",
    image: "/assets/editor.png"
  }
];

export const caseStudies: Record<string, CaseStudy> = {
  "polytrace": {
    id: "polytrace",
    title: "Neuron Detection Software",
    tag: "Product Design",
    description: "Designing the product layer for a machine learning-based analysis pipeline.",
    quote: "A Prototype Showcase that highlights my ability to design and build a 0→1 product interface from scratch; translating a complex ML pipeline into a guided, visual workflow that closes the feedback loop expert users never had.",
    role: "Designer & Project Manager",
    team: "1 Project Manager, 1 CS Research Fellow, 1 Full Stack Engineer, 1 Neuroscientist",
    technologies: "React, Python, CaImAn (open source analysis pipeline), TensorFlow/Keras, Cursor, Figma",
    purpose: "0→1 ML product — from unstable research prototype to commercially viable pipeline",
    timeline: "6 months",
    heroImage: "/assets/Homepage.png",
    challenge: "Neuroscientists generate gigabytes of video per session — fluorescent signals from live brain tissue that must be processed into individual neuron traces before any analysis can happen. The standard tool for this is CaImAn, a powerful open-source library. It works, but it is not a product.\n\nResearchers interact with it through a config file and a notebook: change a number, wait up to an hour for the pipeline to finish, inspect a static image, guess whether the settings were right, and run it again. The interface between a scientist and the algorithm is a text editor.\n\nWhen I joined the project, I had a Phase 1 backend pipeline and two pilot customers ready to test it. I needed to understand why the tool wasn't working for real users — and what a product that actually served them would look like.",
    challengeCallouts: [
      { title: "No On-Ramp", description: "~120 configuration parameters, no defaults, no guidance. Users were expected to already know everything." },
      { title: "Broken Feedback Loop", description: "Every parameter change required a full re-run, sometimes 40+ minutes, with no signal mid-run." },
      { title: "Unactionable Output", description: "Results arrived as a static image — no interactivity, no comparison, no way to course-correct." }
    ],
    solution: "PolyTrace is a six-stage guided workflow that takes a researcher from raw video upload to exportable results — replacing a text-editor interface with real-time visual feedback at every decision point. I designed and vibe-coded the full frontend in React: 40+ interactive parameters, side-by-side comparison panels, a live drawing canvas, and per-neuron result visualization.\n\nThe prototype intentionally simulates output data while keeping all parameter controls fully functional — the goal was to validate the interaction model, not build a processing server. Every design decision prioritized one thing: letting users see the effect of their choices before committing to a long, expensive compute job.",
    processSections: [
      {
        title: "Pain Point Discovery",
        content: "I inherited a Phase 1 backend from a University of Waterloo team and two pilot customers ready to test it. When I sat with them, the problem wasn't the algorithm — it was the absence of any product layer around it. Users were copy-pasting parameter values from academic papers with no understanding of what to change for their specific data.\n\nI worked with our in-house neuroscientist to map every parameter to a plain-language user need — what it controls, what bad output looks like, what a sensible default should be. That audit became the design spec."
      },
      {
        title: "Design and Development",
        content: "I built the full prototype in Figma and handed it to our engineer. Thorough handoff, clean components — and three and a half weeks before I saw anything running in a browser. Feedback cycles were slow. Changes that took me ten minutes in Figma took days to surface.\n\nI used FigmaMake to generate a working React scaffold from my designs, then took it into Cursor and built the rest myself — drawing canvas, parameter controls, side-by-side panels, the full six-stage flow. What used to take 1.5 months took three weeks, and I could test interactions in real time instead of describing them in a handoff doc.",
        callouts: [
          { title: "Remove the Default", description: "One critical input — the neuron size slider — ships with no prefill. It shows \"— px\" and blocks the user from proceeding until they set it manually. The obvious design choice was a sensible default. I removed it because a wrong value here silently degrades every result downstream, and users needed to make a visual judgment on their own data rather than accept a number they didn't verify." },
          { title: "Build a Way Back In", description: "Results export a mask file that re-imports as a visual overlay in the earlier annotation stage. I prioritized this over additional output visualizations because iteration — not inspection — was the real workflow gap. A user who can compare two runs visually without starting from scratch trusts the tool faster than one who gets a richer single output." },
        ]
      },
      {
        title: "Launch and Feedback",
        content: "When we opened V2 to pilot customers, the primary feedback wasn't about features — it was about trust. Users wanted to know whether their settings were reasonable before running the pipeline. That validated the core design bet: visual feedback at every stage matters more than output richness.\n\nI'd instrument interaction data from day one — which parameter accordions users actually opened, which stages they revisited. I made progressive disclosure calls based on domain intuition. Usage data would tell me whether I was right."
      }
    ],
    features: [
      { name: "Validation Checks", description: "All analysis parameters has boundary restrictions co-designed with in-house neuroscientists, preventing users from entering values that cause silent failures before compute time is wasted.", image: "/assets/ValidationChecks.png" },
      { name: "Guided Workflow", description: "Six sequential stages walk users from raw upload to exportable results, mirroring the algorithm's actual processing order so the product teaches the pipeline as you use it.", image: "/assets/Stages.png" },
      { name: "Real-time Visual Feedback", description: "Parameter changes surface as live visual feedback — displacement charts, diagnostic views, size comparison examples — so users understand the effect of a choice before committing to a full run.", image: "/assets/GenerateNeuronMap.png" },
      { name: "Interactive Drawing Canvas", description: "An SVG canvas lets users manually annotate neurons on their data; circle count and average radius automatically populate the two most critical algorithm inputs downstream.", image: "/assets/DrawNeurons.png" }
    ],
    takeaways: [
      { title: "You Can't Design a UI for Parameters You Don't Understand", description: "Nobody had documented what the parameters meant in plain language — which made it impossible to set sensible defaults or reason about failure. I had to learn the domain before I could design the interface. For any AI product, understanding what the model is optimizing isn't background reading — it's the design brief." },
      { title: "Intentional Friction Is a Feature", description: "The neuron size slider has no default value — it shows \"— px\" and blocks progression until the user sets it manually. I made this call deliberately: a bad default here produces worse algorithm output, so forcing a visual judgment was the safer design. Not every field should have a prefill." },
      { title: "Close the Loop, Don't Just Show the Output", description: "Results export a mask file that can be re-imported as an overlay in the earlier annotation stage. This lets users compare runs visually without starting from scratch — a feedback loop that didn't exist in any prior version of the tool. The most useful interface feature wasn't a visualization; it was a way back in." }
    ],
    takeawaysSummary: "PolyTrace taught me that designing for expert users isn't about simplifying — it's about building the right guardrails and feedback loops so expertise can actually flow. Every meaningful decision came down to one question: what does the user need to see before they act?",
    whatsNext: "The prototype validates the interaction model. What it doesn't solve is everything that makes this a real product: infrastructure, pricing, and the latency problem that sits at the center of both.\n\n**Scale changes the pricing conversation.**\nResearchers record terabytes of calcium imaging data per study. AWS S3 handles storage today, but at production scale — multiple labs, multiple concurrent runs, multi-TB uploads — compute and storage costs become the core unit economics of the business. The pricing model can't be an afterthought: per-session, per-lab-seat, and consumption-based models all produce different margin profiles at different usage patterns. That decision shapes what we build next.\n\n**The latency problem is a UX problem.**\nMotion correction on a 2 GB file takes minutes. A progress spinner isn't enough — users need to see processed frames appearing in real time and catch bad parameters before a full run completes. Solving this means streaming intermediate results back to the frontend, which requires rearchitecting the backend around async processing, not just connecting a Python server.\n\n**Trust is the real product.**\nUX in scientific software isn't about aesthetics — it's about building confidence in the algorithm through transparency and guardrails. Researchers stake their findings on the output of this pipeline. How do you get a domain expert to trust a system they didn't build?"
  },
  "dashboard": {
    id: "dashboard",
    title: "Sales Intelligence Dashboard",
    tag: "Data Product · Solo Build",
    description: "A Python/SQL/Next.js pipeline that transformed four years of messy CRM data into the analytics infrastructure Mightex had never had.",
    demoUrl: "https://mightex-sales-demo.vercel.app/",
    quote: "A case study that highlights my ability to take four years of unstructured, real-world business data, design and build the full intelligence layer myself, and translate the output into commercial decisions — surfacing signal that four years of dropdown fields never captured.",
    role: "Product Manager — Designed, built, and shipped solo",
    technologies: "Python (Pandas), SQL (PostgreSQL), Next.js, Supabase, Pipedrive API, Tremor, Vercel",
    purpose: "0→1 internal data product; from zero analytics infrastructure to always-on sales intelligence",
    heroImage: "/assets/dashboard.png",
    challenge: "Mightex's primary revenue is hardware — scientific imaging equipment sold to neuroscience research labs. As PM for the software product, I wanted to understand our customers: who was buying, which research applications were driving deals, and whether our software users were academic labs or industrial. When I asked the sales team, the answers were always the same: \"It's in our head\" or \"It's in the email chains.\" When I asked the sales manager how she knew which application a customer was researching, she said: \"We just know.\"\n\nThe problem was bigger than my original question. Four years of deal history existed in Pipedrive — notes, contacts, pipeline stages — but none of it had ever been connected to an analytical layer. Sales reviews happened once a year, driven by instinct and a manually rebuilt spreadsheet. The data was there. The infrastructure to read it wasn't.",
    challengeCallouts: [
      { title: "No Application Data", description: "Research application — the dimension management cared about most — existed only in free-text rep notes, with no structured field anywhere in four years of CRM data." },
      { title: "Excel-Only Reviews", description: "The sales manager ran one annual review from a manually-updated spreadsheet she rebuilt from scratch each time, with no ability to filter, compare years, or ask follow-up questions." },
      { title: "Invisible Loss Patterns", description: "Nearly $3M in deals lost to ghosted prospects over three years was hiding in the lost_reason field — a structural pattern nobody had ever aggregated." }
    ],
    solution: "I designed and built a full-stack internal data product — Python ETL pipeline, PostgreSQL database, and a Next.js dashboard — solo, without an engineering team. An NLP keyword taxonomy retroactively classifies 4,400+ historical deals by research application against free-text CRM notes, creating a structured field that had never existed. The three-tab surface is structured entirely around the decisions the sales manager makes in a quarterly review, not around the data that was easiest to display. The dashboard now replaces the manually-updated Excel sheet as the source of truth for quarterly review preparation — always-on, filterable by year, and operable without my involvement.",
    processSections: [
      {
        title: "Pain Point Discovery",
        content: "I didn't set out to build a sales dashboard. I set out to understand who was using Mightex's software. I started asking questions across the sales and support team — who are these customers, what are they researching, which ones are paying for a pro license? Every answer pointed to the same gap: knowledge lived in people's heads and email chains, not in any system. When I asked how sales reviews were run, I found a once-a-year process driven by a manually rebuilt spreadsheet. I spent time in those reviews before writing any code. The questions management needed answered — which regions to invest in, which products were winning, where deals were dying — had no reliable answers because the infrastructure to produce them didn't exist. That conversation defined every downstream decision about what to clean, classify, and surface."
      },
      {
        title: "Design and Development",
        content: "I pulled the raw Pipedrive export — four years of deals, inconsistent naming, mixed currencies, free-text fields — and built the cleaning layer first. Every value normalized to CAD, timestamps to UTC, entity deduplication before any classification ran. Then I built the NLP taxonomy and the Streamlit prototype, and showed it to the sales manager. That conversation reshaped everything I thought I'd built.",
        callouts: [
          { title: "Clean enough to trust", description: "My statistics background set the bar: if two analysts queried the same question, they had to get the same number. Currency normalization, UTC standardization, and deduplication weren't setup steps — they were the product's credibility." },
          { title: "Decision-Mapped Tabs", description: "V1 had six tabs built around data availability. After sitting down with the sales manager, I cut to three — Revenue, Pipeline, Performance — each defined by a quarterly review decision, not a data category." },
          { title: "Integrated Tooltips", description: "Watching someone use V1 revealed the failure: charts showed numbers but not what the numbers meant. Every KPI and chart in V2 has tooltip text answering \"what does this measure and why does it matter.\"" },
          { title: "Modular Infrastructure", description: "Streamlit was the wrong choice for always-on access. I planned the full stack before V2: Python ETL with modular fetch/clean/load, PostgreSQL on Supabase, and Next.js on Vercel." }
        ]
      },
      {
        title: "Launch and Feedback",
        content: "V1 proved the analytical value — the ghost deal finding changed the conversation at the next quarterly review. It also exposed every infrastructure failure: Streamlit's 24-hour sleep, six tabs nobody asked for, charts with no explanations. V1 wasn't a failed product. It was the cheapest way to learn what the real product needed to be before committing to a production stack. V2 was built entirely from those failure modes. The sales manager now uses the dashboard to prepare her quarterly review presentations. I wrote the ownership handoff documentation — how to sync data, add a user, rotate API keys — before calling V2 done."
      }
    ],
    features: [
      { name: "Header Alert Pill", description: "A persistent three-signal summary (won revenue, weighted forecast, overdue deals at risk) sits above the tabs and updates with the year filter, so users arrive oriented before clicking anything.", image: "/assets/Signals.png" },
      { name: "Decision-Mapped Tabs", description: "Three tabs structured around quarterly review decisions — Revenue, Pipeline, Performance — not data availability; everything that didn't answer one of those three questions was cut.", image: "/assets/DecisionTabs.png" },
      { name: "NLP Deal Classifier", description: "A prioritized keyword taxonomy retroactively classifies 4,400+ deals by research application against free-text CRM notes, creating a structured field that had never existed in four years of Pipedrive data.", image: "/assets/NLPClassifierChart.png" },
      { name: "Metric Tooltips", description: "Every KPI card and chart carries an ⓘ tooltip answering what it measures and why it matters, so the dashboard is usable in a quarterly review without any narration from me.", image: "/assets/Tooltips.png" }
    ],
    takeaways: [
      { title: "Ship it wrong, then ask the right question", description: "I built V1 on assumptions about what six tabs should contain, showed it to the sales manager, and learned the product I'd built wasn't the one she needed; the most important work happened in the conversation after V1 shipped, not before." },
      { title: "The mess is where the signal lives", description: "The most commercially valuable dimension — research application — existed only in four years of free-text notes; choosing to extract from the mess rather than create a new clean field going forward was the product decision that made the historical analysis possible." },
      { title: "Handoff is a feature, not cleanup", description: "A tool that only runs while I'm maintaining it isn't a product; I wrote the ownership documentation before calling V2 done, because reliability and transferability were requirements V1 proved I'd missed." }
    ],
    takeawaysSummary: "Building this taught me that the hardest part of a data product isn't the data — it's the decisions about what to measure, who owns it, and whether it works without you.",
    whatsNext: "The ETL pipeline and classification layer are the foundation — the next layer is closing the feedback loop. The most important unsolved problem is that the NLP classifier is static: if a rep introduces new terminology or a product category changes, the taxonomy needs a manual update. A V3 direction worth building is a lightweight review interface where the sales manager flags misclassified deals and corrections improve the taxonomy over time — turning a static artifact into something that gets better with use.\n\nThe longer-term problem is forecasting. The dashboard is retrospective — it tells you what happened and what the pipeline looks like now, but not what revenue is likely to close next quarter. Using stage velocity and historical cycle length to project forward would transform quarterly reviews from retrospectives into planning tools.\n\nThis architecture — a structured intelligence layer on top of messy operational data, designed around the decisions a specific user needs to make — maps directly to fintech: fraud review interfaces where analysts act on model output, underwriting tools where risk signals need plain-language surfacing, spend categorization where classification accuracy has direct revenue consequences. The domain changes. The problem structure doesn't."
  },
  "layout": {
    id: "layout",
    title: "Layout Management Tool",
    tag: "Internally shipped · Vibe-coded",
    description: "Design your own workspace once and never set it up again — removing hours of software friction from their first day of data collection.",
    demoUrl: "https://layout-tool-polyscan.vercel.app/",
    quote: "A case study that highlights my ability to translate a recurring support burden into a self-serve product layer — moving fast by building a working prototype, validating it with two different expert audiences, and handing off infrastructure-ready documentation to engineering.",
    role: "Designer & PM",
    team: "1 PM, 1 Engineer",
    technologies: "Cursor, Claude, React 19, TypeScript, Tailwind CSS 4, WinForms (production)",
    purpose: "Internal tool to eliminate manual layout configuration for neuroscience researchers",
    heroImage: "/assets/editor.png",
    challenge: "Fiber photometry researchers using PolyScan — a multi-window data acquisition software — had no way to save their workspace layout between sessions. Every launch, every machine, every new experiment started from a blank canvas. This was one of the most consistent friction points surfacing in a larger initiative to cut software onboarding time from 2–3 hours to under 10 minutes for non-technical researchers. What looked like a minor annoyance on paper was, in practice, a recurring tax on every experiment and a sustained drain on the customer support team.",
    challengeCallouts: [
      { title: "Setup from scratch", description: "Researchers manually rearranged windows every session, on every machine in the lab, with no memory between launches." },
      { title: "Support as a workaround", description: "Layout and parameter configuration was one of the most time consuming parts of pre-acquisition support calls." },
      { title: "No path to scale", description: "Each new customer onboarded required the same manual support lift, creating a ceiling on how many labs we could bring on simultaneously." }
    ],
    solution: "The Layout Management Tool is a visual workspace editor embedded in PolyScan — a drag-and-drop canvas where researchers design their window layout once specific to their research application, save it as a named template, and have it auto-apply on every subsequent launch. Components snap into rows and columns, resize via draggable dividers, and their proportions are stored as percentages rather than fixed pixel positions — so a layout designed on a 27-inch lab monitor loads correctly on a 13-inch laptop without reconfiguration. Templates can be scoped to an individual user or shared across the whole lab, enabling a PI to standardize the workspace for their entire team in a single save.",
    processSections: [
      {
        title: "Pain Point Discovery",
        content: "Three signals converged at the same time. I was already mapping the full researcher onboarding journey for a larger initiative — cataloguing every step between unboxing and first data collection. I was also dog-fooding PolyScan myself, and the window arrangement friction was impossible to miss. Every session, I was rebuilding the same workspace. When I cross-referenced this with the customer support team, I found layout configuration was one of the most consistently flagged pre-acquisition complaints. Three independent signals pointing at the same gap made it difficult to deprioritize.\n\nThe larger onboarding redesign was still in progress, but I made the case to prioritize the layout tool as a discrete, shippable building block rather than waiting for the full initiative to be ready. The argument was straightforward: this problem had a clean scope, a working prototype to validate against, and was generating ongoing support costs every week we didn't ship it. Getting it into engineering early meant it could be live for customers before the rest of the onboarding work landed — and it de-risked the larger initiative by proving the team could ship incrementally against it."
      },
      {
        title: "Design and Development",
        content: "Rather than writing a spec in the abstract, I built a fully interactive prototype using Cursor and Claude — drag-and-drop component placement, live percentage feedback, resizable dividers, and template save and load — grounded in PolyScan's real design language so it looked and behaved like the actual product. This compressed the feedback loop and created a concrete artifact to validate before any engineering time was committed.",
        callouts: [
          { title: "Two audiences, two sessions", description: "I ran a formal presentation to four in-house neuroscientists to validate UX, and a separate working session with the technical lead to work through feasibility. Keeping these separate meant each audience could engage on their own terms — scientists focused on whether the interaction felt intuitive; the technical lead focused on whether the architecture was achievable." },
          { title: "The WinForms constraint", description: "The prototype was built in Next.js. PolyScan's production frontend runs on WinForms — a different rendering model entirely. In the working session with the technical lead, we worked through every key mechanism: quadrant splitting logic, size constraints, and how tiled layout management would function within WinForms." },
          { title: "Percentage-based sizing", description: "Storing layout proportions as percentages rather than fixed pixel values was an architectural choice I drove with the technical lead. It meant the layout engine was resolution-agnostic from the start, not as a future-state improvement." }
        ]
      },
      {
        title: "Launch and Feedback",
        content: "The prototype was validated by scientists as intuitive and handed off to engineering with annotated designs and the GitHub repository as the primary technical reference. One concrete outcome emerged immediately: the camera component's color scheme from the prototype was flagged by my manager as an improvement worth implementing in the current software, and the technical lead shipped that UI change directly. The full tool is now in engineering build. The internal launch will test the core hypothesis: whether researchers adopt saved templates or fall back to manual arrangement — and whether shared template adoption reaches the 40% target that would confirm the lab-wide standardization use case."
      }
    ],
    features: [
      { name: "Drag-and-drop canvas", description: "Researchers place and resize components visually on a live canvas, with layout proportions stored as percentages so the workspace renders correctly across different screen sizes.", image: "/assets/dragdrop.png" },
      { name: "Single-use component library", description: "The sidebar surfaces all available PolyScan components and automatically disables any component already placed on the canvas, enforcing a one-instance-per-component constraint that prevents configuration errors before they happen.", image: "/assets/sidebar.png" },
      { name: "Adaptive resize dividers", description: "Users resize any component by dragging a row or column divider; each component independently shows horizontal and vertical scrollbars when its content exceeds its allocated space, so no information is lost when the layout is compact.", image: "/assets/resizing.png" },
      { name: "Reactive settings panel", description: "The Application Settings component updates in real time as users configure the sidebar — toggling parameter visibility, reordering sections via drag handles, and conditionally rendering only the parameters relevant to the current device — with section reordering locked until the component is placed on the canvas, preventing edits before context is established.", image: "/assets/reorder.png" }
    ],
    takeaways: [
      { title: "The support queue is a product backlog in disguise", description: "The trigger wasn't a user interview — it was a pattern in support calls. When you see a team consistently solving the same problem manually, that's a missing feature wearing a support ticket. I now treat support queue clusters the way I treat anomaly detection: the signal isn't the individual ticket, it's the recurrence." },
      { title: "A working prototype is a better spec than a written one", description: "For interaction-heavy features, the gap between a written description and the actual user experience is too wide to close with documentation alone. Building something clickable before the PRD was finalized changed the quality of every subsequent conversation." },
      { title: "Infrastructure decisions are product decisions", description: "Choosing a percentage-based layout model over fixed pixel positions wasn't an engineering detail — it was a product requirement driven by how neuroscience labs actually work. Getting that decision right at the architecture stage is the kind of thing that only happens when PM and engineering work from the same artifact." }
    ],
    takeawaysSummary: "This project moved from problem identification to engineering handoff fast enough to ship as a standalone building block inside a larger, still-in-progress onboarding initiative.",
    whatsNext: "The internal launch is the first real test. The instrumentation built into V1 — template save rates, shared versus personal template ratios, editor session duration, support ticket rates — will answer directly whether researchers adopt saved templates or revert to manual configuration out of habit. If shared template adoption hits the 40% target, the lab-wide standardization use case is confirmed, and V1.1 should prioritize features that accelerate it: template discovery, version history, and role-based permissions for PIs who want to lock layouts for their students. If adoption concentrates in personal templates, the roadmap shifts toward making individual customization faster — preset size buttons, keyboard shortcuts, and smarter auto-layout suggestions based on component count.\n\nThe longer-term roadmap is to make this the configuration layer for the full researcher onboarding product line — not just fiber photometry, but every neuroscience domain PolyScan serves. A calcium imaging researcher needs a different default layout than a fiber photometry researcher running a timed behavioral experiment. The same visual editor, with domain-specific starter templates, serves both — which means the engineering investment in the layout engine compounds across every new application configuration we ship."
  }
};
