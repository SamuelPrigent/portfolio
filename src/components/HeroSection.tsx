import { Link } from "react-router-dom";

import { heroTags, socialLinks } from "../data/content";
import photo from "../assets/proPhoto3.webp";
import { DownloadIcon, SignatureUnderline, SparkleIcon } from "./icons";
import OptimizedImage from "../utils/OptimizedImage";

export default function HeroSection() {
  return (
    <div className="xl:pl-[80px] relative overflow-hidden pt-[6.1rem] max-[1275px]:pt-[6.5rem]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff7ef] via-white to-[#ffeeda]" />
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#ffb567]/20 blur-[180px]" />
        <div className="bg-[#ffd6ad]/28 absolute bottom-0 right-[12%] h-[320px] w-[320px] rounded-full blur-[140px]" />
      </div>
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-10 pb-24 text-center max-[650px]:gap-[40px] max-[550px]:px-5 max-[450px]:px-4 max-[382px]:gap-[30px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:text-left">
        <div className="relative flex flex-col gap-10 max-[750px]:gap-7 max-[450px]:gap-6">
          <SparkleIcon
            className="absolute left-[420px] top-[45px] hidden h-10 w-10 text-[#ff7a18] max-[1175px]:left-[-25px] lg:block"
            aria-hidden
          />
          <div className="flex flex-wrap items-center justify-center gap-3 max-[445px]:hidden max-[377px]:gap-[7px] lg:justify-start">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#d45805]/45 bg-[#fff3e7] px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#c24800] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] max-[445px]:px-3 max-[445px]:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="hidden items-center justify-center max-[445px]:flex">
            <span className="inline-flex items-center rounded-full border border-[#d45805]/45 bg-[#fff3e7] px-5 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#c24800] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] max-[360px]:px-[14px]">
              {heroTags.map((tag, index) => (
                <span key={tag} className="flex items-center">
                  {tag}
                  {index < heroTags.length - 1 && (
                    <span aria-hidden className="mx-2 text-[#d45805]/70">
                      |
                    </span>
                  )}
                </span>
              ))}
            </span>
          </div>
          <div>
            <h1 className="specialFont text-[clamp(3.5rem,5vw,62px)] leading-[1.03] text-slate-900 max-[455px]:text-[50px] max-[411px]:text-[45px] max-[358px]:text-[40px]">
              Samuel Prigent
            </h1>
            <h2 className="relative inline-flex flex-col text-[clamp(2.1rem,3.6vw,2.6rem)] font-semibold text-slate-800">
              <span className="mt-[20px] bg-gradient-to-r from-[#161616] via-[#1a1a1a] to-[#0b0b0b] bg-clip-text text-transparent max-[450px]:mt-[15px] max-[386px]:text-[30px]">
                Développeur Fullstack
              </span>
              <SignatureUnderline className="pointer-events-none absolute left-[23px] top-[79px] h-8 w-[230px] rotate-[5deg] scale-[1.12] opacity-90 max-[1019px]:left-[-2px] max-[1019px]:top-[71px] max-[386px]:left-[-5px] max-[386px]:top-[65px]" />
            </h2>
            <p className="mx-auto mt-[35px] max-w-2xl text-[1.02rem] leading-relaxed text-slate-700">
              Passionné par le développement logiciel et le web, j’aime créer
              des produits utiles et bien pensés, où la clarté et la fluidité
              font toute la différence.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 max-[550px]:gap-[15px] lg:justify-start">
            <Link
              to="/CV"
              onClick={() => window.scrollTo(0, 0)}
              className="btn-download"
            >
              Download CV
              <DownloadIcon className="h-5 w-5" />
            </Link>
            <div className="flex items-center gap-4 max-[420px]:gap-[8px]">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="social-pill"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto w-full max-w-lg">
            <div
              className="absolute inset-0 -translate-x-6 translate-y-6 rounded-[56px] border border-white/60 bg-gradient-to-br from-[#fff4e8] via-[#ffe9d4] to-[#ffd4a9] opacity-70 blur-2xl"
              aria-hidden
            />
            <div className="from-[#ff7a18]/18 absolute -inset-12 rounded-[52px] bg-gradient-to-br via-transparent to-[#ffb347]/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[48px] border-[12px] border-white shadow-[0px_45px_90px_-50px_rgba(15,23,42,0.65)]">
              <OptimizedImage
                src={photo}
                alt="Portrait de Samuel Prigent"
                preload
                className="h-full w-full scale-[1.16] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
