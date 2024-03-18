/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#242424",
        secondary: "#ffffff",
        dimPrimary: "#363636",
        darkPrimary: "#868686",
        linkedIn: "#0077b5",
        github: "#333",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        lightPink: "#FFEBEE",
      },
      placeholderColor: {
        primary: "#868686",
      },

      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
        fontWeight: {
          normal: "400",
          semibold: "600",
          bold: "700",
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
