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
        "nmsu-blue":"R167 G186 B190",
        "nmus-gray":"#ccccc",
        "nmsu-white":"#ededed",
        "nmsu-darkGray":"#6d6e71",
        "nmsu-blue2":"R0 G185 B242"
      }
    },
  },
  plugins: [],
}
