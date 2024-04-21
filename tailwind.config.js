/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom3: "repeat(3, minmax(200px, 1fr))",
        custom4: "repeat(4, minmax(50px, 1fr))",
      },
    },
  },
  plugins: [],
};
