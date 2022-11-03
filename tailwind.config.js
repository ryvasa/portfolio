/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        hijau: "#166534",
        abu: "#f0f0f0",
        atu: "#2e2e2e",
        amu: "#e5e7eb",
      },
    },
  },
  plugins: [require("daisyui")],
};
