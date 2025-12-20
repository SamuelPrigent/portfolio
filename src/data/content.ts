import kasa from "../assets/preview-kasa.webp";
// import springbootLogo from "../assets/springboot.svg";
// import lespetitsplats from "../assets/preview-lespetitsplats.webp";
// import mdd from "../assets/preview-mdd.webp";
// import rentals from "../assets/preview-rentals.webp";
// import githubLogo from "../assets/github.svg";
// import angularLogo from "../assets/angular.svg";
import fifo from "../assets/preview-fifo.webp";
import watchlisthub from "../assets/preview-watchlisthub.png";
// logo
import gitLogo from "../assets/logo-git-color.svg";
import javascriptLogo from "../assets/logo-js-color.svg";
import typescriptLogo from "../assets/logo-ts-color.svg";
import reactLogo from "../assets/logo-react-color.svg";
import nextLogo from "../assets/logo-next-color.svg";
import tailwindLogo from "../assets/logo-tailwind-color.svg";
import nodeLogo from "../assets/logo-node-color.svg";
import expressLogo from "../assets/logo-express.svg";
// import prismaLogo from "../assets/logo-prisma.svg";
import adonisLogo from "../assets/logo-adonis-color.svg";
import awsLogo from "../assets/logo-aws-color.svg";
import goLogo from "../assets/logo-go-color.svg";
import phpLogo from "../assets/logo-php-color.svg";
import symfonyLogo from "../assets/logo-symfony-color.svg";
import wordpressLogo from "../assets/logo-wordpress-color.svg";
import openaiLogo from "../assets/logo-openai-color.svg";
// company logo
import cola from "../assets/cola-square.jpeg";
import dirips from "../assets/dirips-square.jpeg";
import finestack from "../assets/finestack-square.png";

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
    label: "Adonis",
    icon: adonisLogo,
    docUrl: "https://docs.adonisjs.com/guides/preface/introduction",
  },
  {
    label: "AWS",
    icon: awsLogo,
    docUrl: "https://docs.aws.amazon.com/",
  },
  {
    label: "Git",
    icon: gitLogo,
    docUrl: "https://git-scm.com/",
  },
  //   {
  //     label: "Angular",
  //     icon: angularLogo,
  //     docUrl: "https://git-scm.com/",
  //   },
  //   {
  //     label: "GitHub",
  //     icon: githubLogo,
  //     docUrl: "https://github.com/",
  //   },
];

export const softSkillWords: SoftSkillWord[] = [
  { text: "Bonne humeur", className: "-rotate-2" },
  { text: "Communication claire", className: "-rotate-1" },
  { text: "Esprit collaboratif", className: "rotate-1" },
  { text: "Ecoute active", className: "rotate-2" },
  { text: "Adaptabilité", className: "-rotate-1" },
  { text: "Curiosité insatiable", className: "rotate-1" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    startDate: "2025-11",
    endDate: null, // Poste actuel
    title: "Développeur Fullstack",
    company: "Groupe Cola",
    logo: cola,
    contract: "CDI",
    missions: [
      "Développement de l'intranet en React, Next.js et Node.js.",
      "Participation à la modernisation du SI et aux travaux de refonte technique.",
      "Conception et évolution des interfaces entre applications (intégrations, API).",
    ],
    techStack: [
      { logo: reactLogo, name: "React" },
      { logo: nextLogo, name: "Next.js" },
      { logo: adonisLogo, name: "Adonis" },
      { logo: nodeLogo, name: "Node.Js" },
    ],
  },
  {
    id: "2",
    startDate: "2024-10",
    endDate: "2025-09",
    title: "Développeur Fullstack",
    company: "Dir IPS",
    logo: dirips,
    contract: "Alternance",
    missions: [
      "Conception d'un algorithme de production de données afin de tester le moteur de calculs du produit DirIgami Facturation.",
      "Évolution d'une API en Go permettant la communication entre DirIgami Usager et le DMP concernant des documents santé.",
      "Proposition d'une base de refonte pour le site Dir IPS sous Wordpress.",
    ],
    techStack: [
      { logo: javascriptLogo, name: "JavaScript" },
      { logo: goLogo, name: "Go" },
      { logo: phpLogo, name: "PHP" },
      { logo: symfonyLogo, name: "Symfony" },
      { logo: wordpressLogo, name: "WordPress" },
    ],
  },
  {
    id: "3",
    startDate: "2023-10",
    endDate: "2024-09",
    title: "Développeur Fullstack",
    company: "FineStack",
    logo: finestack,
    contract: "Freelance",
    missions: [
      "Développement d'une App automatisant la génération de PDF personnalisé de réponse à des offres d'emploi. Itération et reformulation sur les sections du document.",
      "Développement d'un UI kit et d'un Storybook pour le collectif.",
    ],
    techStack: [
      { logo: reactLogo, name: "React" },
      { logo: nextLogo, name: "Next.js" },
      { logo: expressLogo, name: "Express" },
      { logo: nodeLogo, name: "Node.js" },
      { logo: openaiLogo, name: "OpenAI" },
    ],
  },
];

export const education: Education[] = [
  {
    level: "Bac+5",
    title: "Expert en développement logiciel",
    school: "OpenClassrooms, 2025",
  },
  {
    level: "Bac+3",
    title: "Développeur concepteur logiciel",
    school: "OpenClassrooms, 2023",
  },
  {
    level: "Bac+2",
    title: "Développeur Web",
    school: "OpenClassrooms, 2022",
  },
  //   {
  //     level: "Bac+3",
  //     title: "Licence STAPS, Entraînement Sportif",
  //     school: "Université Paris-Saclay, site d'Orsay, 2019",
  //   },
];

export const projects: Project[] = [
  {
    title: "WatchlistHub",
    description:
      "Application permettant la création et le partage de watchlists de films & séries. Les données sont obtenu par une API tierce.",
    image: watchlisthub,
    vercelLink: "https://watchlist-hub-ivory.vercel.app/",
    githubLink: "https://github.com/SamuelPrigent/WatchlistHub",
    techStack: [
      { logo: reactLogo, name: "React" },
      { logo: expressLogo, name: "Express" },
      { logo: typescriptLogo, name: "TypeScript" },
    ],
  },
  {
    title: "FIFO",
    description:
      "File d'attente intelligente avec priorisation des crédits. Front React, Backend Express, WebSocket pour l'affichage des données.",
    image: fifo,
    githubLink: "https://github.com/SamuelPrigent/FIFO",
    techStack: [
      { logo: reactLogo, name: "React" },
      { logo: expressLogo, name: "Express" },
      { logo: typescriptLogo, name: "TypeScript" },
    ],
  },
  //   {
  //     title: "MDD",
  //     description:
  //       "Plateforme éditoriale Angular + Spring Boot. Gestion des abonnements thématiques et modération avancée.",
  //     image: mdd,
  //     link: "https://github.com/SamuelPrigent/MondeDeDev",
  //     tags: ["Angular", "Spring Boot"],
  //   },
  //   {
  //     title: "Rentals",
  //     description:
  //       "API REST sécurisée JWT pour la gestion de locations. Upload média via Cloudinary et dashboard Angular.",
  //     image: rentals,
  //     link: "https://github.com/SamuelPrigent/Rentals-Backend",
  //     tags: ["Angular", "Spring Boot"],
  //   },
  //   {
  //     title: "Les Petits Plats",
  //     description:
  //       "Moteur de recherche performant avec filtrage multi-critères et UI responsive, 100% Vanilla JS.",
  //     image: lespetitsplats,
  //     vercelLink: "https://samuelprigent.github.io/LesPetitsPlats/",
  //     techStack: [
  //       { logo: reactLogo, name: "React" },
  //       { logo: javascriptLogo, name: "JavaScript" },
  //     ],
  //   },
  {
    title: "Kasa",
    description:
      "Application de location immersive avec animations, gestion d'état fine et navigation fluide.",
    image: kasa,
    vercelLink: "https://samuelprigent.github.io/Kasa/",
    techStack: [
      { logo: reactLogo, name: "React" },
      { logo: javascriptLogo, name: "JavaScript" },
    ],
  },
];
