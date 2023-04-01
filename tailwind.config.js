/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nmsu-crimson": "#8c0b42",
        "nmsu-gold":"#cfc7bd",
        "nmsu-blue":"#A7BABE",
        "nmus-gray":"#ccccc",
        "nmsu-white":"#ededed",
        "nmsu-darkGray":"#6d6e71",
        "nmsu-blue2":"0,185,242"
      }
    },
  },
  plugins: [],
}
