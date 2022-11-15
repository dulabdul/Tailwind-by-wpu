/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        25: 'repeat(4, 25%)',
      },
    },
  },
  plugins: [],
};
