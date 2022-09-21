module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl:  '1440px'
    },
    extend: {
      colors: {
        softBlue: "#5368DF",
        softRed: "#FA5757",
        grayishBlue: "#9194A1",
        veryDarkBlue: "#252B46"
      },
      fontFamily:{ 
        sans: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}
