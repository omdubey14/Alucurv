"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sliders, Eye, Lock, ShieldCheck, ThermometerSnowflake, Volume2, Sparkles, HelpCircle } from "lucide-react";

interface Hotspot {
  id: string;
  top: string;
  left: string;
  title: string;
  description: string;
  badge: string;
}

const hotspots: Hotspot[] = [
  {
    id: "interlock",
    top: "40%",
    left: "48%",
    title: "25mm – 42mm Slim Interlock",
    description: "Architectural grade aluminium extrusion with minimal 25mm – 42mm visible sightline for maximum view clearance.",
    badge: "Structural Profile",
  },
  {
    id: "locking",
    top: "65%",
    left: "48%",
    title: "Multi-Point Perimeter Lock",
    description: "Stainless steel locking pins engaged along top, side, and bottom frame for anti-burglary defense.",
    badge: "High Security",
  },
  {
    id: "glass",
    top: "30%",
    left: "70%",
    title: "Low-E Double Glazed Unit",
    description: "Argon gas-filled 24mm IGU pane cutting solar heat radiation by up to 72% while letting natural light filter through.",
    badge: "Energy Efficiency",
  },
  {
    id: "track",
    top: "88%",
    left: "35%",
    title: "Flush Recessed Drainage Track",
    description: "Zero-threshold bottom track recessed directly into floor tiling with concealed water drainage channels.",
    badge: "Flush Threshold",
  },
  {
    id: "gasket",
    top: "15%",
    left: "15%",
    title: "Dual EPDM Weather Seal",
    description: "Continuous synthetic rubber compression gaskets preventing water ingress and wind drafts during heavy monsoons.",
    badge: "Weatherproof",
  },
];

export const InteractiveWindow: React.FC = () => {
  const [slideOpenPercent, setSlideOpenPercent] = useState(25); // 0% closed, 100% full open
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(hotspots[0]);

  return (
    <section id="interactive-window" className="py-24 lg:py-36 bg-[#07090b] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono text-[#d4af37] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Interactive Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            INTERACTIVE <span className="metallic-text">SYSTEM SIMULATOR</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Interact with our engineered slim-line sliding window system. Slide the glass pane, test thermal modes, and click component hotspots to inspect technical details.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Visual Window Simulator Box */}
          <div className="lg:col-span-8 relative">
            <div className="relative w-full h-[450px] sm:h-[550px] rounded-2xl overflow-hidden border-2 border-white/15 bg-[#0e1116] shadow-2xl">
              
              {/* Room Background View (Exterior Nature Vista through Glass) */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 filter brightness-110"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop')",
                }}
              />

              {/* Interior Room Shadow Wall Frame */}
              <div className="absolute inset-0 border-[24px] sm:border-[36px] border-[#0e1116] pointer-events-none z-10">
                <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  FRAME PROFILE: ALUCURV-SLIM-90
                </div>
              </div>

              {/* Fixed Left Glass Panel */}
              <div className="absolute top-[24px] bottom-[24px] left-[24px] w-[calc(50%-24px)] bg-cyan-500/5 backdrop-blur-[2px] border-r border-white/30 z-1" />

              {/* Sliding Right Glass Panel (Positioned dynamically by slider state) */}
              <motion.div
                animate={{
                  left: `calc(50% + ${(slideOpenPercent / 100) * 40}%)`,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="absolute top-[24px] bottom-[24px] w-[calc(50%-24px)] bg-cyan-400/10 border-2 border-white/40 shadow-2xl z-2 flex flex-col justify-between p-4 cursor-grab active:cursor-grabbing"
              >
                {/* Slim Interlock Vertical Bar Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#d4af37]" />

                {/* Architectural Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-white/5 to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur">
                  <span>SLIDING PANEL</span>
                  <span>{slideOpenPercent}% OPEN</span>
                </div>
              </motion.div>

              {/* Interactive Hotspot Buttons */}
              {hotspots.map((spot) => {
                const isSelected = activeHotspot?.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    style={{ top: spot.top, left: spot.left }}
                    className="absolute z-30 -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  >
                    <div
                      className={`relative w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-[#d4af37] text-slate-950 scale-125 shadow-lg shadow-[#d4af37]/50"
                          : "bg-black/70 text-white border border-white/40 hover:scale-110 hover:border-[#d4af37]"
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-current animate-ping absolute inset-0 m-auto opacity-75" />
                      <span className="text-[10px] font-bold font-mono">i</span>
                    </div>
                  </button>
                );
              })}

              {/* Bottom Interactive Slider Overlay Bar */}
              <div className="absolute bottom-6 left-12 right-12 z-30 bg-[#07090b]/90 backdrop-blur-xl border border-white/15 p-4 rounded-xl shadow-2xl flex flex-col sm:flex-row items-center gap-4 justify-between">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Sliders className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs uppercase font-semibold text-slate-200">Slide Window:</span>
                  <span className="text-xs font-mono text-[#d4af37]">{slideOpenPercent}%</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="90"
                  value={slideOpenPercent}
                  onChange={(e) => setSlideOpenPercent(Number(e.target.value))}
                  className="w-full sm:w-64 accent-[#d4af37] cursor-pointer"
                />

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSlideOpenPercent(0)}
                    className="px-3 py-1 rounded text-[11px] bg-white/10 hover:bg-white/20 text-slate-300 uppercase font-mono"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => setSlideOpenPercent(75)}
                    className="px-3 py-1 rounded text-[11px] bg-[#d4af37] hover:bg-yellow-400 text-slate-950 font-bold uppercase font-mono"
                  >
                    Open
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Hotspot Technical Inspector & 25-Year Warranty Showcase */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* 25-Year Durable Warranty Card */}
            <div className="p-5 rounded-xl bg-[#121519] border border-[#d4af37]/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-3 flex items-center justify-between">
                <span className="flex items-center gap-2 text-white font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  25-Year Durable Warranty
                </span>
                <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#d4af37] font-mono text-[10px] font-bold border border-[#d4af37]/30">
                  GUARANTEED
                </span>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                Precision-engineered using 6063-T6 architectural grade aluminium profiles, tested against extreme monsoons, UV oxidation, and structural deflection with guaranteed 25-year durability.
              </p>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <ThermometerSnowflake className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Profile Sightline</div>
                    <div className="text-xs font-bold text-white">25mm – 42mm Thin</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">Acoustic Rating</div>
                    <div className="text-xs font-bold text-white">Up to 42 dB Cut</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Hotspot Inspector Card */}
            <div className="p-6 rounded-xl bg-[#181c22] border border-[#d4af37]/30 shadow-xl relative min-h-[220px]">
              {activeHotspot ? (
                <motion.div
                  key={activeHotspot.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-block px-2.5 py-1 rounded bg-[#d4af37]/15 border border-[#d4af37]/40 text-[10px] font-mono text-[#d4af37] uppercase mb-3">
                    {activeHotspot.badge}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{activeHotspot.title}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed font-light mb-4">
                    {activeHotspot.description}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono pt-3 border-t border-white/10">
                    <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                    <span>Tested to ISO 140-3 Standards</span>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center text-slate-400 text-xs py-8">
                  <HelpCircle className="w-8 h-8 text-slate-600 mb-2" />
                  <span>Click any hotspot on the window preview to inspect components.</span>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
