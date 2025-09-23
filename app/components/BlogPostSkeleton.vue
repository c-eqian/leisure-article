<script setup lang="ts">
import Skeleton from '@/components/Skeleton.vue'
interface Props { count?: number }
withDefaults(defineProps<Props>(), { count: 1 })
</script>

<template>
  <div class="blog-post-skeleton">
    <div v-for="i in count" :key="i" class="skeleton-post">
      <div class="post-header"><div class="post-meta"><Skeleton type="text" width="60px" height="14px" /><Skeleton type="text" width="80px" height="14px" /><Skeleton type="text" width="100px" height="14px" /><Skeleton type="text" width="40px" height="14px" /></div></div>
      <div class="post-title-skeleton"><Skeleton type="text" width="70%" height="28px" /></div>
      <div class="post-description-skeleton"><Skeleton type="text" width="100%" height="16px" /><Skeleton type="text" width="90%" height="16px" /><Skeleton type="text" width="60%" height="16px" /></div>
      <div class="website-preview-skeleton"><div class="preview-header-skeleton"><div class="preview-controls-skeleton"><Skeleton type="button" width="12px" height="12px" /><Skeleton type="button" width="12px" height="12px" /><Skeleton type="button" width="12px" height="12px" /></div><Skeleton type="text" width="120px" height="14px" /></div><div class="preview-content-skeleton"><Skeleton type="image" width="100%" height="200px" /></div></div>
      <div class="post-footer"><div class="post-actions"><Skeleton type="button" width="60px" height="32px" /><Skeleton type="button" width="80px" height="32px" /></div><div class="post-tags"><Skeleton type="button" width="50px" height="24px" /><Skeleton type="button" width="60px" height="24px" /><Skeleton type="button" width="40px" height="24px" /></div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-post-skeleton {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.skeleton-post {
  background: var(--bg-card, #fff);
  border: 1px solid var(--border-color, #e9ecef);
  border-radius: var(--border-radius, 8px);
  padding: 24px;
  box-shadow: var(--shadow-light, 0 2px 8px rgba(0, 0, 0, 0.1));
  transition: all var(--transition-normal, 0.3s ease);
}

.post-header { margin-bottom: 16px; }
.post-meta { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
.post-title-skeleton { margin-bottom: 20px; }
.post-description-skeleton { margin-bottom: 30px; display: flex; flex-direction: column; gap: 8px; }

.website-preview-skeleton {
  background: var(--bg-card-hover, #f8f9fa);
  border: 1px solid var(--border-color, #e9ecef);
  border-radius: var(--border-radius, 8px);
  overflow: hidden;
  margin-bottom: 30px;
}

.preview-header-skeleton {
  background: var(--bg-card-hover, #f8f9fa);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color, #e9ecef);
}

.preview-controls-skeleton { display: flex; gap: 6px; }
.preview-content-skeleton { padding: 0; }

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.post-actions { display: flex; gap: 12px; }
.post-tags { display: flex; gap: 8px; flex-wrap: wrap; }

@media (max-width: 768px) {
  .skeleton-post { padding: 16px; }
  .post-meta { gap: 12px; }
  .post-footer { flex-direction: column; align-items: flex-start; }
  .post-actions { width: 100%; justify-content: flex-start; }
  .post-tags { width: 100%; }
}
</style>


