/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        light_purple: "#5C16C5",
        dark_purple: "#2D0C5E",
        dark_grey: "#323232",
        light_grey: "#646464",
        strong_yellow: "#D18000"
      }
    }
  },
  plugins: [],
}