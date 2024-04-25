/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: {
        default: "#FFFFFF",
        snow: "#F8FAFC",
        eggshell: "#F5E8D5",
      },
      green: {
        mint: "#A0ECB1",
        forest: "#32D657",
      },
      pink: {
        blush: "#F7D4D3",
      },
      red: {
        brick: "#DD524C",
      },
      gray: {
        light: "#E3E8EF",
        steel: "#97A3B6",
      },
      blue: {
        electric: "#3662E3",
      },
      orange: {
        burnt: "#E9A23B",
        cream: "#F5D565",
      },
    },
    extend: {
      fontSize: {
        title: "2.5rem",
      },
      gridTemplateColumns: {
        header: "max-content max-content max-content",
        taskStatus: "max-content 1fr max-content",
        taskcard: "3em 1fr 3em",
      },
    },
  },
  plugins: [],
};
