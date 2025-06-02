import styled from "styled-components";
// assets
import next from "../assets/next.svg";
import cypress from "../assets/cypress.svg";
import react from "../assets/logo-react.svg";
import styledcomponent from "../assets/logo-styledcomponent.svg";
import typescript from "../assets/logo-typescript.svg";
import shadcn from "../assets/logo-shadcn.svg";
import prisma from "../assets/logo-prisma.svg";
import node from "../assets/logo-node.svg";
import jest from "../assets/jest.svg";
// component
import { CardTextContainer, SkillCard } from "./UI/StyledElements";

// styled component
const BackgroundTextureFront = styled.div`
  background-position: center;
  background-size: cover;
  background-color: #000000;
`;

const BackgroundTextureBack = styled.div`
  background-color: #000000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: saturate(0) brightness(1.4);
`;

// component
export default function SkillsGrid() {
  return (
    <>
      <div className="skillsGrid grid grid-cols-3 pt-[15px] max-lg:grid-cols-2 max-[670px]:grid-cols-1">
        <SkillCard>
          <BackgroundTextureFront className="growThis relative flex h-[120px] items-center justify-center gap-7 overflow-hidden rounded-lg bg-[#6e63510f] py-3 brightness-150">
            <div className="relative z-40 flex items-center justify-center gap-[25px]">
              <img
                className="reactSpin lightYellowSvg z-20 mx-auto my-0 aspect-square"
                src={react}
                width={52}
                alt="logo react"
              />
              <div className="text-4xl font-light text-[#ebebeb]">+</div>
              <img
                className="lightYellowSvg"
                width={43}
                src={typescript}
                alt="typescript"
              />
            </div>
          </BackgroundTextureFront>
          <CardTextContainer>
            <div className="titleText text-xl font-semibold">Frontend</div>
            <div className="line-clamp-3 text-sm text-[#d3d3d3]">
              Développement d'applications web en React & Next.js avec
              TypeScript, en SPA ou avec rendu côté serveur (SSR), selon les
              besoins du projet.
            </div>
          </CardTextContainer>
        </SkillCard>
        <SkillCard>
          <BackgroundTextureBack className="growThis relative flex h-[120px] w-full items-center justify-center gap-[55px] overflow-hidden rounded-lg px-5 max-lg:gap-[40px] max-md:gap-[30px]">
            <img
              className="lightYellowSvg z-20 aspect-square min-w-[56px] max-lg:size-[45px] max-md:size-[40px] max-sm:size-[50px]"
              width={37}
              src={next}
              alt="logo express"
            />
            <img
              className="lightYellowSvg z-20 aspect-square max-lg:size-[45px] max-md:size-[40px] max-sm:size-[50px]"
              width={45}
              src={prisma}
              alt="logo mongodb"
            />
            <img
              className="lightYellowSvg z-20 aspect-square max-lg:size-[45px] max-md:size-[40px] max-sm:size-[50px]"
              width={45}
              src={node}
              alt="logo node"
            />
          </BackgroundTextureBack>
          <CardTextContainer>
            <div className="titleText text-xl font-semibold">Backend</div>
            <div className="line-clamp-3 text-sm text-[#d3d3d3]">
              Développement backend avec Next.js et ses server actions, Prisma
              comme ORM pour une gestion typée des données, le tout dans un
              environnement Node.js robuste et moderne.
            </div>
          </CardTextContainer>
        </SkillCard>
        <SkillCard>
          <div className="growThis flex h-[120px] w-full items-center justify-center gap-[25px] rounded-lg bg-black  brightness-150 saturate-0">
            <img
              className="lightYellowSvg aspect-square"
              width={33}
              src={shadcn}
              alt="logo shadcn"
            />
            <div className="text-4xl font-light text-[#ececec]">+</div>
            <img
              className="lightYellowSvg aspect-square"
              width={33}
              src={styledcomponent}
              alt="logo styled component"
            />
          </div>
          <CardTextContainer>
            <div className="titleText text-xl font-semibold">Style</div>
            <div className="line-clamp-3 text-sm text-[#d3d3d3]">
              Interfaces modernes avec Shadcn UI, Tailwind CSS pour le
              responsive et Styled-Components pour du CSS-in-JS dynamique.
            </div>
          </CardTextContainer>
        </SkillCard>
        <SkillCard>
          <div className="growThis relative flex h-[120px] w-full justify-center overflow-hidden rounded-lg bg-black brightness-150 saturate-0">
            <div className="relative z-40 flex items-center justify-center gap-[25px]">
              <img
                className="lightYellowSvg z-20 aspect-square"
                width={52}
                src={jest}
                alt="logo vitest"
              />
              <div className="text-4xl font-light text-[#e8e8e8]">+</div>
              <img
                className="brightness-90 saturate-0"
                width={47}
                src={cypress}
                alt="cypress"
              />
            </div>
          </div>
          <CardTextContainer>
            <div className="titleText text-xl font-semibold">Testing</div>
            <div className="line-clamp-3 text-sm text-[#d3d3d3]">
              Ecriture de tout type de test pour le Backend et le Frontend à
              l'aide de librairies tel que Jest, Jasmine et Cypress.
            </div>
          </CardTextContainer>
        </SkillCard>
      </div>
    </>
  );
}
