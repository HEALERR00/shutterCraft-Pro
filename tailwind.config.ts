import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        camera: {
          darkest: "#050608",
          dark: "#0b0d13",
          card: "#12151f",
          cardHover: "#181d2a",
          border: "#202738",
          amber: "#f59e0b",
          gold: "#eab308",
          cyan: "#06b6d4",
          blue: "#3b82f6",
          red: "#ef4444",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(245, 158, 11, 0.25)",
        cyanGlow: "0 0 25px -5px rgba(6, 182, 212, 0.25)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shutter-flash": "flash 0.3s ease-out",
      },
      keyframes: {
        flash: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.8" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
