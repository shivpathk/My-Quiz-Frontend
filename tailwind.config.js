/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        run: {
          '0%': { left: '0%' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        run: 'run 4s linear infinite',
      },
    },
  },
  plugins: [],
}