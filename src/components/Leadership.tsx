import React from "react";
import { teamMembers, teamCredentials, teamBadges } from "../data";
import { User } from "lucide-react";

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-16 sm:py-24 bg-[#faf8ff] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-[#0088E8] uppercase font-semibold mb-3">
            — EXECUTIVE GOVERNANCE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-tight mb-4">
            Decades of British and Ghanaian Engineering Leadership
          </h2>
          <p className="text-sm sm:text-base text-[#404752] leading-relaxed">
            Our leadership board pairs premier UK university engineering credentials with deep boots-on-the-ground project delivery throughout West Africa.
          </p>
        </div>

        {/* 3 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={member.name}
              className="bg-white border border-[#CBD5E1]/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#0088E8] transition-all group"
            >
              <div>
                {/* Header with Avatar Icon & Name/Role */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#eaedff] flex items-center justify-center text-[#0088E8] group-hover:bg-[#0088E8] group-hover:text-white transition-colors">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F2942] leading-tight group-hover:text-[#0088E8] transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-[#0088E8] mt-0.5">
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Degree / Technical Credential */}
                <div className="text-xs font-medium text-[#0F2942] bg-[#f8fafc] border border-[#e2e8f0] rounded px-3 py-2 mb-4 leading-normal">
                  {teamCredentials[idx]}
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-[#404752] leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Bottom Experience Badge */}
              <div className="pt-4 border-t border-[#f0f4ff] flex items-center text-xs font-mono font-semibold text-[#005ea3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0088E8] mr-2"></span>
                <span>{teamBadges[idx]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
