/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '375px',
      'lg': '1024px'
    },
    fontFamily: {
      "rubik": ['Rubik', "sans-serif"]
    },
    colors:{
      "softBlue": 'hsl(231, 69%, 60%)',
      "softRed": 'hsl(0, 94%, 66%)',
      "grayishBlue": 'hsl(229, 8%, 60%)',
      "darkBlue": 'hsl(229, 31%, 21%)',
      "white": 'white',
    },
    extend: {},
  },
  plugins: [],
}
