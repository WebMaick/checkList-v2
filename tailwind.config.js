/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: "#ff466e",
          100: "#ff3c64",
          200: "#fa325a",
          300: "#f02850",
          400: "#e61e46",
          500: "#dc143c",
          600: "#d20a32",
          700: "#c80028",
          800: "#be001e",
          900: "#b40014",
        },
      },
    },
  },
  plugins: [],
};
