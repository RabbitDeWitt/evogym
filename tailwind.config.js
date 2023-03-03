/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20": "hsl(42deg, 48%, 95%)",
        "gray-50": "hsl(0deg, 22%, 92%)",
        "gray-100": "hsl(0deg, 23%, 84%)",
        "gray-500": "hsl(0deg, 100%, 18%)",
        "primary-100": "hsl(2deg, 100%, 94%)",
        "primary-300": "hsl(2deg, 100%, 82%)",
        "primary-500": "hsl(2deg, 100%, 70%)",
        "secondary-400": "hsl(42deg, 100%, 67%)",
        "secondary-500": "hsl(43deg, 100%, 57%)",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily:{
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content:{
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')"
      }
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}