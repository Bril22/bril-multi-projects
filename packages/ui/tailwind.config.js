/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        based: {
          primary: "#f9ad4a",
          secondary: "#f6a131",
          third: "#243673",
        },
        text: {
          primary: "#1a1a1a",
          secondary: "#4a4a4a",
          muted: "#f5f5f5",
          white: "#ffffff",
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};

