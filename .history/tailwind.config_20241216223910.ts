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
        secondary: "var(--color-secondary)",
        tertiary: "var(--tertiary)",

      },
      background : {
        background: "var(--background)",
        background_secondary: "var(--background-secondary)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;


// .ubuntu-light {
//   font-family: "Ubuntu", sans-serif;
//   font-weight: 300;
//   font-style: normal;
// }

// .ubuntu-regular {
//   font-family: "Ubuntu", sans-serif;
//   font-weight: 400;
//   font-style: normal;
// }

// .ubuntu-medium {
//   font-family: "Ubuntu", sans-serif;
//   font-weight: 500;
//   font-style: normal;
// }

// .ubuntu-bold {
//   font-family: "Ubuntu", sans-serif;
//   font-weight: 700;
//   font-style: normal;
// }

// .ubuntu-light-italic {
//   font-family: "Ubuntu", sans-serif;
//   font-weight: 300;
//   font-style: italic;
// }

// .ubuntu-regular-italic {
//   font-family: "Ubuntu", sans-serif;
//   font-weight: 400;
//   font-style: italic;
// }

// .ubuntu-medium-italic {
//   font-family: "Ubuntu", sans-serif;
//   font-weight: 500;
//   font-style: italic;
// }

// .ubuntu-bold-italic {
//   font-family: "Ubuntu", sans-serif;
//   font-weight: 700;
//   font-style: italic;
// }
