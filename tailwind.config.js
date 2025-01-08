import { comment } from "postcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        card1img: "url('/image/card1.png')",
        card2img: "url('/image/card2.png')",
        card3img: "url('/image/card3.png')",
        card4img: "url('/image/card4.png')",
        card1icon: "url('/image/card1.svg')",
        card2icon: "url('/image/card2.svg')",
        card3icon: "url('/image/card3.svg')",
        card4icon: "url('/image/card4.svg')",
        plantsimg: "url('/image/plantsbgimage.png')",
        recentlyProjectsCard1: "url('/image/RecentlyProjectsCard1.png')",
        recentlyProjectsCard2: "url('/image/RecentlyProjectsCard2.png')",
        recentlyProjectsCard3: "url('/image/RecentlyProjectsCard3.png')",
        avatar: "url('/image/avatar.png')",
        benefitsimg: "url('/image/Benefitsimg.png')",
        newscard1: "url('/image/news-card-1.png')",
        newscard2: "url('/image/news-card-2.png')",
        newscard3: "url('/image/news-card-3.png')",
        profile: "url('/image/comment.svg')",
        comment: "url('/image/profile.svg')",
        headerbg:"url('/image/Section.png')",
      },
      fontFamily: {
        grace: ['"Covered By Your Grace"', "cursive"],
        manrope: ['"Manrope"', "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
        extrabold: "800",
      },
      colors: {
        bgMilk: "#F8F7F0", // Replace with your HEX color
        EEC044: "#EEC044",
        C5CE38: "#C5CE38",
        "4BAF47": "#4BAF47",
        "1F1E17": "#1F1E17",
        "878680": "#878680",
        "24231D": "#24231D",
        A5A49A: "#A5A49A",
        EEC044: "#EEC044",
        C5CE38: "#C5CE38",
        "4BAF47": "#4BAF47",
        E4E2D7:"#E4E2D7",
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
