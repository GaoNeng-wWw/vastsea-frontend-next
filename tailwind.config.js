/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',
  theme: {
    extend: {
      colors: {
        primary: {
          500: 'hsla(var(--primary-500))',
        },
        default: {
          200: 'rgba(var(--default-200))',
          700: 'rgba(var(--default-700))',
        },
      },
      fontFamily: {
        PingFang: ['PingFang'],
        aliShuhei: ['AliShuHeiTi'],
        aliPuHui: ['AlibabaPuHui'],
      },
    },
  },
  plugins: [],
};
