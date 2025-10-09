import { projects } from "../data/content";

export default function ProjectsSection() {
  return (
    <section
      id="projets"
      className="mx-auto mt-16 max-w-6xl px-6 pt-20 max-[650px]:mt-11 max-[650px]:px-[14px]"
    >
      <div className="space-y-4 text-center max-[389px]:space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
          Projets
        </p>
        <h2 className="text-[clamp(2.2rem,3vw,3.4rem)] font-semibold text-slate-900 max-[389px]:text-[30px]">
          Mes réalisations préférées
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 ">
          Chaque projet est l'occasion d'appliquer une démarche produit : discovery rapide, cadrage technique, itérations courtes et mesures de succès.
        </p>
      </div>
      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-orange-100 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden max-[650px]:h-36">
              <img
                src={project.image}
                alt={`Aperçu du projet ${project.title}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#ff7a18]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
              <p className="text-left text-sm text-slate-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#ff7a18] transition hover:underline focus:underline focus-visible:underline"
              >
                Voir le projet
                <span aria-hidden>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
