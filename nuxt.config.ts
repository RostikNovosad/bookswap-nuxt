// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,


  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    }
  },

  plugins: [
    '~/plugins/firebase.client.js'
  ],

  components: {
    dirs: [
      {
        path: '~/components/general',
        global: true,
      }, {
        path: '~/components/layout',
        global: true,
      }, {
        path: '~/components/forms',
        global: true,
      },
    ],
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-swiper', '@formkit/auto-animate/nuxt'],
});