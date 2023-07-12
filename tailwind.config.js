/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#BAE27D',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
