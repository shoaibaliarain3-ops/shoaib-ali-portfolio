"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { socials } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="hero-glow w-[600px] h-[600px] bg-indigo-600/30 -top-40 -left-40" />
      <div className="hero-glow w-[500px] h-[500px] bg-cyan-500/20 top-1/2 -right-40" />
      <div className="hero-glow w-[400px] h-[400px] bg-violet-600/20 bottom-0 left-1/3" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-16 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-zinc-300 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-cyan-400" />
            Available for exciting projects
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative animate-float mb-8"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-500 opacity-70 blur-md animate-pulse-glow" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-500 opacity-50" />
            <div className="relative h-36 w-36 sm:h-44 sm:w-44 rounded-full overflow-hidden border-4 border-[#030712]">
              <Image
                src="/profile.png"
                alt="Shoaib Ali"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 144px, 176px"
              />
            </div>
            <motion.div
              className="absolute -bottom-1 -right-1 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center border-4 border-[#030712]"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-white" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Hi, I&apos;m <span className="text-gradient">Shoaib Ali</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-300 mb-6"
          >
            AI &amp; Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-10"
          >
            Crafting intelligent, AI-powered web applications with a passion
            for Agentic AI, modern design, and cutting-edge technology. I
            build clean, performant, and beautiful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all"
            >
              View My Work
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-zinc-200 backdrop-blur-sm hover:bg-white/10 hover:border-white/25 transition-all"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex items-center gap-3"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border-2 border-zinc-700 flex justify-center pt-2">
          <motion.div
            className="h-2 w-1 rounded-full bg-zinc-400"
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
