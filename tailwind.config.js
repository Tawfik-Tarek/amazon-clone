/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        amazon: {
          background: "#EAEDED",
          lightblue: "#232F3A",
          yellow: "#FEBD69",
          DEFAULT: "#131921",
        }
      },
      screens :{
        'pv' : {'max' : '676px'},
        'pr' : {'max' : '767px'},
        'ps' : {'min' : '397px' , 'max' :'554px'},
      }
    },
  },
  plugins: [],
};
