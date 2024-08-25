/** @type {import('tailwindcss').Config} */
import backimg from './src/Assets/Background.png'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        altivo: ["Altivo", "sans-serif"],
      },
      backgroundImage: {
        "back-image": "url('./src/Assets/Background.png')",
      },
      colors: {
        customGold: "#C0A991",
      },
    },
  },
  plugins: [],
};

