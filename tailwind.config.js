const defaultTheme = require("tailwindcss/defaultTheme");
const { spacing, fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "880px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
