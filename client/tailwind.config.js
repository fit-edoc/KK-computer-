/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        headline:["headline"]
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.grid-areas': {
          'grid-template-areas': 'var(--grid-areas)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

