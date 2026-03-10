import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#05141a",
          light: "#0a2535",
        },
        teal: {
          DEFAULT: "#155670",
          medium: "#029fb6",
          light: "#ebf7fa",
        },
        cyan: {
          DEFAULT: "#35e4fd",
          light: "#96f1fe",
        },
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};

export default config;
