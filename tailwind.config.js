/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "550px",
      md: "710px",
      lg: "1020px",
    },
    extend: {
      gridTemplateColumns: {
        custom1: "repeat(1, minmax(100px, 1fr))",
        custom2: "repeat(2, minmax(100px, 1fr))",
        custom3: "repeat(3, minmax(100px, 1fr))",
        custom4: "repeat(4, minmax(100px, 1fr))",
      },
    },
  },
  plugins: [],
};
