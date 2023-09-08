import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      worksans: ["WorkSans", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      xs: "300px",
      sm: "570px",
      md: "640px",
      lg: "900px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1640px",
      "4pxl": "440px",
      "5pxl": "900px",
      "1btn": "200px",
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
export default config;
