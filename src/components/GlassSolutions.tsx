"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { glassSolutionsData } from "@/data/glassSolutions";
import { getWhatsAppUrl } from "@/config/company";

export const GlassSolutions: React.FC = () => {
  return (
    <section id="glass" className="py-24 lg:py-36 bg-[#0c0f13] relative overflow-hidden border-t border-white/10">
      
      {/* Visual Ambient Light Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold mb-3">
              [ ARCHITECTURAL GLAZING ]
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              MORE GLASS. <br />
              <span className="metallic-text">MORE LIGHT. MORE POSSIBILITY.</span>
            </h2>
          </div>

          <p className="text-slate-300 text-sm max-w-md font-light leading-relaxed">
            From high-span toughened glass structural walls to acoustic PVB office cabins, we deliver glass engineered for maximum clarity, safety, and energy efficiency.
          </p>
        </div>

        {/* Glass Solutions Cards Grid / Horizontal Scroll Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {glassSolutionsData.map((glass, idx) => (
            <motion.div
              key={glass.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-[#121519]/70 backdrop-blur-xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={glass.imageUrl}
                    alt={glass.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121519] via-transparent to-transparent opacity-90" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#07090b]/80 border border-white/10 text-[10px] font-mono text-cyan-300 uppercase">
                    THICKNESS: {glass.thicknessOptions}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mb-2">
                    {glass.title}
                  </h3>
                  <p className="text-xs text-[#d4af37] font-medium mb-4">{glass.subtitle}</p>
                  <p className="text-slate-300 text-xs font-light leading-relaxed mb-6">
                    {glass.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-6">
                    {glass.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer with WA Link */}
              <div className="p-6 sm:p-8 pt-0 border-t border-white/5 flex items-center justify-between mt-auto">
                <div className="text-[11px] text-slate-400 font-mono">
                  <span className="text-slate-200">Ideal: </span>
                  {glass.applications.slice(0, 2).join(", ")}
                </div>

                <a
                  href={getWhatsAppUrl(`Hello Alucurve, I am interested in your ${glass.title} for my project.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] hover:text-white transition-colors group/btn uppercase tracking-wider"
                >
                  <span>Enquire Glass</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
