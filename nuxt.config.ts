// https://nuxt.com/docs/api/configuration/nuxt-config
/**
 * Nuxt 3 配置文件
 * 定义项目的构建配置、模块和样式设置
 */
export default defineNuxtConfig({
  // Nuxt 兼容性日期，确保使用稳定的 API
  compatibilityDate: '2025-07-15',
  
  // 开发工具配置
  devtools: { 
    enabled: true 
  },
  
  // 项目模块配置
  modules: [
    '@nuxt/eslint',    // ESLint 代码检查
    '@nuxt/icon',      // 图标组件
    '@nuxt/scripts',   // 脚本管理
    '@pinia/nuxt'      // 状态管理
  ],
  
  // 全局样式文件
  css: [
    '~/assets/styles/variables.scss',  // SCSS 变量定义
    '~/assets/styles/global.scss'      // 全局样式
  ]
})