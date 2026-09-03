"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { projects } from "@/lib/data";
import {
  fadeInUp,
  staggerContainer,
  viewport,
} from "@/lib/animations";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="hero-glow w-[500px] h-[500px] bg-violet-600/10 left-0 bottom-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-cyan-400 mb-3 uppercase tracking-widest">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            A selection of my best work, showcasing the intersection of
            artificial intelligence and modern web development.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="glass-card overflow-hidden group hover:border-indigo-500/40 transition-colors duration-300 flex flex-col"
            >
              <div
                className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.imageGradient} flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-[#030712]/40 group-hover:bg-[#030712]/20 transition-colors duration-300" />
                <span className="relative text-6xl group-hover:scale-125 transition-transform duration-500">
                  {project.icon}
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                    <Folder size={18} className="text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all"
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-xs font-medium text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
