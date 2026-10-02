import React from "react";
import { footerData, headerData } from "../data";
import { ShieldCheck, HardHat, Building, Award } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A192F] text-white border-t border-[#0088E8]/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Synopsis */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-[#0F2942] flex items-center justify-center p-2 border border-[#0088E8]/40">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <polygon points="6,6 18,6 18,22 34,22 34,34 6,34" fill="#0088E8" />
                  <polygon points="22,6 34,6 34,18 22,18" fill="#38B6FF" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block leading-tight">
                  LOM <span className="text-[#38B6FF] font-light text-sm uppercase">ElectroMechanical</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                  A Complete Engineering Service
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              {footerData.aboutText}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-800/80 border border-slate-700 text-xs font-mono text-[#38B6FF]">
              <span className="w-2 h-2 rounded-full bg-[#0088E8] animate-pulse"></span>
              <span>{footerData.complianceBadge}</span>
            </div>
          </div>

          {/* Col 2: Dual Operations */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold tracking-widest text-[#38B6FF] uppercase mb-4">
              Dual Operations
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div>
                <div className="font-semibold text-white mb-0.5">GHANA OFFICE</div>
                <div className="text-slate-400">{footerData.ghanaAddress}</div>
                <div className="font-mono text-xs text-[#38B6FF] mt-1">
                  Tel: <a href="tel:+233303200000" className="hover:underline">{footerData.ghanaPhone}</a>
                </div>
              </div>

              <div>
                <div className="font-semibold text-white mb-0.5">UNITED KINGDOM OFFICE</div>
                <div className="text-slate-400">{footerData.ukAddress}</div>
                <div className="font-mono text-xs text-[#38B6FF] mt-1">
                  Tel: <a href="tel:+442080000000" className="hover:underline">{footerData.ukPhone}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-semibold tracking-widest text-[#38B6FF] uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {headerData.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#38B6FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#38B6FF] transition-colors font-semibold text-white"
                >
                  Request Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Standards */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-semibold tracking-widest text-[#38B6FF] uppercase mb-4">
              Standards
            </h4>
            <div className="mb-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                Quality Motto
              </span>
              <p className="text-base sm:text-lg font-bold text-white italic font-display">
                {footerData.qualityMotto}
              </p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {footerData.standardsDesc}
            </p>
            <div className="flex items-center gap-3 text-slate-400 pt-2">
              <ShieldCheck className="w-5 h-5 text-[#38B6FF]" />
              <Building className="w-5 h-5 text-[#38B6FF]" />
              <HardHat className="w-5 h-5 text-[#38B6FF]" />
              <Award className="w-5 h-5 text-[#38B6FF]" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">
              Privacy & Data Policy
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              Terms of Engagement
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Health & Safety Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
