/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px"
      },
      fontFamily: {
        'poppin': ['Poppins', 'sans-serif',]
      },
      backgroundColor: {
        headbg: "#282828",
        hdafter: "#5C6A92"

      },
      borderColor: {
        hdbtmom: "#FFB800"
      },
      backgroundImage: {
        banbg: "URL(./src/assets/banner.png)",
        serbg: "url(./src/assets/unsplash.png)"
      }
    },
  },
  plugins: [],
}

