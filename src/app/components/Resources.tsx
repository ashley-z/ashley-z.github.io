import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Star, ExternalLink } from "lucide-react";
import { resources, meta } from "../data/resourcesData";

export function Resources() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredResources = activeCategory === "all"
    ? resources
    : resources.filter(r => r.category === activeCategory);

  return (
    <div className="max-w-[800px] mx-auto px-6 py-16 min-h-screen">
      <Link to="/" className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#D4845A] mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to projects
      </Link>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-[3rem] leading-[1.1] tracking-tight text-[#1C1C1C] mb-6" style={{ fontFamily: "'Lora', serif" }}>
          Reading & Resources
        </h1>
        <p className="text-xl text-[#6B6B6B] leading-relaxed mb-6">
          A curated collection of {meta.total} articles, books, and tools I find valuable. Last updated {new Date(meta.last_updated).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" })}.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full text-sm transition-colors border ${activeCategory === "all"
              ? 'bg-[#A7B5A6] text-white border-[#A7B5A6]'
              : 'bg-transparent text-[#6B6B6B] border-[rgba(28,28,28,0.1)] hover:border-[#A7B5A6]'
            }`}
        >
          All
        </button>
        {meta.categories.map(cat => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm transition-colors border ${activeCategory === cat.slug
                ? 'bg-[#A7B5A6] text-white border-[#A7B5A6]'
                : 'bg-transparent text-[#6B6B6B] border-[rgba(28,28,28,0.1)] hover:border-[#A7B5A6]'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Resource List */}
      <div className="space-y-6 mb-20">
        {filteredResources.map(resource => (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="block bg-white border border-[rgba(28,28,28,0.08)] rounded-xl p-6 hover:border-[#D4845A] transition-colors group"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg font-medium text-[#1C1C1C] group-hover:text-[#D4845A] transition-colors flex items-center gap-2">
                {resource.title}
                {resource.star && <Star className="w-4 h-4 text-[#D4845A] fill-[#D4845A]" />}
              </h3>
              <ExternalLink className="w-4 h-4 text-[#6B6B6B] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>
            <p className="text-[#6B6B6B] leading-relaxed mb-4">
              {resource.note}
            </p>
            <span className="inline-block text-xs text-[#A7B5A6] bg-[rgba(167,181,166,0.1)] px-2.5 py-1 rounded-md">
              {meta.categories.find(c => c.slug === resource.category)?.label || resource.category}
            </span>
          </a>
        ))}
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
