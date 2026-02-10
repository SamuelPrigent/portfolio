"use client";

import Link from "next/link";
import { socialLinks } from "@/data/content";
import { DownloadIcon } from "./icons";

const linkedinHref =
  socialLinks.find((link) => link.label === "LinkedIn")?.href ?? "#";
const githubHref =
  socialLinks.find((link) => link.label === "GitHub")?.href ?? "#";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-28 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-3 text-left">
            <img
              src="/logo.jpg"
              alt="Samuel Prigent"
              className="h-10 w-10 rounded-xl"
            />
            <div>
              <p className="flex items-center text-lg text-foreground">
                <span className="font-sans font-semibold">samuelprigent</span>
                <span className="font-mono font-semibold">.com</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Développeur Fullstack
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm">
            <a
              href={linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 transition hover:text-foreground dark:text-muted-foreground"
            >
              LinkedIn
            </a>

            <a
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 transition hover:text-foreground dark:text-muted-foreground"
            >
              GitHub
            </a>

            <span className="text-border">|</span>

            <Link
              href="/cv"
              className="inline-flex items-center gap-1.5 text-gray-900 transition hover:text-foreground dark:text-muted-foreground"
            >
              <DownloadIcon className="h-4 w-4" />
              CV
            </Link>
          </div>
        </div>

        <div className="mb-2 mt-9 flex flex-col items-center justify-between gap-2 border-t border-border pt-7 text-xs text-muted-foreground md:flex-row">
          <span>
            &copy; {currentYear} Samuel Prigent. Tous droits réservés.
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            Created with
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-4 w-4 text-muted-foreground"
            >
              <defs>
                <linearGradient
                  id="footerHeartGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0" stopColor="currentColor" stopOpacity="1" />
                  <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M12 21s-7-4.35-9.5-8.46C.82 9.8 2.18 6.5 5.6 5.4c2.02-.65 3.82.12 4.9 1.52 1.08-1.4 2.88-2.17 4.9-1.52 3.42 1.1 4.78 4.4 3.1 7.14C19 16.65 12 21 12 21Z"
                fill="url(#footerHeartGradient)"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
}
