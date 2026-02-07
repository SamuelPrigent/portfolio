import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { skills } from "../data/content";

const techColors = {
  React: { border: "border-[#61abfb]/40", bg: "bg-[#61abfb]/10" },
  "Next.js": { border: "border-slate-900/40", bg: "bg-slate-700/10" },
  JavaScript: { border: "border-[#F7DF1E]/40", bg: "bg-[#F7DF1E]/10" },
  TypeScript: { border: "border-[#3178C6]/40", bg: "bg-[#3178C6]/10" },
  "Tailwind CSS": { border: "border-[#06B6D4]/40", bg: "bg-[#06B6D4]/10" },
  "Node.js": { border: "border-[#339933]/40", bg: "bg-[#339933]/10" },
  Adonis: { border: "border-[#5A45FF]/40", bg: "bg-[#5A45FF]/10" },
  AWS: { border: "border-[#FF9900]/40", bg: "bg-[#FF9900]/10" },
  Git: { border: "border-[#F05032]/40", bg: "bg-[#F05032]/10" },
};

const rotatingTechs = [
  {
    name: "React",
    logo: skills.find((s) => s.label === "React")?.icon,
    ...techColors.React,
  },
  {
    name: "Next.js",
    logo: skills.find((s) => s.label === "Next.js")?.icon,
    ...techColors["Next.js"],
  },
  {
    name: "JavaScript",
    logo: skills.find((s) => s.label === "JavaScript")?.icon,
    ...techColors.JavaScript,
  },
  {
    name: "TypeScript",
    logo: skills.find((s) => s.label === "TypeScript")?.icon,
    ...techColors.TypeScript,
  },
  {
    name: "Tailwind CSS",
    logo: skills.find((s) => s.label === "Tailwind CSS")?.icon,
    ...techColors["Tailwind CSS"],
  },
  {
    name: "Adonis",
    logo: skills.find((s) => s.label === "Adonis")?.icon,
    ...techColors.Adonis,
  },
  {
    name: "AWS",
    logo: skills.find((s) => s.label === "AWS")?.icon,
    ...techColors.AWS,
  },
  {
    name: "Git",
    logo: skills.find((s) => s.label === "Git")?.icon,
    ...techColors.Git,
  },
].filter((tech) => tech.logo);

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
    const timeouts: number[] = [];
    const interval = setInterval(() => {
      setIsAnimating(false);
      const t1 = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTechs.length);
        const t2 = window.setTimeout(() => {
          setIsAnimating(true);
        }, 200);
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
    <div className="flex items-center justify-end max-[900px]:justify-center">
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
