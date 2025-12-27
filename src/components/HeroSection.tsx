import { Link } from "react-router-dom";

import { socialLinks } from "../data/content";
import photoSolid from "../assets/4-transparent.png";
import { DownloadIcon } from "./icons";
import OptimizedImage from "../utils/OptimizedImage";

export default function HeroSection() {
  return (
    <div className="xl:pl-[80px] relative pb-3 pt-[7.7rem] max-[1275px]:pt-[6.5rem]">
      <div className="mx-auto max-w-[1200px] px-10 pb-24 max-[550px]:px-5 max-[450px]:px-4">
        <div className="grid items-center gap-16 text-center max-[650px]:gap-[40px] max-[382px]:gap-[30px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:text-left">
          <div className="relative flex flex-col gap-10 max-[750px]:gap-7 max-[450px]:gap-6">
            <div>
              <p className="text-[15px] font-semibold uppercase tracking-widest text-primary">
                Développeur Fullstack
              </p>
              <h1 className="specialFont mt-4 text-[clamp(3.4rem,5vw,62px)] leading-[1.03] text-slate-900 max-[455px]:text-[50px] max-[411px]:text-[45px] max-[358px]:text-[40px]">
                Samuel Prigent<span className="text-primary">.</span>
              </h1>
              <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
                <div className="flex items-center gap-2">
                  <span className="relative inline-flex h-9 w-9 items-center justify-center">
                    <span className="absolute inline-flex h-8 w-8 animate-[ping_3.2s_cubic-bezier(0.16,1,0.3,1)_infinite] rounded-full bg-primary/10" />
                    <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/5" />
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden
                      className="relative h-7 w-7 drop-shadow-[0_12px_18px_rgba(15,23,42,0.22)]"
                    >
                      <defs>
                        <linearGradient
                          id="heroPinGradientA"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop
                            offset="0"
                            stopColor="hsl(var(--primary))"
                            stopOpacity="1"
                          />
                          <stop
                            offset="1"
                            stopColor="hsl(var(--primary))"
                            stopOpacity="0.6"
                          />
                        </linearGradient>
                      </defs>
                      <ellipse
                        cx="12"
                        cy="21"
                        rx="6.8"
                        ry="2.15"
                        fill="rgba(15,23,42,0.10)"
                      />
                      <ellipse
                        cx="12"
                        cy="21"
                        rx="5.3"
                        ry="1.75"
                        fill="rgba(15,23,42,0.26)"
                      />
                      <path
                        d="M12 2.25c-3.6 0-6.5 2.85-6.5 6.4 0 4.54 5.42 10.77 6.15 11.59.2.22.5.35.8.35s.6-.13.8-.35c.73-.82 6.15-7.05 6.15-11.59 0-3.55-2.9-6.4-6.5-6.4Z"
                        fill="url(#heroPinGradientA)"
                        stroke="rgba(15,23,42,0.18)"
                        strokeWidth="0.6"
                      />
                      <circle
                        cx="12"
                        cy="8.75"
                        r="2.4"
                        fill="rgba(255,255,255,0.92)"
                      />
                      <path
                        d="M8.2 7.1c.7-1.9 2.1-3 4-3"
                        fill="none"
                        stroke="rgba(255,255,255,0.72)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <p className="max-w-xl text-[0.95rem] font-medium text-slate-600">
                  Paris · Mobilité France
                </p>
              </div>
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
          <div className="relative bottom-[7px] isolate flex-1">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative z-10 aspect-square h-[414px] rounded-[28px] bg-transparent">
                <div className="absolute left-[-2%] top-[-20px] aspect-square h-[420px] overflow-hidden rounded-full bg-[linear-gradient(135deg,#d3d9dd94_0%,transparent_70%)]"></div>
                <OptimizedImage
                  src={photoSolid}
                  alt="Portrait de Samuel Prigent"
                  preload
                  className="relative -mt-[20px] h-full w-full object-cover drop-shadow-[0_28px_42px_rgba(15,23,42,0.16)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
