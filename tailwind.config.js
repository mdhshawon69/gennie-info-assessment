/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8F8F8",
        backdrop: "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
