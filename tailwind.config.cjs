/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    future: {
      hoverOnlyWhenSupported: true,
    },
    screens: {
      sm: "640px",
      md: "720px",
      lg: "1024px",
    },
  },
  plugins: [],
};
