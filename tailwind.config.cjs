/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        imageMain: "url('src/assets/paisaje.jpg')",
      },
    },
    fontFamily: {
      nunito: ["Nunito"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
