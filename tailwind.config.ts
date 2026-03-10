import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — warm dark pub tones
        pub: {
          bg:        "#241408", // brun bois sombre
          surface:   "#301C0C", // brun bois moyen — cartes
          border:    "#5A3418", // bordures bois visibles
          accent:    "#C8852A", // amber gold
          "accent-light": "#E8A84A", // lighter amber
          cream:     "#F2E8D5", // warm cream text
          muted:     "#A88060", // muted text
          brick:     "#8B3520", // brick red accent
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body:    ["var(--font-crimson)", "Georgia", "serif"],
      },
      backgroundImage: {
        "grain": "url('/images/grain.svg')",
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease forwards",
        "fade-in":   "fadeIn 0.5s ease forwards",
        "gold-glow": "goldGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        goldGlow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(200, 133, 42, 0.3)" },
          "50%":      { boxShadow: "0 0 20px rgba(200, 133, 42, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
