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
    zIndex: {
      "-10": "-10",
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
      "25": "25",
      "75": "75",
      "100": "100",
      auto: "auto",
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
