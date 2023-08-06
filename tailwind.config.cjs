/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "goblin-green": "#0A9E85",
      "discord-blue": "#7289DA",
      "gray-ish": "#E2E3DE",
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        satisfy: ["'Satisfy'"],
      },
      boxShadow: {
        features: "-35px 35px rgba(208, 212, 207, 1)",
      },
    },
  },
  plugins: [],
};
