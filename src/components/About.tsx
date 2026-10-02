import React from "react";
import { aboutData } from "../data";
import { Zap, UserCheck, ShieldCheck, Award, HeartHandshake } from "lucide-react";

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "zap":
        return <Zap className="w-5 h-5 text-[#0088E8]" />;
      case "user-check":
        return <UserCheck className="w-5 h-5 text-[#0088E8]" />;
      case "shield-check":
        return <ShieldCheck className="w-5 h-5 text-[#0088E8]" />;
      default:
        return <Award className="w-5 h-5 text-[#0088E8]" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#faf8ff] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-[#0088E8] uppercase font-semibold mb-3">
            — {aboutData.sectionTag}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-tight mb-6">
            {aboutData.title}
          </h2>
          <p className="text-sm sm:text-base text-[#404752] leading-relaxed">
            {aboutData.story}
          </p>
        </div>

        {/* The Three Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {aboutData.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white border border-[#CBD5E1]/80 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-[#0088E8] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#e2e7ff] flex items-center justify-center mb-5">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0F2942] mb-3">
                  {pillar.name}
                </h3>
                <p className="text-sm text-[#404752] leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#f0f4ff] flex items-center text-xs font-mono font-medium text-[#0088E8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0088E8] mr-2"></span>
                <span>{pillar.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guiding Ethos & Culture Mandate Banner */}
        <div className="bg-[#eaedff] border border-[#d2d9f4] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#c0c7d4]/60">
            {/* Left Ethos */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-[#005ea3] mb-2">
                {aboutData.ethosTitle}
              </span>
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F2942] tracking-tight mb-3 font-display italic">
                {aboutData.ethosQuote}
              </blockquote>
              <p className="text-sm text-[#404752] leading-relaxed">
                {aboutData.ethosDescription}
              </p>
            </div>

            {/* Right Culture Mandate */}
            <div className="lg:col-span-5 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center">
              <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-[#005ea3] mb-2">
                {aboutData.cultureTitle}
              </span>
              <div className="text-xl sm:text-2xl font-bold text-[#0F2942] tracking-tight mb-2">
                {aboutData.cultureSub}
              </div>
              <p className="text-sm text-[#404752] leading-relaxed">
                {aboutData.cultureDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
