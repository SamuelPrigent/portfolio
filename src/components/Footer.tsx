import { socialLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-[#fdf9f3] ">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,1220px)] -translate-x-1/2 items-center bg-gradient-to-r from-transparent via-[#ffc583] to-transparent "
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-8 text-sm text-slate-600  md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-[10px] text-black ">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-900 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18] "
            >
              <Icon className="h-[22px] w-[22px]" />
            </a>
          ))}
        </div>

        <span className="text-sm text-slate-700">
          © 2025 Samuel Prigent. Tous droits réservés.
        </span>

        <div className="text-xs uppercase tracking-[0.35em] text-slate-900 ">
          Portfolio
        </div>
      </div>
    </footer>
  );
}
