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
        slideToTop: {
          "0%": {
            transform: "translateY(30%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          }
        },
        slideToBottom: {
          "0%": {
            transform: "translateY(-30%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          }
        },
      },
      animation: {
        slideToLeft: "slideToLeft 0.8s ease-in-out forwards",
        slideToTop: "slideToTop 0.5s ease-in forwards",
        slideToBottom: "slideToBottom 0.5s ease-in forwards",
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

