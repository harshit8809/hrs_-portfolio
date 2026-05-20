"use client";
import { motion } from "framer-motion";

const items = [
  { title: "Mobile-First", desc: "Expert in cross-platform React Native apps with deep native integrations, biometrics & App Store deployment." },
  { title: "Full Ecosystem", desc: "From mobile to web — Next.js dashboards, REST APIs, WebSockets, push notifications, CI/CD pipelines." },
  { title: "Proven Scale", desc: "Shipped to 1L+ users across fintech, eCommerce and industrial platforms with a 4.2★ Play Store rating." },
];

export default function AboutStrip() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 pb-10 sm:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-bg3/60 border border-accent/15 rounded-2xl p-6 sm:p-8"
      >
        {items.map((item) => (
          <div key={item.title} className="border-l-2 border-accent pl-4">
            <h4 className="font-bold text-[0.95rem] mb-2">{item.title}</h4>
            <p className="text-muted text-[0.8rem] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
