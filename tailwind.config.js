/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "720px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.875rem", //30px
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.75rem", //padding 60px
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    fontSize: {
      xl: [
        "20px",
        {
          letterSpacing: "-0.01em",
          fontWeight: "400",
          lineHeight: "28px",
        },
      ],
      "1xl": [
        "20px",
        {
          letterSpacing: "-0.01em",
          fontWeight: "500",
          lineHeight: "28px",
        },
      ],
      "2xl": [
        "24px",
        {
          letterSpacing: "-0.01em",
          fontWeight: "500",
          lineHeight: "28px",
        },
      ],
      "3xl": [
        "30px",
        {
          fontWeight: "500",
          letterSpacing: "-0.01em",
          lineHeight: "35px",
        },
      ],
      "4xl": [
        "40px",
        {
          fontWeight: "500",
          letterSpacing: "-0.01em",
          lineHeight: "43px",
        },
      ],
      "6xl": [
        "60px",
        {
          fontWeight: "500",
          letterSpacing: "-0.01em",
          lineHeight: "62px",
        },
      ],
      h1: [
        "90px",
        {
          fontWeight: "500",
          letterSpacing: "-0.01em",
          lineHeight: "85px",
        },
      ],
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#11131F",
        mediumGray: "#d9d9d9",
        lightGray: "#f9f9f9",
        red: "#FF0000",
      },
      fontFamily: {
        "pp-neue-montreal": ['"PP Neue Montreal"'],
      },
    },
  },
  plugins: [],
};
