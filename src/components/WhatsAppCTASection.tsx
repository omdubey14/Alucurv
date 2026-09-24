"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight, CheckCircle, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

const projectOptions = [
  "New Villa Construction",
  "Apartment Window Upgrade",
  "Commercial Tower Facade",
  "Office Glass Partitions",
  "Architectural Glass Canopy",
  "Custom Aluminium Doors",
];

export const WhatsAppCTASection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(projectOptions[0]);

  const customMessage = `Hello Alucurve team, I am planning a project for: '${selectedOption}'. Please share details, profile samples, and estimation guidance.`;

  return (
    <section className="py-24 lg:py-36 bg-[#07090b] relative overflow-hidden border-t border-white/10">
      
      {/* Background Architectural Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-8 backdrop-blur-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Instant Architectural Consultation</span>
        </motion.div>

        {/* Big Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight mb-6"
        >
          LET&apos;S BUILD SOMETHING <br />
          <span className="gold-gradient-text">WORTH LOOKING THROUGH.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Tell us about your project and our technical engineering team will help you configure the ideal aluminium profile depths, glass specifications, and budget estimates.
        </motion.p>

        {/* Quick Project Type Selector Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-4">
            Select Your Project Category:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {projectOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedOption(opt)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                  selectedOption === opt
                    ? "bg-[#25D366] text-white border-emerald-400 shadow-lg shadow-emerald-500/20 scale-105"
                    : "bg-white/5 text-slate-300 border-white/10 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Primary High-Conversion WhatsApp CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex flex-col items-center"
        >
          <a
            href={getWhatsAppUrl(customMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-[#25D366] text-white font-extrabold uppercase tracking-widest text-sm sm:text-base hover:bg-emerald-500 transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:scale-105"
          >
            <MessageSquare className="w-6 h-6" />
            <span>START A WHATSAPP ENQUIRY</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <div className="flex items-center gap-6 mt-6 text-xs text-slate-400 font-light">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Response under 15 mins
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Direct Engineering Consultation
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
