import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const caseStudies = {
  "ai-assistant": {
    title: "AI Assistant for Enterprise Teams",
    tag: "AI Product · Data Intelligence",
    description: "Building AI-powered tools that help teams make better decisions faster",
    role: "Lead Product Manager",
    technologies: "Python, TensorFlow, React, PostgreSQL",
    purpose: "Enterprise Productivity",
    heroImage: "https://images.unsplash.com/photo-1668714341253-81139e265a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NTcxNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "Enterprise teams were drowning in information overload and constant context switching. They needed a solution that could intelligently surface relevant information and automate routine tasks, but existing tools either disrupted workflows or failed to understand the nuances of how different teams actually work. The challenge was building something powerful enough to handle complex enterprise needs while remaining simple enough that teams would actually adopt it.",
    solution: "We designed an AI assistant that learns from team patterns and adapts to different workflows rather than forcing teams into a rigid structure. The system uses contextual signals to surface the right information at the right time, while a carefully designed conversational interface makes it feel like talking to a colleague rather than querying a database. By focusing on augmenting human decision-making rather than replacing it, we created a tool that teams genuinely wanted to use.",
    process: "Started with deep ethnographic research across 40+ teams to understand not just what they did, but why they did it that way. Collaborated closely with ML engineers to design a context-aware architecture that could learn from implicit signals without requiring manual training. Built iterative prototypes that we tested with real teams in their actual workflows, refining the UX based on qualitative feedback and behavioral data. Developed a phased rollout strategy that let us learn from early adopters before scaling to larger organizations.",
    features: [
      {
        name: "Contextual Intelligence",
        description: "The assistant learns from team communication patterns, project histories, and individual work styles to surface relevant information without being asked. It understands the difference between a quick question and a deep research need, adjusting its responses accordingly.",
      },
      {
        name: "Natural Conversation Interface",
        description: "Rather than forcing users to learn query syntax or navigate complex menus, the interface lets teams ask questions in plain language. The system understands intent, handles ambiguity gracefully, and asks clarifying questions when needed.",
      },
      {
        name: "Adaptive Workflows",
        description: "Teams can customize how the assistant integrates into their existing tools and processes. Whether they prefer Slack, email, or direct integration, the system meets them where they already work.",
      },
    ],
    takeaways: [
      {
        title: "Start with the workflow, not the technology",
        description: "Our biggest breakthroughs came from deeply understanding how teams actually work, not from adding more AI features. The most valuable insights came from watching people struggle with existing tools and identifying the gaps between what they needed and what was available.",
      },
      {
        title: "Design for trust, not just accuracy",
        description: "We learned that being 95% accurate wasn't enough if users couldn't understand why the system made specific suggestions. Building transparency into how and why the AI made decisions was crucial for adoption. Users needed to feel in control, not automated.",
      },
      {
        title: "Measure adoption, not just performance",
        description: "Traditional ML metrics told us the models were working, but didn't tell us if people were actually using them. We shifted to measuring sustained engagement and voluntary adoption as our north star metrics, which led to very different product decisions.",
      },
    ],
    whatsNext: "We're currently exploring how to extend the assistant's capabilities to handle more complex reasoning tasks while maintaining its approachable feel. Next phase includes cross-team collaboration features and deeper integration with specialized domain knowledge bases.",
  },
  "ml-platform": {
    title: "ML Model Management Platform",
    tag: "Platform · Infrastructure",
    description: "Designing systems that make machine learning accessible to product teams",
    role: "Product Manager",
    technologies: "Kubernetes, MLflow, Python, TypeScript",
    purpose: "ML Operations",
    heroImage: "https://images.unsplash.com/photo-1668713239048-0746aac1fec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NTcxNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "Data scientists were spending more time wrestling with infrastructure than building models. Deployment processes were manual, error-prone, and inconsistent across teams. The lack of standardized tools meant every team was solving the same problems differently, leading to duplicated effort and increased risk. We needed a platform that would let data scientists focus on modeling while ensuring production deployments were safe and reliable.",
    solution: "Built a comprehensive platform that abstracts away infrastructure complexity while giving teams the flexibility they need. The system handles versioning, testing, deployment, and monitoring automatically, but exposes sensible controls when teams need fine-grained configuration. Designed APIs and UI patterns that match how data scientists actually think about models, rather than forcing them to learn DevOps concepts.",
    process: "Mapped the complete ML workflow from experimentation to production to identify friction points and automation opportunities. Partnered closely with data science teams to understand their mental models and design interfaces that felt intuitive to them. Built robust versioning and rollback systems that prioritized safety without sacrificing velocity. Created comprehensive documentation and interactive onboarding that helped teams get productive quickly.",
    features: [
      {
        name: "Automated Deployment Pipeline",
        description: "Models move from development to production through a standardized pipeline with built-in testing, validation, and gradual rollout. The system handles infrastructure provisioning, scaling, and monitoring automatically while giving teams visibility into each step.",
      },
      {
        name: "Version Control for Models",
        description: "Complete lineage tracking for every model version, including training data, hyperparameters, dependencies, and performance metrics. Teams can compare versions, roll back to previous deployments, and understand exactly what changed between iterations.",
      },
      {
        name: "Observability & Debugging",
        description: "Real-time monitoring of model performance with automatic drift detection and anomaly alerts. When something goes wrong, teams get detailed diagnostics showing exactly what's happening and where, making debugging significantly faster.",
      },
    ],
    takeaways: [
      {
        title: "Abstract the right things",
        description: "The key was figuring out which complexity to hide and which to expose. We automated away infrastructure concerns that didn't need human decision-making, but preserved control over aspects like testing criteria and rollout strategies where judgment matters.",
      },
      {
        title: "Standards enable creativity",
        description: "Initially, teams worried that a standardized platform would limit their flexibility. The opposite proved true—once infrastructure concerns were handled, teams could experiment more freely because deployment wasn't a bottleneck anymore.",
      },
      {
        title: "Documentation is product design",
        description: "We learned that great APIs aren't enough if people don't understand how to use them. Investing in interactive documentation, examples, and troubleshooting guides was just as important as the technical design.",
      },
    ],
    whatsNext: "Expanding the platform to support more complex ML architectures including multi-modal models and federated learning. Also building better collaboration features so teams can share models, datasets, and best practices more easily.",
  },
  "recommendation-engine": {
    title: "Personalized Recommendation Engine",
    tag: "User Experience · ML",
    description: "Creating intelligent systems that learn and adapt to individual user needs",
    role: "Product Manager",
    technologies: "PyTorch, Redis, GraphQL, React",
    purpose: "User Engagement",
    heroImage: "https://images.unsplash.com/photo-1730036900477-09391e7a5414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NTcxNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge: "Users were overwhelmed by generic content that didn't match their interests or needs. The existing recommendation system used outdated collaborative filtering that couldn't adapt to changing preferences or understand nuance. People were missing content they'd love while being shown things they'd already seen or weren't interested in. The system needed to be smarter about understanding individual users while respecting their privacy and giving them control.",
    solution: "Built a hybrid recommendation system that combines multiple signals—collaborative filtering, content-based analysis, and contextual awareness—to deliver genuinely relevant suggestions. The system learns from both explicit feedback (likes, saves) and implicit behavior (reading time, navigation patterns) while giving users clear controls over their recommendations and the ability to understand why something was suggested.",
    process: "Started by analyzing behavior data to understand different content consumption patterns and what signals actually correlated with satisfaction. Designed a hybrid algorithm that could balance different recommendation strategies based on available data and user preferences. Implemented real-time feedback loops so the system could learn and adapt quickly. Created transparent UI patterns that help users understand recommendations and refine their preferences.",
    features: [
      {
        name: "Multi-Signal Intelligence",
        description: "The engine combines content similarity, collaborative filtering, and contextual signals like time of day, device type, and recent activity to make smarter suggestions. Different signals are weighted differently for each user based on their behavior patterns.",
      },
      {
        name: "Real-Time Adaptation",
        description: "The system learns from every interaction, adjusting recommendations in real-time as it gathers more information about preferences. If interests change or evolve, recommendations adapt accordingly without requiring manual retraining.",
      },
      {
        name: "Transparent Controls",
        description: "Users can see why specific items were recommended and adjust their preferences directly. The interface makes it clear what signals influenced each suggestion and gives people meaningful control over their recommendation experience.",
      },
    ],
    takeaways: [
      {
        title: "Context matters as much as content",
        description: "We discovered that the same person wants very different content on their phone during their commute versus on their laptop at home. Building contextual awareness into recommendations significantly improved relevance.",
      },
      {
        title: "Transparency builds trust",
        description: "When users understood why they were seeing specific recommendations, they engaged more and provided better feedback. Explaining the 'why' turned out to be as important as getting the 'what' right.",
      },
      {
        title: "Cold start is a UX problem, not just an ML problem",
        description: "Traditional ML approaches to cold start focus on inference from limited data. We found that thoughtfully designed onboarding that quickly gathers preferences while feeling natural and low-effort was more effective than trying to infer everything.",
      },
    ],
    whatsNext: "Exploring ways to incorporate more diverse signals including social context and temporal patterns. Also investigating how to better handle serendipity—helping people discover things they wouldn't know to look for while avoiding the echo chamber effect.",
  },
};

export function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudies[id as keyof typeof caseStudies] : null;

  if (!caseStudy) {
    return (
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#D4845A] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>
        <h1>Case study not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#D4845A] mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-xs tracking-wide text-[#6B6B6B] bg-[rgba(167,181,166,0.15)] px-3 py-1.5 rounded-full mb-6">
            {caseStudy.tag}
          </span>
          <h1 className="text-[3rem] leading-[1.1] tracking-tight text-[#1C1C1C] mb-6" style={{ fontFamily: "'Lora', serif" }}>
            {caseStudy.title}
          </h1>
          <p className="text-xl text-[#6B6B6B] leading-relaxed mb-10">
            {caseStudy.description}
          </p>

          {/* Meta Info */}
          <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-[rgba(28,28,28,0.08)]">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">Role</div>
              <div className="text-sm text-[#1C1C1C]">{caseStudy.role}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">Technologies</div>
              <div className="text-sm text-[#1C1C1C]">{caseStudy.technologies}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">Purpose</div>
              <div className="text-sm text-[#1C1C1C]">{caseStudy.purpose}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full mb-20">
        <div className="aspect-[21/9] bg-[#E8E6E1] overflow-hidden">
          <ImageWithFallback
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Body Sections */}
      <div className="max-w-[800px] mx-auto px-6 pb-20">
        <div className="space-y-16">
          {/* Challenge */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-6">Challenge</h2>
            <p className="text-[#1C1C1C] leading-relaxed text-lg">
              {caseStudy.challenge}
            </p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-6">Solution</h2>
            <p className="text-[#1C1C1C] leading-relaxed text-lg">
              {caseStudy.solution}
            </p>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-6">Process</h2>
            <p className="text-[#1C1C1C] leading-relaxed text-lg">
              {caseStudy.process}
            </p>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-8">Features</h2>
            <div className="space-y-8">
              {caseStudy.features.map((feature, index) => (
                <div key={index} className={`pl-6 border-l-2 ${index === 0 ? 'border-[#D4845A]' : 'border-[rgba(167,181,166,0.3)]'}`}>
                  <h3 className="text-lg text-[#1C1C1C] mb-3">
                    {feature.name}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Takeaways */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-8">Takeaways</h2>
            <div className="space-y-6">
              {caseStudy.takeaways.map((takeaway, index) => (
                <div key={index} className="bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-6">
                  <h3 className="text-lg text-[#1C1C1C] mb-3">
                    {takeaway.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {takeaway.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* What's Next */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-6">What's Next</h2>
            <p className="text-[#1C1C1C] leading-relaxed text-lg">
              {caseStudy.whatsNext}
            </p>
          </section>
        </div>

        {/* Bottom Back Link */}
        <div className="mt-20 pt-12 border-t border-[rgba(28,28,28,0.08)]">
          <Link to="/" className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#D4845A] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
        </div>
      </div>
    </div>
  );
}
