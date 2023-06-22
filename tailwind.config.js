/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      spacing:{
        "big":"48rem"
      }
    },
    fontFamily:{ 
      // sans: ['Helvetica', 'Arial', 'sans-serif'],
      nunito:['Poppins', 'sans-serif'],
      'dmserif': ['DM Serif', 'serif'],
        'com': ['Comfortaa', 'cursive'],
    }
  },
  plugins: [],
}

