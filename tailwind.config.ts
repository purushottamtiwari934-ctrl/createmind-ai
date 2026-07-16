import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#08080A",
        surface: "#18181B",

        primary: "#7C3AED",
        secondary: "#2563EB",

        white: "#F8FAFC",

        border: "#2A2A2E",

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444"
      },

      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },

      boxShadow: {
        glow: "0 0 40px rgba(124,58,237,.35)",
        blueGlow: "0 0 40px rgba(37,99,235,.30)"
      }
    },
  },

  plugins: [],
};

export default config;
