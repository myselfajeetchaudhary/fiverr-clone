/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IBM: ["IBM Plex Sans", "sans-serif"],
        Kaushan: ["Kaushan Script", "cursive"],
        Playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
