import React from "react";
import { trustedByClients } from "../data";

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-[#e2e7ff]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Labels */}
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase font-semibold text-[#49607c] mb-8 pb-3 border-b border-[#f0f4ff]">
          <span>REPUTATION & INTEGRITY</span>
          <span>Selected Project Partners</span>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {trustedByClients.map((client) => (
            <div
              key={client.name}
              className="bg-[#faf8ff] border border-[#d2d9f4]/60 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center group hover:border-[#0088E8] transition-colors"
            >
              <div className="font-display font-extrabold text-lg sm:text-xl text-[#0F2942] group-hover:text-[#0088E8] transition-colors tracking-tight">
                {client.name}
              </div>
              <div className="text-[10px] font-medium text-[#49607c] mt-1 leading-tight line-clamp-1">
                {client.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
