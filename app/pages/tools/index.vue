<script setup lang="ts">
import * as favoritesApi from "~~/api/favorites";
import { ref } from "vue";
import type { IFavoriteGroupedByCategory } from "~~/api/favorites/type";

// 响应式数据
const groupedFavorites = ref<IFavoriteGroupedByCategory[]>([]);
const loading = ref(false);

// 点击处理函数
const handleClick = async (item: any) => {
  try {
    // 调用点击API
    await favoritesApi.clickFavorite({ uid: item.uid });
    // 更新本地数据
    groupedFavorites.value.forEach((category) => {
      const favorite = category.children.find((f) => f.uid === item.uid);
      if (favorite) {
        favorite.clicks += 1;
      }
    });
  } catch (error) {
    console.error("点击统计失败:", error);
  }

  // 在新窗口打开链接
  window.open(item.url, "_blank");
};

// 格式化点击次数
const formatClicks = (clicks: number) => {
  if (clicks >= 1000) {
    return `${Math.floor(clicks / 1000)}${clicks % 1000 >= 100 ? Math.floor((clicks % 1000) / 100) : ""}${clicks % 1000 >= 10 ? Math.floor((clicks % 1000) / 10) : ""}0+次点击`;
  }
  return `${clicks}+次点击`;
};

// 获取收藏夹数据
const fetchFavorites = async () => {
  try {
    loading.value = true;
    const response = await favoritesApi.getFavoritesGroupedList();
    groupedFavorites.value = response || [];
  } catch (error) {
    console.error("获取收藏夹失败:", error);
  } finally {
    loading.value = false;
  }
};

// 处理图片加载错误
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  if (target) {
    target.style.display = "none";
  }
};

// 组件挂载时获取数据
fetchFavorites();
</script>

<template>
  <div class="tools-container">
    <!-- 加载状态 -->
    <div v-if="loading" class="loading">
      <div class="loading-spinner" />
      <p>加载中...</p>
    </div>

    <!-- 收藏夹内容 -->
    <div v-else-if="groupedFavorites.length > 0">
      <!-- 按分类显示收藏夹 -->
      <section
        v-for="category in groupedFavorites.filter(
          (cat) => cat.children && cat.children.length > 0,
        )"
        :key="category.uid"
        class="section"
      >
        <h2 class="section-title">
          {{ category.title }}
        </h2>
        <div class="cards-grid">
          <div
            v-for="item in category.children"
            :key="item.uid"
            class="card"
            @click="handleClick(item)"
          >
            <div class="card-icon">
              <img
                v-if="item.icon"
                :src="item.icon"
                :alt="item.title"
                class="icon-image"
                @error="handleImageError"
              >
              <span v-else class="icon-fallback">{{
                item.title.charAt(0)
              }}</span>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ item.title }}</h3>
              <div class="card-clicks">{{ formatClicks(item.clicks) }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 空状态 -->
    <div v-else class="empty-state">
      <div class="empty-icon">📚</div>
      <h3>暂无收藏的网站</h3>
      <p>还没有收藏任何网站，快去添加一些有用的网站吧！</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tools-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--bg-content);
  min-height: 100vh;
}

// 加载状态
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: var(--text-secondary);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// 空状态
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  color: var(--text-secondary);
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 24px;
  opacity: 0.6;
}

.empty-state h3 {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.empty-state p {
  font-size: 16px;
  line-height: 1.5;
}

.section {
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--primary-color);
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background: var(--primary-color);
  }
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 400px));
  gap: 20px;
  margin-bottom: 24px;
  justify-content: start;
}

.card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-large);
  padding: 20px;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), #764ba2);
    transform: scaleX(0);
    transition: transform var(--transition-normal);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-medium);
    background: var(--bg-card-hover);
    border-color: var(--primary-color);

    &::before {
      transform: scaleX(1);
    }

    .card-icon {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(-2px);
  }
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius);
  background: linear-gradient(135deg, var(--primary-color), #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  transition: transform var(--transition-normal);
  box-shadow: var(--shadow-light);
  overflow: hidden;
  flex-shrink: 0;
}

.icon-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon-fallback {
  font-size: 20px;
  font-weight: 600;
  color: white;
}

.card-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
}

.card-description {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-clicks {
  font-size: 12px;
  color: var(--primary-color);
  font-weight: 500;
  background: rgba(102, 126, 234, 0.1);
  padding: 4px 8px;
  border-radius: var(--border-radius-small);
  display: inline-block;
}

// 响应式设计
@media (max-width: 768px) {
  .tools-container {
    padding: 16px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    justify-content: stretch;
  }

  .card {
    padding: 16px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .tools-container {
    padding: 12px;
  }

  .card-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .card-title {
    font-size: 16px;
  }

  .card-description {
    font-size: 13px;
  }

  .section-title {
    font-size: 18px;
  }
}

// 暗黑模式适配
[data-theme="dark"] {
  .card {
    background: var(--bg-card);
    border-color: var(--border-color);

    &:hover {
      background: var(--bg-card-hover);
    }
  }
}
</style>
