// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-swiper', '@formkit/auto-animate/nuxt', '@nuxtjs/supabase'],

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },

  plugins: [],

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

  supabase: {
    redirect: false
  }

});