/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      fontSize: {

        smalldescription: '18px',
      mediumdescription: '20px',
      largedescription: '26px',
      smallh1: '26px',
      mediumh1: '40px',
      largeh1: '50px'

      },
      colors: {
        NetflixRed : '#e50914'
      }
    }
  },
  plugins: [],
}
