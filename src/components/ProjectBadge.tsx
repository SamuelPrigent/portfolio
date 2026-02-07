const BADGE_STYLE = { scale: "1.1", position: "relative" as const, top: "5px", right: "6px" };

const projectBadgeSvg = (
  <svg
    className="h-6 w-6"
    style={BADGE_STYLE}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="4" height="4" fill="hsl(341, 100%, 32%)" opacity="1" rx="1" />
    <rect x="10" y="3" width="4" height="4" fill="hsl(341, 100%, 32%)" opacity="0.7" rx="1" />
    <rect x="17" y="3" width="4" height="4" fill="hsl(341, 100%, 32%)" opacity="0.4" rx="1" />
    <rect x="3" y="10" width="4" height="4" fill="hsl(341, 100%, 32%)" opacity="0.8" rx="1" />
    <rect x="10" y="10" width="4" height="4" fill="hsl(341, 100%, 32%)" opacity="1" rx="1" />
    <rect x="17" y="10" width="4" height="4" fill="hsl(341, 100%, 32%)" opacity="0.6" rx="1" />
    <rect x="3" y="17" width="4" height="4" fill="hsl(341, 100%, 32%)" opacity="0.5" rx="1" />
    <rect x="10" y="17" width="4" height="4" fill="hsl(341, 100%, 32%)" opacity="0.8" rx="1" />
    <rect x="17" y="17" width="4" height="4" fill="hsl(341, 100%, 32%)" opacity="1" rx="1" />
  </svg>
);

export default function ProjectBadge() {
  return projectBadgeSvg;
}
