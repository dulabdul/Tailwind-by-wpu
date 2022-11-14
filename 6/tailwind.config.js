/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ubuntu: 'Ubuntu',
      },
      colors: {
        kopi: 'red',
      },
    },
  },
  plugins: [],
};
