/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      green: "#15a069",
      red: "#b02a2b",
      blue: "#3e63bb",
      pink: "#d36ad3",
      black: "#101010",
      white: "#F3F3F3",
    },
    extend: {},
    screens: {
      xm: "350px",
      sm: "640px",
      md: "913px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
