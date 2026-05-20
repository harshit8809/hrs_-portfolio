"use client";
import { motion } from "framer-motion";

const projects = [
  {
    icon: "💰", name: "FIKAA – Fintech Investment",
    desc: "Secure fintech app with KYC, biometric auth, payment gateway, and digital gold delivery for 1L+ users.",
    highlights: ["1L+ users", "4.2★ Play Store", "Biometric auth"],
    tags: ["React Native", "Next.js", "TypeScript", "Redux Toolkit"],
  },
  {
    icon: "🛍️", name: "GoToEcom – Social Commerce",
    desc: "End-to-end social commerce app with AI try-on, deep linking, custom native modules, and store deployment.",
    highlights: ["AI try-on", "Native Module", "iOS & Android"],
    tags: ["React Native", "Next.js", "TypeScript", "Redux Toolkit"],
  },
  {
    icon: "🏭", name: "Mill Monitor – Industrial",
    desc: "Real-time industrial monitoring app tracking temperature, vibration & metrics with an admin dashboard.",
    highlights: ["Real-time data", "Multi-unit"],
    tags: ["React Native", "React.js", "WebSocket"],
  },
  {
    icon: "♻️", name: "E-Scrap Management",
    desc: "Maintained and enhanced e-scrap management app with new API integrations, bug fixes, and stability improvements.",
    highlights: ["API integration", "Stability"],
    tags: ["React Native", "REST APIs", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="font-mono text-accent text-[0.68rem] tracking-widest uppercase mb-3">// Projects</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[clamp(1.8rem,5vw,3rem)] font-extrabold tracking-tight mb-10 sm:mb-14">
        Featured Work
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((p, i) => (
          <motion.div key={p.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.48, delay: i * 0.09 }}
            whileHover={{ y: -5 }}
            className="bg-bg3/60 border border-accent/15 rounded-xl sm:rounded-2xl p-5 sm:p-6
                       hover:border-accent hover:shadow-[0_16px_40px_rgba(124,106,255,0.18)]
                       transition-all duration-300 relative overflow-hidden cursor-default group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent2 to-accent3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-350" />
            <span className="text-[1.75rem] mb-4 block">{p.icon}</span>
            <h3 className="text-[0.95rem] sm:text-[1.05rem] font-bold mb-2">{p.name}</h3>
            <p className="text-muted text-[0.76rem] sm:text-[0.8rem] mb-3 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.highlights.map((h) => (
                <span key={h} className="text-[0.65rem] text-accent2 bg-accent2/10 border border-accent2/20 px-2.5 py-0.5 rounded-full">{h}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-[0.62rem] text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
