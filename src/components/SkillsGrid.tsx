import styled from "styled-components";
// assets
import next from "../assets/next.svg";
import cypress from "../assets/cypress.svg";
import react from "../assets/logo-react.svg";
import styledcomponent from "../assets/logo-styledcomponent.svg";
import typescript from "../assets/logo-typescript.svg";
import shadcn from "../assets/logo-shadcn.svg";
import prisma from "../assets/logo-prisma.svg";
import express from "../assets/logo-express.svg";
import jest from "../assets/jest.svg";
// component
import { CardTextContainer, SkillCard } from "./UI/StyledElements";

const BackgroundTexture = styled.div`
  /* fond moins noir, léger dégradé et texture subtile */
  background: linear-gradient(
    160deg,
    rgba(15, 23, 29, 0.85),
    rgba(10, 14, 18, 0.92)
  );
  /* petite bande violette discrète en bas à gauche */
  box-shadow: inset -120px -30px 80px -70px rgba(117, 0, 255, 0.18);
`;

// Ajout d'un petit composant local pour uniformiser les bulles/icônes
function IconBubble({
  src,
  alt,
  gradient = "bg-slate-700",
  invert = false,
}: {
  src: string;
  alt: string;
  gradient?: string;
  invert?: boolean;
}) {
  // l'inversion s'applique uniquement à l'image (évite d'inverser la bulle)
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-full ${gradient} p-2 shadow-sm`}
    >
      <img
        src={src}
        alt={alt}
        className={`h-7 w-7 object-contain ${invert ? "invert filter" : ""}`}
      />
    </div>
  );
}

// component
export default function SkillsGrid() {
  return (
    <>
      {/* wrapper : fond un peu moins noir, plus d'espace et espacement homogène */}
      <div className="skillsGrid grid grid-cols-3 gap-6 bg-transparent pt-4 max-lg:grid-cols-2 max-[670px]:grid-cols-1">
        {/* Frontend */}
        <SkillCard className="transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <BackgroundTexture className="relative flex h-[120px] items-center justify-center overflow-hidden bg-transparent p-4">
            <div className="z-10 flex items-center gap-4">
              {/* Remplacé par IconBubble (taille et img uniformisées) */}
              <IconBubble
                src={react}
                alt="react"
                gradient="bg-gradient-to-br from-cyan-500 to-blue-600"
                invert={true} // ex: logo dark -> invertion souhaitée
              />
              <IconBubble
                src={typescript}
                alt="typescript"
                gradient="bg-gradient-to-br from-sky-500 to-blue-600"
                invert={true}
              />
            </div>
          </BackgroundTexture>
          <CardTextContainer>
            <div className="titleText text-lg font-semibold">Frontend</div>
            <div className="text-xs text-[#cfcfcf]">
              React · Next.js · TypeScript
            </div>
          </CardTextContainer>
        </SkillCard>

        {/* Backend */}
        <SkillCard className="transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <BackgroundTexture className="relative flex h-[120px] items-center justify-center gap-6 overflow-hidden bg-transparent p-4">
            <div className="z-10 flex items-center gap-6">
              <IconBubble
                src={express}
                alt="express"
                gradient="bg-gradient-to-br from-green-600 to-emerald-500"
                invert={true} // ex: on inverse si le SVG est sombre
              />
              <IconBubble
                src={next}
                alt="next"
                gradient="bg-gradient-to-br from-violet-600 to-fuchsia-600"
                invert={false}
              />
              <IconBubble
                src={prisma}
                alt="prisma"
                gradient="bg-gradient-to-br from-emerald-500 to-teal-600"
                invert={true}
              />
            </div>
          </BackgroundTexture>
          <CardTextContainer>
            <div className="titleText text-lg font-semibold">Backend</div>
            <div className="text-xs text-[#cfcfcf]">
              Express · Next.js · Prisma
            </div>
          </CardTextContainer>
        </SkillCard>

        {/* UI Components */}
        <SkillCard className="transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <BackgroundTexture className="flex h-[120px] items-center justify-center gap-6 overflow-hidden bg-transparent p-4">
            <div className="z-10 flex items-center gap-4">
              <IconBubble
                src={shadcn}
                alt="shadcn"
                invert={true}
                gradient="bg-gradient-to-br from-sky-500 to-indigo-600"
              />
              <IconBubble
                src={styledcomponent}
                alt="styled-components"
                gradient="bg-gradient-to-br from-rose-500 to-pink-500"
                invert={false}
              />
            </div>
          </BackgroundTexture>
          <CardTextContainer>
            <div className="titleText text-lg font-semibold">UI</div>
            <div className="text-xs text-[#cfcfcf]">
              Shadcn · Styled-Components
            </div>
          </CardTextContainer>
        </SkillCard>

        {/* Testing */}
        <SkillCard className="transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          <BackgroundTexture className="relative flex h-[120px] items-center justify-center gap-6 overflow-hidden bg-transparent p-4">
            <div className="z-10 flex items-center gap-6">
              <IconBubble
                src={jest}
                alt="jest"
                gradient="bg-gradient-to-br from-yellow-500 to-orange-500"
                invert={false}
              />
              <IconBubble
                src={cypress}
                alt="cypress"
                gradient="bg-gradient-to-br from-cyan-500 to-sky-600"
              />
            </div>
          </BackgroundTexture>
          <CardTextContainer>
            <div className="titleText text-lg font-semibold">Testing</div>
            <div className="text-xs text-[#cfcfcf]">Jest · Cypress</div>
          </CardTextContainer>
        </SkillCard>
      </div>
    </>
  );
}
