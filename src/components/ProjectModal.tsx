"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Calendar, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { getProjectWhatsAppUrl } from "@/config/company";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const globalLenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    globalLenis?.stop();
    document.body.style.overflow = "hidden";

    return () => {
      globalLenis?.start();
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07090b]/90 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#121519] border border-white/15 rounded-2xl overflow-hidden shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black transition-all border border-white/10"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div data-lenis-prevent className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Header Title & Category */}
            <div>
              <div className="inline-block px-3 py-1 rounded bg-[#d4af37]/15 border border-[#d4af37]/40 text-[10px] font-mono text-[#d4af37] uppercase mb-3">
                {project.category} CASE STUDY
              </div>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                {project.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2 font-light">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  Year {project.year}
                </span>
                <span>•</span>
                <span>{project.area}</span>
              </div>
            </div>

            {/* Main Featured Photo */}
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden border border-white/10">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description & Solutions Used */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Architectural Brief & Scope
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-3">
                    Project Engineering Highlights
                  </h4>
                  <div className="space-y-2">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solution Summary Card */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">System Installed</div>
                  <div className="text-xs font-bold text-white mb-4">{project.solutionUsed}</div>

                  <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">Area Coverage</div>
                  <div className="text-xs font-bold text-slate-200">{project.area}</div>
                </div>

                <a
                  href={getProjectWhatsAppUrl(project.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire Similar Project</span>
                </a>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                  Project Gallery
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {project.galleryImages.map((img, i) => (
                    <div key={i} className="h-32 rounded-lg overflow-hidden border border-white/10">
                      <img src={img} alt={`Gallery view ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
