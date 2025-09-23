// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/scripts', '@pinia/nuxt'],
  css: [
    '~/assets/styles/variables.scss',
    '~/assets/styles/global.scss'
  ]
})