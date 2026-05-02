import { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, X, Maximize2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { caseStudies } from "../data/portfolioData";

export function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudies[id as keyof typeof caseStudies] : null;
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

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
          <p className="text-xl text-[#6B6B6B] leading-relaxed mb-8">
            {caseStudy.description}
          </p>

          {caseStudy.quote && (
            <div className="pl-8 border-l-[3px] border-[#D4845A] py-1 mb-12">
              <p className="text-lg font-normal text-[#1C1C1C] leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                {caseStudy.quote}
              </p>
            </div>
          )}

          {caseStudy.demoUrl && (
            <a
              href={caseStudy.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1C1C1C] hover:text-[#D4845A] group transition-all hover:gap-3 mb-10"
            >
              <span className="text-sm border-b border-[#1C1C1C] group-hover:border-[#D4845A] pb-0.5 transition-colors">
                View Project
              </span>
              <ArrowRight className="w-4 h-4" />
            </a>
          )}

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
        <div className="bg-[#E8E6E1] overflow-hidden flex items-center justify-center">
          <ImageWithFallback
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
      </div>

      {/* Body Sections */}
      <div className="max-w-[800px] mx-auto px-6 pb-20">
        <div className="space-y-16">
          {/* Challenge */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-6">Challenge</h2>
            <p className="text-[#1C1C1C] leading-relaxed text-lg whitespace-pre-wrap">
              {caseStudy.challenge}
            </p>
            {caseStudy.challengeCallouts?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {caseStudy.challengeCallouts.map((callout, index) => (
                  <div key={index} className="bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-6">
                    <h3 className="text-lg font-medium text-[#1C1C1C] mb-3">{callout.title}</h3>
                    <p className="text-[#6B6B6B] leading-relaxed">{callout.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-6">Solution</h2>
            <p className="text-[#1C1C1C] leading-relaxed text-lg whitespace-pre-wrap">
              {caseStudy.solution}
            </p>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-12">Process</h2>
            <div className="space-y-20">
              {caseStudy.processSections?.map((section, index) => (
                <div key={index} className="pb-16 border-b border-[rgba(28,28,28,0.06)] last:border-0 last:pb-0">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12 mb-10">
                    <h3 className="text-xl text-[#1C1C1C] font-medium leading-tight" style={{ fontFamily: "'Lora', serif" }}>
                      {section.title}
                    </h3>
                    <div className="md:col-span-3">
                      <p className="text-lg text-[#1C1C1C] leading-relaxed whitespace-pre-wrap">
                        {section.content}
                      </p>
                    </div>
                  </div>
                  {section.callouts && section.callouts.length > 0 && (
                    <div className={`grid grid-cols-1 ${section.callouts.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
                      {section.callouts.map((callout, idx) => (
                        <div key={idx} className="bg-[rgba(167,181,166,0.05)] border border-[rgba(167,181,166,0.15)] rounded-xl p-6 h-full">
                          <h4 className="text-lg font-medium text-[#1C1C1C] mb-3">{callout.title}</h4>
                          <p className="text-[#6B6B6B] leading-relaxed text-sm">{callout.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-12">Features</h2>
            <div className="space-y-24">
              {caseStudy.features.map((feature, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <h3 className="text-2xl text-[#1C1C1C] mb-4 font-medium" style={{ fontFamily: "'Lora', serif" }}>
                      {feature.name}
                    </h3>
                    <p className="text-lg text-[#6B6B6B] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div
                    className="flex-1 w-full aspect-[4/3] bg-[#F5F5F3] rounded-2xl overflow-hidden border border-[rgba(28,28,28,0.06)] flex items-center justify-center cursor-zoom-in group relative"
                    onClick={() => setExpandedFeature(index)}
                  >
                    {feature.image ? (
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                    ) : (
                      <div className="text-sm tracking-widest uppercase text-[#A7B5A6] font-medium transition-transform group-hover:scale-105 duration-500">
                        Feature Preview
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4 text-[#1C1C1C]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Image Expansion Modal */}
          <AnimatePresence>
            {expandedFeature !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-white flex flex-col p-6 items-center justify-center"
              >
                <button
                  onClick={() => setExpandedFeature(null)}
                  className="absolute top-8 right-8 p-3 hover:bg-[rgba(28,28,28,0.05)] rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-[#1C1C1C]" />
                </button>

                <div className="w-full max-w-[1000px] aspect-[16/10] bg-[#F5F5F3] rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border border-[rgba(28,28,28,0.08)]">
                  {caseStudy.features[expandedFeature].image ? (
                    <ImageWithFallback
                      src={caseStudy.features[expandedFeature].image}
                      alt={caseStudy.features[expandedFeature].name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <>
                      <span className="text-sm uppercase tracking-[0.2em] text-[#A7B5A6] mb-4">
                        {caseStudy.features[expandedFeature].name}
                      </span>
                      <div className="text-4xl italic text-[#1C1C1C]/10 font-serif">
                        Full Resolution Feature Visualization
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-8 text-center max-w-[600px]">
                  <h3 className="text-xl text-[#1C1C1C] mb-4" style={{ fontFamily: "'Lora', serif" }}>
                    {caseStudy.features[expandedFeature].name}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {caseStudy.features[expandedFeature].description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Takeaways */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-8">Takeaways</h2>
            {caseStudy.takeawaysSummary && (
              <p className="text-[#1C1C1C] leading-relaxed text-lg mb-12 max-w-[700px]" style={{ fontFamily: "'Lora', serif" }}>
                {caseStudy.takeawaysSummary}
              </p>
            )}
            <div className="border-t border-[rgba(28,28,28,0.08)]">
              {caseStudy.takeaways.map((takeaway, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12 py-10 border-b border-[rgba(28,28,28,0.08)]">
                  <h3 className="text-xl text-[#1C1C1C] font-medium leading-tight" style={{ fontFamily: "'Lora', serif" }}>
                    {takeaway.title}
                  </h3>
                  <div className="md:col-span-3">
                    <p className="text-lg text-[#6B6B6B] leading-relaxed">
                      {takeaway.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What's Next */}
          <section>
            <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-6">What's Next</h2>
            <p className="text-[#1C1C1C] leading-relaxed text-lg whitespace-pre-wrap">
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
