/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        babyblue: "#3579fa",
        darkblue: "#18162D",
        inputblue: "#5591FF",

      },
    },
  },
  plugins: [],
};

