"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitFork } from "lucide-react";
import Reveal from "./Reveal";
import { GITHUB_PROJECTS } from "@/data/content";

export default function SelectedWork() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">More from GitHub</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mt-4 leading-[1.05]">
            Projects built to <span className="text-gradient">solve real problems.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {GITHUB_PROJECTS.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.06}>
              <motion.div whileHover={{ y: -6 }} className="group card hover-lift rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <span className="eyebrow">{p.tag}</span>
                  <span className="text-right shrink-0">
                    <span className="block font-display font-bold text-lg text-gradient">{p.metric.value}</span>
                    <span className="block text-[10px] text-text-dim">{p.metric.label}</span>
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl mt-3">{p.title}</h3>
                <p className="mt-2.5 text-sm text-text-dim leading-relaxed flex-1">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-line px-2.5 py-0.5 text-[11px] font-mono text-text-dim">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3 text-sm font-bold">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-violet-light hover:underline">
                      Live <ArrowUpRight size={14} />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-text-dim hover:text-text">
                      <GitFork size={14} /> Source
                    </a>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
