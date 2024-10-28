/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      gridTemplateColumns: {
        cardgrid: 'repeat(auto-fill , minmax(235px,240px))',
      },
    },
  },
  plugins: [],
}
