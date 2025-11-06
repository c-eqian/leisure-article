/*
 * @Author: eqian 2429120006@qq.com
 * @Date: 2025-09-23 21:43:57
 * @LastEditors: eqian 2429120006@qq.com
 * @LastEditTime: 2025-11-05 22:25:16
 * @FilePath: \websiteg:\self\leisure-article\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
/**
 * Nuxt 3 配置文件
 * 定义项目的构建配置、模块和样式设置
 */
export default defineNuxtConfig({
  // Nuxt 兼容性日期，确保使用稳定的 API
  compatibilityDate: "2025-07-15",
  // 开发工具配置
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    public: {
      // 因为这里用到了SSR 代理请求其他服务接口，如果/api/代理，就会提示找不到地址，
      // 猜测可能是部署nginx时使用的代理转发没有请求正确地址 因此需要完整写出前端域名地址
      BASE_URL:
        process.env.NODE_ENV === "production"
          ? "https://www.eqian.site/api/v2/"
          : "http://localhost:8000/",
    },
  },
  // 项目模块配置
  modules: [
    "nuxt-monaco-editor",
    "@nuxt/eslint", // ESLint 代码检查
    "@nuxt/icon", // 图标组件
    "@nuxt/scripts", // 脚本管理
    "@pinia/nuxt", // 状态管理
  ],

  // 全局样式文件
  css: [
    "~/assets/styles/variables.scss", // SCSS 变量定义
    "~/assets/styles/global.scss", // 全局样式
  ],
  app: {
    // SEO一些配置
    head: {
      charset: "utf-8",
      title:
        "Eqian主页，感受生活的酸甜苦辣，让每一个故事都成为你心灵的寄托，用情感的笔触，书写属于我们的故事",
      htmlAttrs: {
        lang: "zh-CN",
      },
      meta: [
        { charset: "utf-8" },
        { name: "apple-mobile-web-app-title", content: "Eqian博客" }, // 添加到主屏后的标题
        { name: "og:type", content: "Blog" },
        {
          name: "og:title",
          content:
            "Eqian，感受生活的酸甜苦辣，让每一个故事都成为你心灵的寄托，让我们用情感的笔触，书写属于我们的故事",
        },
        {
          name: "og:description",
          content:
            "Eqian博客，情感流淌的角落，文字是我们的灵魂之窗，每一篇文章都是一次心灵的交流。" +
            "用心写就，用情阅读，每一个故事都是一个心灵的追寻，每一句话都是一次心灵的对话。或许你正在经历着人生的起起落落，" +
            "或许你正在寻找一丝温暖和慰藉，" +
            "Eqian会陪伴你，为你送上一份心灵的慰籍，为你的心灵搭起一座桥梁，让你找到心灵的归属",
        },
        { name: "og:site_name", content: "Eqian" },
        {
          name: "viewport",
          content:
            "initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,viewport-fit=cover",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/logo.svg",
          type: "image/svg+xml",
        },
      ],
    },
    pageTransition: {
      name: "scale",
      appear: true,
      mode: "out-in",
    },
  },
});
