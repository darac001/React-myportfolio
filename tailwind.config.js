/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        blue: "#0170baff",
        red:"#e5540a",
        yellow:"#e5540a",
        "yellow-js":"#f7df1e",
        grey:"#b9b9bd",
        cyan:"#61dafb",
        "cyan-tail":"#07B6D5",
        "deep-black":"#090909",
        "deep-black-nav":"#101010",
        "dark-grey":"#757575",
        "opaque-black":"#19181d",
        
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(90deg, rgba(231,210,67,1) 0%, rgba(229,84,10,1) 43%, rgba(156,29,7,1) 100%)",

        "gradient-rainblue":
          "linear-gradient(90deg, rgba(231,210,67,1) 0%, rgba(229,84,10,1) 43%, rgba(156,29,7,1) 100%)",
      }),
      fontFamily: {
        futura: ["FuturaPT"],
        futurabold:["FuturaPTBold"],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      content: {
        splash: "url('./assets/splash.svg')",
        nothing: "",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      fontSize: {
        '2xl': '20px',
        '8xl': '6rem',
      }
    },
  },
  plugins: [],
}
