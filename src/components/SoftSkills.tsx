import { softSkillWords } from "../data/content";
import { SparkleIcon, StarIcon } from "./icons";

export default function SoftSkills() {
  return (
    <section
      id="soft-skills"
      className="relative mt-[85px] overflow-hidden rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-12 shadow-[0_25px_45px_-40px_rgba(249,115,22,0.35)] max-[650px]:mt-12 max-[550px]:px-8"
    >
      <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
        Soft skills
      </p>
      <h3 className="mt-3 text-center text-2xl font-semibold text-slate-900">
        L'état d'esprit que j'adopte dans une équipe
      </h3>
      <div className="relative mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3 max-[700px]:gap-4 md:gap-5">
        {softSkillWords.map((word) => (
          <span
            key={word.text}
            className={`rounded-full border border-[#ff7a18]/45 bg-[#fff5eb] px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#c85a00] shadow-[0_10px_25px_-18px_rgba(249,115,22,0.7)] backdrop-blur-sm transition hover:-translate-y-0.5 ${word.className}`}
          >
            {word.text}
          </span>
        ))}
      </div>
      <SparkleIcon className="pointer-events-none absolute bottom-7 left-12 h-16 w-16 rotate-2 max-[740px]:bottom-[24px] max-[740px]:left-[10px] max-[740px]:h-10 max-[740px]:w-10 max-[565px]:hidden" />
      <StarIcon className="pointer-events-none absolute right-6 top-4 h-20 w-20 max-[900px]:h-14 max-[750px]:w-10" />
      <SparkleIcon className="pointer-events-none absolute left-12 top-24 h-8 w-8 rotate-[-5deg] max-[740px]:left-[30px] max-[740px]:top-[37px]" />
    </section>
  );
}
