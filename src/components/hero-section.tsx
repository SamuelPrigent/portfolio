"use client";

import { socialLinks } from "@/data/content";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 pb-12 pt-16 sm:pt-20">
      <Spotlight width={380} height={900} smallWidth={160} />

      {/* Name row: photo + name */}
      <div className="flex items-center gap-6">
        <div className="relative h-[130px] aspect-square shrink-0">
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
        laissent pas indifférent. D&apos;une simple idée à la mise en production.
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
