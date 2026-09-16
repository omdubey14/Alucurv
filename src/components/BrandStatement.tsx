"use client";

import React from "react";
import { motion } from "framer-motion";

export const BrandStatement: React.FC = () => {
  const words = [
    "WE",
    "DON'T",
    "JUST",
    "MAKE",
    "WINDOWS.",
    "WE",
    "FRAME",
    "THE",
    "WAY",
    "YOU",
    "EXPERIENCE",
    "SPACE.",
  ];

  return (
    <section className="py-24 md:py-36 bg-[#0c0f13] border-y border-white/10 relative overflow-hidden">
      {/* Subtle Background Architectural Frame Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none architectural-grid-bg" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold mb-8"
        >
          [ BRAND STATEMENT ]
        </motion.div>

        {/* Editorial Scroll Text Reveal */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-slate-100 max-w-5xl mx-auto">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0.1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={
                word === "FRAME" || word === "EXPERIENCE" || word === "SPACE."
                  ? "gold-gradient-text"
                  : "text-slate-100"
              }
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed"
        >
          Every extrusion, gasket seal, and pane of architectural glass we install is engineered to dissolve boundaries between nature and indoor living.
        </motion.p>
      </div>
    </section>
  );
};
