module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "main": "url('/src/images/Welcome.jpg')",
      },
      height: {
        "header": "40rem",
        "headerSm": "34rem"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
