"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { companyConfig, getWhatsAppUrl } from "@/config/company";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Interactive Demo", href: "#interactive-window" },
  { label: "Projects", href: "#projects" },
  { label: "Why Alucurve", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const globalLenis = (window as unknown as { lenis?: { scrollTo: (el: Element, opts?: object) => void } }).lenis;
      if (globalLenis) {
        globalLenis.scrollTo(target, {
          offset: -80,
          duration: 1.3,
        });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#07090b]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex flex-col focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-black tracking-[0.2em] text-white group-hover:text-[#d4af37] transition-colors">
                ALUCURVE
              </span>
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            </div>
            <span className="text-[10px] tracking-[0.3em] text-slate-400 font-light uppercase hidden sm:block">
              Aluminium Systems & Glass
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs uppercase tracking-[0.15em] text-slate-300 hover:text-[#d4af37] transition-colors relative py-1 font-medium group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-300 hover:text-white transition-colors py-2 px-3 rounded border border-white/10 hover:border-white/30"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Call Us</span>
            </a>

            <a
              href={getWhatsAppUrl(
                "Hello Alucurve, I am interested in getting an architectural quote for aluminium system windows."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-wider overflow-hidden hover:bg-yellow-400 transition-all shadow-lg shadow-[#d4af37]/20"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-200 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#07090b]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold border-b border-white/10 pb-2">
                Navigation
              </span>
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xl font-light text-slate-200 hover:text-[#d4af37] tracking-wider uppercase flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-[#d4af37] transition-colors" />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <a
                href={getWhatsAppUrl("Hello Alucurve, I would like to request an architectural consultation via WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-lg bg-[#25D366] text-white font-bold uppercase tracking-wider text-sm shadow-xl"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start WhatsApp Enquiry</span>
              </a>

              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-white/20 text-slate-300 font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call {companyConfig.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
