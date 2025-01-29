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
        // 'custom-gif': "url('~/assets/bg.gif')", // Webpack-aware path
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000',
      red: '#C70039',
      yellow: '#FFC300',
      oldPaper: {
        light: '#F5F1E1',
        DEFAULT: '#EDE3C9',
        dark: '#D6CDBF',
        edge: '#C8BBA8',
      },
      chocolate: {
        milk: '#D2691E',
        dark: '#4E2A00',
      },
      jungle: {
        light: '#6FBF73',   // Light Jungle Green
        DEFAULT: '#29AB87', // Standard Jungle Green
        dark: '#004B49',    // Deep Jungle Green
        muted: '#3B7A57',   // Muted Jungle Green
        condo: '#004B49'
      },
    },
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      condo: theme('colors.jungle.condo'),
    }),
  },
  plugins: [],
}

