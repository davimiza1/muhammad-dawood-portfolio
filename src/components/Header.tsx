"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/data/content";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-void/80 backdrop-blur-xl border-b border-line" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl glow-orb flex items-center justify-center font-display font-bold text-sm text-violet-light">{BRAND.initials}</span>
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block">{BRAND.name}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-text-dim hover:text-text transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden lg:block btn-primary rounded-full px-5 py-2.5 text-sm">
          Start a project
        </a>

        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden bg-void border-b border-line">
            <div className="px-5 py-5 flex flex-col gap-4">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-medium text-text-dim">
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary rounded-full px-5 py-3 text-sm text-center">
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
