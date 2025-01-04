/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'card1img': "url('./src/assets/images/card1.png')",
        'card2img': "url('./src/assets/images/card2.png')",
        'card3img': "url('./src/assets/images/card3.png')",
        'card4img': "url('./src/assets/images/card4.png')", 
        'card1icon': "url('./src/assets/images/card1.svg')", 
        'card2icon': "url('./src/assets/images/card2.svg')", 
        'card3icon': "url('./src/assets/images/card3.svg')", 
        'card4icon': "url('./src/assets/images/card4.svg')",
        
      },
      fontFamily: {
        grace: ['"Covered By Your Grace"', 'cursive'],
        manrope: ['"Manrope"', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
        extrabold: '800',
      },
      colors: {
        bgMilk: "#F8F7F0", // Replace with your HEX color
        EEC044: "#EEC044",
        C5CE38: "#C5CE38",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
