import { skills, softSkillWords } from "../data/content";
import RotatingTechBadge from "./RotatingTechBadge";
import SectionTitleBig from "./sectionTitleBig";
import SectionTitleSmall from "./sectionTitleSmall";

export default function WhatIBringSection() {
  return (
    <section
      id="what-i-bring"
      className="mx-auto mb-4 mt-10 max-w-6xl px-6 pt-10 max-[650px]:mt-11 max-[650px]:px-[14px]"
    >
      <div className="space-y-6">
        <div className="grid gap-6 max-[900px]:gap-4 min-[900px]:grid-cols-2">
          <div className="text-left">
            <SectionTitleSmall>Compétences</SectionTitleSmall>
            <div className="flex items-center gap-6">
              <SectionTitleBig>Ce que j'apporte</SectionTitleBig>
              <RotatingTechBadge />
            </div>
          </div>
        </div>

        <div className="grid gap-8 max-[900px]:gap-6 min-[900px]:grid-cols-2">
          <div className="space-y-4 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <h3 className="text-base font-semibold text-slate-900">
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
                  className="flex items-center gap-2 rounded-lg border border-border bg-gray-100/10 px-3 py-2 transition-colors hover:border-primary/50"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="h-5 w-5 object-contain"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    {skill.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <h3 className="text-base font-semibold text-slate-900">
                Soft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkillWords.map((word) => (
                <span
                  key={word.text}
                  className={`rounded-md border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10`}
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
