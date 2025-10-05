// component
export default function BackgroundGrid() {
  return (
    <>
      <svg
        aria-hidden="true"
        className="mask pointer-events-none absolute inset-0 h-full w-full fill-[#a09b95] stroke-[#8d6f4e29]"
      >
        <defs>
          <pattern
            id=":r2:"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path d="M.5 80V.5H80" fill="none" strokeDasharray="0"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#:r2:)"
        ></rect>
      </svg>
    </>
  );
}
