/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        "fade-in-up": "fade-in-up 1s ease-out forwards", 
      
      },

      fontFamily: {
        Inter: ['Inter'],
      },
      screens: {
        '2xl': '1920px',
        '3xl': '2560px'
      },
    },
  },
  plugins: [],
}
