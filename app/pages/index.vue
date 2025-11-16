<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useWebsite } from "~/composables/useWebsite";

definePageMeta({
  layout: false, // 不使用默认布局，实现全屏效果
});

// 实时时间
const currentTime = ref("");
const currentDate = ref("");

// 名言
const quote = ref('"盛年不重来,一日难再晨。及时宜自勉,岁月不待人。"');
const { wallpaperDataRef } = useWebsite();
// 背景配置
const bgConfig = wallpaperDataRef.value;

// 视频引用
const videoRef = ref<HTMLVideoElement | null>(null);

// 更新时间的函数
const updateTime = () => {
  const now = new Date();

  // 格式化时间 HH:MM:SS
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  currentTime.value = `${hours}:${minutes}:${seconds}`;

  // 格式化日期 YYYY年MM月DD日
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  currentDate.value = `${year}年${month}月${day}日`;
};

let timer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  updateTime();
  // 每秒更新一次时间
  timer = setInterval(updateTime, 1000);

  // 视频自动播放处理
  if (bgConfig.type === "video" && videoRef.value) {
    videoRef.value.play().catch((error) => {
      console.warn("视频自动播放失败:", error);
    });
  }
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});

// 搜索功能
const searchQuery = ref("");
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // 这里可以添加实际的搜索逻辑
    window.open(
      `https://www.bing.com/search?q=${encodeURIComponent(searchQuery.value)}`,
      "_blank",
    );
  }
};

const handleKeyPress = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};
</script>

<template>
  <client-only>
    <div class="wallpaper-container">
      <!-- 背景层 -->
      <div class="background-layer">
        <!-- 视频背景 -->
        <video
          v-if="bgConfig.type === 'video' && bgConfig.videoUrl"
          ref="videoRef"
          :src="bgConfig.videoUrl"
          :autoplay="bgConfig.autoplay ?? true"
          :loop="bgConfig.loop ?? true"
          :muted="bgConfig.muted ?? true"
          :style="{
            objectFit: bgConfig.objectFit || 'cover',
            objectPosition: bgConfig.objectPosition || 'center center',
          }"
          class="background-video"
          playsinline
          webkit-playsinline
        />

        <!-- 图片背景 -->
        <div
          v-if="bgConfig.type === 'image' && bgConfig.imageUrl"
          class="background-image"
          :style="{
            backgroundImage: `url(${bgConfig.imageUrl})`,
            backgroundSize: bgConfig.objectFit || 'cover',
            backgroundPosition: bgConfig.objectPosition || 'center center',
          }"
        />

        <!-- 渐变背景（默认或type为gradient时） -->
        <div
          v-if="
            bgConfig.type === 'gradient' ||
            (!bgConfig.videoUrl && !bgConfig.imageUrl)
          "
          class="sky-gradient"
        />

        <!-- 装饰效果（仅在非视频背景或配置允许时显示） -->
        <template
          v-if="bgConfig.showDecorations !== false && bgConfig.type !== 'video'"
        >
          <!-- 星星装饰 -->
          <div class="stars">
            <span
              v-for="i in 50"
              :key="i"
              class="star"
              :style="{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }"
            />
          </div>
          <!-- 流星效果 -->
          <div class="meteors">
            <span
              v-for="i in 5"
              :key="i"
              class="meteor"
              :style="{
                left: `${60 + Math.random() * 30}%`,
                top: `${Math.random() * 30}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }"
            />
          </div>
          <!-- 城市剪影 -->
          <div class="cityscape" />
        </template>
      </div>

      <!-- 内容层 -->
      <div class="content-layer">
        <!-- 搜索栏 -->
        <div class="search-container">
          <div class="search-box">
            <div class="search-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="必应搜索"
              class="search-input"
              @keypress="handleKeyPress"
            >
            <NuxtLink to="/home" class="home-button" title="进入首页">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- 时间和日期 -->
        <div class="time-container">
          <div class="time">{{ currentTime }}</div>
          <div class="date">{{ currentDate }}</div>
        </div>

        <!-- 名言 -->
        <div class="quote-container">
          <p class="quote">{{ quote }}</p>
        </div>
      </div>
    </div>
  </client-only>
</template>

<style scoped lang="scss">
.wallpaper-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

// 天空渐变背景 - 从深蓝星空到橙红日出
.sky-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    #0a0e27 0%,
    #1a1a3e 30%,
    #2d1b4e 50%,
    #4a2c5e 70%,
    #ff6b6b 85%,
    #ffa500 95%,
    #ffd700 100%
  );
  background-size: 200% 200%;
  animation: skyShift 20s ease-in-out infinite;
}

@keyframes skyShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

// 星星效果
.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
  z-index: 1;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
  animation: twinkle infinite;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

// 流星效果
.meteors {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
  z-index: 1;
}

.meteor {
  position: absolute;
  width: 2px;
  height: 80px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  transform: rotate(-45deg);
  animation: meteorFall infinite;
}

@keyframes meteorFall {
  0% {
    opacity: 0;
    transform: translateY(-100px) translateX(-100px) rotate(-45deg);
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(500px) translateX(500px) rotate(-45deg);
  }
}

// 城市剪影
.cityscape {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%
  );
  clip-path: polygon(
    0% 100%,
    5% 80%,
    8% 85%,
    12% 70%,
    15% 75%,
    18% 60%,
    22% 65%,
    25% 50%,
    28% 55%,
    32% 45%,
    35% 50%,
    38% 40%,
    42% 45%,
    45% 35%,
    48% 40%,
    52% 30%,
    55% 35%,
    58% 25%,
    62% 30%,
    65% 20%,
    68% 25%,
    72% 15%,
    75% 20%,
    78% 10%,
    82% 15%,
    85% 5%,
    88% 10%,
    92% 0%,
    95% 5%,
    100% 0%,
    100% 100%
  );
  z-index: 1;
}

// 视频背景
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: 0;
}

// 图片背景
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: 0;
}

// 内容层
.content-layer {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3% 5% 5% 5%;
  box-sizing: border-box;
}

// 搜索容器
.search-container {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  margin-top: 2%;
}

.search-box {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  padding: 12px 20px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.search-box:hover {
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.search-icon {
  display: flex;
  align-items: center;
  margin-right: 12px;
  color: rgba(255, 255, 255, 0.9);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.95);
  font-family: var(--font-family);
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

// 首页按钮
.home-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-left: 12px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  text-decoration: none;
}

.home-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.home-button:active {
  transform: scale(0.95);
}

.home-button svg {
  width: 20px;
  height: 20px;
}

// 时间容器
.time-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  margin-bottom: auto;
}

.time {
  font-size: clamp(48px, 8vw, 120px);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.95);
  text-shadow:
    0 2px 20px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(255, 255, 255, 0.2);
  letter-spacing: 2px;
  font-family: "Segoe UI", "Microsoft YaHei", sans-serif;
}

.date {
  font-size: clamp(18px, 3vw, 32px);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
  font-family: "Segoe UI", "Microsoft YaHei", sans-serif;
}

// 名言容器
.quote-container {
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 3%;
}

.quote {
  font-size: clamp(14px, 2vw, 24px);
  color: #fff;
  line-height: 1.8;
  font-weight: 300;
  font-family: "Microsoft YaHei", "SimSun", serif;
  padding: 20px;
  background: transparent;
  mix-blend-mode: difference;
  text-shadow: none;
}

// 移动端适配
@media (max-width: 768px) {
  .content-layer {
    padding: 5% 4% 8% 4%;
  }

  .search-container {
    margin-top: 5%;
  }

  .search-box {
    padding: 10px 16px;
    max-width: 90%;
  }

  .search-input {
    font-size: 14px;
  }

  .time {
    font-size: clamp(36px, 12vw, 80px);
    letter-spacing: 1px;
  }

  .date {
    font-size: clamp(16px, 4vw, 24px);
  }

  .quote {
    font-size: clamp(12px, 3.5vw, 18px);
    padding: 15px;
    line-height: 1.6;
    margin-bottom: 0;
  }

  .quote-container {
    padding-bottom: 5%;
  }

  .cityscape {
    height: 25%;
  }

  .stars,
  .meteors {
    height: 40%;
  }
}

// 超小屏幕适配
@media (max-width: 480px) {
  .content-layer {
    padding: 8% 3% 10% 3%;
  }

  .time {
    font-size: clamp(32px, 15vw, 60px);
  }

  .date {
    font-size: clamp(14px, 5vw, 20px);
  }

  .quote {
    font-size: clamp(11px, 4vw, 16px);
    padding: 12px;
    margin-bottom: 0;
  }

  .quote-container {
    padding-bottom: 8%;
  }

  .search-box {
    padding: 8px 14px;
  }

  .home-button {
    width: 32px;
    height: 32px;
    margin-left: 8px;
  }

  .home-button svg {
    width: 18px;
    height: 18px;
  }
}

// 横屏适配
@media (orientation: landscape) and (max-height: 600px) {
  .content-layer {
    padding: 2% 5% 2% 5%;
    justify-content: center;
    gap: 20px;
  }

  .time-container {
    margin: 0;
  }

  .time {
    font-size: clamp(40px, 6vh, 80px);
  }

  .date {
    font-size: clamp(16px, 2.5vh, 24px);
  }

  .quote {
    font-size: clamp(12px, 2vh, 18px);
    padding: 10px;
    margin-bottom: 0;
  }

  .quote-container {
    padding-bottom: 2%;
  }
}

// 大屏幕优化
@media (min-width: 1920px) {
  .search-box {
    max-width: 600px;
    padding: 15px 25px;
  }

  .search-input {
    font-size: 18px;
  }
}
</style>
