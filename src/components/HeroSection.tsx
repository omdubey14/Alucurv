"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowDown, Sparkles, ChevronRight, ShieldCheck, Layers } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

export const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#products");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07090b] pt-24 pb-16"
    >
      {/* Background Architectural Render with Subtle Parallax & Mouse Movement */}
      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute inset-0 z-0 scale-105"
      >
        {/* Architectural Image */}
        <div
          className="w-full h-full bg-cover bg-center opacity-40 mix-blend-luminosity filter contrast-125"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop')",
          }}
        />

        {/* Multi-layered Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090b] via-[#07090b]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090b] via-[#07090b]/60 to-transparent" />
      </motion.div>

      {/* Floating Blueprint / CAD Architectural Measurement Overlay Lines */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        <div className="absolute bottom-1/3 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        <div className="absolute left-1/4 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute right-1/4 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />

        {/* Technical Coordinate Indicators */}
        <div className="absolute top-28 left-12 font-mono text-[10px] text-[#d4af37] tracking-widest uppercase">
          [ALU-SYS-VER: 2026.4]
        </div>
        <div className="absolute bottom-24 right-12 font-mono text-[10px] text-slate-400 tracking-widest uppercase">
          ELEVATION: +4.5M PANO-SLIDE
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="max-w-4xl">
          {/* Architectural Badge Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-slate-300 font-medium">
              ALUMINIUM × GLASS × ARCHITECTURE
            </span>
          </motion.div>

          {/* Hero Main Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]"
            >
              BUILT FOR <br />
              <span className="metallic-text">MODERN LIVING.</span>
            </motion.h1>
          </div>

          {/* Hero Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl leading-relaxed mb-10"
          >
            Premium aluminium windows, minimal sliding doors and architectural glass systems precision-engineered to transform spaces and maximize daylight.
          </motion.p>

          {/* Hero Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <a
              href="#products"
              onClick={handleScrollToProducts}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-white text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-[#d4af37] transition-all shadow-xl shadow-white/5"
            >
              <span>Explore Our Solutions</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={getWhatsAppUrl(
                "Hello Alucurv, I am exploring your website and would like to chat about aluminium system windows for my project."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 font-bold uppercase tracking-wider text-xs transition-all backdrop-blur-md shadow-lg shadow-emerald-500/10"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Quick Quality Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-16 border-t border-white/10 mt-16 text-slate-400"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
              <div>
                <div className="text-xs uppercase font-semibold text-slate-200">25-Year Durable Warranty</div>
                <div className="text-[11px] text-slate-400">Weather & Structural Guarantee</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#d4af37]" />
              <div>
                <div className="text-xs uppercase font-semibold text-slate-200">Ultra-Slim Interlocks</div>
                <div className="text-[11px] text-slate-400">25mm – 42mm Slim Profiles</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
              <div>
                <div className="text-xs uppercase font-semibold text-slate-200">Acoustic Isolation</div>
                <div className="text-[11px] text-slate-400">Up to 42 dB Noise Cut</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-[10px] tracking-[0.3em] uppercase cursor-pointer"
        onClick={handleScrollToProducts}
      >
        <span>Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#d4af37]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
