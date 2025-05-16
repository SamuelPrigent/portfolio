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
  border-color: #212121;

  &:hover {
    /* border-color: #12192f; */
    border-color: hsl(221.05263157894737, 0%, 17.058823529411764%);
    transition: all 150ms ease-out;
  }

  &:hover > .growThis {
    transform: scale(1.03);
    transition: transform 0.1s ease-out;
  }
`;
