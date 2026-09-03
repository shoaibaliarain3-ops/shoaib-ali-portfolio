"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { contact, socials } from "@/lib/data";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Shoaib! I'm ${form.name}${form.email ? ` (${form.email})` : ""}. ${form.message}`
    );
    window.open(`${contact.whatsappLink}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-indigo-500/60 focus:bg-white/[0.08] focus:ring-2 focus:ring-indigo-500/20 transition-all";

  return (
    <section id="contact" className="section-padding relative">
      <div className="hero-glow w-[500px] h-[500px] bg-indigo-600/15 left-1/2 top-0 -translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-cyan-400 mb-3 uppercase tracking-widest">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Have a project in mind or want to collaborate? Send me a message
            and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6"
        >
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-2 glass-card p-6 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="font-semibold text-white text-lg mb-2">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I&apos;m always open to discussing new projects, creative
                ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
              >
                <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={16} className="text-white" />
                </span>
                {contact.email}
              </a>
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
              >
                <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={16} className="text-white" />
                </span>
                {contact.whatsapp}
              </a>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white" />
                </span>
                {contact.location}
              </div>
            </div>

            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-[1.02] transition-all"
            >
              <MessageCircle size={16} />
              Let&apos;s Talk
            </a>

            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-xs text-zinc-500 mb-3 uppercase tracking-wider font-medium">
                Social
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:scale-110 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-6 flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className={inputClasses}
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all"
            >
              {sent ? (
                "Opening WhatsApp... ✓"
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
