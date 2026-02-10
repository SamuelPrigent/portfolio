import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";
import type {
  Education,
  Experience,
  Project,
  Skill,
  SocialLink,
  SoftSkillWord,
} from "@/types";

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/samuel-prigent/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://github.com/SamuelPrigent",
    label: "GitHub",
    Icon: GitHubIcon,
  },
  { href: "mailto:samuel.prigent@yahoo.fr", label: "Email", Icon: MailIcon },
];

export const skills: Skill[] = [
  {
    label: "JavaScript",
    icon: "/logos/logo-js-color.svg",
    docUrl: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    label: "TypeScript",
    icon: "/logos/logo-ts-color.svg",
    docUrl: "https://www.typescriptlang.org/docs/",
  },
  {
    label: "React",
    icon: "/logos/logo-react-color.svg",
    docUrl: "https://react.dev/",
  },
  {
    label: "Next.js",
    icon: "/logos/logo-next-color.svg",
    docUrl: "https://nextjs.org/",
  },
  {
    label: "Tailwind CSS",
    icon: "/logos/logo-tailwind-color.svg",
    docUrl: "https://tailwindcss.com/",
  },
  {
    label: "Node.js",
    icon: "/logos/logo-node-color.svg",
    docUrl: "https://nodejs.org/fr",
  },
  {
    label: "Express",
    icon: "/logos/logo-express.svg",
    darkIcon: "/logos/logo-express-dark.svg",
    docUrl: "https://expressjs.com/",
  },
  {
    label: "Hono",
    icon: "/logos/logo-hono-color.svg",
    docUrl: "https://hono.dev/docs/",
  },
  {
    label: "Prisma",
    icon: "/logos/logo-prisma.svg",
    darkIcon: "/logos/logo-prisma-dark.svg",
    docUrl: "https://www.prisma.io/docs",
  },
  {
    label: "Git",
    icon: "/logos/logo-git-color.svg",
    docUrl: "https://git-scm.com/",
  },
];

export const softSkillWords: SoftSkillWord[] = [
  { text: "Bonne humeur" },
  { text: "Communication claire" },
  { text: "Esprit collaboratif" },
  { text: "Ecoute active" },
  { text: "Adaptabilité" },
  { text: "Curiosité insatiable" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    startDate: "2025-11",
    endDate: null,
    title: "Développeur Fullstack",
    company: "Groupe Cola",
    logo: "/logos/company-cola.svg",
    logoClassName:"p-[13px]",
    contract: "CDI",
    missions: [
      "Développement d'extranets d'automatisation des ouvertures de compte avec signature électronique et OCR pour les 4 sociétés du groupe.",
      "Digitalisation des commandes papier via un extranet avec compilation des données en fichier compatible ERP de production.",
      "Conception et développement de solutions logicielles sur mesure dans le cadre de la modernisation du SI.",
    ],
    techStack: [
      { logo: "/logos/logo-react-color.svg", name: "React" },
      { logo: "/logos/logo-next-color.svg", name: "Next.js" },
      { logo: "/logos/logo-hono-color.svg", name: "Hono" },
      { logo: "/logos/logo-node-color.svg", name: "Node.Js" },
    ],
  },
  {
    id: "2",
    startDate: "2024-10",
    endDate: "2025-09",
    title: "Développeur Fullstack",
    company: "Dir IPS",
    logo: "/logos/company-dirips.svg",
    logoClassName:"p-[11px]",
    contract: "Alternance",
    missions: [
      "Conception d'un algorithme de production de données afin de tester le moteur de calculs du produit DirIgami Facturation.",
      "Évolution d'une API en Go permettant la communication entre DirIgami Usager et le DMP concernant des documents santé.",
      "Proposition d'une base de refonte pour le site Dir IPS sous Wordpress.",
    ],
    techStack: [
      { logo: "/logos/logo-js-color.svg", name: "JavaScript" },
      { logo: "/logos/logo-go-color.svg", name: "Go" },
      { logo: "/logos/logo-wordpress-color.svg", name: "WordPress" },
      { logo: "/logos/logo-php-color.svg", name: "PHP" },
    //   { logo: "/logos/logo-symfony-color.svg", name: "Symfony" },
    ],
  },
  {
    id: "3",
    startDate: "2023-10",
    endDate: "2024-09",
    title: "Développeur Fullstack",
    company: "FineStack",
    logo: "/logos/company-finestack.webp",
    contract: "Freelance",
    missions: [
      "Développement d'une App automatisant la génération de PDF personnalisé de réponse à des offres d'emploi. Itération et reformulation sur les sections du document.",
      "Développement d'un UI kit et d'un Storybook pour le collectif.",
    ],
    techStack: [
      { logo: "/logos/logo-react-color.svg", name: "React" },
      { logo: "/logos/logo-next-color.svg", name: "Next.js" },
      { logo: "/logos/logo-express.svg", darkLogo: "/logos/logo-express-dark.svg", name: "Express" },
      { logo: "/logos/logo-node-color.svg", name: "Node.js" },
    //   { logo: "/logos/logo-openai-color.svg", darkLogo: "/logos/logo-openai-dark.svg", name: "OpenAI" },
    ],
  },
];

export const education: Education[] = [
  {
    level: "Bac+5",
    title: "Expert en développement logiciel",
    school: "OpenClassrooms, 2025",
  },
];

export const projects: Project[] = [
  {
    title: "Poplist",
    description:
      "Application permettant la création et le partage de listes de films & séries. Les données sont obtenu par une API tierce.",
    image: "/images/preview-poplist.webp",
    vercelLink: "https://poplist.me",
    githubLink: "https://github.com/SamuelPrigent/Poplist",
    techStack: [
      { logo: "/logos/logo-next-color.svg", name: "Next.js" },
      { logo: "/logos/logo-hono-color.svg", name: "Hono" },
      { logo: "/logos/logo-ts-color.svg", name: "TypeScript" },
    ],
  },
  {
    title: "Password indicator",
    description:
      "Package npm offrant un composant personnalisable indiquant la robustesse du mot de passe d'un input.",
    image: "/images/preview-passld.webp",
    githubLink: "https://github.com/SamuelPrigent/pass-strength-indicator",
    vercelLink: "https://pass-strength-indicator.vercel.app/",
    techStack: [
      { logo: "/logos/logo-next-color.svg", name: "Next.js" },
      { logo: "/logos/logo-ts-color.svg", name: "TypeScript" },
      { logo: "/icons/npm.svg", name: "Npm" },
    ],
  },
];
