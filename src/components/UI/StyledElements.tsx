import styled from "styled-components";
import { twMerge } from "tailwind-merge";

// accepte des classes supplémentaires
export const CardTextContainer = styled.div.attrs(
  ({ className = "" }: { className?: string }) => ({
    className: twMerge("flex flex-col gap-2", className),
  }),
)``;

// Carte de compétence avec effet de hover
export const SkillCard = styled.div.attrs({
  className:
    "skillsElement flex flex-col gap-4 rounded-xl p-5 text-start text-white",
})`
  &:hover {
    /* border-color: #12192f; */
    border-color: #242a37;
    transition: all 200ms ease-out;
  }

  &:hover > .growThis {
    transform: scale(1.025);
  }
`;
