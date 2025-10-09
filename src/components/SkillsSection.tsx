import { cn } from "@/utils/cn";
import { skillSections } from "../data/content";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto mt-16 max-w-6xl px-0 pt-8 max-[650px]:mt-0 max-[650px]:pt-0 min-[750px]:px-6 "
    >
      <div className="rounded-none bg-white/95 px-[14px] py-12 shadow-[0_35px_70px_-45px_rgba(15,23,42,0.35)] sm:rounded-none md:rounded-[32px] md:px-8 min-[750px]:px-6 lg:rounded-[40px] lg:px-12">
        <div className="space-y-4 text-center max-[389px]:space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
            Stack principale
          </p>
          <h2 className="text-[clamp(2.2rem,3vw,3.4rem)] font-semibold text-slate-900 max-[389px]:top-[10px] max-[389px]:text-[30px]">
            Technologies favorites
          </h2>
          <p className="mx-auto max-w-3xl px-2 text-base leading-relaxed text-slate-600">
            Je m'intéresse particulièrement à ces technologies que j'utilise au
            quotidien.
          </p>
        </div>
        <div className="mt-12 space-y-8">
          {skillSections.map((section) => (
            <article
              key={section.title}
              className={cn(
                "relative overflow-hidden rounded-[32px] border border-transparent px-4 py-6 shadow-[0_30px_60px_-45px_rgba(249,115,22,0.35)] max-[650px]:gap-0 min-[550px]:p-6 min-[710px]:rounded-[32px] min-[710px]:p-8",
                section.border,
                "bg-gradient-to-br from-[#fff1df] via-[#fff7ed] to-[#fffaf3]",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold uppercase tracking-[0.3em] text-slate-900 max-[650px]:m-auto max-[389px]:text-[20px]">
                  {section.title}
                </h3>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 max-[1020px]:grid-cols-2 max-[600px]:grid-cols-1">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-1 max-[750px]:px-0"
                  >
                    <div className="flex items-center gap-[4px] rounded-2xl py-4">
                      <span className="flex min-h-10 min-w-10 items-center justify-center rounded-xl">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="h-6 w-6"
                        />
                      </span>
                      <p className="flex-1 text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
                        {item.label}
                      </p>
                    </div>
                    <div className="flex min-w-[120px] max-w-[140px] gap-1 max-[550px]:justify-center max-[550px]:gap-[3px]">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span
                          key={`${item.label}-${idx}`}
                          className={cn(
                            "h-3 w-4 rounded-[3px] max-[550px]:w-[12px]",
                            idx < item.level
                              ? "bg-gradient-to-r from-[#ff7a18ed] to-[#ffce89de]"
                              : "bg-[#f5ebdd]",
                          )}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <span className="pointer-events-none absolute -right-16 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#ffb347]/50 via-transparent to-transparent blur-3xl" />
              <span className="pointer-events-none absolute -bottom-16 -left-12 h-36 w-36 rounded-full bg-gradient-to-tr from-[#ff7a18]/25 via-transparent to-transparent blur-3xl" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
