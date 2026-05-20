"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "GoToEcom", role: "Front-End Developer · Remote", period: "Feb 2025 – Apr 2026",
    desc: "Social commerce app enabling influencers and users to create content, explore products, and shop seamlessly.",
    bullets: [
      "Led end-to-end React Native app development — auth, feed, animations, AI try-on feature",
      "Built a custom native module for cross-app content & link sharing",
      "Implemented OTA updates, deep linking, push notifications, and release management across Android and iOS",
      "Built a Next.js brand dashboard for internal teams to manage products and store operations",
      "Optimized performance by reducing re-renders and improving UI responsiveness",
      "Published and maintained apps on Google Play Store and Apple App Store",
    ],
  },
  {
    company: "FIKAA (Keynote)", role: "Front-End Developer · Mumbai", period: "Feb 2024 – Dec 2024",
    desc: "Fintech investment platform serving 1L+ users with a 4.2★ Play Store rating.",
    bullets: [
      "Implemented secure auth using MPIN and device biometrics (fingerprint & face unlock)",
      "Developed KYC workflows and payment gateway integrations for secure onboarding",
      "Built end-to-end digital gold delivery flow through Augmont integration",
      "Developed transactions, mutual funds & gold investment modules in Next.js",
      "Integrated WebEngage push notifications and improved overall app stability",
    ],
  },
  {
    company: "Codemetrics Infotech", role: "Front-End Developer · Noida", period: "Aug 2022 – Nov 2023",
    desc: "Industrial apps for real-time monitoring and operations in manufacturing environments.",
    bullets: [
      "Designed & built Mill Monitor mobile app with full auth and real-time industrial metric tracking",
      "Contributed to React admin panel for visualizing mill data across multiple units",
      "Maintained E-Scrap app by fixing bugs, integrating APIs, and improving stability",
      "Improved API handling and error management for reliable data communication",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="font-mono text-accent text-[0.68rem] tracking-widest uppercase mb-3">// Experience</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[clamp(1.8rem,5vw,3rem)] font-extrabold tracking-tight mb-10 sm:mb-14">
        Where I&apos;ve Worked
      </motion.h2>

      <div className="relative pl-5 sm:pl-8">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent to-transparent" />
        {experiences.map((exp, i) => (
          <motion.div key={exp.company}
            initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-5 group">
            {/* Dot */}
            <div className="absolute -left-[1.85rem] sm:-left-[2.4rem] top-6 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg shadow-[0_0_10px_rgba(124,106,255,0.8)]" />

            <div className="bg-bg3/60 border border-accent/15 rounded-xl sm:rounded-2xl p-5 sm:p-7
                            hover:border-accent hover:translate-x-1 hover:shadow-[0_8px_40px_rgba(124,106,255,0.12)] transition-all duration-300">
              <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                <h3 className="text-[1rem] sm:text-[1.15rem] font-bold">{exp.company}</h3>
                <span className="font-mono text-[0.62rem] sm:text-[0.68rem] text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-accent2 text-[0.8rem] font-semibold mb-1">{exp.role}</p>
              <p className="text-muted text-[0.75rem] italic mb-4">{exp.desc}</p>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-white/70 text-[0.78rem] sm:text-[0.82rem] pl-4 relative leading-relaxed">
                    <span className="absolute left-0 top-1 text-accent text-[0.6rem]">▸</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
