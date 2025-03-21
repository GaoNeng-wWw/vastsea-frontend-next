/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',
  theme: {
    extend: {
      colors:{
        primary: {
          500: 'hsla(var(--primary-500))'
        }
      }
    },
  },
  plugins: [],
}