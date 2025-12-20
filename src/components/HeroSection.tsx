import { Link } from "react-router-dom";

import { socialLinks } from "../data/content";
import photo from "../assets/proPhotoTest2.webp";
import { DownloadIcon } from "./icons";
import OptimizedImage from "../utils/OptimizedImage";

export default function HeroSection() {
  return (
    <div className="xl:pl-[80px] relative overflow-hidden pt-[6.1rem] max-[1275px]:pt-[6.5rem]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        <div className="pointer-events-none absolute -top-24 left-[10%] h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-[-140px] right-[6%] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-[180px]" />
      </div>
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-10 pb-24 text-center max-[650px]:gap-[40px] max-[550px]:px-5 max-[450px]:px-4 max-[382px]:gap-[30px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:text-left">
        <div className="relative flex flex-col gap-10 max-[750px]:gap-7 max-[450px]:gap-6">
          <div>
            <p className="text-[15px] font-medium uppercase tracking-widest text-primary">
              Développeur Fullstack
            </p>
            <h1 className="specialFont mt-4 text-[clamp(3.4rem,5vw,62px)] leading-[1.03] text-slate-900 max-[455px]:text-[50px] max-[411px]:text-[45px] max-[358px]:text-[40px]">
              Samuel Prigent
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[1.02rem] leading-relaxed text-slate-700">
              Passionné par le développement logiciel et le web, j’aime créer
              des produits utiles et bien pensés, où la clarté et la fluidité
              font toute la différence.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 max-[550px]:gap-[15px] lg:justify-start">
            <Link
              to="/CV"
              onClick={() => window.scrollTo(0, 0)}
              className="btn-download hover:border-primary"
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
                  className="social-pill hover:border-primary"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0px_45px_90px_-60px_rgba(15,23,42,0.65)]">
              <OptimizedImage
                src={photo}
                alt="Portrait de Samuel Prigent"
                preload
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
