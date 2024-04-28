// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  devtools: { enabled: false },
  devServer: {
    host: '0.0.0.0'
  },
  build: {
    transpile: ['vuetify']
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
      customElement: true,
      template: {
        transformAssetUrls
      }
    },
    vueJsx: {
      mergeProps: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *; @use "@/assets/styles/mixin.scss" as *;'
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
