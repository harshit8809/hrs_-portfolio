"use client";
import { motion } from "framer-motion";

const categories = [
  { label: "Mobile", skills: ["React Native", "New Architecture", "Native Module", "Android Studio", "Xcode", "Lottie"] },
  { label: "Web", skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"] },
  { label: "State", skills: ["Redux Toolkit", "RTK Query", "Context API", "React Query", "Axios"] },
  { label: "Infra", skills: ["Firebase FCM", "WebEngage", "REST APIs", "WebSocket", "MongoDB", "CI/CD", "Git"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="font-mono text-accent text-[0.68rem] tracking-widest uppercase mb-3">// Skills</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[clamp(1.8rem,5vw,3rem)] font-extrabold tracking-tight mb-10 sm:mb-12">
        Technical Arsenal
      </motion.h2>
      <div className="flex flex-col gap-5">
        {categories.map((cat, ci) => (
          <motion.div key={cat.label}
            initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.45, delay: ci * 0.07 }}
            className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
            <span className="font-mono text-[0.65rem] text-accent2 uppercase tracking-widest sm:min-w-[68px] sm:pt-2">{cat.label}</span>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <motion.span key={skill} whileHover={{ y: -3, borderColor: "#7c6aff", color: "#7c6aff" }}
                  className="bg-bg3/60 border border-accent/15 text-white/80 text-[0.78rem] font-medium px-3.5 py-1.5 rounded-lg cursor-default transition-colors">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
