/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    colors: {
      skeletonLight: "#e0e0e0",
      skeletonDark: "#3b3b3b",
      lightBackground: "#ffffff",
      darkBackground: "#1a202c",
      lightText: "#1a202c",
      darkText: "#00e39e",
      black: "#000000",
      grey: "#d1d5db",
      primary: "#28a17f",
      secondary: "#7fd6b7",
      background: "#146854",
      hover: "#082d49",
      accent: "#00e39e"
    },
    extend: {},
  },
  plugins: [],
};

