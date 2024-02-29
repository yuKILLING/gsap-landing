module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        main: ['Inter']
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}