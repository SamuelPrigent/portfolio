import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import photo from "../assets/proPhoto3.jpg";
import fifo from "../assets/preview-fifo.png";
import kasa from "../assets/preview-kasa.png";
import lespetitsplats from "../assets/preview-lespetitsplats.png";
import mdd from "../assets/preview-mdd.png";
import rentals from "../assets/preview-rentals.png";
import reactLogo from "../assets/logo-react.svg";
import typescriptLogo from "../assets/logo-typescript.svg";
import tailwindLogo from "../assets/logo-tailwindcss.svg";
import nextLogo from "../assets/nextBlack.svg";
import nodeLogo from "../assets/logo-node.svg";
import prismaLogo from "../assets/logo-prisma.svg";
import expressLogo from "../assets/logo-express.svg";
import mongodbLogo from "../assets/logo-mongodb.svg";
import cypressLogo from "../assets/cypress.svg";
import jestLogo from "../assets/jest.svg";
import vitestLogo from "../assets/logo-vitest.svg";
import figmaLogo from "../assets/logo-figma.svg";
import gitLogo from "../assets/logo-git.svg";

const heroTags = ["Développeur Full-Stack", "React & Node.js"];

type NavItem = {
  label: string;
  target: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

type SocialLink = {
  href: string;
  label: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

type SkillSectionItem = { label: string; icon: string; level: number };

type SkillSection = {
  title: string;
  gradient: string;
  border: string;
  items: SkillSectionItem[];
};

type SoftSkillWord = {
  text: string;
  className: string;
};

const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    focusable="false"
  >
    <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.605 0 4.268 2.371 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452z" />
  </svg>
);

const SparkleIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
    focusable="false"
  >
    <path
      d="M12 5.5 13.45 9l3.55 1.45L13.45 11.9 12 15.4 10.55 11.9 7 10.45 10.55 9 12 5.5Z"
      stroke="#ffb347"
      strokeWidth="1.1"
      fill="#fff5eb"
    />
  </svg>
);

const GitHubIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    focusable="false"
  >
    <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.18-.13-.3-.54-1.52.1-3.17 0 0 1-.32 3.29 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.8 1.23 1.87 1.23 3.18 0 4.61-2.81 5.63-5.48 5.93.43.38.82 1.12.82 2.26v3.35c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
  </svg>
);

const MailIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden
    focusable="false"
  >
    <rect x={3} y={5} width={18} height={14} rx={2} ry={2} />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const DownloadIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    focusable="false"
  >
    <path d="M12 16a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42L11 12.59V4a1 1 0 1 1 2 0v8.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29ZM5 20a3 3 0 0 1-3-3v-4a1 1 0 1 1 2 0v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3Z" />
  </svg>
);

const ToolIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M5.33 3.272a3.5 3.5 0 0 1 4.472 4.473L20.647 18.59l-2.122 2.122L7.68 9.867a3.5 3.5 0 0 1-4.472-4.474L5.444 7.63a1.5 1.5 0 0 0 2.121-2.121zm10.367 1.883l3.182-1.768l1.414 1.415l-1.768 3.182l-1.768.353l-2.12 2.121l-1.415-1.414l2.121-2.121zm-7.071 7.778l2.121 2.122l-4.95 4.95A1.5 1.5 0 0 1 3.58 17.99l.097-.107z"
    />
  </svg>
);

const CapIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
      <path d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4z" />
      <path
        strokeLinecap="round"
        d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"
      />
    </g>
  </svg>
);

const HomeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    focusable="false"
  >
    <path d="M11.3 2.3a1 1 0 0 1 1.4 0l8 8a1 1 0 0 1-.7 1.7H19v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-5h-2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9H4a1 1 0 0 1-.7-1.7l8-8Z" />
  </svg>
);

const StarIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    aria-hidden
    focusable="false"
  >
    <path
      d="M20 4 24.77 14.3 36 15.64 27.82 23.36 29.96 34.5 20 29.08 10.04 34.5 12.18 23.36 4 15.64 15.23 14.3 20 4Z"
      stroke="url(#starGradient)"
      strokeWidth="1.6"
      fill="url(#starFill)"
    />
    <defs>
      <linearGradient
        id="starGradient"
        x1="20"
        x2="32"
        y1="4"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ffb347" />
        <stop offset="1" stopColor="#ff7a18" />
      </linearGradient>
      <radialGradient
        id="starFill"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 18 -18 0 20 20)"
      >
        <stop stopColor="#fff2e0" stopOpacity="0.9" />
        <stop offset="1" stopColor="#fff2e0" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

const navItems: NavItem[] = [
  { label: "Compétences", target: "skills", Icon: ToolIcon },
  { label: "Expériences", target: "parcours", Icon: CapIcon },
  { label: "Contact", target: "contact", Icon: MailIcon },
];

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/samuel-prigent/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://github.com/SamuelPrigent?tab=repositories",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  { href: "mailto:samuel.prigent@yahoo.fr", label: "Email", Icon: MailIcon },
];

const skillSections: SkillSection[] = [
  {
    title: "Back-End",
    gradient: "from-[#fff1df] via-[#fff6ec] to-[#fff8ef]",
    border: "border-[#ff9a45]/35",
    items: [
      { label: "Node.js", icon: nodeLogo, level: 5 },
      { label: "Express", icon: expressLogo, level: 4 },
      { label: "Prisma", icon: prismaLogo, level: 4 },
      { label: "MongoDB", icon: mongodbLogo, level: 3 },
      { label: "Git", icon: gitLogo, level: 4 },
      { label: "Vitest", icon: vitestLogo, level: 3 },
    ],
  },
  {
    title: "Front-End",
    gradient: "from-[#fff1df] via-[#fff7ed] to-[#fffaf3]",
    border: "border-[#ffb347]/35",
    items: [
      { label: "React", icon: reactLogo, level: 5 },
      { label: "TypeScript", icon: typescriptLogo, level: 5 },
      { label: "Next.js", icon: nextLogo, level: 4 },
      { label: "Tailwind CSS", icon: tailwindLogo, level: 4 },
      { label: "Cypress", icon: cypressLogo, level: 3 },
      { label: "Jest", icon: jestLogo, level: 4 },
      { label: "Figma", icon: figmaLogo, level: 2 },
    ],
  },
];

const softSkillWords: SoftSkillWord[] = [
  { text: "Curieux", className: "-rotate-3" },
  { text: "Esprit d'équipe", className: "rotate-3" },
  { text: "Communicant et réactif", className: "rotate-1" },
  { text: "Bonne humeur", className: "-rotate-1" },
  { text: "Feedback lover", className: "-rotate-2" },
  { text: "Autonomie", className: "-rotate-3" },
  { text: "Résolution de problème", className: "rotate-1" },
];

const experiences = [
  {
    period: "2025 · 12 mois",
    title: "Dir IPS, éditeur de logiciels — Alternance",
    description:
      "Conception d'un algorithme générant des jeux de données pour automatiser la facturation. Évolution d'une API Go interfaçant les systèmes de santé (DMP, INS). Refonte du site Wordpress pour accélérer la communication.",
    environment: ["Go", "PHP", "Symfony", "Wordpress", "OpenAI"],
  },
  {
    period: "2024 · 2 mois",
    title: "Dir IPS, éditeur de logiciels — Stage",
    description:
      "Création de fonctionnalités d'interface personnalisables (thèmes, darkmode) et d'un module de déconnexion automatique. Participation aux revues de code et au suivi qualité.",
    environment: ["PHP", "Symfony", "Bootstrap", "PostgreSQL"],
  },
];

const education = [
  {
    period: "2025",
    title: "(Bac+5) Développeur Full-Stack – Java & Angular",
    school: "OpenClassrooms",
  },
  {
    period: "2023",
    title: "(Bac+3) Développeur d'Application JavaScript React",
    school: "OpenClassrooms",
  },
  {
    period: "2019",
    title: "(Licence) STAPS, Entraînement Sportif",
    school: "Université Paris-Saclay, site d'Orsay",
  },
];

const projects = [
  {
    title: "FIFO",
    description:
      "File d'attente intelligente avec priorisation des crédits. Front React, backend Express, monitoring en temps réel.",
    image: fifo,
    link: "https://github.com/SamuelPrigent/FIFO",
    tags: ["React", "Express"],
  },
  {
    title: "MDD",
    description:
      "Plateforme éditoriale Angular + Spring Boot. Gestion des abonnements thématiques et modération avancée.",
    image: mdd,
    link: "https://github.com/SamuelPrigent/MondeDeDev",
    tags: ["Angular", "Spring Boot"],
  },
  {
    title: "Rentals",
    description:
      "API REST sécurisée JWT pour la gestion de locations. Upload média via Cloudinary et dashboard Angular.",
    image: rentals,
    link: "https://github.com/SamuelPrigent/Rentals-Backend",
    tags: ["Angular", "Spring Boot"],
  },
  {
    title: "Les Petits Plats",
    description:
      "Moteur de recherche performant avec filtrage multi-critères et UI responsive, 100% Vanilla JS.",
    image: lespetitsplats,
    link: "https://samuelprigent.github.io/LesPetitsPlats/",
    tags: ["JavaScript", "Algorithme"],
  },
  {
    title: "Kasa",
    description:
      "Application de location immersive avec animations, gestion d'état fine et navigation fluide.",
    image: kasa,
    link: "https://samuelprigent.github.io/Kasa/",
    tags: ["React", "Design"],
  },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("top");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined" || typeof document === "undefined") {
        return;
      }

      const scrollPosition = window.scrollY + 200;
      let current = "top";

      navItems.forEach((item) => {
        const section = document.getElementById(item.target);
        if (!section) return;
        if (scrollPosition >= section.offsetTop) {
          current = item.target;
        }
      });

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    if (typeof document === "undefined") return;
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(target);
    }
  };

  const handleScrollTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("top");
  };

  return (
    <div className="min-h-screen w-full bg-[#fdf9f3] text-slate-900">
      <aside className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-[0_28px_56px_-44px_rgba(15,23,42,0.65)] backdrop-blur-lg lg:flex">
        <div className="group relative">
          <button
            type="button"
            onClick={handleScrollTop}
            aria-label="Revenir en haut"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 ${
              activeSection === "top"
                ? "border-[#ff7a18] bg-[#ff7a18] text-white shadow-[0_12px_26px_-12px_rgba(255,122,24,0.65)]"
                : "border-slate-200 bg-white text-slate-500 hover:border-[#ff7a18] hover:text-[#ff7a18]"
            }`}
          >
            <HomeIcon className="h-4 w-4" />
            <span className="sr-only">Accueil</span>
          </button>
          <span className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-sm transition group-hover:opacity-100">
            Accueil
          </span>
        </div>
        <span className="h-8 w-px bg-slate-200/80" aria-hidden />
        {navItems.map((item) => (
          <div key={item.target} className="group relative">
            <button
              type="button"
              onClick={() => handleNavClick(item.target)}
              aria-label={item.label}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 ${
                activeSection === item.target
                  ? "border-[#ff7a18] bg-[#ff7a18] text-white shadow-[0_12px_26px_-12px_rgba(255,122,24,0.65)]"
                  : "border-slate-200 bg-white text-slate-500 hover:border-[#ff7a18] hover:text-[#ff7a18]"
              }`}
            >
              <item.Icon aria-hidden className="h-4 w-4" />
              <span className="sr-only">{item.label}</span>
            </button>
            <span className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-sm transition group-hover:opacity-100">
              {item.label}
            </span>
          </div>
        ))}
      </aside>

      <div className="sticky top-4 z-30 px-6 lg:hidden">
        <nav className="flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-600 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] backdrop-blur">
          <button
            type="button"
            onClick={handleScrollTop}
            aria-label="Revenir en haut"
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
              activeSection === "top"
                ? "border-[#ff7a18] bg-[#ff7a18] text-white"
                : "border-slate-200 bg-white text-slate-500 hover:border-[#ff7a18] hover:text-[#ff7a18]"
            }`}
          >
            <HomeIcon className="h-4 w-4" />
            <span className="sr-only">Accueil</span>
          </button>
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleNavClick(item.target)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 transition ${
                activeSection === item.target
                  ? "bg-[#ff7a18] text-white shadow"
                  : "bg-white/60 text-slate-600 hover:bg-white hover:text-[#ff7a18]"
              }`}
            >
              <item.Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-100 via-white to-amber-50" />
        <header className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-24 pt-20 lg:flex-row lg:items-center">
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap items-center gap-3">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#d45805] bg-[#fff1e4] px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#c24800] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-3 text-left">
                <p className="text-base font-semibold uppercase tracking-[0.35em] text-[#ff7a18]">
                  Bonjour, je m'appelle
                </p>
                <div className="flex flex-nowrap items-center gap-4">
                  <h1 className="whitespace-nowrap text-[clamp(3.2rem,4.8vw,5.4rem)] font-semibold leading-[1.02] text-slate-900">
                    Samuel Prigent
                  </h1>
                </div>
                <p className="max-w-2xl text-[1.15rem] leading-relaxed text-slate-700">
                  Développeur passionné par le développement logiciel et le web.
                  Je m'éppanouis dans les environnements dynamiques et réactif.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  to="/CV"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-3 rounded-full border-2 border-slate-900 bg-white px-7 py-3 text-base font-semibold text-slate-900 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5 hover:border-[#ff7a18] hover:text-[#ff7a18]"
                >
                  Download CV
                  <DownloadIcon className="h-5 w-5" />
                </Link>
                <div className="flex items-center gap-4">
                  {socialLinks.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-900/25 bg-white/70 text-slate-900 transition hover:-translate-y-0.5 hover:border-[#ff7a18]/60 hover:text-[#ff7a18]"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-10 rounded-[52px] bg-gradient-to-br from-[#ff7a18]/15 via-transparent to-[#ffb347]/35 blur-3xl" />
              <div className="relative overflow-hidden rounded-[48px] border-[12px] border-white shadow-[0px_45px_90px_-50px_rgba(15,23,42,0.65)]">
                <img
                  src={photo}
                  alt="Portrait de Samuel Prigent"
                  className="h-full w-full scale-[1.16] object-cover"
                />
              </div>
            </div>
          </div>
        </header>
      </div>

      <section id="skills" className="mx-auto max-w-6xl px-6 pt-24">
        <div className="rounded-[40px] bg-white/95 p-12 shadow-[0_35px_70px_-45px_rgba(15,23,42,0.35)]">
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
              Stack principale
            </p>
            <h2 className="text-[clamp(2.2rem,3vw,3.4rem)] font-semibold text-slate-900">
              Technologies préférées
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
              Je m'intéresse particulièrement à ces technologies front/back que
              j'utilise au quotidien.
            </p>
          </div>
          <div className="mt-12 space-y-8">
            {skillSections.map((section) => (
              <article
                key={section.title}
                className={`relative overflow-hidden rounded-[32px] border ${section.border} bg-gradient-to-br ${section.gradient} p-8 shadow-[0_30px_60px_-45px_rgba(249,115,22,0.35)]`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold uppercase tracking-[0.3em] text-slate-900">
                    {section.title}
                  </h3>
                  <span className="h-12 w-12 rounded-full border border-white/60 bg-white/50 backdrop-blur" />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-inner">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="h-6 w-6"
                        />
                      </span>
                      <p className="flex-1 text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
                        {item.label}
                      </p>
                      <div className="flex min-w-[120px] max-w-[140px] gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <span
                            key={`${item.label}-${idx}`}
                            className={`h-2 w-5 rounded-full transition ${
                              idx < item.level
                                ? "bg-gradient-to-r from-[#ff7a18] to-[#ffb347]"
                                : "bg-slate-200/70"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <span className="pointer-events-none absolute -right-16 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#ffb347]/50 via-transparent to-transparent blur-3xl" />
                <span className="pointer-events-none absolute -bottom-16 -left-12 h-36 w-36 rounded-full bg-gradient-to-tr from-[#ff7a18]/25 via-transparent to-transparent blur-3xl" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="parcours" className="mx-auto max-w-6xl px-6 pt-24">
        <div className="space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
            Parcours
          </p>
          <h2 className="text-[clamp(2.2rem,3vw,3.4rem)] font-semibold text-slate-900">
            Expériences et formations marquantes
          </h2>
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-6">
            {experiences.map((experience) => (
              <article
                key={experience.title}
                className="rounded-[28px] border border-orange-100 bg-white/95 p-8 text-left shadow-[0_25px_45px_-40px_rgba(15,23,42,0.45)]"
              >
                <span className="inline-flex items-center rounded-full bg-[#ff7a18]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff7a18]">
                  {experience.period}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  {experience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {experience.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.environment.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#ff7a18]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="space-y-6">
            <div className="rounded-[28px] border border-orange-100 bg-white/95 p-8 text-left shadow-[0_25px_45px_-40px_rgba(15,23,42,0.35)]">
              <h3 className="text-xl font-semibold text-slate-900">
                Formations
              </h3>
              <ul className="mt-6 space-y-5">
                {education.map((edu) => (
                  <li
                    key={edu.title}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {edu.period}
                    </span>
                    <p className="mt-3 text-base font-semibold text-slate-900">
                      {edu.title}
                    </p>
                    <p className="text-sm text-slate-600">{edu.school}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative mt-[85px] overflow-hidden rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-12 shadow-[0_25px_45px_-40px_rgba(249,115,22,0.35)]">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
            Soft skills
          </p>
          <h3 className="mt-3 text-center text-2xl font-semibold text-slate-900">
            L'état d'esprit que j'adopte dans une équipe
          </h3>
          <div className="relative mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3 md:gap-5">
            {softSkillWords.map((word) => (
              <span
                key={word.text}
                className={`rounded-full border border-[#ff7a18]/45 bg-[#fff5eb] px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#c85a00] shadow-[0_10px_25px_-18px_rgba(249,115,22,0.7)] backdrop-blur-sm transition hover:-translate-y-0.5 ${word.className}`}
              >
                {word.text}
              </span>
            ))}
          </div>
          <SparkleIcon className="pointer-events-none absolute bottom-7 left-12 h-16 w-16 rotate-2" />
          <StarIcon className="pointer-events-none absolute right-6 top-4 h-20 w-20" />
          <SparkleIcon className="pointer-events-none absolute left-12 top-24 h-8 w-8 rotate-[-5deg]" />
        </div>
      </section>

      <section id="projets" className="mx-auto mt-24 max-w-6xl px-6">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
            Projets
          </p>
          <h2 className="text-[clamp(2.2rem,3vw,3.4rem)] font-semibold text-slate-900">
            Mes réalisations préférées
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
            Chaque projet est l'occasion d'appliquer une démarche produit :
            discovery rapide, cadrage technique, itérations courtes et mesures
            de succès.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#ff7a18]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="text-left text-sm text-slate-600">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#ff7a18] transition hover:text-[#ff9a4d]"
                >
                  Voir le projet
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto mt-28 max-w-6xl px-6">
        <div className="rounded-[40px] bg-gradient-to-br from-[#ff9a45] via-[#ffb87a] to-[#ffd9a8] p-[1px] shadow-[0_35px_70px_-40px_rgba(249,115,22,0.55)]">
          <div className="rounded-[40px] bg-white/95 p-12 text-slate-900">
            <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-semibold">
                  À l'écoute d'opportunités.
                </h2>
                <p className="text-base leading-relaxed text-slate-600">
                  Parlons produit, tech ou croissance : je suis toujours partant
                  pour explorer vos enjeux et imaginer la prochaine étape.
                </p>
              </div>
              <a
                href="mailto:samuel.prigent@yahoo.fr"
                className="inline-flex items-center gap-3 rounded-full border-2 border-slate-900 bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 transition hover:-translate-y-0.5 hover:border-[#ff7a18] hover:text-[#ff7a18]"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-32 border-t border-slate-200/60 bg-[#fdf9f3]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <span className="font-semibold uppercase tracking-[0.35em] text-slate-900">
            Samuel Prigent
          </span>
          <span className="text-xs uppercase tracking-[0.45em] text-slate-500">
            © Copyright Samuel Prigent {currentYear}
          </span>
          <div className="flex items-center gap-4 text-slate-900">
            <a
              href="https://www.linkedin.com/in/samuel-prigent/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/20 bg-white/90 transition hover:-translate-y-0.5 hover:border-[#ff7a18]/60 hover:text-[#ff7a18]"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:samuel.prigent@yahoo.fr"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/20 bg-white/90 transition hover:-translate-y-0.5 hover:border-[#ff7a18]/60 hover:text-[#ff7a18]"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
