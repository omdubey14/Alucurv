"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal, Sparkles, CheckCircle2 } from "lucide-react";

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // 0% to 100%
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPosition(percentage);
    }
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="py-24 lg:py-36 bg-[#07090b] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold mb-3">
            [ ARCHITECTURAL TRANSFORMATION ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            BEFORE vs <span className="metallic-text">ALUCURV AFTER</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Drag the handle horizontally to experience how upgrading dated bulky frames to slim-profile Alucurv aluminium sliding glass systems elevates daylight, luxury aesthetic, and property value.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              if (e.touches[0]) handleMove(e.touches[0].clientX);
            }}
            className="relative h-[400px] sm:h-[550px] w-full rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl select-none cursor-ew-resize"
            data-cursor="DRAG"
          >
            {/* AFTER Image (Full background layer) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop')",
              }}
            >
              {/* After Label Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded bg-[#07090b]/80 backdrop-blur-md border border-[#d4af37]/40 text-xs font-mono text-[#d4af37] font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AFTER: ALUCURV SLIM SYSTEM</span>
              </div>
            </div>

            {/* BEFORE Image (Clipped layer over background) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-cover bg-center border-r border-white/40"
              style={{
                width: `${sliderPosition}%`,
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop')",
                filter: "sepia(0.2) contrast(1.1)",
              }}
            >
              {/* Before Label Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-slate-300 font-bold uppercase tracking-widest">
                BEFORE: DATED HEAVY FRAMES
              </div>
            </div>

            {/* Draggable Vertical Dividing Handle */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-1 bg-[#d4af37] -translate-x-1/2 z-30 shadow-[0_0_15px_rgba(212,175,55,0.8)]"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-10 h-10 rounded-full bg-[#d4af37] text-slate-950 flex items-center justify-center shadow-2xl border-2 border-white">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Comparison Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs uppercase font-mono text-slate-400 mb-2">[ BEFORE UPGRADE ]</div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  Heavy 90mm thick wooden/iron frame blocking views
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  Air leakage, noise infiltration & water seepage in rains
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  Regular painting and rust maintenance required
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#181c22] border border-[#d4af37]/30">
              <div className="text-xs uppercase font-mono text-[#d4af37] mb-2">[ AFTER ALUCURV SYSTEM ]</div>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  Ultra-slim 25mm – 42mm thin profiles & 95% daylight area
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  42 dB sound isolation & Low-E energy savings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  Anodized marine-grade finish with 25-Year durable warranty
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
