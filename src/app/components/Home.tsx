import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { projects } from "../data/portfolioData";

export function Home() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-20">
      {/* Navigation */}
      <nav className="flex items-center justify-between mb-16 text-sm">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-[#1C1C1C] font-medium border-b border-[#1C1C1C] pb-0.5">Work</Link>
          <Link to="/resources" className="text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors pb-0.5">Resources</Link>
          <a href="#about" className="text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors pb-0.5">About</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/ashley-z/" target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors pb-0.5">LinkedIn</a>
          <a href="mailto:ashleyzhang@outlook.com" className="text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors pb-0.5">Email</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16 pb-24">
        <p className="text-sm uppercase text-[#6B6B6B] mb-4"></p>
        <h1 className="text-[3.5rem] leading-[1.1] tracking-tight text-[#1C1C1C] mb-6" style={{ fontFamily: "'Lora', serif" }}>
          Ashley is a product manager with a math & stats background and love for live music. She is a fan of <em className="not-italic text-[#D4845A]">messy data</em>, learns by building, and notices everything twice.
        </h1>
        <p className="text-lg text-[#6B6B6B] mb-8"></p>
        <a href="#about" className="inline-flex items-center gap-2 text-[#1C1C1C] hover:text-[#D4845A] transition-colors group">
          <span className="text-sm border-b border-[#1C1C1C] group-hover:border-[#D4845A] pb-0.5">About me →</span>
        </a>
      </div>

      {/* Projects Section */}
      <div className="mb-32">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/case-study/${project.id}`}
              className="group block bg-white border border-[rgba(28,28,28,0.08)] rounded-xl overflow-hidden hover:border-[#D4845A] transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-center order-1">
                  <span className="inline-block text-xs tracking-wide text-[#6B6B6B] bg-[rgba(167,181,166,0.15)] px-3 py-1.5 rounded-full mb-4 w-fit">
                    {project.tag}
                  </span>
                  <h3 className="text-2xl text-[#1C1C1C] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#1C1C1C] group-hover:gap-3 transition-all">
                    <span className="text-sm">View project</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="aspect-[3/2] md:aspect-auto overflow-hidden bg-[#E8E6E1] order-2">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-8">Principles</h2>
        <p className="text-xl text-[#1C1C1C] leading-relaxed mb-12 max-w-[750px]">
          Curious and always building. I bring together rigorous data analysis, hands-on prototyping, and domain learning to close the gap between what a system does and what users actually need it to do.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-8">
            <h3 className="text-xl text-[#1C1C1C] mb-3">Signal over noise</h3>
            <p className="text-[#6B6B6B] leading-relaxed">The most valuable data is rarely where it's convenient to look. I go where it's messy first because that's usually where the real problem is hiding.</p>
          </div>
          <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-8">
            <h3 className="text-xl text-[#1C1C1C] mb-3">Build to test, not to spec</h3>
            <p className="text-[#6B6B6B] leading-relaxed">A working prototype surfaces more truth than a thorough document. I put something real in front of users before defending a plan.</p>
          </div>
          <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-8">
            <h3 className="text-xl text-[#1C1C1C] mb-3">Domain fluency is the design brief</h3>
            <p className="text-[#6B6B6B] leading-relaxed">You can't design guardrails for a system you don't understand. I make it a practice to learn the domain before touching the interface.</p>
          </div>
          <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-8">
            <h3 className="text-xl text-[#1C1C1C] mb-3">Move the right number</h3>
            <p className="text-[#6B6B6B] leading-relaxed">A metric that moves without moving the business is noise with better formatting. I define what "right" means before building anything.</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="mb-20">
        <div className="flex flex-col md:flex-row items-stretch gap-8 mb-6">
          <div className="w-full md:w-[320px] overflow-hidden bg-[#E8E6E1] flex-shrink-0 rounded-lg">
            <ImageWithFallback
              src="/assets/photo.PNG"
              alt="Ashley Zhang"
              className="w-full h-full object-cover min-h-[320px]"
            />
          </div>
          <div className="flex-1">
            <p className="text-[#1C1C1C] leading-relaxed mb-6 whitespace-pre-wrap">
              I studied Mathematics and Statistics at the University of Toronto before moving into product management — where rigorous data thinking and genuine user empathy turned out to be the same skill applied in different directions.
              {"\n\n"}
              I currently lead product work at Mightex, where I own the full cycle: discovery, design, prototyping, and delivery. I build working prototypes before writing full specs, using Cursor and Claude to compress the gap between a design idea and something real enough to test.
              {"\n\n"}
              Before tech, my passion for equity in education led me to co-found Side by Side Agency — scaling from free tutoring to a virtual STEM research program that reached 2,000+ students across Canada. I now serve as Director of Finance at Stars for Scholarly Youth, where I treat financial reporting the same way I treat product analytics: a tool for surfacing what's hidden before it becomes a problem.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/ashley-z/" className="flex items-center gap-2 text-[#6B6B6B] hover:text-[#D4845A] transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="mailto:ashleyzhang@outlook.com" className="flex items-center gap-2 text-[#6B6B6B] hover:text-[#D4845A] transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-12 pb-8 border-t border-[rgba(28,28,28,0.08)]">
        <p className="text-sm text-[#6B6B6B]">
          Ashley Zhang · 2026
        </p>
      </footer>
    </div>
  );
}
