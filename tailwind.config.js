/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gif': "url('~/assets/bg.gif')", // Webpack-aware path
      },
    },
    colors: {
      white: '#FFFFFF',
      vanilla: {
        light: '#FFF3D1', // Warmer, buttery light vanilla
        DEFAULT: '#FCE0A9', // Warm vanilla with a golden touch
        dark: '#F8C978', // Deep golden vanilla
        orange: '#FFD700'
      },
      chocolate: {
        milk: '#D2691E',
        dark: '#4E2A00',
      },
    }
  },
  plugins: [],
}

