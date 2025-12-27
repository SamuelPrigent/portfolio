export default function ExperienceBadge() {
  return (
    <svg
      className="h-6 w-6"
      style={{ scale: "1.1", position: "relative", top: "5px", right: "6px" }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: "hsl(341, 100%, 32%)", stopOpacity: 0.4 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "hsl(341, 100%, 32%)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        d="M3 20 L8 14 L13 16 L20 4"
        stroke="url(#growthGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="3" cy="20" r="2" fill="hsl(341, 100%, 32%)" opacity="0.6" />
      <circle cx="8" cy="14" r="2" fill="hsl(341, 100%, 32%)" opacity="0.7" />
      <circle cx="13" cy="16" r="2" fill="hsl(341, 100%, 32%)" opacity="0.8" />
      <circle cx="20" cy="4" r="2.5" fill="hsl(341, 100%, 32%)" />
    </svg>
  );
}
