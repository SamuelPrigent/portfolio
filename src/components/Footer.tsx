import { socialLinks } from "@/data/content";
import OptimizedImage from "@/utils/OptimizedImage";
import { useEffect, useState } from "react";
import me from "../assets/me.jpg";

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);

  const linkedinHref =
    socialLinks.find((link) => link.label === "LinkedIn")?.href ?? "#";
  const githubHref =
    socialLinks.find((link) => link.label === "GitHub")?.href ?? "#";

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
    <footer className="mt-28 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="text-left">
            <div className="flex items-center gap-2">
              <div className="aspect-square h-11 overflow-hidden rounded-xl border-2 border-white">
                <OptimizedImage
                  className="aspect-square"
                  src={me}
                  alt="pic of me"
                />
              </div>
              <div className="flex flex-col ">
                <p className="text-lg font-semibold text-black">
                  Samuel Prigent
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Développeur Fullstack
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group -mx-2 inline-flex items-center gap-2 rounded-xl px-2 py-1.5 font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              aria-label="Copier l'adresse email"
            >
              <span className="flex h-5 w-5 items-center justify-center text-slate-700 transition group-hover:text-slate-900">
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
              <span>{email}</span>
            </button>

            <div className="text-gray-300">|</div>
            <a
              href={linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-700 transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            >
              LinkedIn
            </a>

            <a
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-700 transition hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mb-2 mt-9 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-7 text-xs text-slate-500 md:flex-row">
          <span>© 2025 Samuel Prigent. Tous droits réservés.</span>
          <span className="inline-flex items-center gap-2 text-xs text-slate-500">
            Created with
            <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4">
              <defs>
                <linearGradient
                  id="footerHeartGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0" stopColor="#0f172a" stopOpacity="1" />
                  <stop offset="1" stopColor="#0f172a" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M12 21s-7-4.35-9.5-8.46C.82 9.8 2.18 6.5 5.6 5.4c2.02-.65 3.82.12 4.9 1.52 1.08-1.4 2.88-2.17 4.9-1.52 3.42 1.1 4.78 4.4 3.1 7.14C19 16.65 12 21 12 21Z"
                fill="url(#footerHeartGradient)"
                stroke="#0f172a"
                strokeWidth="1"
              />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
}
