import { skills } from "../data/content";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto mt-16 max-w-6xl px-6 pt-8 max-[740px]:px-4 max-[650px]:pt-0"
    >
      <div className="rounded-[40px] border border-[#ffe1c9] bg-white px-10 py-14 shadow-[0_35px_70px_-50px_rgba(15,23,42,0.35)] max-[850px]:px-6 max-[650px]:rounded-[28px] max-[500px]:px-4">
        <div className="space-y-5 text-center max-[430px]:space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
            Compétences techniques
          </p>
          <h2 className="text-[clamp(2.2rem,3vw,3.4rem)] font-semibold text-slate-900 max-[389px]:text-[30px]">
            Technologies favorites
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
            Celles que j’utilise le plus souvent pour construire des produits
            fiables et évolutifs.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-5 gap-10 max-[900px]:grid-cols-4 max-[650px]:grid-cols-3 max-[380px]:grid-cols-2">
          {skills.map(({ label, icon, docUrl }) => (
            <a
              key={label}
              href={docUrl}
              target="_blank"
              rel="noreferrer"
              className="tech-card group flex flex-col items-center gap-2.5 rounded-[22px] px-3 py-5 text-center transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a18] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
            >
              <span className="tech-bubble">
                <img src={icon} alt={label} />
              </span>
              <span className="text-sm font-semibold text-slate-800 transition-colors duration-200">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
