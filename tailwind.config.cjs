/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    future: {
      hoverOnlyWhenSupported: true,
    },
    screens: {
      sm: { max: "650px" },
      md: { min: "651px" },
      lg: { min: "900px" },
    },
  },
  plugins: [],
};
