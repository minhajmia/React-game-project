/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2556d1",

          secondary: "#bf372d",

          accent: "#097a89",

          neutral: "#1B1424",

          "base-100": "#F2F1F8",

          info: "#68B4CF",

          success: "#138B69",

          warning: "#BE950E",

          error: "#F82068",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
