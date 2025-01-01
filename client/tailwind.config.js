/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#121212',
        'deep-black': '#000005',
        'dark-gray': '#111111',
        'gray': '#2f2f2f',
        'gray-111': '#3c3c3c',
        'sky-blue': '#6dc2ff',
        'mint-green': '#8ef092',
        'light-gray': '#d9d9d9',
        lavender: '#e1a3ff',
        beige: '#f4f2ed',
        'off-white': '#fdfdfd',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}

