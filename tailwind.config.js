const defaultTheme = require('tailwindcss/defaultTheme')
const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily:{
        sans: ['IBM Plex Sans',...fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
