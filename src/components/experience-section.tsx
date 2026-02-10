import { education, experiences } from "@/data/content";
import { formatPeriod } from "@/utils/dateUtils";
import { CertificateIcon } from "./icons";
import { SectionHeading, SectionLabel } from "./section-title";

export default function ExperienceSection() {
  return (
    <section className="mx-auto mt-16 max-w-3xl px-6 pt-20">
      <div className="text-left">
        <SectionLabel>Parcours</SectionLabel>
        <SectionHeading>Mes expériences</SectionHeading>
      </div>

      <div className="mt-8 divide-y divide-border">
        {experiences.map((experience) => (
          <article key={experience.id} className="py-8 text-left">
            <div className="flex justify-between align-top">
              <div>
                <h3 className="text-[1.5rem] font-semibold text-foreground max-sm:text-[1.3rem]">
                  {experience.title}
                </h3>
                <p className="mt-1 text-[1.05rem] font-medium text-muted-foreground">
                  {experience.company} &mdash; {experience.contract}
                </p>
              </div>
              <div className="flex aspect-square h-[46px] items-center justify-center overflow-hidden rounded-lg p-[3.5px]">
                <img
                  src={experience.logo}
                  alt={`logo ${experience.company}`}
                  width={39}
                  height={39}
                  className="rounded-md"
                />
              </div>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {formatPeriod(experience.startDate, experience.endDate)}
            </p>
            <ul className="mt-4 space-y-2">
              {experience.missions.map((mission) => (
                <li
                  key={mission}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="relative top-[7px] h-[1.5px] w-[7px] shrink-0 bg-muted-foreground/50" />
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1"
                >
                  {tech.darkLogo ? (
                    <>
                      <img src={tech.logo} alt="" className="h-4 w-4 object-contain dark:hidden" />
                      <img src={tech.darkLogo} alt="" className="hidden h-4 w-4 object-contain dark:block" />
                    </>
                  ) : (
                    <img src={tech.logo} alt="" className="h-4 w-4 object-contain" />
                  )}
                  <span className="text-xs font-medium text-foreground/80">
                    {tech.name}
                  </span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Certification Bac+5 */}
      {education.map((edu) => (
        <div
          key={edu.level}
          className="mt-4 flex items-center gap-3 border-b border-border px-1 py-4"
        >
          <CertificateIcon className="h-5 w-5 shrink-0 text-muted-foreground" />
          <div>
            <p className="text-sm font-semibold text-foreground">
              {edu.level} &mdash; {edu.title}
            </p>
            <p className="text-xs text-muted-foreground">{edu.school}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
