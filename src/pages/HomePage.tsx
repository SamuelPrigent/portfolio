import {
  type ChangeEvent,
  type FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
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
// import logoWebsite from "../../public/logo.svg";
import { cn } from "../utils/cn";

const heroTags = ["React.js", "Node.js", "TypeScript"];

const grainTextureDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.22'/%3E%3C/svg%3E";

const SignatureUnderline = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 240 42"
    fill="none"
    aria-hidden
    focusable="false"
  >
    <path
      d="M6 28c38-14 104-22 176-18"
      stroke="url(#signatureStroke)"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="signatureStroke"
        x1="10"
        y1="4"
        x2="196"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ffc99a" stopOpacity="0.85" />
        <stop offset="0.6" stopColor="#ff9752" stopOpacity="0.78" />
        <stop offset="1" stopColor="#ff7a18" stopOpacity="0.7" />
      </linearGradient>
    </defs>
  </svg>
);

const PaperPlaneIconAlt = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden
    focusable="false"
  >
    <path
      d="M0 8l4.9 1.4H5v-.1L12.1 4 11 5.2l-6.2 6.6L5 15l2.9-3.2L10 16l6-16z"
      stroke="currentColor"
      strokeWidth="0.5"
    />
  </svg>
);

const PaperTrail = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 260 120"
    fill="none"
    aria-hidden
    focusable="false"
  >
    <path
      d="M8 90c38-34 82-36 120-24 42 13 67 0 116-40"
      stroke="url(#trailGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="10 14"
    />
    <defs>
      <linearGradient
        id="trailGradient"
        x1="12"
        y1="92"
        x2="236"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0f172a" stopOpacity="0.65" />
        <stop offset="0.55" stopColor="#111827" stopOpacity="0.58" />
        <stop offset="1" stopColor="#020617" stopOpacity="0.5" />
      </linearGradient>
    </defs>
  </svg>
);

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
  border: string;
  items: SkillSectionItem[];
};

type SoftSkillWord = {
  text: string;
  className: string;
};

type Layout = "desktop" | "tablet" | "mobile";

const HamburgerIcon = ({
  className = "",
  isOpen,
}: {
  className?: string;
  isOpen: boolean;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    focusable="false"
  >
    {isOpen ? (
      <>
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </>
    ) : (
      <>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    )}
  </svg>
);

const determineLayout = (width: number): Layout => {
  if (width >= 1275) return "desktop";
  if (width >= 750) return "tablet";
  return "mobile";
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
      fill="#fff5eb"
      stroke="#ff9a45"
      strokeWidth="1.1"
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
      <path d="M2 17.4L23.022 9l21.022 8.4-21.022 8.4z" />
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
    border: "border-[#ff9a45]/35",
    items: [
      { label: "Express", icon: expressLogo, level: 4 },
      { label: "Prisma", icon: prismaLogo, level: 4 },
      { label: "Spring Boot", icon: springboot, level: 3 },
    ],
  },
];

const softSkillWords: SoftSkillWord[] = [
  { text: "Esprit positif", className: "-rotate-3" },
  { text: "Communication claire", className: "rotate-2" },
  { text: "En veille continue", className: "-rotate-2" },
  { text: "Réactif", className: "rotate-3" },
  { text: "Curieux", className: "-rotate-1" },
  { text: "Recherche de solutions", className: "rotate-1" },
];

const experiences = [
  {
    id: "1",
    period: "Octobre 2024 - Septembre 2025",
    periodShort: "10/2024 - 09/2025",
    duration: "12 mois",
    title: "Développeur Fullstack",
    company: "Dir IPS",
    contract: "Alternance",
    description:
      "Conception d'un algorithme générant des jeux de données pour automatiser la facturation. Évolution d'une API Go interfaçant les systèmes de santé (DMP, INS). Refonte du site Wordpress pour accélérer la communication.",
    environment: ["Go", "JavaScript", "WordPress", "PHP", "VBA"],
  },
  {
    id: "2",
    period: "Janvier 2024 - Mars 2024",
    periodShort: "01/2024 - 03/2024",
    duration: "9 semaines",
    title: "Développeur Fullstack",
    company: "Dir IPS",
    contract: "Stage",
    description:
      "Création de fonctionnalités d'interface personnalisables (thèmes, dark mode) et d'un module de déconnexion automatique. Participation aux revues de code et au suivi qualité.",
    environment: ["PHP", "Symfony", "Bootstrap", "SQL"],
  },
];

const education = [
  {
    level: "Bac+5",
    title: "Développeur Full-Stack Java et Angular",
    school: "OpenClassrooms, 2025",
  },
  {
    level: "Bac+3",
    title: "Développeur d'Application JavaScript React",
    school: "OpenClassrooms, 2023",
  },
  {
    level: "Bac+3",
    title: "Licence STAPS, Entraînement Sportif",
    school: "Université Paris-Saclay, site d'Orsay, 2019",
  },
];

const projects = [
  {
    title: "FIFO",
    description:
      "File d'attente intelligente avec priorisation des crédits. Front React, Backend Express, WebSocket pour l'affichage des données.",
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
  const [isNavCondensed, setIsNavCondensed] = useState(false);
  const [isWideLayout, setIsWideLayout] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 1275 : false,
  );
  const [actualLayout, setActualLayout] = useState<Layout>(() => {
    if (typeof window === "undefined") return "desktop";
    return determineLayout(window.innerWidth);
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      setIsWideLayout(width >= 1275);
      handleSetLayout(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleSetLayout]);

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

  const isDesktopLayout = actualLayout === "desktop" || isWideLayout; // isWideLAyout temporaire
  const isTabletLayout = actualLayout === "tablet";
  const isMobileLayout = actualLayout === "mobile";

  useEffect(() => {
    if (!isMobileLayout) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileLayout]);

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
      {isDesktopLayout && (
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

      <div
        className={cn(
          "relative overflow-hidden pt-[6.1rem] max-[1275px]:pt-[6.5rem]",
          isDesktopLayout ? "pl-[80px]" : undefined,
        )}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fff7ef] via-white to-[#ffeeda]" />
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#ffb567]/20 blur-[180px]" />
          <div className="bg-[#ffd6ad]/28 absolute bottom-0 right-[12%] h-[320px] w-[320px] rounded-full blur-[140px]" />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 text-center max-[650px]:gap-[40px] max-[550px]:px-5 max-[450px]:px-4 max-[382px]:gap-[30px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:text-left">
          <div className="relative flex flex-col gap-10 max-[750px]:gap-7 max-[450px]:gap-5">
            <SparkleIcon
              className="absolute -left-10 -top-10 hidden h-10 w-10 text-[#ff7a18] max-[1175px]:left-[-25px] lg:block"
              aria-hidden
            />
            <div className="flex flex-wrap items-center justify-center gap-3 max-[445px]:hidden max-[377px]:gap-[7px] lg:justify-start">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#d45805]/45 bg-[#fff3e7] px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#c24800] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] max-[445px]:px-3 max-[445px]:text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="hidden items-center justify-center max-[445px]:flex">
              <span className="inline-flex items-center rounded-full border border-[#d45805]/45 bg-[#fff3e7] px-5 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#c24800] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] max-[360px]:px-[14px]">
                {heroTags.map((tag, index) => (
                  <span key={tag} className="flex items-center">
                    {tag}
                    {index < heroTags.length - 1 && (
                      <span aria-hidden className="mx-2 text-[#d45805]/70">
                        |
                      </span>
                    )}
                  </span>
                ))}
              </span>
            </div>
            <div>
              <h1 className="specialFont text-[clamp(3.5rem,5vw,62px)] leading-[1.03] text-slate-900 max-[455px]:text-[50px] max-[411px]:text-[45px] max-[358px]:text-[40px]">
                Samuel Prigent
              </h1>
              <h2 className="relative inline-flex flex-col text-[clamp(2.1rem,3.6vw,2.6rem)] font-semibold text-slate-800">
                <span className="mt-[20px] bg-gradient-to-r from-[#161616] via-[#1a1a1a] to-[#0b0b0b] bg-clip-text text-transparent max-[450px]:mt-[15px] max-[386px]:text-[30px]">
                  Développeur Fullstack
                </span>
                <SignatureUnderline className="pointer-events-none absolute left-[23px] top-[79px] h-8 w-[230px] rotate-[5deg] scale-[1.12] opacity-90 max-[1019px]:left-[5px] max-[1019px]:top-[70px] max-[386px]:left-[-5px] max-[386px]:left-[15px] max-[386px]:top-[65px]" />
              </h2>
              <p className="mx-auto mt-[35px] max-w-2xl text-[1.02rem] leading-relaxed text-slate-700">
                Passionné par le développement logiciel et le web, j’aime créer
                des produits utiles et bien pensés, où la clarté et la fluidité
                font toute la différence.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 max-[550px]:gap-[15px] lg:justify-start">
              <Link
                to="/CV"
                onClick={() => window.scrollTo(0, 0)}
                className="btn-download"
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
                    className="social-pill"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto w-full max-w-lg">
              <div
                className="absolute inset-0 -translate-x-6 translate-y-6 rounded-[56px] border border-white/60 bg-gradient-to-br from-[#fff4e8] via-[#ffe9d4] to-[#ffd4a9] opacity-70 blur-2xl"
                aria-hidden
              />
              <div className="from-[#ff7a18]/18 absolute -inset-12 rounded-[52px] bg-gradient-to-br via-transparent to-[#ffb347]/40 blur-3xl" />
              <div className="relative overflow-hidden rounded-[48px] border-[12px] border-white shadow-[0px_45px_90px_-50px_rgba(15,23,42,0.65)]">
                <img
                  src={photo}
                  alt="Portrait de Samuel Prigent"
                  className="h-full w-full scale-[1.16] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        id="skills"
        className="mx-auto mt-16 max-w-6xl px-0 pt-8 max-[650px]:mt-0 max-[650px]:pt-0 min-[750px]:px-6 "
      >
        <div className="rounded-none bg-white/95 px-[14px] py-12 shadow-[0_35px_70px_-45px_rgba(15,23,42,0.35)] sm:rounded-none md:rounded-[32px] md:px-8 min-[750px]:px-6 lg:rounded-[40px] lg:px-12">
          <div className="space-y-4 text-center max-[389px]:space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
              Stack principale
            </p>
            <h2 className="text-[clamp(2.2rem,3vw,3.4rem)] font-semibold text-slate-900 max-[389px]:top-[10px] max-[389px]:text-[30px]">
              Technologies favorites
            </h2>
            <p className="mx-auto max-w-3xl px-2 text-base leading-relaxed text-slate-600">
              Je m'intéresse particulièrement à ces technologies que j'utilise
              au quotidien.
            </p>
          </div>
          <div className="mt-12 space-y-8">
            {skillSections.map((section) => (
              <article
                key={section.title}
                className={cn(
                  "relative overflow-hidden rounded-[32px] border border-transparent px-4 py-6 shadow-[0_30px_60px_-45px_rgba(249,115,22,0.35)] max-[650px]:gap-0 min-[550px]:p-6 min-[710px]:rounded-[32px] min-[710px]:p-8",
                  `${section.border}`,
                  "bg-gradient-to-br from-[#fff1df] via-[#fff7ed] to-[#fffaf3]",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold uppercase tracking-[0.3em] text-slate-900 max-[650px]:m-auto max-[389px]:text-[20px]">
                    {section.title}
                  </h3>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 max-[1020px]:grid-cols-2 max-[600px]:grid-cols-1">
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between px-1 max-[750px]:px-0"
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
                      <div className="flex min-w-[120px] max-w-[140px] gap-1 max-[550px]:justify-center max-[550px]:gap-[3px]">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <span
                            key={`${item.label}-${idx}`}
                            className={cn(
                              "h-3 w-4 rounded-[3px] max-[550px]:w-[12px]",
                              idx < item.level
                                ? "bg-gradient-to-r from-[#ff7a18ed] to-[#ffce89de]"
                                : "bg-[#f5ebdd]",
                            )}
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

      <section
        id="parcours"
        className="mx-auto mt-16 max-w-6xl px-6 pt-20 max-[650px]:mt-[30px] max-[650px]:px-[14px]"
      >
        <div className="space-y-6 text-center max-[389px]:space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
            Parcours
          </p>
          <h2 className="text-[clamp(2.2rem,3vw,3.4rem)] font-semibold text-slate-900 max-[389px]:text-[30px]">
            Expériences et formations marquantes
          </h2>
        </div>
        <div className="mt-14 grid gap-[2.5rem] max-[650px]:mt-[30px] min-[900px]:grid-cols-[3fr_2.3fr]">
          <div className="space-y-6">
            {experiences.map((experience) => (
              <article
                key={experience.id}
                className="rounded-[28px] border border-orange-100 bg-white/95 p-8 text-left shadow-[0_25px_45px_-40px_rgba(15,23,42,0.45)] max-[470px]:rounded-[16px] max-[470px]:p-[22px]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#ff7a18]">
                  <span className="max-[450px]:hidden">
                    {experience.period}
                  </span>
                  <span className="min-[451px]:hidden">
                    {experience.periodShort}
                  </span>
                  <span className="bg-[#ff7a18]/12 rounded-full py-1 text-[0.7rem] font-semibold tracking-[0.12em] text-[#d75806]">
                    {experience.duration}
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-[6px] max-[400px]:mb-[12px] max-[400px]:flex-col">
                  <h3 className="mb-[8px] mt-[6px] whitespace-nowrap text-[1.5rem] font-semibold text-slate-900 max-[400px]:mb-0 max-[370px]:text-[1.4rem]">
                    {experience.title}
                  </h3>
                  <span className="whitespace-nowrap text-[1.05rem] font-medium text-slate-600">
                    {experience.company}
                  </span>
                </div>
                <p className="mt-1 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {experience.contract}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {experience.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
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
            <div className="relative h-full rounded-[28px] border border-orange-100 bg-white/95 p-8 text-left shadow-[0_25px_45px_-40px_rgba(15,23,42,0.35)] max-[550px]:px-4 max-[500px]:border-none max-[500px]:bg-transparent max-[500px]:px-0 max-[500px]:shadow-none">
              <div className="flex w-full items-center justify-between px-1 max-[500px]:px-2">
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
                    className="rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_18px_35px_-32px_rgba(15,23,42,0.25)] max-[550px]:px-4"
                  >
                    <span className="inline-flex items-center rounded-full bg-[#ff7a18]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#ff7a18]">
                      {edu.level}
                    </span>
                    <p className="mt-4 text-base font-semibold text-slate-900 max-[550px]:mt-[14px]">
                      {edu.title}
                    </p>
                    <p className="text-sm text-slate-600">{edu.school}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative mt-[85px] overflow-hidden rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-12 shadow-[0_25px_45px_-40px_rgba(249,115,22,0.35)] max-[550px]:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
            Soft skills
          </p>
          <h3 className="mt-3 text-center text-2xl font-semibold text-slate-900">
            L'état d'esprit que j'adopte dans une équipe
          </h3>
          <div className="relative mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3 max-[700px]:gap-4 md:gap-5">
            {softSkillWords.map((word) => (
              <span
                key={word.text}
                className={`rounded-full border border-[#ff7a18]/45 bg-[#fff5eb] px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#c85a00] shadow-[0_10px_25px_-18px_rgba(249,115,22,0.7)] backdrop-blur-sm transition hover:-translate-y-0.5 ${word.className}`}
              >
                {word.text}
              </span>
            ))}
          </div>
          <SparkleIcon className="pointer-events-none absolute bottom-7 left-12 h-16 w-16 rotate-2 max-[740px]:bottom-[24px] max-[740px]:left-[10px] max-[740px]:h-10 max-[740px]:w-10 max-[565px]:hidden" />
          <StarIcon className="pointer-events-none absolute right-6 top-4 h-20 w-20 max-[900px]:h-14 max-[900px]:h-14 max-[750px]:w-10 max-[750px]:w-10" />
          <SparkleIcon className="pointer-events-none absolute left-12 top-24 h-8 w-8 rotate-[-5deg] max-[740px]:left-[30px] max-[740px]:top-[37px]" />
        </div>
      </section>

      <section
        id="projets"
        className="mx-auto mt-16 max-w-6xl px-6 pt-20 max-[650px]:mt-11 max-[650px]:px-[14px]"
      >
        <div className="space-y-4 text-center max-[389px]:space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff7a18]">
            Projets
          </p>
          <h2 className="text-[clamp(2.2rem,3vw,3.4rem)] font-semibold text-slate-900 max-[389px]:text-[30px]">
            Mes réalisations préférées
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 ">
            Chaque projet est l'occasion d'appliquer une démarche produit :
            discovery rapide, cadrage technique, itérations courtes et mesures
            de succès.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-orange-100 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden max-[650px]:h-36">
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

      <section
        id="contact"
        className="mx-auto mt-28 max-w-6xl px-6 pt-6 max-[650px]:mt-16 max-[650px]:px-[14px] max-[400px]:px-0"
      >
        <div className="relative overflow-hidden rounded-[42px] border border-white/70 bg-gradient-to-br from-[#fff1e3] via-white to-[#ffe9cf] p-[1px] shadow-[0_40px_80px_-50px_rgba(15,23,42,0.45)] max-[400px]:rounded-none max-[400px]:border-none">
          <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#ffc488] opacity-35 blur-[220px]" />
          <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,212,176,0.9)_0%,rgba(255,176,110,0.55)_55%,rgba(255,142,62,0)_78%)] opacity-75" />
          <div
            className="opacity-28 pointer-events-none absolute left-1/2 top-[-200px] h-[360px] w-[360px] -translate-x-1/2 rounded-full mix-blend-soft-light"
            style={{ backgroundImage: `url(${grainTextureDataUrl})` }}
          />
          <div className="bg-white/92 relative rounded-[42px] p-14 backdrop-blur-lg max-md:p-10 max-sm:px-5">
            <div
              className="bg-[#ff7a18]/18 absolute inset-x-10 -top-24 h-48 rounded-full blur-3xl"
              aria-hidden
            />
            <div
              className="bg-[#ffc285]/24 absolute -bottom-24 right-10 h-48 w-48 rounded-full blur-3xl"
              aria-hidden
            />

            <div className="relative mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#ff7a18] shadow-sm">
                Prennons contact
              </div>
              <div className="relative mt-[30px] flex flex-col items-center gap-[10px]">
                <h2 className="relative text-[clamp(2.2rem,3vw,3.2rem)] font-semibold text-slate-900 max-[450px]:text-[30px]">
                  Ouvert aux échanges
                  <span className="pointer-events-none absolute -top-8 right-[calc(-7rem)] hidden h-11 w-11 origin-top-right rotate-[8deg] md:block">
                    <PaperTrail className="absolute right-[22px] top-[2px] h-[80px] w-[190px]" />
                    <PaperPlaneIconAlt className="absolute right-0 top-[-20px] h-10 w-10 text-[#111827]" />
                  </span>
                </h2>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                  Laissez-moi un message, je vous réponds rapidement.
                </p>
              </div>
            </div>

            <form
              className="relative mx-auto mt-14 grid max-w-3xl gap-6 text-left md:grid-cols-2"
              onSubmit={handleContactSubmit}
              noValidate
            >
              <div className="md:col-span-1">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold tracking-[0.08em] text-slate-900"
                >
                  Nom complet
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  type="text"
                  placeholder="John Doe"
                  required
                  className="mt-2 w-full rounded-2xl border border-orange-100/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-[#ff7a18] focus-visible:ring-2 focus-visible:ring-[#ff7a18]/50"
                />
              </div>
              <div className="md:col-span-1">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold tracking-[0.08em] text-slate-900"
                >
                  Votre email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  autoComplete="email"
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
                  className="text-sm font-semibold tracking-[0.08em] text-slate-900"
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
                  className="mt-2 w-full rounded-2xl border border-orange-100/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-[#ff7a18] focus-visible:ring-2 focus-visible:ring-[#ff7a18]/50 "
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold tracking-[0.08em] text-slate-900"
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
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#f97316] bg-[#fff6eb] px-8 py-3 text-sm font-semibold tracking-[0.16em] text-[#c2410c] shadow-[0_14px_28px_-24px_rgba(249,115,22,0.45)] transition hover:-translate-y-0.5 hover:border-[#ea580c] hover:bg-[#ffeeda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff7a18] disabled:cursor-not-allowed disabled:border-[#f7b07f] disabled:bg-[#fff3e3] disabled:text-[#d97706] disabled:shadow-none "
                >
                  {contactStatus === "sending" ? "Envoi..." : "Envoyer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative mt-32 bg-[#fdf9f3] ">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,1220px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ffc583] to-transparent "
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-7 pb-8 text-sm text-slate-600  md:flex-row md:items-center md:justify-between">
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

          <div className="flex flex-col items-center text-center text-slate-900 ">
            <div className="flex items-center gap-3">
              <span className="font-semibold uppercase tracking-[0.4em]">
                SamDev
              </span>
            </div>
          </div>

          <div className="text-xs uppercase tracking-[0.35em] text-slate-900 ">
            Portfolio
          </div>
        </div>
      </footer>
    </div>
  );
}
