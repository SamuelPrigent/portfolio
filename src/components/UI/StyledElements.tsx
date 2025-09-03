import styled from "styled-components";
import { twMerge } from "tailwind-merge";

// accepte des classes supplémentaires
export const CardTextContainer = styled.div.attrs(
  ({ className = "" }: { className?: string }) => ({
    className: twMerge("flex flex-col gap-2 px-2", className),
  }),
)``;

// Carte de compétence avec effet de hover
export const SkillCard = styled.div.attrs({
  className:
    "skillsElement flex flex-col gap-[32px] pb-8 text-start text-white rounded-xl overflow-hidden border border-white/10 hover:border-white/20 hover:shadow-lg transition",
})`
  &:hover > .growThis {
    transform: scale(1.03);
    transition: transform 0.1s ease-out;
  }
`;
