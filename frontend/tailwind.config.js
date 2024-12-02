/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1f2026",
        green: {
          1: "#d0fcf4",
          2: "#a0f9e9",
          3: "#71f5de",
          4: "#41f2d3",
          5: "#12efc8",
          6: "#0ebfa0",
          7: "#0b8f78",
          8: "#076050",
          9: "#043028",
        },
        purple: "#8884d8",
      },
    },
  },
  plugins: [],
};
