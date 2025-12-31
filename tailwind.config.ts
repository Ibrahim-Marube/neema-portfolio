import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0A2540',
          teal: '#008080',
          gray: '#4A5568',
          lightgray: '#E5E5E5',
        },
        dark: {
          bg: '#1C1C1C',
          surface: '#2D2D2D',
          text: '#E5E5E5',
          teal: '#00B894',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
