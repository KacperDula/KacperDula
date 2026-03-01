import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0a1020",
        surface: "#121a2e",
        accent: "#5eead4",
        text: "#d7e3ff",
        muted: "#8fa2c9"
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.25)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(94,234,212,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(94,234,212,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
