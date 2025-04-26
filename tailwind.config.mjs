import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{mdx,md}"],
  plugins: [typography, animate],
};

export default config;
