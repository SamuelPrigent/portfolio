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
              className="text-gray-900 transition hover:text-foreground dark:hover:text-white dark:text-muted-foreground"
            >
              LinkedIn
            </a>

            <a
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 transition hover:text-foreground dark:hover:text-white dark:text-muted-foreground"
            >
              GitHub
            </a>

            <span className="text-border">|</span>

            <Link
              href="/cv"
              className="inline-flex items-center gap-1.5 text-gray-900 transition hover:text-foreground dark:hover:text-white dark:text-muted-foreground"
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
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            Created with
            <div className="text-base pl-0.5">♥</div>
          </span>
        </div>
      </div>
    </footer>
  );
}
