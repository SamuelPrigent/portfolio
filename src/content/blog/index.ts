import type { ComponentType } from "react";
import VeilleTechLinkedin from "./veille-tech-linkedin";
import ClaudeCodeCommandesCustom from "./claude-code-commandes-custom";

export const articleComponents: Record<string, ComponentType> = {
  "veille-tech-linkedin": VeilleTechLinkedin,
  "claude-code-commandes-custom": ClaudeCodeCommandesCustom,
};
