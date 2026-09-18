"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Check, ArrowRight } from "lucide-react";
import { ProcessStep } from "@/types";
import { getWhatsAppUrl } from "@/config/company";

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "CONSULTATION & ARCHITECTURAL BRIEF",
    subtitle: "Understanding your vision, elevation drawings & design goals.",
    description:
      "Our technical team meets with your architect or project manager to review elevation blueprints, wind pressure requirements, and glazing specifications.",
    details: [
      "Review CAD blueprints & architectural elevation drawings",
      "Analyze structural wind load & thermal insulation goals",
      "Initial budget estimate & profile series recommendation",
    ],
    visualTag: "Blueprint Analysis",
  },
  {
    number: "02",
    title: "LASER SITE MEASUREMENT",
    subtitle: "Sub-millimeter 3D laser survey of all window & door openings.",
    description:
      "Engineers visit the construction site with 3D laser scanners to record precise aperture dimensions, floor level variances, and wall plumb alignment.",
    details: [
      "Digital 3D laser scanning to ±0.5mm accuracy",
      "Check floor recess depth for flush sliding track installation",
      "Confirm structural lintel anchor point integrity",
    ],
    visualTag: "Laser Scan ±0.5mm",
  },
  {
    number: "03",
    title: "CUSTOM DESIGN & GLASS SELECTION",
    subtitle: "Finalizing extrusion profiles, glass coatings & color finishes.",
    description:
      "Select profile series, anodized or powder color shades, handle hardware typologies, and glass specs (Low-E, acoustic laminated, or toughened IGU).",
    details: [
      "Generate detailed shop fabrication drawings for approval",
      "Select RAL powder coat color or anodized metallic finish",
      "Finalize glass makeup: Low-E coating, PVB thickness & tint",
    ],
    visualTag: "Shop Drawings",
  },
  {
    number: "04",
    title: "PRECISION MANUFACTURING & ASSEMBLY",
    subtitle: "Automated CNC cutting, corner crimping & quality testing.",
    description:
      "Architectural aluminium extrusions are precision-cut, CNC routed for hardware, corner-crimped, and fitted with EPDM weather gaskets in our controlled facility.",
    details: [
      "Double-head CNC saw cutting with zero angular error",
      "Hydraulic corner joint crimping with structural sealant",
      "Factory water pressure test before dispatch to site",
    ],
    visualTag: "CNC Fabrication",
  },
  {
    number: "05",
    title: "EXPERT MASTER INSTALLATION",
    subtitle: "Precision alignment, anchoring & perimeter weather sealing.",
    description:
      "Certified installation engineers position frame modules into openings, fasten heavy-duty expansion anchors, and apply structural weather silicone.",
    details: [
      "Laser level alignment of track and perimeter sashes",
      "Structural anchor bolting into concrete lintels",
      "High-grade perimeter UV-resistant silicone weather seal",
    ],
    visualTag: "Site Installation",
  },
  {
    number: "06",
    title: "FINAL TESTING & 25-YEAR HANDOVER",
    subtitle: "Smooth glide testing, lock calibration & durable warranty issuance.",
    description:
      "We test panel sliding smoothness, verify multi-point lock engagements, clean frames, and hand over the official 25-Year Durable Warranty documentation.",
    details: [
      "Operability test for smooth roller movement and lock latching",
      "Final protective film removal & frame polish",
      "Handover of 25-Year Frame & Weather Seal Durable Warranty certificate",
    ],
    visualTag: "25-Year Warranty",
  },
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-24 lg:py-36 bg-[#0c0f13] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold mb-3">
            [ EXECUTION METHODOLOGY ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            OUR 6-STEP <span className="metallic-text">TECHNICAL PROCESS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            From initial CAD blueprint review to 3D laser measurement and final master installation, we ensure flawless execution at every stage.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#d4af37] via-white/20 to-[#d4af37] -translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Card Box */}
                  <div className="w-full lg:w-1/2">
                    <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#121519]/80 backdrop-blur-xl hover:border-[#d4af37]/40 transition-all duration-400">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black font-mono text-[#d4af37]">
                          STEP // {step.number}
                        </span>
                        <span className="px-3 py-1 rounded bg-white/5 text-[10px] font-mono text-slate-300 uppercase border border-white/10">
                          {step.visualTag}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold uppercase text-white tracking-tight mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#d4af37] mb-4">{step.subtitle}</p>

                      <p className="text-slate-300 text-xs font-light leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="space-y-2 border-t border-white/10 pt-4">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="shrink-0 relative z-10 hidden lg:flex w-12 h-12 rounded-full bg-[#07090b] border-2 border-[#d4af37] items-center justify-center text-[#d4af37] font-mono font-bold text-xs shadow-xl shadow-[#d4af37]/20">
                    {step.number}
                  </div>

                  {/* Spacer for 50% split layout */}
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Footer Action */}
        <div className="mt-20 text-center">
          <a
            href={getWhatsAppUrl("Hello Alucurv, I am starting a new project and would like to schedule a site measurement and consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded bg-[#d4af37] text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-yellow-400 transition-all shadow-xl shadow-[#d4af37]/20"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>Book Site Measurement via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
