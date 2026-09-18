"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07090b] text-white select-none"
        >
          {/* Architectural Drawing Animation Frame */}
          <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
            {/* Outer Frame Box */}
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 border border-white/20 rounded-sm"
            >
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#d4af37]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#d4af37]" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#d4af37]" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#d4af37]" />
            </motion.div>

            {/* Assembling Window Mullions */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-[1px] bg-[#d4af37]/60 left-1/2 -translate-x-1/2"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
              className="absolute left-0 right-0 h-[1px] bg-[#d4af37]/60 top-1/2 -translate-y-1/2"
            />

            {/* Sliding Panel Simulation */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 0.3 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent border border-white/30"
            />

            {/* Center Brand Logo Mark */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="z-10 text-center font-mono text-xs tracking-[0.3em] text-[#d4af37]"
            >
              [ A L U ]
            </motion.div>
          </div>

          {/* Brand Name Text Reveal */}
          <div className="overflow-hidden mb-2 text-center">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl font-extrabold tracking-[0.25em] text-white"
            >
              ALUCURVE
            </motion.h1>
          </div>

          <div className="overflow-hidden text-center">
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs md:text-sm tracking-[0.35em] text-slate-400 font-light uppercase"
            >
              Aluminium System Windows
            </motion.p>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-48 h-[2px] bg-white/10 mt-10 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="w-full h-full bg-[#d4af37]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
