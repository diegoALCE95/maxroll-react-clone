module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

      },
      colors: {
        'light-white': '#e3e3e3',
        'gray': '#151515',
        'blue': '#057af0',
      },
      backgroundImage: {
        'guides-texture': "url('/img/bg-guides.jpg')",
      },
    },
  },
  plugins: [],
}
