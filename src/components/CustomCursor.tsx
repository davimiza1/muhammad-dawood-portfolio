"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, summary, label";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 500, damping: 40, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setHovering(!!(e.target as HTMLElement).closest?.(INTERACTIVE));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div style={{ left: dotX, top: dotY }} animate={{ scale: pressed ? 0.6 : 1 }} className="pointer-events-none fixed z-[999] w-2 h-2 -ml-1 -mt-1 rounded-full bg-violet" />
      <motion.div
        style={{
          left: ringX,
          top: ringY,
          borderColor: hovering ? "transparent" : "rgba(124,92,255,0.5)",
          background: hovering ? "rgba(124,92,255,0.16)" : "transparent",
        }}
        animate={{ scale: pressed ? 0.85 : hovering ? 1.7 : 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed z-[998] w-8 h-8 -ml-4 -mt-4 rounded-full border"
      />
    </>
  );
}
