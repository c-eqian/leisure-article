<script setup lang="ts">
import { useFormatDate } from "@eqian/utils-vue";
import { ref } from "vue";
import LoadMoreButton from "@/components/LoadMoreButton.vue";
import { useAsyncFetch } from "~~/api/server";
import type { IWallpaperRes } from "~~/api/wallpaper/type";
const imageData = ref<IWallpaperRes>({} as IWallpaperRes);
const isLoading = ref(false);
const isFirstLoaded = ref(true);
const params = ref({
  page_size: 20,
  page_num: 1,
});
const getWallpaper = () => {
  const isLoading = ref(false);

  useAsyncFetch("system/wallpaper", {
    params: params.value,
  })
    .then((res) => {
      if (!imageData.value.list) {
        imageData.value.list = [];
      }
      imageData.value = {
        ...res.data,
        list: imageData.value.list.concat(res.data.list),
      };
    })
    .finally(() => {
      isFirstLoaded.value = false;
      isLoading.value = false;
    });
};
getWallpaper();
const loadMore = () => {
  params.value.page_num += 1;
  getWallpaper();
};
</script>

<template>
  <div class="image-gallery">
    <div class="gallery-header">
      <h1 class="gallery-title">精选图片</h1>
      <p class="gallery-subtitle">探索世界的美好瞬间</p>
    </div>
    <div class="image-grid">
      <div v-for="item in imageData.list" :key="item.id" class="image-card">
        <div class="image-container">
            <nuxt-link :to="item.url || '#'" target="_blank">
            <img
              :src="item.url || ''"
              :alt="item.title || ''"
              class="image"
              loading="lazy"
            >
          </nuxt-link>
        </div>
        <div class="card-content">
          <h3 class="image-title">{{ item.title }}</h3>
          <div class="image-date">
            {{ useFormatDate(item.date_time || "-") }}
          </div>
        </div>
      </div>
    </div>
    <LoadMoreButton
      v-if="!isFirstLoaded && imageData.is_more === 1"
      :loading="isLoading"
      :disabled="isLoading"
      @click="loadMore"
    />
  </div>
</template>

<style scoped lang="scss">
.image-gallery {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--bg-primary);
  min-height: 100vh;
}

.gallery-header {
  text-align: center;
  margin-bottom: 50px;
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 10px 0;
  background: linear-gradient(135deg, var(--primary-color), #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gallery-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0;
  opacity: 0.8;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  padding: 0 10px;
}

.image-card {
  background: var(--bg-card);
  border-radius: var(--border-radius-large);
  overflow: hidden;
  box-shadow: var(--shadow-light);
  transition: all var(--transition-slow);
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: var(--shadow-heavy);
    transform: translateY(-5px);
  }
}

.image-container {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
  transform: scale(1);
}
.image-card:hover .image {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
  background: var(--bg-card);
  border-radius: 0 0 var(--border-radius-large) var(--border-radius-large);
}
.image-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  line-height: 1.3;
  color: var(--text-primary);
}
.image-date {
  font-size: 0.85rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .image-gallery {
    padding: 20px 15px;
  }
  .gallery-title {
    font-size: 2rem;
  }
  .image-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0;
  }
  .image-container {
    height: 200px;
  }
  .card-content {
    padding: 15px;
  }
  .image-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .image-gallery {
    padding: 15px 10px;
  }
  .gallery-title {
    font-size: 1.8rem;
  }
  .gallery-subtitle {
    font-size: 1rem;
  }
  .image-container {
    height: 180px;
  }
  .card-content {
    padding: 12px;
  }
}

[data-theme="dark"] .image-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
}
[data-theme="dark"] .image-card:hover {
  border-color: var(--primary-color);
}
</style>
