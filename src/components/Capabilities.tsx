"use client";

import Reveal from "./Reveal";
import { CAPABILITIES } from "@/data/content";

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Capabilities</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mt-4 leading-[1.05]">
            One builder. <span className="text-gradient">Four disciplines.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group card hover-lift rounded-2xl p-7 h-full">
                <span className="w-12 h-12 rounded-2xl glow-orb flex items-center justify-center text-violet-light transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <c.icon size={22} />
                </span>
                <h3 className="font-display font-bold text-xl mt-5">{c.title}</h3>
                <p className="mt-2.5 text-text-dim leading-relaxed">{c.text}</p>
                <p className="mt-4 text-xs font-mono text-text-dim">{c.tools}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
