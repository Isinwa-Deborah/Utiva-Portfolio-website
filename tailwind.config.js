/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Leckerli One'],
        'secondary': ['Poppins'],
        'tertiary': ['Lato'],
      },

      colors: {
        shadeGreen: '#1A7C47',
        shadeGray: '#e9e9f5',
        lightGreen: '#8CDDB1',

      }
    },
  },
  plugins: [],
}

