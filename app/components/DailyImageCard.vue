<script setup lang="ts">
import { useAsyncFetch } from "~~/api/server";
import { computed, onMounted, ref } from "vue";

// 每日一图数据
const dailyImage = ref({
  url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23667eea;stop-opacity:1" /><stop offset="100%" style="stop-color:%23764ba2;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="300" fill="url(%23grad1)"/><circle cx="200" cy="100" r="60" fill="rgba(255,255,255,0.1)"/><circle cx="800" cy="200" r="80" fill="rgba(255,255,255,0.05)"/><rect x="100" y="150" width="200" height="100" fill="rgba(255,255,255,0.1)" rx="10"/><rect x="600" y="80" width="150" height="80" fill="rgba(255,255,255,0.08)" rx="8"/></svg>',
  alt: "每日一图 - 湖光山色",
});

// 位置信息
const location = ref({
  province: "北京市",
  city: "北京市",
  district: "朝阳区",
});

// 天气信息
const weather = ref({
  temperature: "22°C",
  condition: "晴",
});

// 获取每日一图
useAsyncFetch("system/wallpaper-today").then((res) => {
  if (res.data?.url) {
    dailyImage.value.url = res.data?.url;
  }
});

// 获取位置信息（模拟数据，实际项目中可以调用地理位置API）
const getLocationInfo = () => {
  try {
    // 这里可以调用真实的地理位置API
    // const locationRes = await useAsyncFetch("api/location");
    // location.value = locationRes.data;

    // 模拟数据
    location.value = {
      province: "北京市",
      city: "北京市",
      district: "朝阳区",
    };
  } catch (error) {
    console.error("获取位置信息失败:", error);
  }
};

// 获取天气信息（模拟数据，实际项目中可以调用天气API）
const getWeatherInfo = () => {
  try {
    // 这里可以调用真实的天气API
    // const weatherRes = await useAsyncFetch("api/weather");
    // weather.value = weatherRes.data;

    // 模拟数据
    weather.value = {
      temperature: "22°C",
      condition: "晴",
    };
  } catch (error) {
    console.error("获取天气信息失败:", error);
  }
};

// 格式化位置显示
const locationText = computed(() => {
  const { province, city, district } = location.value;
  if (province === city) {
    return `${province} ${district}`;
  }
  return `${province} ${city} ${district}`;
});

// 组件挂载时获取位置和天气信息
onMounted(() => {
  getLocationInfo();
  getWeatherInfo();
});

// 默认导出
defineOptions({
  name: "DailyImageCard",
});
</script>

<template>
  <div class="daily-image-card">
    <div
      class="image-container"
      :style="{ '--banner-url': `url(${dailyImage.url})` }"
    >
      <div class="image-overlay">
        <!-- 天气信息 -->
        <div class="weather-info">
          <div class="weather-main">
            <div class="temperature">{{ weather.temperature }}</div>
            <div class="condition">{{ weather.condition }}</div>
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
