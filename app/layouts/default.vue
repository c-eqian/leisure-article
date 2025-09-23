<script setup lang="ts">
import LeftSidebar from '@/components/LeftSidebar.vue'
import RightSidebar from '@/components/RightSidebar.vue'
import MainContent from '@/components/MainContent.vue'
import { useTheme } from '@/composables/useTheme'
import { onMounted } from 'vue'
import { useStore } from '@/stores/website'
const theme = useTheme()
const store = useStore()
onMounted(() => {
  store.applyStyleTheme(store.currentStyleTheme)
})
</script>

<template>
  <div class="website-container" :class="theme.themeClass">
    <div class="content-wrapper">
      <LeftSidebar />
        <MainContent>
          <NuxtPage keepalive :keepalive-props="{ include: ['index'] }" />
        </MainContent>
      <RightSidebar />
    </div>
    <NuxtLoadingIndicator />
  </div>

</template>

<style scoped lang="scss">
.website-container {
  display: flex;
  height: 100vh;
  background: var(--bg-website);
  font-family: var(--font-family);
  transition: background var(--transition-normal);
  overflow: hidden;
  width: 100%;

  .content-wrapper {
    display: flex;
    width: 100%;
    max-width: var(--max-container-width);
    margin: 0 auto;
    height: 100vh;
    overflow: hidden;

    .left-sidebar {
      flex: 0 0 var(--sidebar-width);
      order: 1;
      height: 100vh;
      position: sticky;
      top: 0;
    }

    .main-content {
      flex: 1 1 auto;
      order: 2;
      min-width: 0;
      height: 100vh;
      overflow-y: auto;
      @media (min-width: 1800px) {
        max-width: var(--main-content-max-width);
        margin: 0 auto;
      }
    }

    .right-sidebar {
      flex: 0 0 var(--right-sidebar-width);
      order: 3;
      height: 100vh;
      position: sticky;
      top: 0;
    }
  }

  @media (max-width: 1200px) {
    .content-wrapper {
      flex-direction: column;
      height: auto;
      min-height: 100vh;

      .left-sidebar {
        flex: 0 0 auto;
        order: 1;
        height: auto;
        position: relative;
      }

      .main-content {
        flex: 1 1 auto;
        order: 2;
        height: 100vh;
        overflow-y: auto;
      }

      .right-sidebar {
        flex: 0 0 auto;
        order: 3;
        height: auto;
        position: relative;
      }
    }
  }

  @media (max-width: 768px) {
    .content-wrapper {
      .left-sidebar {
        position: fixed !important;
        z-index: 999;
        transform: translateX(-100%);
        transition: transform var(--transition-normal);
        height: 100vh;
        &.mobile-visible { transform: translateX(0); }
      }
    }
  }
}
</style>


