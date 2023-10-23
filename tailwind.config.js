/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00A9FF',
        'hover': '#0096e3'
      },
      fontFamily: {
        sans: ['Nasalization-Rg']
      },
    },
  },
  plugins: [],
}

