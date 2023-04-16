/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        "iccc-purple": "#6b62fd",
        "iccc-red": "#8c0b42",
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
  plugins: [
    require('flowbite/plugin')
  ]
}
