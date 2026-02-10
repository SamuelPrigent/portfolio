"use client";

import { socialLinks } from "@/data/content";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 pb-12 pt-16 sm:pt-20">
      <Spotlight width={380} height={900} smallWidth={160} />

      {/* Name row: photo + name */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="relative h-[90px] aspect-square shrink-0 max-[350px]:h-[65px] sm:h-[130px]">
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
          <h1 className="font-serif text-3xl italic font-normal leading-tight text-foreground max-[330px]:text-2xl sm:text-5xl">
            Samuel Prigent
          </h1>
          <p className="mt-1 text-lg font-bold text-foreground max-[330px]:text-base">
            Développeur Fullstack
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-base leading-relaxed text-muted-foreground max-[350px]:text-[14px]">
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
            className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-foreground dark:text-muted-foreground"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
