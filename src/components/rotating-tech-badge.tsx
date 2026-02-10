"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { skills } from "@/data/content";

const techColors: Record<string, { border: string; bg: string }> = {
  React: { border: "border-[#61abfb]/40", bg: "bg-[#61abfb]/10" },
  "Next.js": { border: "border-foreground/30", bg: "bg-foreground/5" },
  JavaScript: { border: "border-[#F7DF1E]/40", bg: "bg-[#F7DF1E]/10" },
  TypeScript: { border: "border-[#3178C6]/40", bg: "bg-[#3178C6]/10" },
  "Tailwind CSS": { border: "border-[#06B6D4]/40", bg: "bg-[#06B6D4]/10" },
  "Node.js": { border: "border-[#339933]/40", bg: "bg-[#339933]/10" },
  Git: { border: "border-[#F05032]/40", bg: "bg-[#F05032]/10" },
};

const rotatingTechs = skills
  .filter((s) => techColors[s.label])
  .map((s) => ({
    name: s.label,
    logo: s.icon,
    ...techColors[s.label],
  }));

const TRANSITION_IN = {
  transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
};
const TRANSITION_OUT = {
  transition: "all 0.5s cubic-bezier(0.4, 0, 1, 1)",
};

export default function RotatingTechBadge() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const interval = setInterval(() => {
      setIsAnimating(false);
      const t1 = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTechs.length);
        const t2 = setTimeout(() => setIsAnimating(true), 200);
        timeouts.push(t2);
      }, 500);
      timeouts.push(t1);
    }, 3100);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, [prefersReducedMotion]);

  const currentTech = rotatingTechs[currentIndex];
  if (!currentTech) return null;

  return (
    <div className="flex items-center justify-end max-sm:justify-center">
      <div
        style={isAnimating ? TRANSITION_IN : TRANSITION_OUT}
        className={`flex aspect-square items-center gap-2 rounded-lg border p-2 ${currentTech.border} ${currentTech.bg} ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <img
          src={currentTech.logo}
          alt={currentTech.name}
          className="h-6 w-6"
        />
      </div>
    </div>
  );
}
