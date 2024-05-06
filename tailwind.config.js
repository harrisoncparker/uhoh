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
        "brand-light": {
          "DEFAULT": "#E3CEB6",
          "tranparent": "#E3CEB690",
        },
        "brand-purple": {
          "DEFAULT": "#E4C3EB",
          "500" : "#E4C3EB",
          "700" : "#975BAD",
        }
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
