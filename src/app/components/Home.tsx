import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "ai-assistant",
    title: "AI Assistant for Enterprise Teams",
    tag: "AI Product · Data Intelligence",
    description: "Building AI-powered tools that help teams make better decisions faster.",
    image: "https://images.unsplash.com/photo-1668714341253-81139e265a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NTcxNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ml-platform",
    title: "ML Model Management Platform",
    tag: "Platform · Infrastructure",
    description: "Designing systems that make machine learning accessible to product teams.",
    image: "https://images.unsplash.com/photo-1668713239048-0746aac1fec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NTcxNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "recommendation-engine",
    title: "Personalized Recommendation Engine",
    tag: "User Experience · ML",
    description: "Creating intelligent systems that learn and adapt to individual user needs.",
    image: "https://images.unsplash.com/photo-1730036900477-09391e7a5414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NTcxNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Home() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-20">
      {/* Hero Section */}
      <div className="pt-16 pb-24">
        <h1 className="text-[3.5rem] leading-[1.1] tracking-tight text-[#1C1C1C] mb-6" style={{ fontFamily: "'Lora', serif" }}>
          Building AI products that <em className="not-italic text-[#D4845A]">feel human</em>
        </h1>
        <p className="text-lg text-[#6B6B6B]">
          Product Manager · AI & Machine Learning
        </p>
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

      {/* Product Principles Section */}
      <div className="mb-32">
        <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-12">Product Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-8">
            <h3 className="text-xl text-[#1C1C1C] mb-3">Signal over noise</h3>
            <p className="text-[#6B6B6B] leading-relaxed">Data quality is a product input, not a given.</p>
          </div>
          <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-8">
            <h3 className="text-xl text-[#1C1C1C] mb-3">Ship to learn</h3>
            <p className="text-[#6B6B6B] leading-relaxed">V1 earns the right to V2.</p>
          </div>
          <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-8">
            <h3 className="text-xl text-[#1C1C1C] mb-3">Build with, not for</h3>
            <p className="text-[#6B6B6B] leading-relaxed">Users are co-authors of the solution.</p>
          </div>
          <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-8">
            <h3 className="text-xl text-[#1C1C1C] mb-3">Metrics ≠ meaning</h3>
            <p className="text-[#6B6B6B] leading-relaxed">Move the right number, not just any number.</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-20">
        <div className="flex items-start gap-8 mb-6">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-[#E8E6E1] flex-shrink-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1666577624653-b6f0043fed0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdhcm0lMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzc2NTcxNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 pt-2">
            <p className="text-[#1C1C1C] leading-relaxed mb-6">
              I help teams build AI products that solve real problems. With a background in engineering and design, I focus on translating complex ML capabilities into experiences people actually want to use. Currently working on making AI more accessible and genuinely useful.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com" className="flex items-center gap-2 text-[#6B6B6B] hover:text-[#D4845A] transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="mailto:hello@example.com" className="flex items-center gap-2 text-[#6B6B6B] hover:text-[#D4845A] transition-colors">
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
          Alex Morgan · 2026
        </p>
      </footer>
    </div>
  );
}
