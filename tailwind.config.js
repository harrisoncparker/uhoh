/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/wrappers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#492421",
        "brand-light": "#E3CEB6",
      },
      fontFamily: {
        title: ["annabelle-jf"],
        body: ["acumin-pro-extra-condensed"],
        wide: ["acumin-pro-wide"],
      },
    },
  },
  plugins: [],
};
