"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import {
  fadeInUp,
  staggerContainer,
  viewport,
} from "@/lib/animations";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="hero-glow w-[500px] h-[500px] bg-cyan-500/10 right-0 top-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-cyan-400 mb-3 uppercase tracking-widest">
            Skills &amp; Technologies
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-5 flex flex-col items-center text-center hover:border-cyan-500/40 hover:bg-white/[0.08] transition-colors duration-300 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-sm font-medium text-white mb-3">
                {skill.name}
              </h3>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
