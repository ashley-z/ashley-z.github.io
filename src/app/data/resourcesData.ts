export interface ResourceCategory {
  slug: string;
  label: string;
}

export interface Resource {
  id: number;
  title: string;
  url: string;
  category: string;
  star: boolean;
  note: string;
}

export const meta = {
  total: 51,
  last_updated: "2026-03-21",
  categories: [
    { slug: "ai-ml", label: "AI & ML" },
    { slug: "prompt-engineering", label: "Prompt Engineering" },
    { slug: "data", label: "Data & SQL" },
    { slug: "books", label: "Books" },
    { slug: "reports", label: "Reports & Guides" },
    { slug: "design", label: "Design" },
    { slug: "interview", label: "Interview Prep" }
  ]
};

export const resources: Resource[] = [
  {
    id: 1,
    title: "Interactive LLM Visualization",
    url: "https://bbycroft.net/llm",
    category: "ai-ml",
    star: true,
    note: "The best visual explanation of how LLMs work under the hood — bookmark this before every AI PM interview."
  },
  {
    id: 2,
    title: "AI PM Learning Roadmap",
    url: "https://substack.com/home/post/p-164633384",
    category: "ai-ml",
    star: true,
    note: "A structured path from curious PM to AI PM — good for identifying gaps in your own knowledge."
  },
  {
    id: 3,
    title: "Mastering AI Evals",
    url: "https://www.productcompass.pm/p/ai-evals",
    category: "ai-ml",
    star: true,
    note: "Evals are the thing most AI PMs skip. This is the clearest treatment of how to think about model quality as a product input."
  },
  {
    id: 4,
    title: "Anthropic — Building Effective Agents",
    url: "https://www.anthropic.com/engineering/building-effective-agents",
    category: "ai-ml",
    star: true,
    note: "Essential reading on agent architecture tradeoffs — straight from the people building frontier models."
  },
  {
    id: 5,
    title: "Interactive TensorFlow Playground",
    url: "https://playground.tensorflow.org/",
    category: "ai-ml",
    star: false,
    note: "Hands-on way to build intuition for how neural networks learn — no code required."
  },
  {
    id: 6,
    title: "AI Prototyping: The Ultimate Guide",
    url: "https://www.productcompass.pm/p/ai-prototyping-the-ultimate-guide",
    category: "ai-ml",
    star: false,
    note: "Practical frameworks for building AI feature prototypes before you commit engineering resources."
  },
  {
    id: 7,
    title: "Advent of Agents",
    url: "https://adventofagents.com/",
    category: "ai-ml",
    star: false,
    note: "Project-based learning for AI agents — good for developing hands-on intuition."
  },
  {
    id: 8,
    title: "Understand Machine Learning Algorithms",
    url: "https://machinelearningmastery.com/start-here/#algorithms",
    category: "ai-ml",
    star: false,
    note: "Practical explainers on core ML algorithms — useful for speaking confidently with engineers."
  },
  {
    id: 9,
    title: "AI Agents for 10X Product Managers",
    url: "https://www.aigents.pm/",
    category: "ai-ml",
    star: false,
    note: "How leading PMs are integrating AI agents into their workflow and product thinking."
  },
  {
    id: 10,
    title: "Curated Agent Skills",
    url: "https://agentskills.guide/",
    category: "ai-ml",
    star: false,
    note: "A curated index of what different AI agents can and can't do — useful for scoping AI features."
  },
  {
    id: 11,
    title: "Vibe Coding 101: 23 Practical Tips",
    url: "https://aatir.substack.com/p/vibe-coding-101-23-practical-tips",
    category: "ai-ml",
    star: false,
    note: "Practical tips for building functional prototypes with AI tools — good for any PM doing discovery."
  },
  {
    id: 12,
    title: "How to Build a Full-Stack App with Lovable",
    url: "https://www.productcompass.pm/p/full-stack-app-with-lovable",
    category: "ai-ml",
    star: false,
    note: "Step-by-step guide to shipping a working product with no-code AI tools."
  },
  {
    id: 13,
    title: "Anthropic Prompt Engineering Interactive Tutorial",
    url: "https://github.com/anthropics/prompt-eng-interactive-tutorial",
    category: "prompt-engineering",
    star: true,
    note: "Hands-on notebook-based tutorial directly from Anthropic — the clearest treatment of prompting as a discipline."
  },
  {
    id: 14,
    title: "GPT-4.1 Prompting Guide",
    url: "https://cookbook.openai.com/examples/gpt4-1_prompting_guide",
    category: "prompt-engineering",
    star: false,
    note: "OpenAI's practical guide on getting the most out of their latest models — transferable across LLMs."
  },
  {
    id: 15,
    title: "Prompt Engineering by Google",
    url: "https://cloud.google.com/discover/what-is-prompt-engineering",
    category: "prompt-engineering",
    star: false,
    note: "Google's take on prompt engineering fundamentals — useful for understanding how different vendors frame the problem."
  },
  {
    id: 16,
    title: "Danny's 8-Week SQL Challenge",
    url: "https://8weeksqlchallenge.com/case-study-1/",
    category: "data",
    star: true,
    note: "The best SQL practice resource on the internet — business-context case studies, not just syntax drills."
  },
  {
    id: 17,
    title: "Machine Learning With SQL",
    url: "https://towardsdatascience.com/machine-learning-with-sql-its-easier-than-you-think-c6aae9064d5a/",
    category: "data",
    star: false,
    note: "Bridges the gap between data analysis and ML — shows how much you can do before reaching for Python."
  },
  {
    id: 18,
    title: "Mode SQL Tutorial",
    url: "https://mode.com/sql-tutorial/sql-business-analytics-training",
    category: "data",
    star: false,
    note: "Business-focused SQL training with real analyst workflows — closer to what you'll actually do on the job."
  },
  {
    id: 19,
    title: "HackerRank SQL",
    url: "https://www.hackerrank.com/domains/sql",
    category: "data",
    star: false,
    note: "Structured SQL practice problems graded by difficulty — good for warming up before technical interviews."
  },
  {
    id: 20,
    title: "StrataScratch",
    url: "https://www.stratascratch.com/",
    category: "data",
    star: false,
    note: "Real data interview questions from top tech companies — the closest thing to an actual PM data round."
  },
  {
    id: 21,
    title: "DataLemur — SQL & Data Science Interview Prep",
    url: "https://datalemur.com/",
    category: "data",
    star: false,
    note: "Focused on the exact SQL problems that show up in FAANG and fintech data interviews."
  },
  {
    id: 22,
    title: "Collection of Data Science Projects",
    url: "https://www.kdnuggets.com/2022/08/complete-collection-data-science-projects-part-2.html",
    category: "data",
    star: false,
    note: "Portfolio project ideas for building hands-on experience across different domains."
  },
  {
    id: 23,
    title: "SchemaVerse: SQL Strategy Game",
    url: "https://github.com/Abstrct/Schemaverse",
    category: "data",
    star: false,
    note: "A space strategy game played entirely in SQL — surprisingly effective for building query intuition."
  },
  {
    id: 24,
    title: "Database e-Learning",
    url: "https://db.grussell.org/",
    category: "data",
    star: false,
    note: "Solid foundational material on relational database concepts — good for filling gaps in self-taught SQL knowledge."
  },
  {
    id: 25,
    title: "PayPal / Braintree Take-Home SQL Challenge",
    url: "https://github.com/AlexanderConnelly/BrainTree_SQL_Coding_Challenge_Data_Analyst",
    category: "data",
    star: false,
    note: "A real Braintree/PayPal take-home data challenge — useful for understanding what fintech data interviews look like."
  },
  {
    id: 26,
    title: "Basic Wizard Guide to Dune SQL & Ethereum Analytics",
    url: "https://read.cryptodatabytes.com/p/a-basic-wizard-guide-to-dune-sql",
    category: "data",
    star: false,
    note: "On-chain data analytics using SQL — relevant for fintech/crypto PM roles that need blockchain data fluency."
  },
  {
    id: 27,
    title: "OurNetwork Newsletters — Data Projects",
    url: "https://www.ournetwork.xyz/",
    category: "data",
    star: false,
    note: "Weekly on-chain data analysis from community contributors — good for seeing how analysts tell stories with blockchain data."
  },
  {
    id: 28,
    title: "web3 Analytics 101 Course",
    url: "https://metrics-dao.teachable.com/p/web-analytics-101",
    category: "data",
    star: false,
    note: "Intro course on web3 data analytics — useful context for understanding on-chain metrics and DeFi data."
  },
  {
    id: 29,
    title: "Phalcon / Blocksec Explorer",
    url: "https://app.blocksec.com/explorer",
    category: "data",
    star: false,
    note: "On-chain transaction explorer with security analysis — useful for understanding blockchain data structure in fintech/crypto contexts."
  },
  {
    id: 30,
    title: "How to Become an Ethereum Developer",
    url: "https://hackmd.io/@1LsqLgZ9SFyvmF1L1suBIw/dapp-dev",
    category: "data",
    star: false,
    note: "Technical guide to Ethereum development — useful background context for fintech roles touching crypto rails."
  },
  {
    id: 31,
    title: "LaTeX Note-taking with Vim",
    url: "https://castel.dev/post/lecture-notes-1/",
    category: "data",
    star: false,
    note: "Clever system for technical note-taking — adaptable for anyone who wants to document ML concepts more rigorously."
  },
  {
    id: 32,
    title: "Google Agent Companion Whitepaper",
    url: "https://www.kaggle.com/whitepaper-agent-companion",
    category: "reports",
    star: false,
    note: "Google's framework for comparing and evaluating AI agents — useful for structuring agent product requirements."
  },
  {
    id: 33,
    title: "IBM Agentic Process Automation Report",
    url: "https://www.ibm.com/thought-leadership/institute-business-value/en-us/report/agentic-process-automation",
    category: "reports",
    star: false,
    note: "Enterprise lens on how agentic AI gets deployed in large organizations — relevant for B2B fintech roles."
  },
  {
    id: 34,
    title: "The DeFi Report",
    url: "https://thedefireport.io/",
    category: "reports",
    star: false,
    note: "Weekly DeFi and crypto market analysis — good for staying current on the intersection of finance and crypto."
  },
  {
    id: 35,
    title: "Crypto Data Analyst Roadmap",
    url: "https://roadmap.sh/r?id=65fee5b66deb533d6e19fb88",
    category: "reports",
    star: false,
    note: "Community-sourced roadmap for becoming a crypto data analyst — useful for understanding the skill stack."
  },
  {
    id: 36,
    title: "Composability Technical Guides",
    url: "https://read.cryptodatabytes.com/t/ecosystem-overviews",
    category: "reports",
    star: false,
    note: "Deep dives into how different blockchain ecosystems are built — good technical context for crypto fintech roles."
  },
  {
    id: 37,
    title: "Foundations of LLMs",
    url: "https://arxiv.org/pdf/2501.09223",
    category: "books",
    star: true,
    note: "The most comprehensive academic treatment of LLM fundamentals — dense but worth it for building rigorous intuitions."
  },
  {
    id: 38,
    title: "Neural Networks and Deep Learning",
    url: "http://neuralnetworksanddeeplearning.com/index.html",
    category: "books",
    star: false,
    note: "Free online book with excellent intuition-building for how neural networks learn — start here before the heavier texts."
  },
  {
    id: 39,
    title: "Deep Learning (Goodfellow et al.)",
    url: "https://www.deeplearningbook.org/",
    category: "books",
    star: false,
    note: "The canonical deep learning textbook — reference it when you need rigorous definitions during ML conversations with engineers."
  },
  {
    id: 40,
    title: "Figma Components — Untitled UI",
    url: "https://www.untitledui.com/components/dropdowns",
    category: "design",
    star: false,
    note: "High-quality, well-documented Figma component library — a good starting point for any product mockup."
  },
  {
    id: 41,
    title: "Magic UI — Library for Design Engineers",
    url: "https://magicui.design",
    category: "design",
    star: false,
    note: "Animated React components with clean code — useful for prototyping interactive AI features quickly."
  },
  {
    id: 42,
    title: "Framer / Figma Templates — Sprrrint",
    url: "https://sprrrint.com",
    category: "design",
    star: false,
    note: "Curated templates for Framer and Figma — good starting point for portfolio or product spec design."
  },
  {
    id: 43,
    title: "Lukacho — Special UI Components",
    url: "https://ui.lukacho.com",
    category: "design",
    star: false,
    note: "Distinctive UI components that push past the standard library aesthetic — good for design differentiation."
  },
  {
    id: 44,
    title: "Blank Design — UI Kit",
    url: "https://useblank.design",
    category: "design",
    star: false,
    note: "Minimal, clean UI kit — solid foundation for product prototypes that need to look polished fast."
  },
  {
    id: 45,
    title: "MyColor.space — Color Palette Generator",
    url: "https://mycolor.space",
    category: "design",
    star: false,
    note: "Fast, intuitive color palette generator — useful for establishing a consistent visual language in prototypes."
  },
  {
    id: 46,
    title: "Texture Labs",
    url: "https://texturelabs.org/",
    category: "design",
    star: false,
    note: "Free texture resources for adding tactile depth to digital design work."
  },
  {
    id: 47,
    title: "Web Design Inspiration — They Make Design",
    url: "https://medium.com/@theymakedesign/web-design-inspiration-vol-257-304c58657ae6",
    category: "design",
    star: false,
    note: "Curated web design inspiration — good for staying attuned to what good product design looks like."
  },
  {
    id: 48,
    title: "PM Grind — Mock Interview Timer",
    url: "https://www.blindclock.com/setup",
    category: "interview",
    star: false,
    note: "Timed mock interview tool — forces you to structure product answers under real time pressure."
  },
  {
    id: 49,
    title: "I Got an Offer — PM Mock Interview Videos",
    url: "https://www.youtube.com/@IGotAnOfferPM",
    category: "interview",
    star: false,
    note: "Real mock PM interviews on video — watching others structure answers is one of the fastest ways to improve your own."
  },
  {
    id: 50,
    title: "Luke Thomas — AI PM Courses",
    url: "https://luket-courses.lovable.app/courses",
    category: "ai-ml",
    star: false,
    note: "Practical, hands-on courses on n8n, AI agents, and automation by Luke Thomas."
  },
  {
    id: 51,
    title: "Land a PM Job - PM Frameworks",
    url: "https://www.landpmjob.com/pm-frameworks",
    category: "interview",
    star: false,
    note: "Deep-dive guides to 34 essential product management frameworks."
  }
];
