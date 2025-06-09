// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,


  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppID: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
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