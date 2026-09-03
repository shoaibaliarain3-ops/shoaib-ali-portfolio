"use client";

import { ArrowUp, Mail, MapPin, MessageCircle } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { contact, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#020406] py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-zinc-400">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={14} className="text-cyan-400" />
              {contact.email}
            </a>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MessageCircle size={14} className="text-green-400" />
              {contact.whatsapp}
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-indigo-400" />
              {contact.location}
            </span>
          </div>

          <div className="flex items-center justify-between w-full border-t border-white/10 pt-6">
            <p className="text-sm text-zinc-500">
              © 2026 Shoaib Ali. All rights reserved.
            </p>

            <a
              href="#home"
              className="h-9 w-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
