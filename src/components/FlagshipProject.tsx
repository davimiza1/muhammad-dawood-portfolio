"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitFork, TrendingUp, Database, ShieldCheck, FileSpreadsheet } from "lucide-react";
import Reveal from "./Reveal";
import { FLAGSHIP } from "@/data/content";

const HIGHLIGHTS = [
  { icon: FileSpreadsheet, text: "Validated CSV import turns a spreadsheet into structured leads" },
  { icon: TrendingUp, text: "AI scoring ranks purchase intent, not just contact info" },
  { icon: ShieldCheck, text: "Supabase auth keeps every user's lead data scoped to them" },
  { icon: Database, text: "Real PostgreSQL, not mock data — this is a working app" },
];

export default function FlagshipProject() {
  return (
    <section id="work" className="relative py-16 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Featured build</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mt-4 leading-[1.05]">
            One of my best work, <span className="text-gradient">from GitHub.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="card rounded-[28px] p-6 md:p-10 grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
            <div>
              <span className="eyebrow">{FLAGSHIP.tag}</span>
              <h3 className="font-display font-bold text-3xl mt-4">{FLAGSHIP.title}</h3>
              <p className="mt-4 text-text-dim leading-relaxed">{FLAGSHIP.desc}</p>

              <div className="mt-6 space-y-3">
                {HIGHLIGHTS.map((h) => (
                  <div key={h.text} className="flex items-start gap-3 text-sm text-text-dim">
                    <span className="w-7 h-7 rounded-lg glow-orb flex items-center justify-center text-violet-light shrink-0 mt-0.5">
                      <h.icon size={14} />
                    </span>
                    {h.text}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {FLAGSHIP.stack.map((s) => (
                  <span key={s} className="rounded-full border border-line px-3 py-1 text-xs font-mono text-text-dim">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                {FLAGSHIP.live && (
                  <motion.a whileHover={{ y: -2 }} href={FLAGSHIP.live} target="_blank" rel="noreferrer" className="btn-primary rounded-full px-6 py-3 text-sm flex items-center gap-2">
                    Live demo <ArrowUpRight size={15} />
                  </motion.a>
                )}
                {FLAGSHIP.github && (
                  <motion.a whileHover={{ y: -2 }} href={FLAGSHIP.github} target="_blank" rel="noreferrer" className="btn-ghost rounded-full px-6 py-3 text-sm flex items-center gap-2">
                    <GitFork size={15} /> View source
                  </motion.a>
                )}
              </div>
            </div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="card-solid rounded-2xl p-6">
              <p className="text-[11px] font-mono uppercase tracking-widest text-text-dim">Lead intelligence</p>
              <div className="mt-4 flex items-end justify-between">
                <span className="font-display text-6xl font-bold text-gradient">94</span>
                <span className="rounded-full bg-mint/15 text-mint text-xs font-bold px-3 py-1.5 mb-2">Hot lead</span>
              </div>
              <p className="mt-1 text-sm text-text-dim">Ready to book a viewing</p>

              <div className="mt-6 space-y-2.5">
                {[
                  { l: "Contact quality", v: 88 },
                  { l: "Budget match", v: 95 },
                  { l: "Response speed", v: 76 },
                ].map((r) => (
                  <div key={r.l}>
                    <div className="flex justify-between text-xs text-text-dim mb-1">
                      <span>{r.l}</span>
                      <span>{r.v}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${r.v}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full rounded-full bg-violet" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
