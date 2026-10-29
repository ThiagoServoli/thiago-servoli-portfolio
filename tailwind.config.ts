import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Azul institucional da marca — usado em blocos sólidos (ex.: seção de contato)
        navy: {
          DEFAULT: "#111184",
          700: "#0d0d66",
        },
        page: "rgb(var(--c-page) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        card: "rgb(var(--c-card) / <alpha-value>)",
        fg: "rgb(var(--c-fg) / <alpha-value>)",
        fg2: "rgb(var(--c-fg2) / <alpha-value>)",
        fg3: "rgb(var(--c-fg3) / <alpha-value>)",
        fg4: "rgb(var(--c-fg4) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        accent: "rgb(var(--c-accent) / <alpha-value>)",
        primary: "rgb(var(--c-primary) / <alpha-value>)",
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        enter: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "none" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "scroll-dot": {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "30%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(12px)" },
        },
      },
      animation: {
        enter: "enter 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "spin-slow": "spin 30s linear infinite",
        "scroll-dot": "scroll-dot 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
