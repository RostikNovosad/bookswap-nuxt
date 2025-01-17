// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  components: {
    dirs: [
      {
        path: '~/components/general',
        global: true,
      },
    ],
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
});
