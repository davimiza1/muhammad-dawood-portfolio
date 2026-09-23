"use client";

import { Mail, GitFork, MapPin, Download } from "lucide-react";
import Reveal from "./Reveal";
import { BRAND } from "@/data/content";

export default function CtaFooter() {
  return (
    <footer id="contact" className="relative pt-8 pb-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="card-solid rounded-[32px] p-8 md:p-14 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-violet/20 blur-3xl" />
            <div className="relative">
              <span className="eyebrow">Let&apos;s work together</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-5 leading-[1.05]">
                Have a project that needs <span className="text-gradient">clarity and momentum?</span>
              </h2>
              <p className="mt-5 text-text-dim leading-relaxed max-w-md">
                Tell me what you&apos;re building, where the process is stuck, or what needs to be automated.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`mailto:${BRAND.email}`} className="btn-primary inline-block rounded-full px-7 py-3.5 text-sm">
                  {BRAND.email}
                </a>
                <a href={BRAND.cv} download className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm">
                  <Download size={15} /> Download CV
                </a>
              </div>
            </div>
            <div className="relative space-y-4 text-text-dim">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl glow-orb flex items-center justify-center text-violet-light">
                  <Mail size={17} />
                </span>
                {BRAND.email}
              </div>
              <a href={BRAND.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-text transition-colors">
                <span className="w-10 h-10 rounded-xl glow-orb flex items-center justify-center text-violet-light">
                  <GitFork size={17} />
                </span>
                github.com/davimiza1
              </a>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl glow-orb flex items-center justify-center text-violet-light">
                  <MapPin size={17} />
                </span>
                {BRAND.location}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-dim">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
