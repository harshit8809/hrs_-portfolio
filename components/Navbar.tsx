"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 lg:px-16 py-4 transition-all duration-300 ${
          scrolled ? "bg-bg/85 backdrop-blur-xl border-b border-accent/10" : "bg-transparent"
        }`}
      >
        <span className="font-mono text-accent text-base tracking-tight">
          HK<span className="text-muted">_dev</span>
        </span>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-8 lg:gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-muted hover:text-accent text-xs font-semibold tracking-widest uppercase transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-[5px] p-1 z-[60]"
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] bg-white rounded transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </motion.nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 sm:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={close}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-3xl font-extrabold tracking-tight hover:text-accent transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
