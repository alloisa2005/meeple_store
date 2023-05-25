/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      monteR: ['Montserrat-Regular', 'sans-serif'],
      monteB: ['Montserrat-Bold', 'sans-serif'],
      monteS: ['Montserrat-SemiBold', 'sans-serif'],
      gochi: ['GochiHand-Regular', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
