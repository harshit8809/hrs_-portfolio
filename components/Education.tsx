"use client";
import { motion } from "framer-motion";

const edu = [
  { deg: "Master of Computer Applications", uni: "Chandigarh University", yr: "Sep 2020 – May 2022" },
  { deg: "Bachelor of Computer Applications", uni: "Asansol Engineering College", yr: "Sep 2017 – May 2020" },
];

export default function Education() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="font-mono text-accent text-[0.68rem] tracking-widest uppercase mb-3">// Education</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[clamp(1.8rem,5vw,3rem)] font-extrabold tracking-tight mb-10">
        Academic Background
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {edu.map((e, i) => (
          <motion.div key={e.deg}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-bg3/60 border border-accent/15 rounded-xl p-5 sm:p-6 hover:border-accent hover:-translate-y-1 transition-all">
            <div className="text-[0.9rem] sm:text-[0.95rem] font-bold mb-1">{e.deg}</div>
            <div className="text-accent2 text-[0.82rem] font-medium mb-1">{e.uni}</div>
            <div className="font-mono text-muted text-[0.68rem]">{e.yr}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
