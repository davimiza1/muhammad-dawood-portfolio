"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import Reveal from "./Reveal";
import { RECENT_PLATFORMS } from "@/data/content";

export default function RecentPlatforms() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Recent product builds</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mt-4 leading-[1.05]">
            Interactive pitch sites, <span className="text-gradient">not static mockups.</span>
          </h2>
          <p className="mt-5 text-lg text-text-dim leading-relaxed">
            Interactive product sites with working demos on sample data. The source is private; the live demos are public.
          </p>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {RECENT_PLATFORMS.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="card hover-lift rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <span className="eyebrow">{p.tag}</span>
                  <span className="w-7 h-7 rounded-lg glow-orb flex items-center justify-center text-text-dim shrink-0" title="Private repository">
                    <Lock size={12} />
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl mt-3">{p.title}</h3>
                <p className="mt-2.5 text-sm text-text-dim leading-relaxed flex-1">{p.desc}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display font-bold text-gradient">{p.metric.value}</span>
                  <span className="text-[11px] text-text-dim">{p.metric.label}</span>
                </div>

                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="mt-5 flex items-center gap-1.5 text-sm font-bold text-violet-light hover:underline">
                    Live demo <ArrowUpRight size={14} />
                  </a>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
