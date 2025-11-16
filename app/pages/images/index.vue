<script setup lang="ts">
import { useFormatDate } from "@eqian/utils-vue";
import { useAsyncFetch } from "~~/api/server";
import { ref } from "vue";
import LoadMoreButton from "@/components/LoadMoreButton.vue";
import { useNoticeToast } from "~/composables/useNoticeToast";
import { useWebsite } from "~/composables/useWebsite";
import type { WallpaperConfig } from "~~/api/type";
import type { IWallpaperRes } from "~~/api/wallpaper/type";

const imageData = ref<IWallpaperRes>({} as IWallpaperRes);
const isLoading = ref(false);
const isFirstLoaded = ref(true);
const { setWallpaper } = useWebsite();

// 鼠标悬停的图片ID
const hoveredImageId = ref<number | null>(null);
const { openToast } = useNoticeToast();
// 设置为壁纸
const handleSetWallpaper = (imageUrl: string) => {
  const wallpaperConfig: WallpaperConfig = {
    type: "image",
    imageUrl,
    objectFit: "cover",
    objectPosition: "center center",
    showDecorations: false,
  };
  setWallpaper(wallpaperConfig);
  openToast({
    message: "设置成功",
  });
};

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
      <div
        v-for="item in imageData.list"
        :key="item.id"
        class="image-card"
        @mouseenter="hoveredImageId = item.id"
        @mouseleave="hoveredImageId = null"
      >
        <div class="image-container">
          <nuxt-link :to="item.url || '#'" target="_blank">
            <img
              :src="item.url || ''"
              :alt="item.title || ''"
              class="image"
              loading="lazy"
            >
          </nuxt-link>
          <!-- 设置为壁纸按钮 -->
          <button
            v-show="hoveredImageId === item.id"
            class="set-wallpaper-button"
            title="设置为壁纸"
            @click.stop="handleSetWallpaper(item.url || '')"
          >
            设置为壁纸
          </button>
          <!-- 版权信息覆盖层 -->
          <div v-if="item.copyright" class="copyright-overlay">
            <div class="copyright-content">
              <div class="copyright-text">{{ item.copyright }}</div>
            </div>
          </div>
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

// 设置为壁纸按钮
.set-wallpaper-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-family: var(--font-family);
  white-space: nowrap;
}

.set-wallpaper-button:hover {
  background: rgba(255, 255, 255, 1);
  transform: translate(-50%, -50%) scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.set-wallpaper-button:active {
  transform: translate(-50%, -50%) scale(0.95);
}

/* 版权信息覆盖层 */
.copyright-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
}

.image-card:hover .copyright-overlay {
  opacity: 1;
}

.copyright-content {
  padding: 20px;
  width: 100%;
  text-align: center;
}

.copyright-text {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.4;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-card:hover .copyright-text {
  transform: translateY(0);
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
  .copyright-content {
    padding: 15px;
  }
  .copyright-text {
    font-size: 0.85rem;
  }
  .set-wallpaper-button {
    padding: 8px 16px;
    font-size: 12px;
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
  .copyright-content {
    padding: 12px;
  }
  .copyright-text {
    font-size: 0.8rem;
  }
  .set-wallpaper-button {
    padding: 6px 12px;
    font-size: 11px;
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
