// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  server: {
    port: process.env.NUXT_PORT || 3000,
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Limelight&family=Martian+Mono:wght@100..800&display=swap',
        },
      ],
    },
  },
  telemetry: false,
  site: { url: 'coachinmd.com' },
  compatibilityDate: '2024-04-03',
  ssr: true,
  nitro: {
    preset: 'vercel', // Ensure server is set correctly
  },
  target: 'static',
  build: {
    transpile: [],
  },
  devtools: { enabled: false },
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

  modules: [
      'nuxt-toastify',
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/sitemap',
      '@nuxtjs/google-fonts',
  ],
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