"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { socials } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Apps", href: "#apps" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-4">
        <div className="glass-card flex items-center justify-between px-4 sm:px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-white">
              S
            </span>
            <span className="font-semibold text-white hidden sm:block">
              Shoaib<span className="text-gradient">.dev</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card mt-2 p-3"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
