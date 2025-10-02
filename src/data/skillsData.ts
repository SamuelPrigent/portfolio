import nextLogo from "../assets/next.svg";
import cypressLogo from "../assets/cypress.svg";
import reactLogo from "../assets/logo-react.svg";
import typescriptLogo from "../assets/logo-typescript.svg";
import shadcnLogo from "../assets/logo-shadcn.svg";
import styledComponentLogo from "../assets/logo-styledcomponent.svg";
import prismaLogo from "../assets/logo-prisma.svg";

import nodeLogo from "../assets/logo-node.svg";
import jestLogo from "../assets/jest.svg";

export type BubbleZone = {
  outerGradient: string;
  innerGradient: string;
  outerSize: string;
  innerSize: string;
  pos: string;
};

export type SkillIcon = { src: string; alt: string; noInvert?: boolean };

export type Skill = {
  icons: SkillIcon[];
  title: string;
  desc: string;
  bubbleZones: BubbleZone[];
};

export const skillsData: Skill[] = [
  {
    icons: [
      { src: reactLogo, alt: "Logo React" },
      { src: typescriptLogo, alt: "Logo TypeScript" },
    ],
    title: "Frontend",
    desc: "Dev React & Next.js en TypeScript, SPA ou SSR selon les besoins.",
    bubbleZones: [
      {
        outerGradient: "from-cyan-500 to-blue-600",
        innerGradient: "from-cyan-200 to-blue-200",
        outerSize: "w-32 h-32",
        innerSize: "w-16 h-16",
        pos: "left-1/4 top-1/2 transform -translate-y-1/2",
      },
      {
        outerGradient: "from-blue-600 to-purple-600",
        innerGradient: "from-blue-300 to-purple-300",
        outerSize: "w-24 h-24",
        innerSize: "w-10 h-10",
        pos: "right-1/4 bottom-1/4 transform",
      },
    ],
  },
  {
    icons: [
      { src: nextLogo, alt: "Logo Next.js", noInvert: false },
      { src: prismaLogo, alt: "Logo Prisma" },
      { src: nodeLogo, alt: "Logo Node.js" },
    ],
    title: "Backend",
    desc: "Next.js + Server Actions, Prisma ORM et Node.js moderne.",
    bubbleZones: [
      {
        outerGradient: "from-green-500 to-teal-400",
        innerGradient: "from-green-300 to-teal-300",
        outerSize: "w-32 h-32",
        innerSize: "w-16 h-16",
        pos: "right-1/3 top-1/3 transform",
      },
      {
        outerGradient: "from-teal-400 to-green-200",
        innerGradient: "from-teal-200 to-green-100",
        outerSize: "w-24 h-24",
        innerSize: "w-10 h-10",
        pos: "left-1/4 bottom-1/4 transform",
      },
    ],
  },
  {
    icons: [
      { src: shadcnLogo, alt: "Logo shadcn UI" },
      {
        src: styledComponentLogo,
        alt: "Logo Styled-Components",
        noInvert: true,
      },
    ],
    title: "Style",
    desc: "shadcn UI, Tailwind CSS et Styled-Components pour du CSS-in-JS.",
    bubbleZones: [
      {
        outerGradient: "from-purple-600 to-pink-400",
        innerGradient: "from-purple-300 to-pink-300",
        outerSize: "w-32 h-32",
        innerSize: "w-12 h-12",
        pos: "left-1/3 bottom-1/3 transform",
      },
      {
        outerGradient: "from-pink-400 to-purple-400",
        innerGradient: "from-pink-200 to-purple-200",
        outerSize: "w-24 h-24",
        innerSize: "w-8 h-8",
        pos: "right-1/4 top-1/4 transform",
      },
    ],
  },
  {
    icons: [
      { src: jestLogo, alt: "Logo Jest", noInvert: true },
      { src: cypressLogo, alt: "Logo Cypress", noInvert: true },
    ],
    title: "Testing",
    desc: "Tests unitaires et end-to-end avec Jest et Cypress.",
    bubbleZones: [
      {
        outerGradient: "from-yellow-500 to-orange-500",
        innerGradient: "from-yellow-300 to-orange-300",
        outerSize: "w-32 h-32",
        innerSize: "w-16 h-16",
        pos: "right-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
      },
      {
        outerGradient: "from-orange-500 to-yellow-500",
        innerGradient: "from-orange-300 to-yellow-300",
        outerSize: "w-24 h-24",
        innerSize: "w-10 h-10",
        pos: "left-1/4 bottom-1/4 transform",
      },
    ],
  },
];
