"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const stats = [
  { num: "3+", label: "Years Exp" },
  { num: "1L+", label: "Users" },
  { num: "4.2★", label: "Play Store" },
  { num: "3", label: "Companies" },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-[100svh] flex flex-col-reverse items-center justify-center gap-8
                 sm:flex-row sm:items-center sm:gap-12
                 max-w-5xl mx-auto px-5 sm:px-10 lg:px-16
                 pt-24 pb-10 sm:pt-28"
    >
      {/* ── LEFT: Text ── */}
      <div className="flex-1 w-full text-center sm:text-left">
        {/* Badge */}
        <motion.div {...fadeUp(0.2)} className="mb-6 flex justify-center sm:justify-start">
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent2 font-mono text-[0.68rem] px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for immediate joining
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.35)}
          className="font-extrabold leading-none tracking-tight mb-3
                     text-[clamp(2.6rem,10vw,5.5rem)]"
        >
          Harshit
          <br />
          <span className="gradient-text">Kumar</span>
        </motion.h1>

        {/* Role */}
        <motion.p {...fadeUp(0.5)} className="font-mono text-muted text-[clamp(0.7rem,2.5vw,0.9rem)] mb-4">
          React Native + Frontend Engineer
        </motion.p>

        {/* Desc */}
        <motion.p
          {...fadeUp(0.65)}
          className="text-muted text-[clamp(0.82rem,2.2vw,0.95rem)] max-w-md mx-auto sm:mx-0 mb-7 leading-relaxed"
        >
          Building scalable cross-platform mobile &amp; web apps with 3+ years in fintech,
          eCommerce &amp; social commerce. Expert in performance, native integrations &amp; App Store deployment.
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUp(0.8)}
          className="flex gap-2.5 flex-wrap justify-center sm:justify-start"
        >
          <a href="mailto:harshit.kumar.dev.686@gmail.com"
            className="inline-flex items-center gap-1.5 bg-accent text-white font-bold
                       text-[clamp(0.72rem,2vw,0.82rem)] px-5 sm:px-7 py-3 rounded-xl
                       hover:bg-accent/80 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(124,106,255,0.45)] transition-all">
            Get in touch →
          </a>
          <a href="https://linkedin.com/in/harshit-kumar-9bb747211/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white font-bold
                       text-[clamp(0.72rem,2vw,0.82rem)] px-5 sm:px-7 py-3 rounded-xl
                       border border-accent/20 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all">
            LinkedIn ↗
          </a>
          <a href="https://github.com/harshit8809" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white font-bold
                       text-[clamp(0.72rem,2vw,0.82rem)] px-5 sm:px-7 py-3 rounded-xl
                       border border-accent/20 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all">
            GitHub ↗
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(1.0)}
          className="flex gap-5 sm:gap-8 flex-wrap mt-8 pt-6 border-t border-accent/10 justify-center sm:justify-start"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[clamp(1.8rem,5vw,2.4rem)] font-extrabold text-accent leading-none">{s.num}</div>
              <div className="text-[0.62rem] text-muted mt-1 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT: Avatar ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
        className="relative flex-shrink-0"
      >
        {/* Size: small on mobile, bigger on tablet/desktop */}
        <div className="relative w-[210px] h-[210px] sm:w-[270px] sm:h-[270px] lg:w-[310px] lg:h-[310px]">
          {/* Glow */}
          <div className="absolute inset-[-18px] rounded-full bg-accent/20 blur-3xl animate-pulse" />
          {/* Spinning ring */}
          <div
            className="absolute inset-[-3px] rounded-full animate-spin [animation-duration:5s]"
            style={{ background: "conic-gradient(from 0deg,#7c6aff,#c084fc,#38bdf8,#7c6aff)" }}
          />
          {/* Mask */}
          <div className="absolute inset-0 rounded-full bg-[#08080f] z-10" />
          {/* Image */}
          <div className="absolute inset-[3px] rounded-full overflow-hidden z-20">
            <Image src="/profile.png" alt="Harshit Kumar" fill className="object-cover object-top" priority />
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute top-[-10px] right-[-16px] bg-bg3/90 border border-accent/20 backdrop-blur-md text-[0.65rem] font-semibold px-3 py-1.5 rounded-xl z-30 text-accent animate-bounce">
          ⚡ React Native
        </div>
        <div className="absolute bottom-[14px] left-[-36px] bg-bg3/90 border border-accent/20 backdrop-blur-md text-[0.65rem] font-semibold px-3 py-1.5 rounded-xl z-30 text-green-400"
          style={{ animation: "bounce 2s infinite 0.6s" }}>
          ✅ Available Now
        </div>
        <div className="absolute top-[40%] right-[-52px] bg-bg3/90 border border-accent/20 backdrop-blur-md text-[0.65rem] font-semibold px-3 py-1.5 rounded-xl z-30 text-accent2"
          style={{ animation: "bounce 2s infinite 1.1s" }}>
          🚀 Next.js
        </div>
      </motion.div>
    </section>
  );
}
