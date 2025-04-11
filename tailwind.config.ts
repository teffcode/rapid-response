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
        lightGray: '#f1f2f5',
        light: '#f5f6f8',
        gray: '#979ba4',
        darkGray: '#6c7280',
        primary: '#4b5566',
      },
    },
  },
  plugins: [],
} satisfies Config;
