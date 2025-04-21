/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [",/public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: '#D9D9D9',
        redDetrito: '#BE0E0E'     
      },
      fontFamily: {
        almarai: [ 'Montserrat', 'serif'],
        julius: ['Montserrat' , 'sans-serif'],
      },
      backgroundImage: {
        'detritoFooter': "url('/images/detrito_footer.jpg')",
      }
    },
  },
  plugins: [],
};