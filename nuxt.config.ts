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
    preset: 'node', // Ensure server is set correctly
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
      '@nuxtjs/google-fonts'
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
  // googleFonts: {
  //   families: {
  //     'Playfair+Display': {
  //       wght: [400, 500, 700], // Weights for Playfair Display
  //     },
  //     Lato: {
  //       wght: [300, 400, 700], // Weights for Lato
  //     },
  //   },
  //   display: 'swap', // Use swap display for better performance
  //   prefetch: true, // Optional: Enable prefetching of fonts
  //   preload: true, // Optional: Preload fonts for faster loading
  //   download: true, // Optional: Self-host fonts
  // },
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