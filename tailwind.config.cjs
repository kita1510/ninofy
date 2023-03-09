const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        spotify: {
          100: "#000000",
          200: "#242424",
          300: "#181818",
          400: "#a7a7a7",
          500: "#363636",
        },
      },
      boxShadow:{
        
      }
    },
  },
  plugins: [],
});
