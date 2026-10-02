import React from "react";
import { whyChooseUsData, reasonCodes } from "../data";
import {
  ArrowLeftRight,
  FileCode2,
  ShieldAlert,
  CheckCheck,
  TrendingDown,
  UserCog,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const getReasonIcon = (iconName: string) => {
    switch (iconName) {
      case "arrow-left-right":
        return <ArrowLeftRight className="w-5 h-5 text-[#0088E8]" />;
      case "file-code-2":
        return <FileCode2 className="w-5 h-5 text-[#0088E8]" />;
      case "shield-alert":
        return <ShieldAlert className="w-5 h-5 text-[#0088E8]" />;
      case "check-check":
        return <CheckCheck className="w-5 h-5 text-[#0088E8]" />;
      case "trending-down":
        return <TrendingDown className="w-5 h-5 text-[#0088E8]" />;
      case "user-cog":
        return <UserCog className="w-5 h-5 text-[#0088E8]" />;
      default:
        return <CheckCheck className="w-5 h-5 text-[#0088E8]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-white border-y border-[#e2e7ff] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-[#0088E8] uppercase font-semibold mb-3">
            — THE LOM ADVANTAGE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-tight mb-4">
            Engineering Standards That Protect Your Capital Investment
          </h2>
          <p className="text-sm sm:text-base text-[#404752] leading-relaxed">
            We bridge international engineering precision with localized execution expertise to minimize downtime, reduce lifetime maintenance costs, and guarantee total safety.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsData.map((reason, idx) => (
            <div
              key={reason.title}
              className="bg-[#faf8ff] border border-[#d2d9f4]/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#0088E8] hover:shadow-md transition-all group"
            >
              <div>
                {/* Header with Icon and Verified Code */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#CBD5E1] flex items-center justify-center shadow-sm group-hover:border-[#0088E8] transition-colors">
                    {getReasonIcon(reason.icon)}
                  </div>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#005ea3]">
                    {reasonCodes[idx]}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0F2942] mb-3 group-hover:text-[#0088E8] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#404752] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
