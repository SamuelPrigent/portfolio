"use client";

import { skills, softSkillWords } from "@/data/content";
import RotatingTechBadge from "./rotating-tech-badge";
import { SectionHeading, SectionLabel } from "./section-title";

export default function WhatIBringSection() {
  return (
    <section className="mx-auto mt-10 max-w-3xl px-6 pt-10">
      <div className="space-y-6">
        <div className="grid gap-6 max-sm:gap-4 sm:grid-cols-2">
          <div className="text-left">
            <SectionLabel>Technos</SectionLabel>
            <div className="flex items-center gap-6">
              <SectionHeading>Mes technos</SectionHeading>
              <RotatingTechBadge />
            </div>
          </div>
        </div>

        <div className="grid gap-8 max-sm:gap-6 sm:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-muted-foreground" />
              <h3 className="text-base font-semibold text-foreground">
                Compétences techniques
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <a
                  key={skill.label}
                  href={skill.docUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 transition-colors hover:border-foreground/20"
                >
                  {skill.darkIcon ? (
                    <>
                      <img src={skill.icon} alt={skill.label} className="h-5 w-5 object-contain dark:hidden" />
                      <img src={skill.darkIcon} alt={skill.label} className="hidden h-5 w-5 object-contain dark:block" />
                    </>
                  ) : (
                    <img src={skill.icon} alt={skill.label} className="h-5 w-5 object-contain" />
                  )}
                  <span className="text-sm font-medium text-foreground/80">
                    {skill.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-muted-foreground" />
              <h3 className="text-base font-semibold text-foreground">
                Soft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkillWords.map((word) => (
                <span
                  key={word.text}
                  className="rounded-md border border-border bg-gray-100 px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-gray-200 dark:bg-accent dark:hover:bg-accent/80"
                >
                  {word.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
