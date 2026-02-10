import Image from "next/image";
import { projects } from "@/data/content";
import { ExternalLinkIcon } from "./icons";
import { SectionHeading, SectionLabel } from "./section-title";

export default function ProjectsSection() {
  return (
    <section className="mx-auto mt-16 max-w-3xl px-6 pt-20">
      <div className="text-left">
        <SectionLabel>Projets</SectionLabel>
        <SectionHeading>Créations personnelles</SectionHeading>
      </div>

      <div className="mt-8 divide-y divide-border">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex gap-6 py-8 max-sm:flex-col"
          >
            {/* Left content */}
            <div className="flex flex-1 flex-col">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <div className="flex shrink-0 gap-2">
                  {project.vercelLink && (
                    <a
                      href={project.vercelLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-7 w-7 items-center justify-center rounded-md border hover:border-gray-400 dark:hover:border-white/30 border-border text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="Voir le projet en ligne"
                    >
                      <ExternalLinkIcon className="h-3.5 w-3.5 text-foreground/70" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-7 w-7 items-center hover:border-gray-400 dark:hover:border-white/30 justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="Voir le code sur GitHub"
                    >
                      <img
                        src="/icons/github.svg"
                        className="h-3.5 w-3.5 dark:invert"
                        alt="GitHub"
                      />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1"
                  >
                    <img
                      src={tech.logo}
                      alt=""
                      className="h-4 w-4 object-contain"
                    />
                    <span className="text-xs font-medium text-foreground/80">
                      {tech.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right preview image */}
            <div className="relative h-[168px] w-[260px] shrink-0 max-sm:w-full">
              <Image
                src={project.image}
                alt={`Aperçu du projet ${project.title}`}
                fill
                sizes="(max-width: 549px) 100vw, 260px"
                className="rounded-lg object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
