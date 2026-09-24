"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import { WhyPillar } from "@/types";

const pillars: WhyPillar[] = [
  {
    id: "precision",
    title: "PRECISION",
    headline: "Engineered with attention to every profile, joint and finish.",
    description:
      "Extruded using 6063-T6 architectural grade aluminium alloys with precision CNC corner cleat crimping, ensuring airtight frame seals and zero joint gap tolerances.",
    technicalHighlight: "±0.2mm Machining Tolerance",
    iconName: "Target",
    stats: "0.2mm Tolerance",
  },
  {
    id: "performance",
    title: "PERFORMANCE",
    headline: "Designed for durability, smooth operation and everyday reliability.",
    description:
      "Tested against extreme monsoon wind pressures up to 3000 Pa and high urban acoustic noise, backed by our 25-Year Durable Warranty.",
    technicalHighlight: "25-Year Durable Warranty & Class 4 Wind Rating",
    iconName: "Zap",
    stats: "25-Yr Warranty",
  },
  {
    id: "custom-design",
    title: "CUSTOM DESIGN",
    headline: "Solutions tailored to your architecture, dimensions and style.",
    description:
      "100% custom profile dimensions, glass thickness, interlock widths, and opening typologies tailored specifically to structural drawings.",
    technicalHighlight: "Bespoke Extrusion Dies Available",
    iconName: "Palette",
    stats: "100% Custom",
  },
  {
    id: "premium-finish",
    title: "PREMIUM FINISH",
    headline: "Clean profiles and refined finishes for modern spaces.",
    description:
      "High-durability anodized coatings, Qualicoat powder finishes, and metallic graphite tones resistant to UV fading, scratches, and salt corrosion.",
    technicalHighlight: "25-Micron Anodizing & PVDF Coated",
    iconName: "Sparkles",
    stats: "Qualicoat Certified",
  },
  {
    id: "expert-installation",
    title: "EXPERT INSTALLATION",
    headline: "Professional installation with attention to detail.",
    description:
      "Installed by certified master technicians trained in laser-level alignment, structural anchor bolting, and perimeter silicone waterproofing.",
    technicalHighlight: "Master Installer Certification",
    iconName: "ShieldCheck",
    stats: "Laser Aligned",
  },
];

export const WhyAlucurv: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(pillars[0].id);

  return (
    <section id="why-us" className="py-24 lg:py-36 bg-[#07090b] relative overflow-hidden border-t border-white/10">
      {/* Anchor for footer/external links referencing #why-alucurve */}
      <span id="why-alucurve" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold mb-3">
            [ ARCHITECTURAL EXCELLENCE ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            WHY <span className="metallic-text">ALUCURVE SYSTEMS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            We don&apos;t assemble off-the-shelf windows. We engineer architectural aluminium solutions built to elevated technical specifications.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const isExpanded = expandedId === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setExpandedId(pillar.id)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-400 cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? "bg-[#181c22] border-[#d4af37] shadow-2xl shadow-[#d4af37]/10"
                    : "bg-[#121519]/70 border-white/10 hover:border-white/20 hover:bg-[#121519]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#d4af37] font-bold tracking-widest uppercase">
                      0{idx + 1} {"//"} {pillar.stats}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isExpanded
                          ? "bg-[#d4af37] text-slate-950"
                          : "bg-white/5 text-slate-300 group-hover:text-white"
                      }`}
                    >
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black uppercase text-white tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-300 mb-4">{pillar.headline}</p>

                  <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#d4af37]">
                  <span>{pillar.technicalHighlight}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180 text-[#d4af37]" : "text-slate-500"}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
