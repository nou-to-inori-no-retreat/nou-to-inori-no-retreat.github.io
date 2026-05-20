import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sagittarius: {
          navy: "#082A4A",
          deep: "#041829",
          water: "#A8DCEB",
          mist: "#EEF8FA",
          gold: "#C8A44D",
          leaf: "#54735C",
          porcelain: "#FAFCFB",
          ink: "#183245",
        },
      },
      fontFamily: {
        serif: [
          "var(--font-serif-jp)",
          "Yu Mincho",
          "YuMincho",
          "Hiragino Mincho ProN",
          "serif",
        ],
        sans: [
          "var(--font-sans-jp)",
          "Hiragino Sans",
          "Yu Gothic",
          "Meiryo",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(8, 42, 74, 0.11)",
        line: "0 1px 0 rgba(200, 164, 77, 0.38)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 24% 20%, rgba(168, 220, 235, 0.34), transparent 28%), radial-gradient(circle at 78% 16%, rgba(200, 164, 77, 0.16), transparent 20%), linear-gradient(145deg, #041829 0%, #082A4A 50%, #0D3F61 100%)",
        "water-sheen":
          "linear-gradient(135deg, rgba(168, 220, 235, 0.2), rgba(255, 255, 255, 0.88) 42%, rgba(200, 164, 77, 0.11))",
      },
    },
  },
  plugins: [],
};

export default config;
