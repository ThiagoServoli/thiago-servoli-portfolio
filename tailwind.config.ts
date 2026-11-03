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
        // Paleta oficial da Click. (manual de identidade v1.0) — usada só na seção da Click.
        click: {
          orange: "#FB4F14",
          cream: "#EEECD5",
          coal: "#12110E",
          panel: "#1C1B17",
          sand: "#9E9B86",
        },
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        unbounded: ["var(--font-unbounded)", "system-ui", "sans-serif"],
        geist: ["var(--font-geist)", "system-ui", "sans-serif"],
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
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        // Revelação de título linha a linha (a linha sobe de dentro de uma máscara)
        "line-up": {
          from: { transform: "translateY(130%)" },
          to: { transform: "none" },
        },
      },
      animation: {
        enter: "enter 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 40s linear infinite",
        "line-up": "line-up 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
