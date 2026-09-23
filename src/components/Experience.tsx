"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { EXPERIENCE } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Experience</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mt-4 leading-[1.05]">
            Where I&apos;ve been <span className="text-gradient">building.</span>
          </h2>
        </Reveal>

        <div className="mt-10 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-8">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role + e.org} delay={i * 0.08} className="flex gap-5">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 w-4 h-4 rounded-full bg-violet mt-1.5 shrink-0"
                />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-violet-light">{e.period}</p>
                  <p className="font-display font-bold text-lg mt-1">{e.role}</p>
                  <p className="text-text-dim">{e.org}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
