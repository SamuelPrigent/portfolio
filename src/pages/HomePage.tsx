import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// assets
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
import prismaLogo from "../assets/logo-prisma.svg";
import expressLogo from "../assets/logo-express.svg";
import cypressLogo from "../assets/cypressBlack.svg";
import springboot from "../assets/springboot.svg";
import jestLogo from "../assets/jestBlack.svg";
import studyIcon from "../assets/study.svg";
// import java from "../assets/java.svg";
// import angularLogo from "../assets/angular.svg";
// import mongodbLogo from "../assets/logo-mongodb.svg";
// import gitLogo from "../assets/logo-git.svg";
// import windsurfLogo from "../assets/windsurf.svg";
// import insomniaLogo from "../assets/insomnia.svg";

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
    aria-hidden
    focusable="false"
  >
    <path
      d="M5.25 4h13.5a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245Zm15.25 5.373-8.15 4.29a.75.75 0 0 1-.603.043l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143Zm-1.75-3.873H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l8.5 4.474 8.5-4.475V7.25a1.75 1.75 0 0 0-1.607-1.744Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.2"
    />
  </svg>
);

const BriefcaseIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    focusable="false"
  >
    <path d="M3 7h18v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7Z" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
    <path d="M11 12h2" />
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
  { label: "Projets", target: "projets", Icon: BriefcaseIcon },
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
    title: "Front-End",
    gradient: "from-[#fff1df] via-[#fff7ed] to-[#fffaf3]",
    border: "border-[#ffb347]/35",
    items: [
      { label: "React", icon: reactLogo, level: 5 },
      { label: "TypeScript", icon: typescriptLogo, level: 4 },
      //   { label: "Angular", icon: angularLogo, level: 4 },
      { label: "Jest", icon: jestLogo, level: 4 },
      { label: "Next", icon: nextLogo, level: 4 },
      { label: "Tailwind", icon: tailwindLogo, level: 5 },
      { label: "Cypress", icon: cypressLogo, level: 3 },
    ],
  },
  {
    title: "Back-End",
    gradient: "from-[#fff1df] via-[#fff7ed] to-[#fffaf3]",
    border: "border-[#ff9a45]/35",
    items: [
      { label: "Express", icon: expressLogo, level: 4 },
      { label: "Prisma", icon: prismaLogo, level: 4 },
      { label: "SpringBoot", icon: springboot, level: 3 },
      //   { label: "Java", icon: java, level: 3 },
    ],
  },
  //   {
  //     title: "Divers",
  //     gradient: "from-[#fff1df] via-[#fff7ed] to-[#fffaf3]",
  //     border: "border-[#ff9a45]/35",
  //     items: [
  //       { label: "Git", icon: gitLogo, level: 4 },
  //       { label: "Windsurf", icon: windsurfLogo, level: 4 },
  //       { label: "Insomnia", icon: insomniaLogo, level: 3 },
  //     ],
  //   },
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
    period: "Octobre 2024 à Septembre 2025 - 12 mois",
    title: "Développeur Fullstack, Dir IPS - Alternance",
    description:
      "Conception d'un algorithme générant des jeux de données pour automatiser la facturation. Évolution d'une API Go interfaçant les systèmes de santé (DMP, INS). Refonte du site Wordpress pour accélérer la communication.",
    environment: ["Go", "Javascript", "Wordpress", "PHP", "Symfony", "VBA"],
  },
  {
    period: "Janvier 2024 à Fevrier 2024 - 2 mois",
    title: "Développeur Fullstack, Dir IPS - Stage",
    description:
      "Création de fonctionnalités d'interface personnalisables (thèmes, darkmode) et d'un module de déconnexion automatique. Participation aux revues de code et au suivi qualité.",
    environment: ["PHP", "Symfony", "Bootstrap", "PostgreSQL"],
  },
];

const education = [
  {
    period: "2025",
    title: "Bac+5, Développeur Full-Stack – Java & Angular",
    school: "OpenClassrooms",
  },
  {
    period: "2023",
    title: "Bac+3, Développeur d'Application JavaScript React",
    school: "OpenClassrooms",
  },
  {
    period: "2019",
    title: "Licence STAPS, Entraînement Sportif",
    school: "Université Paris-Saclay, site d'Orsay",
  },
];

const projects = [
  {
    title: "FIFO",
    description:
      "File d'attente intelligente avec priorisation des crédits. Front React, Backend Express, Websocket pour l'affichage des données.",
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
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [contactError, setContactError] = useState<string | null>(null);
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "";
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined" || typeof document === "undefined") {
        return;
      }

      const scrollPosition = window.scrollY + 260;
      let current = "top";

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      contactStatus !== "success" &&
      contactStatus !== "error" &&
      !contactError
    ) {
      return;
    }

    const hideTimeout = window.setTimeout(() => {
      setContactStatus((status) =>
        status === "success" || status === "error" ? "idle" : status,
      );
      setContactError(null);
    }, 7000);

    return () => window.clearTimeout(hideTimeout);
  }, [contactStatus, contactError]);

  const handleScrollTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("top");
  };

  const handleContactChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !contactForm.name ||
      !contactForm.email ||
      !contactForm.subject ||
      !contactForm.message
    ) {
      setContactStatus("error");
      setContactError("Merci de renseigner tous les champs requis.");
      return;
    }

    if (!formEndpoint) {
      setContactStatus("error");
      setContactError(
        "Endpoint Formspree manquant. Ajoutez VITE_FORMSPREE_ENDPOINT.",
      );
      return;
    }

    try {
      setContactStatus("sending");
      setContactError(null);

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          subject: `Portfolio message - ${contactForm.subject}`,
          rawSubject: contactForm.subject,
          message: contactForm.message,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message =
          (data && (data.error || data.message)) ||
          "Une erreur est survenue lors de l'envoi.";
        setContactStatus("error");
        setContactError(message);
        return;
      }

      setContactStatus("success");
      setContactForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setContactStatus("error");
      setContactError(
        "Impossible d'envoyer le message. Merci de réessayer plus tard.",
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#fdf9f3] text-slate-900">
      <aside className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-[0_28px_56px_-44px_rgba(15,23,42,0.65)] backdrop-blur-lg lg:flex">
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

      <div className="sticky top-4 z-30 px-6 lg:hidden">
        <nav className="flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-600 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] backdrop-blur">
          <button
            type="button"
            onClick={handleScrollTop}
            aria-label="Revenir en haut"
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18] ${
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
              className={`flex items-center gap-2 rounded-full px-4 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18] ${
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
                  <h1 className="specialFont whitespace-nowrap text-[clamp(3.2rem,4.8vw,55px)] font-semibold leading-[1.02] text-slate-900">
                    Samuel Prigent
                  </h1>
                </div>
                <p className="max-w-2xl text-[1.15rem] leading-relaxed text-slate-700">
                  Développeur passionné par le développement logiciel et le web.
                  Je m'épanouis dans les environnements dynamiques et évolutif.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  to="/CV"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-3 rounded-full border-2 border-slate-900 bg-white px-7 py-3 text-base font-semibold text-slate-900 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5 hover:border-[#ff7a18] hover:text-[#ff7a18] focus:border-[#ff7a18]"
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
                      className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-900 bg-white/70 text-slate-900 transition hover:-translate-y-0.5 hover:border-[#ff7a18] hover:text-[#ff7a18] focus:border-[#ff7a18]"
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

      <section id="skills" className="mx-auto mt-24 max-w-6xl px-6 pt-3">
        <div className="rounded-[40px] bg-white/95 p-12 shadow-[0_35px_70px_-45px_rgba(15,23,42,0.35)]">
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
              Stack principale
            </p>
            <h2 className="text-[clamp(2.2rem,3vw,3.4rem)] font-semibold text-slate-900">
              Technologies favorites
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
              Je m'intéresse particulièrement à ces technologies que j'utilise
              au quotidien.
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
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-[4px] rounded-2xl py-4">
                        <span className="flex min-h-10 min-w-10 items-center justify-center rounded-xl">
                          <img
                            src={item.icon}
                            alt={item.label}
                            className="h-6 w-6"
                          />
                        </span>
                        <p className="flex-1 text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
                          {item.label}
                        </p>
                      </div>
                      <div className="flex min-w-[120px] max-w-[140px] gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <span
                            key={`${item.label}-${idx}`}
                            className={`h-3 w-4 rounded-[3px] ${
                              idx < item.level
                                ? "bg-gradient-to-r from-[#ff7a18ed] to-[#ffce89de]"
                                : "bg-[#f5ebdd]"
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

      <section id="parcours" className="mx-auto mt-20 max-w-6xl px-6 pt-6 ">
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
            <div className="relative rounded-[28px] border border-orange-100 bg-white/95 p-8 text-left shadow-[0_25px_45px_-40px_rgba(15,23,42,0.35)]">
              <div className="flex w-full items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">
                  Formations
                </h3>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff7a18]/15 text-[#ff7a18]">
                  <img src={studyIcon} alt="" aria-hidden className="h-6 w-6" />
                </span>
              </div>
              <ul className="mt-6 space-y-5">
                {education.map((edu) => (
                  <li
                    key={edu.title}
                    className="rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_18px_35px_-32px_rgba(15,23,42,0.25)]"
                  >
                    <span className="inline-flex items-center rounded-full bg-[#ff7a18]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff7a18]">
                      {edu.period}
                    </span>
                    <p className="mt-4 text-base font-semibold text-slate-900">
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

      <section id="projets" className="mx-auto mt-20 max-w-6xl px-6 pt-6">
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
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#ff7a18] transition hover:underline focus:underline focus-visible:underline"
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
        <div className="relative overflow-hidden rounded-[42px] border border-white/70 bg-gradient-to-br from-[#fff1e4] via-white to-[#ffe1c2] p-[1px] shadow-[0_40px_80px_-50px_rgba(15,23,42,0.45)]">
          <div className="relative rounded-[42px] bg-white/90 p-10 backdrop-blur-lg md:p-14">
            <div
              className="absolute inset-x-10 -top-24 h-48 rounded-full bg-[#ff7a18]/15 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-24 right-10 h-48 w-48 rounded-full bg-[#ffc285]/20 blur-3xl"
              aria-hidden
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center justify-center rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#ff7a18] shadow-sm">
                Prennons contact
              </p>
              <h2 className="mt-4 text-[clamp(2.2rem,3vw,3.2rem)] font-semibold text-slate-900">
                Discutons de votre projet.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Laissez-moi un message, je vous réponds dès que possible.
              </p>
            </div>

            <form
              className="relative mx-auto mt-10 grid max-w-3xl gap-5 text-left md:grid-cols-2"
              onSubmit={handleContactSubmit}
              noValidate
            >
              <div className="md:col-span-1">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600"
                >
                  Nom complet
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  type="text"
                  placeholder="Alice Belmont"
                  required
                  className="mt-2 w-full rounded-2xl border border-orange-100/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-[#ff7a18] focus-visible:ring-2 focus-visible:ring-[#ff7a18]/50"
                />
              </div>
              <div className="md:col-span-1">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600"
                >
                  Votre email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  type="email"
                  placeholder="exemple@domaine.com"
                  required
                  className="mt-2 w-full rounded-2xl border border-orange-100/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-[#ff7a18] focus-visible:ring-2 focus-visible:ring-[#ff7a18]/50"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600"
                >
                  Sujet
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  type="text"
                  placeholder="Sujet du message"
                  required
                  className="mt-2 w-full rounded-2xl border border-orange-100/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-[#ff7a18] focus-visible:ring-2 focus-visible:ring-[#ff7a18]/50"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows={6}
                  placeholder="Entrez un message"
                  required
                  className="mt-2 max-h-[300px] min-h-[80px] w-full rounded-2xl border border-orange-100/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-[#ff7a18] focus-visible:ring-2 focus-visible:ring-[#ff7a18]/50"
                />
              </div>
              {contactError && (
                <p
                  className="rounded-2xl border border-[#ff7a18]/30 bg-[#fff4ec] px-4 py-3 text-sm text-[#c2410c] md:col-span-2"
                  role="alert"
                >
                  {contactError}
                </p>
              )}
              {contactStatus === "success" && (
                <p
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 md:col-span-2"
                  role="status"
                >
                  Merci pour votre message ! Je vous réponds très vite.
                </p>
              )}
              {!formEndpoint && (
                <p className="rounded-2xl border border-[#e6d5c2] bg-[#fff9f2] px-4 py-3 text-xs text-[#8a6b3c] md:col-span-2">
                  Configurez
                  <code className="rounded bg-[#f4ede4] px-1 py-0.5 text-[#8a6b3c]">
                    VITE_FORMSPREE_ENDPOINT
                  </code>
                  pour activer l'envoi via Formspree.
                </p>
              )}
              <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
                <button
                  type="submit"
                  disabled={contactStatus === "sending" || !formEndpoint}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f97316] bg-[#fff6eb] px-8 py-3 text-sm font-semibold tracking-[0.16em] text-[#c2410c] shadow-[0_14px_28px_-24px_rgba(249,115,22,0.45)] transition hover:-translate-y-0.5 hover:border-[#ea580c] hover:bg-[#ffeeda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18] disabled:cursor-not-allowed disabled:border-[#f7b07f] disabled:bg-[#fff3e3] disabled:text-[#d97706] disabled:shadow-none"
                >
                  {contactStatus === "sending" ? "Envoi..." : "Envoyer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative mt-32 bg-[#fdf9f3]">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,1220px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ffc583] to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-9 pb-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-slate-800">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[transparent] focus:border-[#ff7a18]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center text-center text-slate-900">
            <div className="flex items-center gap-3">
              <span className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-gradient-to-br from-[#ff9a45]/90 via-[#ffb87a] to-[#ffd9a8] text-white shadow-[0_12px_25px_-12px_rgba(249,115,22,0.55)]">
                <SparkleIcon className="relative top-[1px] h-full w-full scale-[1.34]" />
              </span>
              <span className="font-semibold uppercase tracking-[0.4em]">
                SamDev
              </span>
            </div>
          </div>

          <div className="text-xs uppercase tracking-[0.35em] text-slate-900">
            Portfolio — {currentYear}
          </div>
        </div>
      </footer>
    </div>
  );
}
