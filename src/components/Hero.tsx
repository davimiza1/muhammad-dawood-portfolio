"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GitFork, MapPin, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { BRAND } from "@/data/content";

const LINES: { text: string; cls?: string }[] = [
  { text: "$ deploy leadiq-ai --prod" },
  { text: "✓ build passed · 0 errors", cls: "text-mint" },
  { text: "✓ database migrated (supabase)", cls: "text-mint" },
  { text: "✓ row level security enabled", cls: "text-mint" },
  { text: "→ deployed to vercel", cls: "text-violet-light" },
];

function TerminalCard() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= LINES.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 550);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="card rounded-2xl p-5 relative font-mono text-[13px] leading-relaxed">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto text-[11px] text-text-dim">dawood@build</span>
      </div>
      <div className="space-y-2 min-h-[150px]">
        {LINES.slice(0, visible).map((l, i) => (
          <motion.p key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className={l.cls ?? "text-text-dim"}>
            {l.text}
          </motion.p>
        ))}
        {visible < LINES.length && <span className="inline-block w-2 h-4 bg-violet-light blink align-middle" />}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-14 md:pt-44 md:pb-24 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-violet/15 blur-3xl pointer-events-none" />
      <div className="absolute top-60 -left-24 w-[320px] h-[320px] rounded-full bg-mint/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
        <div>
          <Reveal>
            <span className="eyebrow">
              <MapPin size={12} className="inline -mt-0.5" /> {BRAND.location}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display font-bold text-[36px] md:text-[56px] leading-[1.08] tracking-tight mt-5">
              {BRAND.name}
              <br />
              <span className="text-gradient">{BRAND.role}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg text-text-dim leading-relaxed max-w-xl">{BRAND.tagline} {BRAND.bio}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#work" className="btn-primary rounded-full px-7 py-3.5 text-sm flex items-center gap-2">
                See selected work <ArrowUpRight size={16} />
              </motion.a>
              <motion.a whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }} href={BRAND.github} target="_blank" rel="noreferrer" className="btn-ghost rounded-full px-7 py-3.5 text-sm flex items-center gap-2">
                <GitFork size={16} /> GitHub
              </motion.a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <TerminalCard />
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="hidden md:flex absolute -bottom-6 -left-8 card rounded-2xl px-4 py-3 items-center gap-3 badge-pulse"
          >
            <span className="w-9 h-9 rounded-xl bg-violet/15 text-violet-light flex items-center justify-center">
              <Sparkles size={16} />
            </span>
            <span>
              <span className="block text-sm font-bold">Lead score: 94</span>
              <span className="block text-[11px] text-text-dim">LeadIQ AI, illustrative</span>
            </span>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
