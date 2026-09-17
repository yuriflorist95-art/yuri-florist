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
        khaki: {
          light: '#F7F4EF',
          accent: '#E6DFD3',
        },
        pink: {
          pastel: '#F8D7DA',
          accent: '#E8A5B8',
          dark: '#D88EA3',
        },
        textDark: '#5A4E4D',
      },
    },
  },
  plugins: [],
};
export default config;