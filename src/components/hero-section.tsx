"use client";

import { socialLinks } from "@/data/content";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 pb-12 pt-16 sm:pt-20">
      {/* SVG gradient background — retro aurora beam effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
        <svg
          className="absolute left-1/2 top-0 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/4"
          viewBox="0 0 1000 700"
          fill="none"
          aria-hidden
        >
          {/* Main aurora sweep */}
          <ellipse
            cx="500"
            cy="280"
            rx="420"
            ry="220"
            fill="url(#aurora-core)"
            opacity="0.18"
            style={{ filter: "blur(60px)" }}
          />
          {/* Secondary beam — offset warm accent */}
          <ellipse
            cx="620"
            cy="200"
            rx="280"
            ry="120"
            fill="url(#aurora-warm)"
            opacity="0.12"
            style={{ filter: "blur(50px)" }}
          />
          {/* Tertiary cool ray — left side */}
          <ellipse
            cx="340"
            cy="340"
            rx="200"
            ry="160"
            fill="url(#aurora-cool)"
            opacity="0.10"
            style={{ filter: "blur(70px)" }}
          />
          {/* Tight bright accent — focal point */}
          <ellipse
            cx="480"
            cy="260"
            rx="120"
            ry="80"
            fill="url(#aurora-bright)"
            opacity="0.15"
            style={{ filter: "blur(40px)" }}
          />
          <defs>
            <radialGradient id="aurora-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
              <stop offset="35%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="aurora-warm" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="aurora-cool" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="aurora-bright" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Name row: photo + name */}
      <div className="flex items-center gap-6">
        <div className="relative h-[130px] aspect-square shrink-0">
          {/* Gradient glow behind photo */}
          <div className="absolute overflow-hidden rounded-full bg-linear-to-br from-violet-600/30 via-indigo-500/40 to-cyan-500/20 " />
          <Image
            src="/images/me.jpg"
            alt="Samuel Prigent"
            className="relative h-full w-full rounded-full object-cover"
            width={70}
            height={70}
            unoptimized
          />
        </div>
        <div>
          <h1 className="font-serif text-4xl italic font-normal leading-tight text-foreground sm:text-5xl">
            Samuel Prigent
          </h1>
          <p className="mt-1 text-lg font-bold text-foreground">
            Développeur Fullstack
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        Je construis des outils à fort impact et des expériences qui ne
        laissent pas indifférent. D'une simple idée à la mise en production.
      </p>

      {/* Social badges */}
      <div className="mt-6 flex flex-wrap gap-3">
        {socialLinks.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
