/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backg: "rgba(var(--backg))",
        grape: "rgba(145, 37, 233, 0.92)",
      },
    },
  },
  plugins: [],
};
