import React from "react";
import {
  servicesData,
  serviceCodes,
  serviceBullets,
  serviceActionLabels,
} from "../data";
import {
  Fan,
  Zap,
  Factory,
  Layers,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "fan":
        return <Fan className="w-5 h-5 text-[#0088E8]" />;
      case "zap":
        return <Zap className="w-5 h-5 text-[#0088E8]" />;
      case "factory":
        return <Factory className="w-5 h-5 text-[#0088E8]" />;
      case "layers":
        return <Layers className="w-5 h-5 text-[#0088E8]" />;
      case "trending-up":
        return <TrendingUp className="w-5 h-5 text-[#0088E8]" />;
      default:
        return <Zap className="w-5 h-5 text-[#0088E8]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-y border-[#e2e7ff] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-[#0088E8] uppercase font-semibold mb-3">
            — COMPREHENSIVE CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-tight mb-4">
            Integrated Mechanical, Electrical & Building Services Engineering
          </h2>
          <p className="text-sm sm:text-base text-[#404752] leading-relaxed">
            End-to-end design, project management, and specialized contractor execution designed around institutional-grade reliability.
          </p>
        </div>

        {/* 5-Card Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const isWide = idx === 4; // 5th card spans 2 columns on desktop
            return (
              <div
                key={service.title}
                className={`${
                  isWide ? "lg:col-span-2" : "col-span-1"
                } bg-[#faf8ff] border border-[#d2d9f4]/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#0088E8] hover:shadow-md transition-all group`}
              >
                <div>
                  {/* Card Header with Icon and Code */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white border border-[#CBD5E1] flex items-center justify-center shadow-sm group-hover:border-[#0088E8] transition-colors">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#eaedff] text-[#005ea3]">
                      {serviceCodes[idx]}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#0F2942] mb-3 group-hover:text-[#0088E8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#404752] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullets List */}
                  <ul className="space-y-2.5 mb-8">
                    {serviceBullets[idx]?.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-xs sm:text-sm text-[#404752]">
                        <CheckCircle2 className="w-4 h-4 text-[#0088E8] mr-2.5 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action Link */}
                <div className="pt-4 border-t border-[#e2e7ff]">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#005ea3] group-hover:text-[#0088E8] transition-colors"
                  >
                    <span>{serviceActionLabels[idx]}</span>
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
