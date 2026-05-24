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
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── DESKTOP NAV: full bar → floating capsule on scroll ── */}
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          // pill geometry
          borderRadius: scrolled ? "9999px" : "0px",
          // width: shrink to content when scrolled
          width: scrolled ? "55%" : "100%",
          minWidth: scrolled ? "max-content" : 0,
          top: scrolled ? 16 : 0,
          // horizontal centering handled via left/transform below
          left: scrolled ? "50%" : "0%",
          x: scrolled ? "-50%" : "0%",
          // padding
          paddingLeft: scrolled ? "1.75rem" : "4rem",
          paddingRight: scrolled ? "1.75rem" : "4rem",
          paddingTop: scrolled ? "1.2rem" : "1rem",
          paddingBottom: scrolled ? "1.2rem" : "1rem",
          // glass fill
          backgroundColor: scrolled
            ? "rgba(10,10,20,0.72)"
            : "rgba(0,0,0,0)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(124,106,255,0.14)"
            : "none",
        }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        // className="fixed z-50 hidden sm:flex items-center justify-between"
        className="fixed z-50 hidden sm:flex items-center justify-between gap-8 lg:gap-14"
        style={{
          backdropFilter: scrolled ? "blur(10px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          border: scrolled
            ? "1px solid rgba(124,106,255,0.22)"
            : "1px solid transparent",
          // minWidth: scrolled ? "420px" : undefined,
        }}
      >
        <span className="font-mono text-accent text-base tracking-tight whitespace-nowrap sm:mr-10">
          HRS<span className="text-muted">_dev</span>
        </span>

        {/* <div className="flex gap-6 lg:gap-9"> */}
        <div className="flex items-center gap-5 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-accent text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* ── MOBILE NAV: simple top bar, no capsule ── */}
      <motion.div
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 sm:hidden flex items-center justify-between px-5 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-bg/20 backdrop-blur-xl border-b border-accent/10"
            : "bg-transparent"
        }`}
      >
        <span className="font-mono text-accent text-base tracking-tight">
          HRS<span className="text-muted">_dev</span>
        </span>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-[5px] p-1 z-[60]"
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] bg-white rounded transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white rounded transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </motion.div>

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
