import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // xs: '576px',
      xs: "530px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      display: ["group-hover"],
      colors: {
        "ec-black": "#000000",
        "ec-gray": "#F0F0F0",
        "ec-yellow": "#FFC633",
        "ec-green": "#01AB31",
        "ec-gray-text": "rgba(0, 0, 0, 0.6)",
        "ec-gray-bg-product": "F0EEED",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
