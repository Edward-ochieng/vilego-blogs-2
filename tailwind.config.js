/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '100': '36rem',
        '105': '30rem',
      },
      width: {
        '128': '48rem',
      }
    },
  },
  plugins: [],
}