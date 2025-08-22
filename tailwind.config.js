/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./Components/**/*.html",
    "./Demos/**/*.html",
    "./Projects/**/*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      fadein: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      slideUp: {
        "0%": { transform: "translateY(100%)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
    },
    animation: {
      wiggle: "wiggle 1s ease-in-out infinite",
      fadein: "fadein 1.5s ease-out forwards",
      slideUp: "slideUp 0.8s ease-out forwards",
    },
  },
  plugins: [],
};
