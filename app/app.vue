<!--
 * 应用根组件
 * 提供 Nuxt 应用的基础结构和路由系统
-->
<template>
  <!-- 使用默认布局包装页面内容 -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!-- 路由变更时的页面标题公告器 -->
  <NuxtRouteAnnouncer />
</template>
