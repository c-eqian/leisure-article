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
      title: 'Eqian',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        {charset: 'utf-8'},
        {name: 'apple-mobile-web-app-title', content: 'Eqian博客'}, // 添加到主屏后的标题
        {name: 'og:type', content: 'Blog'},
        {name: 'og:title', content: 'Eqian'},
        {name: 'og:description', content: 'Eqian博客'},
        {name: 'og:site_name', content: 'Eqian'},
        {
          name: 'viewport',
          content: 'initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,viewport-fit=cover'
        }
      ],
      link: [
        {
          rel: 'icon', href: '/logo.svg', type: 'image/svg+xml'
        }
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
