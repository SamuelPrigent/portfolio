import fifo from "../assets/preview-fifo.png";
import kasa from "../assets/preview-kasa.png";
import lespetitsplats from "../assets/preview-lespetitsplats.png";
import mdd from "../assets/preview-mdd.png";
import rentals from "../assets/preview-rentals.png";
import javascriptLogo from "../assets/logo-js.svg";
import typescriptLogo from "../assets/logo-typescript.svg";
import reactLogo from "../assets/logo-react.svg";
import nextLogo from "../assets/nextBlack.svg";
import tailwindLogo from "../assets/logo-tailwindcss.svg";
import nodeLogo from "../assets/logo-node.svg";
import expressLogo from "../assets/logo-express.svg";
import prismaLogo from "../assets/logo-prisma.svg";
import gitLogo from "../assets/logo-git.svg";
import githubLogo from "../assets/github.svg";

import {
  BriefcaseIcon,
  CapIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ToolIcon,
} from "../components/icons";
import type {
  Education,
  Experience,
  NavItem,
  Project,
  Skill,
  SocialLink,
  SoftSkillWord,
} from "../types/home";

export const heroTags = ["React.js", "Node.js", "TypeScript"];

export const navItems: NavItem[] = [
  { label: "Compétences", target: "skills", Icon: ToolIcon },
  { label: "Expériences", target: "parcours", Icon: CapIcon },
  { label: "Projets", target: "projets", Icon: BriefcaseIcon },
  { label: "Contact", target: "contact", Icon: MailIcon },
];

export const socialLinks: SocialLink[] = [
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

export const skills: Skill[] = [
  {
    label: "JavaScript",
    icon: javascriptLogo,
    docUrl: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    label: "TypeScript",
    icon: typescriptLogo,
    docUrl: "https://www.typescriptlang.org/docs/",
  },
  {
    label: "React",
    icon: reactLogo,
    docUrl: "https://react.dev/",
  },
  {
    label: "Next.js",
    icon: nextLogo,
    docUrl: "https://nextjs.org/",
  },
  {
    label: "Tailwind CSS",
    icon: tailwindLogo,
    docUrl: "https://tailwindcss.com/",
  },
  {
    label: "Node.js",
    icon: nodeLogo,
    docUrl: "https://nodejs.org/fr",
  },
  {
    label: "Express",
    icon: expressLogo,
    docUrl: "https://expressjs.com/",
  },
  {
    label: "Prisma",
    icon: prismaLogo,
    docUrl: "https://www.prisma.io/docs",
  },
  {
    label: "Git",
    icon: gitLogo,
    docUrl: "https://git-scm.com/",
  },
  {
    label: "GitHub",
    icon: githubLogo,
    docUrl: "https://github.com/",
  },
];

export const softSkillWords: SoftSkillWord[] = [
  { text: "Bonne humeur", className: "-rotate-3" },
  { text: "Communication claire", className: "rotate-2" },
  { text: "Veille continue", className: "-rotate-2" },
  { text: "Esprit moteur", className: "rotate-3" },
  { text: "Recherche de solutions", className: "rotate-1" },
];

export const experiences: Experience[] = [
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

export const education: Education[] = [
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

export const projects: Project[] = [
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
