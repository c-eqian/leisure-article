<script setup lang="ts">
import AboutMe from "@/components/AboutMe.vue";

const recommendedPosts = [
  "Typecho主题Pinghsu二改版",
  "Typecho展示类主题Display",
  "Typecho单栏书写主题Write",
  "Typecho边栏主题Colan",
  "com等域名开学季迎来新涨价",
];

const dailyImage = {
  url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><defs><linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%2387CEEB;stop-opacity:1" /><stop offset="100%" style="stop-color:%23E0F6FF;stop-opacity:1" /></linearGradient><linearGradient id="mountain" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23708090;stop-opacity:1" /><stop offset="100%" style="stop-color:%235A6B7D;stop-opacity:1" /></linearGradient><linearGradient id="water" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%234A90E2;stop-opacity:1" /><stop offset="100%" style="stop-color:%232E5BBA;stop-opacity:1" /></linearGradient></defs><rect width="300" height="200" fill="url(%23sky)"/><polygon points="0,120 50,80 100,100 150,60 200,90 250,70 300,100 300,200 0,200" fill="url(%23mountain)"/><rect x="0" y="140" width="300" height="60" fill="url(%23water)"/><circle cx="80" cy="50" r="15" fill="white" opacity="0.8"/><circle cx="120" cy="40" r="10" fill="white" opacity="0.6"/><circle cx="200" cy="45" r="12" fill="white" opacity="0.7"/><rect x="50" y="110" width="20" height="30" fill="%23D2691E" opacity="0.8"/><rect x="180" y="105" width="25" height="35" fill="%23CD853F" opacity="0.8"/></svg>',
  alt: "每日一图 - 湖光山色",
};
</script>

<template>
  <div class="right-sidebar">
    <div class="daily-picture-section">
      <h3>每日一图</h3>
      <div class="daily-image">
        <img :src="dailyImage.url" :alt="dailyImage.alt" />
      </div>
    </div>

    <AboutMe />

    <div class="recommended-section">
      <h3>猜你喜欢</h3>
      <ul class="recommended-list">
        <li
          v-for="(post, index) in recommendedPosts"
          :key="index"
          class="recommended-item"
        >
          {{ post }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right-sidebar {
  width: var(--right-sidebar-width);
  background: var(--bg-sidebar);
  color: var(--text-white);
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
  box-shadow: var(--shadow-medium);
  transition: background var(--transition-normal);
  position: sticky;
  top: 0;

  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  h3 {
    margin: 0 0 15px 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--text-white-soft, rgba(255, 255, 255, 0.9));
    padding-bottom: 8px;
    border-bottom: 2px solid
      var(--sidebar-section-border, rgba(255, 255, 255, 0.3));
    transition: color var(--transition-normal);
  }

  .daily-picture-section {
    background: var(--sidebar-section-bg, rgba(255, 255, 255, 0.1));
    border: 1px solid var(--sidebar-section-border, rgba(255, 255, 255, 0.2));
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    backdrop-filter: blur(10px);
    transition: all var(--transition-normal);

    .daily-image {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }

      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }

  .recommended-section {
    background: var(--sidebar-section-bg, rgba(255, 255, 255, 0.1));
    border: 1px solid var(--sidebar-section-border, rgba(255, 255, 255, 0.2));
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    backdrop-filter: blur(10px);
    transition: all var(--transition-normal);

    .recommended-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .recommended-item {
      padding: 12px 16px;
      margin: 6px 0;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      border-left: 3px solid var(--primary-color, rgba(255, 255, 255, 0.5));
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
      color: var(--text-white-soft, rgba(255, 255, 255, 0.8));
      line-height: 1.4;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.1);

      &:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateX(4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
    }
  }
}

@media (max-width: 1200px) {
  .right-sidebar {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;

    > div {
      flex: 1;
      min-width: 250px;
    }
  }
}

@media (max-width: 768px) {
  .right-sidebar {
    position: relative;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 15px;
  }

  .daily-picture-section,
  .about-section,
  .recommended-section {
    margin-bottom: 0;
  }

  .daily-image {
    max-height: 200px;
  }
  .about-content {
    padding: 12px;
  }
  .recommended-item {
    padding: 10px 12px;
    font-size: 13px;
  }
}
</style>
