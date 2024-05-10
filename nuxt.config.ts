// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-quasar-ui',
  ],
  devtools: { enabled: false },
  devServer: {
    host: '0.0.0.0'
  },
  runtimeConfig: {
    public: {
      // 因为这里用到了SSR 代理请求其他服务接口，如果/api/代理，就会提示找不到地址，
      // 猜测可能是部署nginx时使用的代理转发没有请求正确地址 因此需要完整写出前端域名地址
      BASE_URL: process.env.NODE_ENV === 'production' ? '/v2/' : 'http://43.138.222.187:8000/'
    }
  },
  quasar: {
    // config: {
    //     brand: {
    //         primary: '#00faab',
    //         secondary: '#26A69A',
    //         accent: '#9C27B0',
    //
    //         dark: '#1d1d1d',
    //
    //         positive: '#21BA45',
    //         negative: '#C10015',
    //         info: '#31CCEC',
    //         warning: '#F2C037'
    //     }
    // },
    plugins: [
        'Notify',
        'Dialog'
    ],
    extras: {
      font: 'roboto-font',
    },

    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },
  build: {
    transpile: ['vuetify']
  },
  imports: {
    dirs: ['./store'] // 导入所有store
  },
  nitro: {
    esbuild: {
      options: {
        ...({drop: ['console']})
      }
    }
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
      '@/assets/styles/global.scss',
      '@/assets/styles/vars.scss',
      'bootstrap-icons/font/bootstrap-icons.css'
  ]
})
