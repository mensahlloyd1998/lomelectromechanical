import React from "react";
import { heroData } from "../data";
import { Button } from "./Button";
import { ArrowRight, CheckCircle2, Building, Layers, Eye } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16 pb-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded bg-[#e2e7ff] text-[#005ea3] text-[11px] sm:text-xs font-mono font-semibold tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0088E8] animate-pulse"></span>
              <span>{heroData.regulatoryPill}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F2942] leading-[1.12] mb-6 text-balance">
              {heroData.titlePart1}
              <span className="text-[#0088E8]">{heroData.titleHighlight}</span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-[#404752] leading-relaxed max-w-2xl mb-8 font-normal">
              {heroData.subtitle}
            </p>

            {/* Two CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button asAnchor href="#contact" variant="primary" size="lg">
                <span>{heroData.primaryCta}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button asAnchor href="#projects" variant="secondary" size="lg">
                <Layers className="w-4 h-4 mr-2 text-[#0088E8]" />
                <span>{heroData.secondaryCta}</span>
              </Button>
            </div>

            {/* Framework Trust Points */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm font-medium text-[#49607c]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0088E8]" />
                <span>{heroData.trust1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#0088E8]" />
                <span>{heroData.trust2}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic / Media */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-[0_12px_36px_rgba(15,41,66,0.12)] aspect-[4/3] bg-slate-200">
              <img
                src={heroData.image}
                alt="LOM ElectroMechanical industrial workshop with overhead crane and electrical engineers"
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942]/80 via-transparent to-transparent"></div>

              {/* Floating Overlaid Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md border border-[#e2e7ff] p-3.5 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0088E8]/10 text-[#0088E8] flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#0F2942] leading-none">
                    {heroData.imageBadgeTitle}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#49607c] font-medium mt-0.5">
                    {heroData.imageBadgeSubtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slim Stats Strip */}
      <div className="mt-12 sm:mt-16 bg-[#0A192F] text-white border-y border-[#0088E8]/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {heroData.stats.map((stat, idx) => (
              <div
                key={stat.category}
                className={`${
                  idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                } flex flex-col justify-center`}
              >
                <div className="text-[11px] font-mono tracking-widest text-[#38B6FF] uppercase mb-1 font-semibold">
                  {stat.category}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-0.5 font-display">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-normal">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
