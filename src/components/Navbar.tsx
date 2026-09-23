"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { companyConfig, getWhatsAppUrl } from "@/config/company";

interface NavItem {
  label: string;
  shortLabel?: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Products", href: "#products", id: "products" },
  { label: "Interactive Demo", shortLabel: "Demo", href: "#interactive-window", id: "interactive-window" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Why Alucurve", shortLabel: "Why Us", href: "#why-us", id: "why-us" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "products",
      "interactive-window",
      "projects",
      "why-us",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 30);

      // Scroll progress tracking
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (winScroll / height) * 100)));
      }

      // ScrollSpy: identify the active visible section
      const offset = 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top - offset) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const globalLenis = (window as unknown as { lenis?: { scrollTo: (el: Element, opts?: object) => void } }).lenis;
      if (globalLenis) {
        globalLenis.scrollTo(target, {
          offset: -85,
          duration: 1.2,
        });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "top-2 sm:top-3 px-3 sm:px-6"
            : "top-0 px-4 sm:px-6 lg:px-8 py-3 sm:py-5"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ease-out ${
            scrolled
              ? "max-w-7xl rounded-2xl bg-[#07090b]/90 backdrop-blur-2xl border border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.85)] px-4 sm:px-6 py-2.5"
              : "max-w-7xl bg-transparent py-1"
          } flex items-center justify-between gap-3 relative`}
        >
          {/* Subtle Top Specular Reflection Line on Scrolled Capsule */}
          {scrolled && (
            <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent pointer-events-none" />
          )}

          {/* Brand Logo & Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none select-none shrink-0"
            aria-label="Alucurve System Window Pvt. Ltd. Home"
          >
            {/* Precision Architectural SVG Monogram */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/15 group-hover:border-[#d4af37]/50 transition-colors shadow-sm shrink-0">
              <svg
                className="w-5 h-5 sm:w-5.5 sm:h-5.5"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="aluGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#b3821a" />
                  </linearGradient>
                </defs>
                {/* Structural Profile Frame */}
                <rect
                  x="3"
                  y="3"
                  width="30"
                  height="30"
                  rx="6"
                  stroke="url(#aluGoldGrad)"
                  strokeWidth="2"
                />
                {/* Center Mullion Divider */}
                <line
                  x1="18"
                  y1="3"
                  x2="18"
                  y2="33"
                  stroke="url(#aluGoldGrad)"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                  opacity="0.7"
                />
                {/* Architectural Curve Silhouette */}
                <path
                  d="M7 27C7 16.5 15.5 8 26 8"
                  stroke="url(#aluGoldGrad)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="26" cy="8" r="2" fill="url(#aluGoldGrad)" />
              </svg>
            </div>

            <div className="flex flex-col shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black tracking-[0.2em] text-white group-hover:text-[#d4af37] transition-colors whitespace-nowrap">
                  ALUCURVE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#d4af37] font-medium uppercase leading-tight whitespace-nowrap hidden sm:block">
                System Window Pvt. Ltd.
              </span>
            </div>
          </a>

          {/* Desktop Nav Items with Framer Motion Active Pill */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-white/[0.03] border border-white/8 rounded-xl p-1 backdrop-blur-md shrink-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const displayLabel = item.shortLabel || item.label;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-[11px] xl:text-xs uppercase tracking-[0.12em] px-2.5 xl:px-3 py-1.5 rounded-lg transition-colors font-medium select-none shrink-0 whitespace-nowrap ${
                    isActive ? "text-[#d4af37] font-semibold" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#d4af37]/12 border border-[#d4af37]/35 rounded-lg shadow-[0_0_12px_rgba(212,175,55,0.18)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{displayLabel}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action Hub - Perfectly Sized & Flush */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            {/* Live WhatsApp Quick Pill (visible on xl screens) */}
            <a
              href={getWhatsAppUrl(
                "Hello Alucurve, I am interested in getting an architectural quote for aluminium system windows."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] uppercase tracking-wider text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 transition-all shrink-0 whitespace-nowrap"
              title="Quick Consultation via WhatsApp"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold">WhatsApp</span>
            </a>

            {/* Quick Call Button */}
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="inline-flex items-center justify-center p-2 xl:px-2.5 xl:py-1.5 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 text-slate-300 hover:text-white transition-colors shrink-0"
              title={`Call ${companyConfig.phone}`}
              aria-label={`Call ${companyConfig.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              <span className="hidden xl:inline text-[11px] uppercase tracking-wider font-medium ml-1.5 whitespace-nowrap">
                Call Us
              </span>
            </a>

            {/* Shimmer Get a Quote CTA Button - Guaranteed Flush & No Overflow */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#d4af37] via-amber-300 to-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-wider overflow-hidden hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] group active:scale-95 shrink-0 whitespace-nowrap"
            >
              {/* Shimmer Sweep Effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
              <MessageSquare className="w-3.5 h-3.5 text-slate-950 relative z-10 shrink-0" />
              <span className="relative z-10 whitespace-nowrap">Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="p-2 text-[#d4af37] bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Call Alucurve"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-[#d4af37] rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Subtle Reading Progress Line at Base of Scrolled Island */}
          {scrolled && (
            <div className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-white/5 rounded-full overflow-hidden pointer-events-none">
              <div
                className="h-full bg-gradient-to-r from-[#d4af37] via-amber-300 to-[#d4af37] transition-all duration-100 ease-out"
                style={{ width: `${scrollPercent}%` }}
              />
            </div>
          )}
        </div>
      </header>

      {/* Luxury Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#07090b]/98 backdrop-blur-3xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden overflow-y-auto"
          >
            {/* Header info in drawer */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                  Architectural Navigation
                </span>
                <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>25Y Warranty</span>
                </span>
              </div>

              {/* Numbered Menu Links */}
              <div className="flex flex-col gap-2">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  const itemNumber = `0${idx + 1}`;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + idx * 0.04 }}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`py-2.5 px-3 rounded-xl flex items-center justify-between transition-all ${
                        isActive
                          ? "bg-[#d4af37]/10 border border-[#d4af37]/30 text-white font-medium"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#d4af37]/70">{itemNumber}</span>
                        <span className="text-base tracking-wider uppercase">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                        )}
                        <ArrowUpRight className="w-4 h-4 text-slate-500" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer & Quick Actions */}
            <div className="flex flex-col gap-4 border-t border-white/10 pt-6 mt-6">
              {/* WhatsApp Primary CTA */}
              <a
                href={getWhatsAppUrl(
                  "Hello Alucurve, I would like to request an architectural consultation via WhatsApp."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl bg-[#25D366] text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-emerald-500/20 active:scale-98 transition-transform"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start WhatsApp Enquiry</span>
              </a>

              {/* Direct Call Button */}
              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 text-slate-200 font-semibold uppercase tracking-wider text-xs hover:bg-white/5 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call {companyConfig.phone}</span>
              </a>

              {/* Address Badge */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8 flex items-start gap-2.5 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyConfig.address.full}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
