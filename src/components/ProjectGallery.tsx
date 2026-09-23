"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";
import { Project } from "@/types";

const categories = ["All", "Villa", "Residential", "Commercial", "Office", "Architectural"] as const;

export const ProjectGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-24 lg:py-36 bg-[#0c0f13] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-semibold mb-3">
              [ PORTFOLIO ARCHIVE ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              FEATURED <span className="metallic-text">PROJECTS</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#121519] p-1.5 rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#d4af37] text-slate-950 shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveModalProject(project)}
                data-cursor="VIEW"
                className="group relative rounded-2xl border border-white/10 bg-[#121519] overflow-hidden cursor-pointer hover:border-[#d4af37]/40 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Project Image */}
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121519] via-transparent to-transparent opacity-90" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#07090b]/80 border border-white/10 text-[10px] font-mono text-[#d4af37] uppercase">
                    {project.category}
                  </div>

                  {/* Hover Icon Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <div className="px-4 py-2 rounded-full bg-[#d4af37] text-slate-950 font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                      <Eye className="w-4 h-4" />
                      <span>View Case Study</span>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-black uppercase text-white tracking-tight group-hover:text-[#d4af37] transition-colors mb-4">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 line-clamp-1">
                      {project.solutionUsed}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#d4af37] shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal Detail View */}
        <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
      </div>
    </section>
  );
};
