import React, { useState } from "react";
import { headerData } from "../data";
import { Button } from "./Button";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf8ff]/95 backdrop-blur-md border-b border-[#e2e7ff] transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand Lockup */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0088E8] rounded p-1"
          >
            {/* Geometric LOM Mark */}
            <div className="w-10 h-10 rounded bg-[#0F2942] flex items-center justify-center p-2 shadow-sm border border-[#0088E8]/30 group-hover:border-[#0088E8] transition-colors">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <polygon points="6,6 18,6 18,22 34,22 34,34 6,34" fill="#0088E8" />
                <polygon points="22,6 34,6 34,18 22,18" fill="#38B6FF" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0F2942] leading-tight">
                LOM <span className="text-[#0088E8] font-normal text-xs sm:text-sm tracking-wider uppercase">ElectroMechanical</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#49607c]">
                A Complete Engineering Service
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-6 2xl:gap-8 text-[14px] font-medium text-[#404752]"
          >
            {headerData.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0088E8] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#0088E8] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Phone Contacts & Quote Action */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right text-[11px] font-mono leading-tight text-[#49607c] border-r border-[#CBD5E1] pr-5">
              <div>
                <span className="text-[#0F2942] font-semibold">GH:</span>{" "}
                <a href="tel:+233303200000" className="hover:text-[#0088E8]">
                  {headerData.phoneGH}
                </a>
              </div>
              <div className="mt-0.5">
                <span className="text-[#0F2942] font-semibold">UK:</span>{" "}
                <a href="tel:+442080000000" className="hover:text-[#0088E8]">
                  {headerData.phoneUK}
                </a>
              </div>
            </div>

            <Button asAnchor href="#contact" variant="primary" size="md">
              <span>{headerData.quoteBtn}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <Button
              asAnchor
              href="#contact"
              variant="primary"
              size="sm"
              className="sm:inline-flex text-xs px-3 py-1.5"
            >
              Quote
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-[#0F2942] hover:bg-[#eaedff] focus:outline-none focus:ring-2 focus:ring-[#0088E8]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#e2e7ff] shadow-lg animate-fadeIn px-4 pt-3 pb-6">
          <nav className="flex flex-col space-y-2">
            {headerData.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-[#131b2e] hover:bg-[#eaedff] hover:text-[#0088E8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#e2e7ff] flex flex-col space-y-3">
            <div className="text-xs font-mono text-[#49607c] space-y-1">
              <div>
                <span className="font-semibold text-[#0F2942]">GH HQ:</span>{" "}
                <a href="tel:+233303200000" className="hover:text-[#0088E8]">
                  {headerData.phoneGH}
                </a>
              </div>
              <div>
                <span className="font-semibold text-[#0F2942]">UK Hub:</span>{" "}
                <a href="tel:+442080000000" className="hover:text-[#0088E8]">
                  {headerData.phoneUK}
                </a>
              </div>
            </div>
            <Button
              asAnchor
              href="#contact"
              variant="primary"
              size="md"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{headerData.quoteBtn}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
