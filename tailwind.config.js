/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideToLeft: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          }
        },
        heightDecrease: {
          "0%": {
            maxHeight: "2000px", 
            opacity: "1",
          },
          "100%": {
            maxHeight: "0px",
            opacity: "0",
          },
        },
      },
      animation: {
        slideToLeft: "slideToLeft 0.3s ease-in-out forwards",
        heightDecrease: "heightDecrease 0.3s ease-in-out forwards",
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
    },
  },
  plugins: [],
}

