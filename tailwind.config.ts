import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderGray: '#e8e9ec',
        lightGray: '#f1f2f5',
        light: '#f5f6f8',
        gray: '#979ba4',
        darkGray: '#6c7280',
        primary: '#4b5566',
        secondary: '#13275f',
        active: {
          bg: '#ebfff9',
          text: '#06714e',
        },
        eliminated: {
          bg: '#faeceb',
          text: '#ab1818',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
