// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/tailwindcss.css', '~/assets/css/f.less', '~/assets/css/animate.css'],
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/tailwindcss'],
  eslint: {
    checker: true,
    config: {
      standalone: false,
    },
  },
  typescript: {
    shim: false,
    tsConfig: {
      include: ['~/types/*.d.ts'],
    },
  },
});
