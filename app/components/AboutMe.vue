<script setup lang="ts">
/**
 * 关于我组件
 * 显示个人基本信息，包括位置、职业和备案信息
 */

// 个人信息数据
const aboutMe = {
  location: 'HangZhou',
  occupation: '自由职业者',
  icp: '浙ICP备20230111号-1'
}
</script>

<template>
  <div class="about-section">
    <h3>About Me</h3>
    <div class="about-content">
      <div class="about-item"><span class="icon">📍</span><span class="text">{{ aboutMe.location }}</span></div>
      <div class="about-item"><span class="icon">💼</span><span class="text">{{ aboutMe.occupation }}</span></div>
      <div class="about-item"><span class="icon">🏷️</span><span class="text">{{ aboutMe.icp }}</span></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-section {
  background: var(--sidebar-section-bg, rgba(255, 255, 255, 0.1));
  border: 1px solid var(--sidebar-section-border, rgba(255, 255, 255, 0.2));
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
  transition: all var(--transition-normal);

  h3 {
    margin: 0 0 15px 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--about-title-color, var(--text-white-soft, var(--text-white)));
    padding-bottom: 8px;
    border-bottom: 2px solid var(--about-border-color, var(--sidebar-section-border, rgba(255, 255, 255, 0.3)));
    transition: color var(--transition-normal);
  }
}

.about-content {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 16px;
  transition: background-color 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.about-section.mobile-about {
  h3 { color: var(--text-primary); border-bottom-color: var(--primary-color); }
  .about-content { background: var(--bg-card); backdrop-filter: none; }
  .about-item { border-bottom-color: var(--border-color); }
  .text { color: var(--text-secondary); }
}

.about-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--about-item-border, rgba(255, 255, 255, 0.2));

  &:last-child { border-bottom: none; }
}

.icon { font-size: 16px; width: 20px; text-align: center; }
.text { font-size: 14px; color: var(--about-text-color, var(--text-white-soft, rgba(255, 255, 255, 0.8))); flex: 1; transition: color 0.3s ease; }
</style>


