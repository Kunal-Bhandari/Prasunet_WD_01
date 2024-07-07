/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports= {
  content: [
      "./src/**/*.{html,js,tsx,jsx,ts}",
      "./*.{html,js,tsx,jsx,ts}"
    ],
  theme: {
    fontFamily: {
      roboto: "Roboto",
      montserrat:"Montserrat"
      },
    extend: {
      colors: {
          
        }
      },
    },
    plugins: [],
}
