import { useEffect, useState } from "react";

import photo from "../assets/proPhotoTest2.webp";
// import photo from "../assets/4.jpg";
import OptimizedImage from "../utils/OptimizedImage";
// import { MailIcon } from "./icons";
import SectionTitleBig from "./sectionTitleBig";
import SectionTitleSmall from "./sectionTitleSmall";

export default function AboutMe() {
  const [isCopied, setIsCopied] = useState(false);
  const email = "contact@samuelprigent.com";

  useEffect(() => {
    if (!isCopied) return;
    const timeout = window.setTimeout(() => setIsCopied(false), 1000);
    return () => window.clearTimeout(timeout);
  }, [isCopied]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <section className="mx-auto mt-28 max-w-6xl px-6 pb-8 max-[650px]:mt-10 max-[650px]:px-[14px]">
      <div className="flex items-start gap-16">
        <div className="shadow-[0_35px_70px_-60px_rgba(42, 29, 15, 0.55)] relative aspect-square h-[300px] bg-white">
          <div className="absolute right-[-20px] top-[-14px] z-[100]">
            <span className="relative inline-flex h-10 items-center rounded-[6px] border border-yellow-300/25 bg-[#15120d] px-2.5 py-1.5 font-mono text-[12px] font-bold leading-none text-yellow-200 shadow-[0_18px_40px_-36px_rgba(15,23,42,0.25)] ring-1 ring-amber-400/15">
              <span className="text-yellow-300">$</span>
              <span className="ml-1 text-yellow-200">salut</span>
              <span className="ml-0.5 animate-pulse text-yellow-300 motion-reduce:animate-none motion-reduce:opacity-100">
                |
              </span>
            </span>
          </div>
          <OptimizedImage
            src={photo}
            alt="Portrait de Samuel Prigent"
            className="aspect-square h-full overflow-hidden rounded-2xl border border-slate-200 object-cover"
            preload
          />
        </div>

        <div className="text-left">
          <SectionTitleSmall>À propos</SectionTitleSmall>
          <SectionTitleBig>Qui suis-je ?</SectionTitleBig>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            Développeur Full-Stack passionné par le logiciel. Je transforme des
            besoins métiers en applications impactantes. Je valorise l'UX pour
            accélérer l'adoption et faciliter l'exécution. Aillant un attrait
            particulier pour les SaaS PLG. Je questionne les leviers business de
            mon marché et anticipe les défis techniques futures.
          </p>
          {/* <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            De part un attrait particulier pour l'écosystème des SaaS PLG. Je
            m'intéresse aux leviers business et anticipe les défis auxquels mon
            code devra faire face.
          </p> */}

          <div className="mt-7">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="bg- group inline-flex items-center gap-3 rounded-xl bg-gray-400/5 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_18px_40px_-36px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5  hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              aria-label="Copier l'adresse email"
            >
              {/* <MailIcon className="h-4 w-4 text-slate-700" /> */}
              <span className="ml-1 flex h-5 w-5 items-center justify-center text-slate-700 transition group-hover:text-slate-900">
                {isCopied ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="h-4 w-4"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="h-4 w-4"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                  </svg>
                )}
              </span>
              <span className="text-primary">{email}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
