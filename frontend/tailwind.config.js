const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#26A69A",
        secondary: "#728F9E",
        thirdy: "#848383",
        balance: "#1AA7EC",
        pHeder: "#58595B",
        status: "#26BF64",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        red: "#D32128",
        green: "#26A69A",
        customGrey: "#9A9999",
        accentGreen: "#00D19F",
        accentDarkGreen: "#00d1a01a",
        customBlack: "#263339",
        newColor: "#728F9E",
        primer: "#263339",
        themePrimary: "#26A69A",
        themeDanger: "#DC3545",
        themeWarning: "#FF9723",
        themeYellow: "#FFC107",
        themeDark: "#263339",
        themeMuted: "#728F9E",
        themeGray: "#F4F6F8",
      },
      backgroundColor: {
        first: "#E7F0F3",
        mobile: "#FAFBFD",
        second: "#F3F4FB",
        green1: "#039F79",
        btnYellow: "#FFD400",
        btnGreen: "#00D19F",
        btnPrimary: "#1a94ec",
        btnRed: "#ec1a1a",
        btnGrey: "#A09996",
        transparent: "transparent",
        current: "currentColor",
        white1: "#fff",
        black: "#000",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        accentGreen: "#00D19F",
        accentDarkGreen: "#00d1a01a",
        themePrimary: "#26A69A",
        themeDanger: "#DC3545",
        themeWarning: "#FF9723",
        themeYellow: "#FFC107",
        themeDark: "#263339",
        themeMuted: "#728F9E",
        themeGray: "#F4F6F8",
      },
      backgroundImage: {
        "header-home":
          "linear-gradient(177.39deg, #00CD9C 2.18%, #03A27B 81.23%);",
        "hero-pattern":
          "linear-gradient(2.9deg, #E7F0F3 25.24%, #039F79 55.23%, #00D19F 99.06%)",
        "hero-pattern-dark":
          "linear-gradient(179.43deg, #363636 46.11%, #070707 120.83%);",
        "qrcode-green": "linear-gradient(180deg, #039F79 0%, #00CD9C 100%);",
      },
      boxShadow: {
        button: "0px -8px 16px rgba(24, 24, 24, 0.12)",
        donation: "0px -2px 13px rgba(0, 0, 0, 0.08)",
        ppob: "0px 10px 30px rgba(24, 24, 24, 0.1)",
        "vcard-features": "0px 10px 30px rgba(24, 24, 24, 0.1)",
      },
    },
    screens: {
      xs: "480px",
      // => @media (min-width: 640px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
});
