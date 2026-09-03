"use client";

import { motion } from "framer-motion";
import { ExternalLink, MonitorSmartphone } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { webApps } from "@/lib/data";
import {
  fadeInUp,
  staggerContainer,
  viewport,
} from "@/lib/animations";

export default function WebApplications() {
  return (
    <section id="apps" className="section-padding relative">
      <div className="hero-glow w-[400px] h-[400px] bg-emerald-500/10 right-0 bottom-1/4" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-cyan-400 mb-3 uppercase tracking-widest">
            Applications
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Web <span className="text-gradient">Applications</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Modern, full-stack web applications built with the latest
            technologies and best practices.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {webApps.map((app, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="glass-card overflow-hidden group hover:border-cyan-500/40 transition-colors duration-300 flex flex-col"
            >
              <div
                className={`relative h-44 overflow-hidden bg-gradient-to-br ${app.imageGradient} flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-[#030712]/40 group-hover:bg-[#030712]/20 transition-colors duration-300" />
                <span className="relative text-5xl group-hover:scale-125 transition-transform duration-500">
                  {app.icon}
                </span>
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={app.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[#030712] hover:scale-110 transition-transform"
                    aria-label={`${app.title} GitHub`}
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={app.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-10 w-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[#030712] hover:scale-110 transition-transform"
                    aria-label={`${app.title} Live Demo`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <MonitorSmartphone
                    size={16}
                    className="text-cyan-400 mb-2"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 transition-all">
                  {app.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">
                  {app.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {app.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
