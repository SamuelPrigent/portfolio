import { projects } from "../data/content";
import OptimizedImage from "../utils/OptimizedImage";
import { ExternalLinkIcon } from "./icons";
import githubSvg from "../assets/github.svg";
import SectionTitleSmall from "./sectionTitleSmall";
import SectionTitleBig from "./sectionTitleBig";

export default function ProjectsSection() {
  return (
    <section
      id="projets"
      className="mx-auto mt-16 max-w-6xl px-6 pt-20 max-[650px]:mt-11 max-[650px]:px-[14px]"
    >
      <div className="text-left">
        <SectionTitleSmall>Projets</SectionTitleSmall>
        <SectionTitleBig>Mes créations</SectionTitleBig>
        <p className="max-w-3xl text-left text-base leading-relaxed text-slate-600">
          Quelques projets sur lesquels j'ai travaillé
        </p>
      </div>
      <div className="mt-10 grid gap-6 max-[1024px]:grid-cols-2 max-[650px]:grid-cols-1 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex h-[380px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:translate-y-[-3px] hover:border-slate-300 hover:shadow-md"
          >
            <div className="relative h-0 w-full overflow-hidden pb-[47%]">
              <OptimizedImage
                src={project.image}
                alt={`Aperçu du projet ${project.title}`}
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
                <div className="flex shrink-0 gap-2">
                  {project.vercelLink && (
                    <a
                      href={project.vercelLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      aria-label="Voir le projet en ligne"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      aria-label="Voir le code sur GitHub"
                    >
                      <img
                        src={githubSvg}
                        className="h-4 w-4"
                        alt="icon github"
                      />
                    </a>
                  )}
                </div>
              </div>
              <p className="line-clamp-4 text-left text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
