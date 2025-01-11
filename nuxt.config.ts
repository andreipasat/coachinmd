// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: { url: 'coachinmd.com' },
  compatibilityDate: '2024-11-01',
  ssr: true,
  target: 'static',
  build: {
    transpile: [],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      baseURL: 'coachinmd.com' || 'http://localhost:3000', // Default value
    },
  },

  modules: ['nuxt-toastify', '@vesp/nuxt-fontawesome', '@nuxtjs/sitemap'],
  toastify: {
    autoClose: 2000,
    position: 'top-right',
    theme: 'auto',
  },
  fontawesome: {
    icons: {
      solid: [
          'book',
        'hand-holding',
        'shield-alt',
        'calendar-alt',
        'search',
        'people-group'
      ],
    }
  },
  pages: true,
  sitemap: {
    hostname: 'coachinmd.com',
    routes: [
      '/',           // Landing page
      '/privacy',    // Privacy page
      '/terms'       // Terms page
    ],
  },
})