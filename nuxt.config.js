
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  head: {
    title: 'cara',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.1.0/modern-normalize.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        type: 'text/javascript',
        defer: true,
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js',
        type: 'text/javascript',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js',
        type: 'text/javascript',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/ScrollTrigger.min.js',
        type: 'text/javascript',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js',
        type: 'text/javascript',
      },
    ],
  },

  css: ['~/assets/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/mixins.scss" as mix;
            @use "@/assets/breakpoints.scss" as bp;
          `
        }
      }
    }
  },

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],
})
