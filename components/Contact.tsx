"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-bg3/60 border border-accent/15 rounded-2xl sm:rounded-3xl
                   p-8 sm:p-14 lg:p-20 text-center relative overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-[260px] h-[260px] bg-accent2/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative">
          <p className="font-mono text-accent text-[0.65rem] tracking-widest uppercase mb-4">// Contact</p>
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold tracking-tight mb-3">
            Let&apos;s build something{" "}
            <span className="gradient-text">great</span>
          </h2>
          <p className="text-muted text-[0.88rem] mb-8">Open to new opportunities — let&apos;s connect and create.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:harshit.kumar.dev.686@gmail.com"
              className="inline-flex items-center gap-2 bg-accent text-white font-bold text-[0.8rem] sm:text-[0.85rem] px-6 sm:px-8 py-3.5 rounded-xl hover:bg-accent/80 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(124,106,255,0.4)] transition-all">
              ✉ Email me
            </a>
            <a href="https://linkedin.com/in/harshit-kumar-9bb747211/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-[0.8rem] sm:text-[0.85rem] px-6 sm:px-8 py-3.5 rounded-xl border border-accent/20 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all">
              LinkedIn ↗
            </a>
            <a href="https://github.com/harshit8809" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-[0.8rem] sm:text-[0.85rem] px-6 sm:px-8 py-3.5 rounded-xl border border-accent/20 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all">
              GitHub ↗
            </a>
          </div>
          <p className="mt-6 font-mono text-muted text-[0.65rem]">📍 India · +91 8809442453 · Available immediately</p>
        </div>
      </motion.div>
    </section>
  );
}
