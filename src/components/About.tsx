"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Globe,
  Sparkles,
  Code2,
  Database,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  viewport,
} from "@/lib/animations";

const interests = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Building intelligent systems that learn, reason, and make decisions.",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    description:
      "Developing autonomous AI agents that can plan, act, and accomplish complex goals.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Creating modern, responsive, and high-performance web applications.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Applications",
    description:
      "Integrating AI capabilities into real-world web apps that deliver value.",
  },
  {
    icon: Code2,
    title: "Next.js & React",
    description:
      "Building scalable frontend architectures with the most modern frameworks.",
  },
  {
    icon: Database,
    title: "Python & TypeScript",
    description:
      "Writing clean, typed, and maintainable code with powerful languages.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="hero-glow w-[400px] h-[400px] bg-indigo-600/10 left-0 top-1/4" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-cyan-400 mb-3 uppercase tracking-widest">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Passionate about <span className="text-gradient">AI &amp; Web</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
            I&apos;m Shoaib Ali, an AI &amp; Web Developer dedicated to building
            intelligent, modern web applications. My journey combines the power
            of Artificial Intelligence, Agentic AI, and cutting-edge web
            technologies like Next.js, React, TypeScript, and Python to create
            experiences that are not only beautiful but truly smart.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {interests.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card p-6 hover:border-indigo-500/40 hover:bg-white/[0.08] hover:translate-y-[-4px] transition-all duration-300 group"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
