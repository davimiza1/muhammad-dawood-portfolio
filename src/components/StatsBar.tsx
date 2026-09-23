"use client";

import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { STATS } from "@/data/content";

export default function StatsBar() {
  return (
    <section className="relative py-10 border-y border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="text-center md:text-left">
              <span className="font-display text-3xl md:text-4xl font-bold text-gradient">
                <CountUp value={s.value} suffix={s.suffix} />
              </span>
              <p className="mt-1.5 text-xs text-text-dim uppercase tracking-widest">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
