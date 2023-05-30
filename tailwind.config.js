/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    fontFamily: {
    'josefin': ['Josefin Sans', 'cursive'],
    'firacode': ['Fira Code', 'cursive'],
  },
    },
  },
  plugins: [],
};
