import { education, experiences } from "../data/content";
import studyIcon from "../assets/study.svg";
import SoftSkills from "./SoftSkills";

export default function ExperienceSection() {
  return (
    <section
      id="parcours"
      className="mx-auto mt-16 max-w-6xl px-6 pt-20 max-[650px]:mt-[30px] max-[650px]:px-[14px]"
    >
      <div className="space-y-6 text-center max-[389px]:space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
          Parcours
        </p>
        <h2 className="text-[clamp(2.2rem,3vw,3.4rem)] font-semibold text-slate-900 max-[389px]:text-[30px]">
          Expériences et formations marquantes
        </h2>
      </div>
      <div className="mt-14 grid gap-[2.5rem] max-[650px]:mt-[30px] min-[900px]:grid-cols-[3fr_2.3fr]">
        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="rounded-[28px] border border-orange-100 bg-white/95 p-8 text-left shadow-[0_25px_45px_-40px_rgba(15,23,42,0.45)] max-[470px]:rounded-[16px] max-[470px]:p-[22px]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#ff7a18]">
                <span className="max-[450px]:hidden">{experience.period}</span>
                <span className="min-[451px]:hidden">
                  {experience.periodShort}
                </span>
                <span className="bg-[#ff7a18]/12 rounded-full py-1 text-[0.7rem] font-semibold tracking-[0.12em] text-[#d75806]">
                  {experience.duration}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-[6px] max-[400px]:mb-[12px] max-[400px]:flex-col">
                <h3 className="mb-[8px] mt-[6px] whitespace-nowrap text-[1.5rem] font-semibold text-slate-900 max-[400px]:mb-0 max-[370px]:text-[1.4rem]">
                  {experience.title}
                </h3>
                <span className="whitespace-nowrap text-[1.05rem] font-medium text-slate-600">
                  {experience.company}
                </span>
              </div>
              <p className="mt-1 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                {experience.contract}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {experience.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.environment.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#ff7a18]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="space-y-6">
          <div className="relative h-full rounded-[28px] border border-orange-100 bg-white/95 p-8 text-left shadow-[0_25px_45px_-40px_rgba(15,23,42,0.35)] max-[550px]:px-4 max-[500px]:border-none max-[500px]:bg-transparent max-[500px]:px-0 max-[500px]:shadow-none">
            <div className="flex w-full items-center justify-between px-1 max-[500px]:px-2">
              <h3 className="text-xl font-semibold text-slate-900">
                Formations
              </h3>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff7a18]/15 text-[#ff7a18]">
                <img src={studyIcon} alt="" aria-hidden className="h-6 w-6" />
              </span>
            </div>
            <ul className="mt-6 space-y-5">
              {education.map((edu) => (
                <li
                  key={edu.title}
                  className="rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_18px_35px_-32px_rgba(15,23,42,0.25)] max-[550px]:px-4"
                >
                  <span className="inline-flex items-center rounded-full bg-[#ff7a18]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff7a18]">
                    {edu.level}
                  </span>
                  <p className="mt-4 text-base font-semibold text-slate-900 max-[550px]:mt-[14px]">
                    {edu.title}
                  </p>
                  <p className="text-sm text-slate-600">{edu.school}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <SoftSkills />
    </section>
  );
}
