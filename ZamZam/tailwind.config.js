/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Roboto Condensed", 'sans-serif'],
        poppins:["Poppins", 'sans-serif'],
        a1:["Londrina Outline", 'sans-serif'],
        Arsenal : ["Arsenal SC", 'sans-serif']
      },
      spacing: {
        '128': '32rem',
        '25' : '25rem'
      },
      colors : {
        zamzam:'rgb(105, 28, 50)'
      }
    },
  },
  plugins: [],
}