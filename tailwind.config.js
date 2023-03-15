/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d41fd",
        },
        bg: {
          DEFAULT: "#dddee2",
          secondary: "#eaebef",
        },
      },
    },
  },
  plugins: [],
};
