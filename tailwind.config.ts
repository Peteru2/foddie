/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'public':'#E63946',
      'private':'#2D2D2D',
      'secondary':'#FAF3E0',
      'accent':'#800020',

    },
    fontFamily:{
      roboto:["Roboto", "sans-serif"],
      lora:["Lora", "serif"],
      playfair:['Playfair Display', 'sans-serif'],
      DMsans:["DM Sans", 'sans-serif']

    },
    extend: {
      
    },
    
  },
  plugins: [],
}