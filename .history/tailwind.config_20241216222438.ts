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
        background: "hsl(var(--background))",
        foreground: "var(--foreground)",
        background_secondary: "hsl(var(--background-secondary))",
        primary: "var(--primary)",
      },
      background : {
        background: "hsl((var(--background))",
        background_secondary: "hsl(var(--background-secondary))",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;