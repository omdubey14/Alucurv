"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ArrowRight, Check, ShieldAlert, Sparkles, Layers, Sliders } from "lucide-react";
import { productsData } from "@/data/products";
import { getProductWhatsAppUrl } from "@/config/company";

export const ProductShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState(productsData[0].id);

  const activeProduct = productsData.find((p) => p.id === activeId) || productsData[0];

  return (
    <section id="products" className="py-24 lg:py-36 bg-[#0c0f13] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold mb-3">
              [ SYSTEMS & SOLUTIONS CATALOG ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              PRECISION <span className="metallic-text">SYSTEMS.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-light">
            Select from our 9 specialized architectural categories engineered for superior thermal insulation, sound reduction, and seamless visual transparency.
          </p>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Category Selection List */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {productsData.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all duration-300 flex items-center justify-between group border ${
                    isActive
                      ? "bg-[#181c22] border-[#d4af37] shadow-xl shadow-[#d4af37]/5 translate-x-2"
                      : "bg-[#121519]/60 border-white/5 hover:border-white/20 hover:bg-[#121519]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? "text-[#d4af37]" : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    >
                      {item.categoryNumber}
                    </span>
                    <div>
                      <div
                        className={`text-sm sm:text-base font-bold uppercase tracking-wider transition-colors ${
                          isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 font-light mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive
                        ? "text-[#d4af37] translate-x-1"
                        : "text-slate-600 group-hover:text-slate-300 group-hover:translate-x-1"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Side: Dynamic Active Category Showcase */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-white/10 glass-panel overflow-hidden p-6 sm:p-8"
              >
                {/* Large Product Image Preview */}
                <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden mb-8 group">
                  <img
                    src={activeProduct.imageUrl}
                    alt={activeProduct.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded bg-[#0a0c0e]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#d4af37]">
                    {activeProduct.categoryNumber} // {activeProduct.tag}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                        {activeProduct.name}
                      </h3>
                      <p className="text-xs text-slate-300 font-light">{activeProduct.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Description Paragraph */}
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                  {activeProduct.longDescription}
                </p>

                {/* Technical Specifications Grid */}
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3 flex items-center gap-2">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Technical Specifications</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {activeProduct.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-white/5 border border-white/5 flex flex-col justify-center"
                      >
                        <div className="text-[10px] uppercase text-slate-400 font-mono">{spec.label}</div>
                        <div className="text-xs font-semibold text-slate-100 mt-0.5">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Architectural Features */}
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Key Features</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProduct.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications & Direct WhatsApp CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <div className="text-xs text-slate-400 font-light">
                    <span className="text-slate-200 font-semibold">Ideal For: </span>
                    {activeProduct.applications.join(" • ")}
                  </div>

                  <a
                    href={getProductWhatsAppUrl(activeProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#25D366] text-white font-bold uppercase tracking-wider text-xs hover:bg-emerald-500 transition-all shadow-lg shrink-0"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
