type SvgProps = {
  className?: string;
};

export const SignatureUnderline = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 240 42"
    fill="none"
    aria-hidden
    focusable="false"
  >
    <path
      d="M6 28c38-14 104-22 176-18"
      stroke="url(#signatureStroke)"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="signatureStroke"
        x1="10"
        y1="4"
        x2="196"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ffc99a" stopOpacity="0.85" />
        <stop offset="0.6" stopColor="#ff9752" stopOpacity="0.78" />
        <stop offset="1" stopColor="#ff7a18" stopOpacity="0.7" />
      </linearGradient>
    </defs>
  </svg>
);

export const PaperPlaneIconAlt = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden
    focusable="false"
  >
    <path
      d="M0 8l4.9 1.4H5v-.1L12.1 4 11 5.2l-6.2 6.6L5 15l2.9-3.2L10 16l6-16z"
      stroke="currentColor"
      strokeWidth="0.5"
    />
  </svg>
);

export const PaperTrail = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 260 120"
    fill="none"
    aria-hidden
    focusable="false"
  >
    <path
      d="M8 90c38-34 82-36 120-24 42 13 67 0 116-40"
      stroke="url(#trailGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="10 14"
    />
    <defs>
      <linearGradient
        id="trailGradient"
        x1="12"
        y1="92"
        x2="236"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0f172a" stopOpacity="0.65" />
        <stop offset="0.55" stopColor="#111827" stopOpacity="0.58" />
        <stop offset="1" stopColor="#020617" stopOpacity="0.5" />
      </linearGradient>
    </defs>
  </svg>
);

export const LinkedInIcon = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    focusable="false"
  >
    <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.605 0 4.268 2.371 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452z" />
  </svg>
);

export const SparkleIcon = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
    focusable="false"
  >
    <path
      d="M12 5.5 13.45 9l3.55 1.45L13.45 11.9 12 15.4 10.55 11.9 7 10.45 10.55 9 12 5.5Z"
      fill="#fff5eb"
      stroke="#ff9a45"
      strokeWidth="1.1"
    />
  </svg>
);

export const GitHubIcon = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    focusable="false"
  >
    <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.18-.13-.3-.54-1.52.1-3.17 0 0 1-.32 3.29 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.8 1.23 1.87 1.23 3.18 0 4.61-2.81 5.63-5.48 5.93.43.38.82 1.12.82 2.26v3.35c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
  </svg>
);

export const MailIcon = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
    focusable="false"
  >
    <path
      d="M5.25 4h13.5a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245Zm15.25 5.373-8.15 4.29a.75.75 0 0 1-.603.043l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143Zm-1.75-3.873H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l8.5 4.474 8.5-4.475V7.25a1.75 1.75 0 0 0-1.607-1.744Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.2"
    />
  </svg>
);

export const BriefcaseIcon = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    focusable="false"
  >
    <path d="M3 7h18v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7Z" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
    <path d="M11 12h2" />
  </svg>
);

export const DownloadIcon = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    focusable="false"
  >
    <path d="M12 16a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42L11 12.59V4a1 1 0 1 1 2 0v8.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29ZM5 20a3 3 0 0 1-3-3v-4a1 1 0 1 1 2 0v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3Z" />
  </svg>
);

export const ToolIcon = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M5.33 3.272a3.5 3.5 0 0 1 4.472 4.473L20.647 18.59l-2.122 2.122L7.68 9.867a3.5 3.5 0 0 1-4.472-4.474L5.444 7.63a1.5 1.5 0 0 0 2.121-2.121zm10.367 1.883l3.182-1.768 1.414 1.415-1.768 3.182-1.768.353-2.12 2.121-1.415-1.414 2.121-2.121zm-7.071 7.778l2.121 2.122-4.95 4.95A1.5 1.5 0 0 1 3.58 17.99l.097-.107z"
    />
  </svg>
);

export const CapIcon = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
      <path d="M2 17.4L23.022 9l21.022 8.4-21.022 8.4z" />
      <path
        strokeLinecap="round"
        d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"
      />
    </g>
  </svg>
);

export const HomeIcon = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    focusable="false"
  >
    <path d="M11.3 2.3a1 1 0 0 1 1.4 0l8 8a1 1 0 0 1-.7 1.7H19v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-5h-2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9H4a1 1 0 0 1-.7-1.7l8-8Z" />
  </svg>
);

export const StarIcon = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    aria-hidden
    focusable="false"
  >
    <path
      d="M20 4 24.77 14.3 36 15.64 27.82 23.36 29.96 34.5 20 29.08 10.04 34.5 12.18 23.36 4 15.64 15.23 14.3 20 4Z"
      stroke="url(#starGradient)"
      strokeWidth="1.6"
      fill="url(#starFill)"
    />
    <defs>
      <linearGradient
        id="starGradient"
        x1="20"
        x2="32"
        y1="4"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ffb347" />
        <stop offset="1" stopColor="#ff7a18" />
      </linearGradient>
      <radialGradient
        id="starFill"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 18 -18 0 20 20)"
      >
        <stop stopColor="#fff2e0" stopOpacity="0.9" />
        <stop offset="1" stopColor="#fff2e0" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export const ExternalLinkIcon = ({ className = "" }: SvgProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    focusable="false"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
