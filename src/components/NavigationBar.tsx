import { cn } from "@/utils/cn";
import { useCallback, useEffect, useState } from "react";

import { navItems } from "../data/content";
import type { Layout } from "../types/home";
import {
  HamburgerIcon,
  // HomeIcon
} from "./icons";

const determineLayout = (width: number): Layout => {
  if (width >= 1275) return "desktop";
  if (width >= 750) return "tablet";
  return "mobile";
};

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState<string>("top");
  const [isNavCondensed, setIsNavCondensed] = useState(false);
  const [
    // isWideLayout,
    // setIsWideLayout,
  ] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 1275 : false,
  );
  const [actualLayout, setActualLayout] = useState<Layout>(() => {
    if (typeof window === "undefined") return "desktop";
    return determineLayout(window.innerWidth);
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSetLayout = useCallback((width: number) => {
    const nextLayout = determineLayout(width);
    setActualLayout((previousLayout) =>
      previousLayout === nextLayout ? previousLayout : nextLayout,
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined" || typeof document === "undefined") {
        return;
      }

      const scrollPosition = window.scrollY + 260;
      let current = "top";

      const shouldCondense = window.scrollY > 450;
      setIsNavCondensed((prev) =>
        prev === shouldCondense ? prev : shouldCondense,
      );

      const contactSection = document.getElementById("contact");
      const isNearBottom =
        window.innerHeight + window.scrollY >=
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
          140;

      navItems.forEach((item) => {
        const section = document.getElementById(item.target);
        if (!section) return;
        const sectionTop = section.offsetTop - 160;
        if (scrollPosition >= sectionTop) {
          current = item.target;
        }
      });

      if (contactSection && isNearBottom) {
        current = "contact";
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const width = window.innerWidth;
      //   setIsWideLayout(width >= 1275);
      handleSetLayout(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleSetLayout]);

  //   const isDesktopLayout = actualLayout === "desktop" || isWideLayout;
  const isTabletLayout = actualLayout === "tablet";
  const isMobileLayout = actualLayout === "mobile";

  useEffect(() => {
    if (!isMobileLayout) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileLayout]);

  const handleScrollTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("top");
  };

  const handleNavClick = (target: string) => {
    if (typeof document === "undefined") return;
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(target);
      if (actualLayout === "mobile") {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* {isDesktopLayout && (
        <aside className="fixed left-4 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-4 rounded-[28px] border border-white/70 bg-white/80 p-[6px] shadow-[0_28px_56px_-44px_rgba(15,23,42,0.65)] backdrop-blur-lg">
          <div className="group relative">
            <button
              type="button"
              onClick={handleScrollTop}
              aria-label="Revenir en haut"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18] ${
                activeSection === "top"
                  ? "border-[#ff7a18] bg-[#ff7a18] text-white shadow-[0_12px_26px_-12px_rgba(255,122,24,0.65)]"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#ff7a18] hover:text-[#ff7a18]"
              }`}
            >
              <HomeIcon className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Accueil</span>
            </button>
            <span className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-sm transition group-hover:opacity-100">
              Accueil
            </span>
          </div>
          {navItems.map((item) => (
            <div key={item.target} className="group relative">
              <button
                type="button"
                onClick={() => handleNavClick(item.target)}
                aria-label={item.label}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18] ${
                  activeSection === item.target
                    ? "border-[#ff7a18] bg-[#ff7a18] text-white shadow-[0_12px_26px_-12px_rgba(255,122,24,0.65)]"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#ff7a18] hover:text-[#ff7a18]"
                }`}
              >
                <item.Icon aria-hidden className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">{item.label}</span>
              </button>
              <span className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-sm transition group-hover:opacity-100">
                {item.label}
              </span>
            </div>
          ))}
        </aside>
      )}
 */}
      {isTabletLayout && (
        <header
          className={cn(
            "fixed top-0 z-30 w-full backdrop-blur transition-all duration-300 ease-out",
            "border-b border-[#fce0c5] bg-[#fdf7f1]/90 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.5)]",
            isNavCondensed ? "py-1.5" : "py-3",
          )}
        >
          <div className="mx-auto flex max-w-6xl items-center gap-6 px-4">
            <button
              type="button"
              onClick={handleScrollTop}
              className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18]"
            >
              <span className="text-base font-semibold uppercase tracking-[0.42em] text-slate-900">
                SamDev
              </span>
            </button>
            <nav className="ml-auto flex items-center gap-3 text-sm font-semibold text-slate-600">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => handleNavClick(item.target)}
                  className={cn(
                    "rounded-full px-3 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18]",
                    activeSection === item.target
                      ? "text-[#ff7a18]"
                      : "text-slate-600 hover:text-[#ff7a18]",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </header>
      )}

      {isMobileLayout && (
        <>
          <header
            className={cn(
              "durée-300 fixed top-0 z-30 w-full backdrop-blur transition-all ease-out",
              "border-b border-[#fce0c5] bg-[#fdf7f1]/90 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.5)]",
              isNavCondensed ? "py-1.5" : "py-3",
            )}
          >
            <div className="relative mx-auto flex max-w-6xl items-center gap-6 px-4">
              <button
                type="button"
                onClick={handleScrollTop}
                className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18]"
              >
                <span className="text-base font-semibold uppercase tracking-[0.42em] text-slate-900">
                  SamDev
                </span>
              </button>

              <div className="ml-auto">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ffdbc1] bg-white/90 text-slate-700 shadow-[0_14px_28px_-24px_rgba(15,23,42,0.28)] transition hover:border-[#ff7a18] hover:text-[#ff7a18] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18]"
                  aria-label={
                    isMobileMenuOpen
                      ? "Fermer la navigation"
                      : "Ouvrir la navigation"
                  }
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-nav-panel"
                >
                  <HamburgerIcon
                    className="h-6 w-6"
                    isOpen={isMobileMenuOpen}
                  />
                </button>

                <div
                  id="mobile-nav-panel"
                  className={cn(
                    "absolute right-0 top-full mt-3 w-[clamp(16rem,75vw,18rem)] overflow-hidden rounded-[24px] border border-[#ffd7b2] bg-white/95 shadow-[0_24px_48px_-32px_rgba(15,23,42,0.55)] backdrop-blur transition-all duration-200 ease-out",
                    isMobileMenuOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0",
                  )}
                >
                  <nav className="flex flex-col divide-y divide-[#ffe6d1] text-left">
                    {navItems.map((item) => (
                      <button
                        key={item.target}
                        type="button"
                        onClick={() => handleNavClick(item.target)}
                        className={cn(
                          "flex items-center justify-center px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition",
                          activeSection === item.target
                            ? "text-[#ff7a18]"
                            : "text-slate-700 hover:text-[#ff7a18]",
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </header>

          {isMobileMenuOpen && (
            <button
              type="button"
              aria-label="Fermer la navigation"
              className="fixed inset-0 z-20 bg-slate-900/10 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              onKeyDown={(event) => {
                if (
                  event.key === "Escape" ||
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              <span className="sr-only">Fermer la navigation</span>
            </button>
          )}
        </>
      )}
    </>
  );
}
