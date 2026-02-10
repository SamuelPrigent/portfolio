import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV | Samuel Prigent",
};

export default function CvPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
        <div className="flex items-start gap-3 lg:flex-col">
          <Link
            href="/"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition hover:border-foreground/20"
            aria-label="Retour"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-foreground/20 lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Retour au portfolio
          </Link>
        </div>
        <iframe
          src="/CV-samuel-prigent.pdf"
          title="CV de Samuel Prigent"
          className="h-[88vh] w-full rounded-lg border border-border lg:h-[93vh]"
        />
      </div>
    </main>
  );
}
