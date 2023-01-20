/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        appear: {
          'from' : {'max-height': '1rem'},
          'to' : {'max-height': '15rem'}
        },
        fadeIn: {
          'from': {'opacity': 0},
          'to' : {'opacity': 1}
        }
      } 
    },
  },
  plugins: [],
}
