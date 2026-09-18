"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";
import { companyConfig, getWhatsAppUrl } from "@/config/company";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-36 bg-[#07090b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase & Layered Stat Cards */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 glass-panel shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="Alucurv Architectural Glass and Aluminium Profile Engineering"
                className="w-full h-[450px] sm:h-[550px] object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090b] via-transparent to-transparent opacity-80" />

              {/* Top Floating Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded bg-[#07090b]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#d4af37] tracking-widest uppercase">
                [ PRECISION FABRICATION ]
              </div>
            </motion.div>

            {/* Layered Floating Stat Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-8 -left-4 sm:left-6 p-6 rounded-xl bg-[#121519]/90 backdrop-blur-xl border border-white/15 shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">
                    {companyConfig.stats[0].value}
                    <span className="text-[#d4af37]">{companyConfig.stats[0].suffix}</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">{companyConfig.stats[0].label}</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">{companyConfig.stats[0].description}</p>
            </motion.div>

            {/* Layered Floating Stat Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden sm:block absolute -top-6 -right-4 p-5 rounded-xl bg-[#121519]/90 backdrop-blur-xl border border-white/15 shadow-2xl max-w-[220px]"
            >
              <div className="text-2xl font-black text-white">
                {companyConfig.stats[1].value}
                <span className="text-[#d4af37]">{companyConfig.stats[1].suffix}</span>
              </div>
              <div className="text-xs font-semibold text-slate-200">{companyConfig.stats[1].label}</div>
              <div className="text-[11px] text-slate-400 mt-1">{companyConfig.stats[1].description}</div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Copy & Capability List */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold mb-4">
                [ ABOUT ALUCURV ]
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-6">
                ENGINEERED FOR LIGHT. <br />
                <span className="metallic-text">BUILT TO LAST.</span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
                {companyConfig.name} is an architectural aluminium system and high-spec glass company specializing in manufacturing, custom extrusion design, and precision installation.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                We partner with modern architects, interior designers, villa owners, and commercial developers to engineer window and door systems that excel under high wind loads, monsoon moisture, and extreme solar heat while maintaining ultra-thin minimalist frame profiles.
              </p>
            </motion.div>

            {/* Core Capability Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Aluminium System Windows",
                "Minimal Sliding Windows",
                "Turn & Tilt Casements",
                "Grand Pivot & Swing Doors",
                "Curtain Wall Facade Systems",
                "Acoustic Glass Partitions",
                "25-Year Durable Warranty",
                "Bespoke Architectural Work",
              ].map((capability, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/15 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span className="text-xs font-medium text-slate-200">{capability}</span>
                </motion.div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="flex items-center gap-4">
              <a
                href={getWhatsAppUrl("Hello Alucurv, I would like to discuss an aluminium/glass solution for my project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded bg-[#d4af37] text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-yellow-400 transition-all shadow-lg"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-light">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>100% Tailored Specs</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
