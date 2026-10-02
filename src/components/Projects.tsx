import React, { useState } from "react";
import {
  projectsData,
  projectImageBadges,
  projectFooterTags,
  projectCallout,
  Project,
} from "../data";
import { Button } from "./Button";
import { ArrowUpRight, MessageSquare, ArrowRight } from "lucide-react";

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | "Ghana" | "UK">("All");

  const filteredProjects = projectsData.map((project, idx) => ({
    ...project,
    originalIndex: idx,
  })).filter((item) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Ghana") return item.country === "Ghana";
    if (activeFilter === "UK") return item.country === "UK";
    return true;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#faf8ff] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-mono tracking-widest text-[#0088E8] uppercase font-semibold mb-3">
              — PROVEN TRACK RECORD
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-tight mb-4">
              Delivering High-Impact Infrastructure Across Ghana & the UK
            </h2>
            <p className="text-sm sm:text-base text-[#404752] leading-relaxed">
              Selected major electromechanical undertakings demonstrating technical range, precision, and execution rigor.
            </p>
          </div>

          {/* Filter Controls (Allowed segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#CBD5E1] rounded-lg shadow-sm self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeFilter === "All"
                  ? "bg-[#0088E8] text-white"
                  : "text-[#49607c] hover:text-[#0F2942] hover:bg-[#eaedff]"
              }`}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("Ghana")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeFilter === "Ghana"
                  ? "bg-[#0088E8] text-white"
                  : "text-[#49607c] hover:text-[#0F2942] hover:bg-[#eaedff]"
              }`}
            >
              Ghana & Mining
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("UK")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeFilter === "UK"
                  ? "bg-[#0088E8] text-white"
                  : "text-[#49607c] hover:text-[#0F2942] hover:bg-[#eaedff]"
              }`}
            >
              UK & Commercial
            </button>
          </div>
        </div>

        {/* 9 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredProjects.map((project) => {
            const idx = project.originalIndex;
            return (
              <div
                key={project.title}
                className="bg-white border border-[#CBD5E1]/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#0088E8] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={600}
                      height={375}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

                    {/* Top Left Tag */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0A192F]/80 backdrop-blur-sm border border-white/20 text-white text-[11px] font-mono font-medium">
                      {projectImageBadges[idx]}
                    </div>

                    {/* Bottom Right Location */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm text-white text-[11px] font-mono">
                      {project.location}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F2942] mb-2.5 group-hover:text-[#0088E8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#404752] leading-relaxed">
                      {project.caption}
                    </p>
                  </div>
                </div>

                {/* Footer Tag & Action */}
                <div className="px-6 py-4 border-t border-[#f0f4ff] flex items-center justify-between text-xs font-mono font-medium text-[#005ea3]">
                  <span>{projectFooterTags[idx]}</span>
                  <a
                    href="#contact"
                    className="p-1 rounded-full text-[#0088E8] hover:bg-[#eaedff] transition-colors"
                    aria-label={`Inquire about ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Callout Banner */}
        <div className="bg-[#0077CC] rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-white">
                {projectCallout.text}
              </p>
            </div>
          </div>
          <Button
            asAnchor
            href="#contact"
            variant="white"
            size="md"
            className="shrink-0"
          >
            <span>{projectCallout.buttonText}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
