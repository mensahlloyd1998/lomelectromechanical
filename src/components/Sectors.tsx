import React from "react";
import { sectorsData, sectorDescriptions, sectorTags } from "../data";
import {
  Building2,
  Store,
  Landmark,
  Pickaxe,
  GraduationCap,
  PlusSquare,
} from "lucide-react";

export const Sectors: React.FC = () => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case "building-2":
        return <Building2 className="w-6 h-6 text-[#0088E8]" />;
      case "store":
        return <Store className="w-6 h-6 text-[#0088E8]" />;
      case "landmark":
        return <Landmark className="w-6 h-6 text-[#0088E8]" />;
      case "pickaxe":
        return <Pickaxe className="w-6 h-6 text-[#0088E8]" />;
      case "graduation-cap":
        return <GraduationCap className="w-6 h-6 text-[#0088E8]" />;
      case "cross":
        return <PlusSquare className="w-6 h-6 text-[#0088E8]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#0088E8]" />;
    }
  };

  return (
    <section id="sectors" className="py-16 sm:py-24 bg-[#faf8ff] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-[#0088E8] uppercase font-semibold mb-3">
            — SECTOR EXPERTISE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-tight mb-4">
            Delivering Precision Across Vital Economic Industries
          </h2>
          <p className="text-sm sm:text-base text-[#404752] leading-relaxed">
            From heavy extractive mining plants to sterile hospital wards, our engineers calibrate installations to distinct operational demands.
          </p>
        </div>

        {/* 6 Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorsData.map((sector, idx) => (
            <div
              key={sector.name}
              className="bg-white border border-[#CBD5E1]/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#0088E8] hover:shadow-md transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#eaedff] flex items-center justify-center mb-6 group-hover:bg-[#0088E8]/10 transition-colors">
                  {getSectorIcon(sector.icon)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0F2942] mb-3">
                  {sector.name}
                </h3>
                <p className="text-sm text-[#404752] leading-relaxed mb-6">
                  {sectorDescriptions[idx]}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0f4ff] text-[11px] font-mono tracking-wider text-[#49607c] font-semibold uppercase">
                {sectorTags[idx]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
