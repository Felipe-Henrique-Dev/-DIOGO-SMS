import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        background_secondary: "var(--background-secondary)",
        primary: "var(--primary)",
        tertiary: "var(--tertiary)",

      },
      background : {
        background: "var(--background)",
        background_secondary: "var(--background-secondary)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
