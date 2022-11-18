/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#1F1839",
        secondary: "#DEC918",
        accent: "#0074A8",
        pagesbg: "#F6F8F9"
      },
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};
