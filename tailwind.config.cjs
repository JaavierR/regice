const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".alternated-digits": {
          fontFeatureSettings: '"ss01"',
        },
        ".disambiguation": {
          fontFeatureSettings: '"ss02"',
        },
        ".stylistic-alternates": {
          fontFeatureSettings: '"salt"',
        },
      });
    }),
  ],
};
