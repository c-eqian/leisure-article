// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@element-plus/nuxt'],
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0'
  },
  typescript: {
    typeCheck: true,
    shim: true
  },
  app: {
    // SEO一些配置
    head: {
      charset: 'utf-8',
      title: '秋瑾',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: '秋瑾', content: '可以用来记录你的往事！' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/svg')]
      })
    ]
  },
  css: [
    'element-plus/dist/index.css'
  ]
})
