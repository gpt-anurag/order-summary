/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          paleBlue: 'hsl(225, 100%, 94%)',
          brightBlue: 'hsl(245, 75%, 52%)',
        },
        neutral: {
          veryPaleBlue: 'hsl(225, 100%, 98%)',
          desaturatedBlue: 'hsl(224, 23%, 55%)',
          darkBlue: 'hsl(223, 47%, 23%)',
        },
        customHover: 'hsl(245, 83%, 68%)',
      },
      fontFamily: {
        custom: ['Red Hat Display', 'sans-serif'],
      },
      gridTemplateColumns: {
        customGrid: 'auto 1fr 1fr',
      },
    },
  },
  plugins: [],
}
