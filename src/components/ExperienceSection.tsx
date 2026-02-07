import { education, experiences } from "../data/content";
import studyIcon from "../assets/study.svg";
import { formatPeriod } from "../utils/dateUtils";
import SectionTitleSmall from "./sectionTitleSmall";
import SectionTitleBig from "./sectionTitleBig";

export default function ExperienceSection() {
  return (
    <section
      id="parcours"
      className="mx-auto mt-16 max-w-6xl px-6 pt-20 max-[650px]:mt-[30px] max-[650px]:px-[14px]"
    >
      <div className="text-left">
        <SectionTitleSmall>Parcours</SectionTitleSmall>
        <div className="flex items-center gap-6">
          <SectionTitleBig>Mes expériences</SectionTitleBig>
        </div>
      </div>
      <div className="mt-8 grid gap-[2rem] max-[650px]:mt-[30px] min-[900px]:grid-cols-[3fr_2.3fr]">
        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="rounded-2xl border border-gray-100 bg-white/95 p-8 text-left shadow-[0_25px_45px_-40px_rgba(15,23,42,0.45)] max-[470px]:rounded-xl max-[470px]:p-[22px]"
            >
              <div className="flex justify-between align-top">
                <div>
                  <h3 className="text-[1.5rem] font-semibold text-slate-900 max-[370px]:text-[1.4rem]">
                    {experience.title}
                  </h3>
                  <p className="mt-1 text-[1.05rem] font-medium text-slate-600">
                    {experience.company} - {experience.contract}
                  </p>
                </div>
                <div className="flex aspect-square h-[46px] items-center justify-center overflow-hidden rounded-lg p-[3.5px]">
                  <img
                    src={experience.logo}
                    alt={`logo ${experience.company}`}
                    width={39}
                    height={39}
                  />
                </div>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                {formatPeriod(experience.startDate, experience.endDate)}
              </p>
              <ul className="mt-4 space-y-2">
                {experience.missions.map((mission) => (
                  <li
                    key={mission}
                    className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                  >
                    <span className="relative top-[4.5px] mt-1.5  h-[1.5px] w-[7px] shrink-0 bg-slate-400" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1"
                  >
                    <img
                      src={tech.logo}
                      alt=""
                      className="h-4 w-4 object-contain"
                    />
                    <span className="text-xs font-medium text-slate-700">
                      {tech.name}
                    </span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="space-y-6">
          <div className="relative h-auto rounded-2xl border border-gray-100 bg-white/95 p-8 text-left shadow-[0_25px_45px_-40px_rgba(15,23,42,0.35)] max-[550px]:px-4 max-[500px]:border-none max-[500px]:bg-transparent max-[500px]:px-0 max-[500px]:shadow-none">
            <div className="flex w-full items-center justify-between px-1 max-[500px]:px-2">
              <h3 className="text-xl font-semibold text-slate-900">
                Formations
              </h3>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full">
                <img src={studyIcon} alt="" aria-hidden className="h-6 w-6" />
              </span>
            </div>
            <ul className="mt-6 space-y-5">
              {education.map((edu) => (
                <li
                  key={edu.title}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_18px_35px_-32px_rgba(15,23,42,0.25)] max-[550px]:px-4"
                >
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase text-gray-600">
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
    </section>
  );
}
