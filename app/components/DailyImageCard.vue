<script setup lang="ts">
import { isEmpty } from "@eqian/utils-vue";
import { useAsyncFetch } from "~~/api/server";
import { computed, onMounted, ref } from "vue";
import type { ISystemVisitor } from "~~/api/system/type";

// 天气信息
const location = ref<ISystemVisitor.IRes["data"]>(
  {} as unknown as ISystemVisitor.IRes["data"],
);

// 获取位置信息（模拟数据，实际项目中可以调用地理位置API）
const getLocationInfo = () => {
  try {
    useAsyncFetch("system/access").then((res) => {
      if (res.data) {
        location.value = res.data as ISystemVisitor.IRes["data"];
      }
    });
  } catch (error) {
    console.error("获取位置信息失败:", error);
  }
};

// 格式化位置显示
const locationText = computed(() => {
  const { province = "", city = "" } = location.value as any;
  if (province === city) {
    return `${province}`;
  }
  return `${province} ${city}`;
});

// 组件挂载时获取位置和天气信息
onMounted(() => {
  getLocationInfo();
});

// 默认导出
defineOptions({
  name: "DailyImageCard",
});
</script>

<template>
  <div v-if="!isEmpty(location)" class="daily-image-card">
    <div class="image-container">
      <div class="image-overlay">
        <!-- 天气信息 -->
        <div class="weather-info">
          <div class="weather-main">
            <div class="temperature">{{ location?.weather }}</div>
            <div class="condition">{{ location?.humidity }}</div>
          </div>
          <div class="weather-details">
            <div class="weather-item">
              <span class="weather-label">位置</span>
              <span class="weather-value">{{ locationText }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.daily-image-card {
  position: relative;
  height: 300px;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-light);
  transition: transform var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
  }
}

.image-container {
  width: 100%;
  height: 100%;
  background: var(--banner-url) center/cover;
  position: relative;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
}

.weather-info {
  background: rgba(255, 255, 255, 0.15);
  padding: 16px;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 200px;
}

.weather-main {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.temperature {
  color: white;
  font-size: 24px;
  font-weight: 700;
}

.condition {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.weather-details {
  display: flex;
  justify-content: flex-start;
  gap: 16px;
}

.weather-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.weather-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 400;
}

.weather-value {
  color: white;
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .daily-image-card {
    height: 200px;
  }

  .image-overlay {
    padding: 15px;
  }

  .weather-info {
    padding: 12px;
    min-width: 160px;
  }

  .temperature {
    font-size: 20px;
  }

  .condition {
    font-size: 14px;
  }

  .weather-details {
    gap: 12px;
  }

  .weather-value {
    font-size: 12px;
  }
}
</style>
