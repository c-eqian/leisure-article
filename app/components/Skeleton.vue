<script setup lang="ts">
interface ISkeletonProps {
  type?: "text" | "card" | "avatar" | "button" | "image";
  width?: string | number;
  height?: string | number;
  lines?: number;
  animated?: boolean;
}
const props = withDefaults(defineProps<ISkeletonProps>(), {
  type: "text",
  width: "100%",
  height: "20px",
  lines: 1,
  animated: true,
});
const getSkeletonStyle = () => ({
  width: typeof props.width === "number" ? `${props.width}px` : props.width,
  height: typeof props.height === "number" ? `${props.height}px` : props.height,
});
</script>

<template>
  <div class="skeleton-container">
    <div
      v-if="type === 'text'"
      class="skeleton-text"
      :style="getSkeletonStyle()"
    >
      <div
        v-for="line in lines"
        :key="line"
        class="skeleton-line"
        :class="{ animated }"
      />
    </div>
    <div
      v-else-if="type === 'card'"
      class="skeleton-card"
      :style="getSkeletonStyle()"
    >
      <div class="skeleton-card-header">
        <div class="skeleton-avatar" :class="{ animated }" />
        <div class="skeleton-card-info">
          <div class="skeleton-line skeleton-title" :class="{ animated }" />
          <div class="skeleton-line skeleton-subtitle" :class="{ animated }" />
        </div>
      </div>
      <div class="skeleton-card-content">
        <div class="skeleton-line" :class="{ animated }" />
        <div class="skeleton-line" :class="{ animated }" />
        <div class="skeleton-line skeleton-short" :class="{ animated }" />
      </div>
      <div class="skeleton-card-footer">
        <div class="skeleton-button" :class="{ animated }" />
        <div class="skeleton-button" :class="{ animated }" />
      </div>
    </div>
    <div
      v-else-if="type === 'avatar'"
      class="skeleton-avatar"
      :class="{ animated }"
      :style="getSkeletonStyle()"
    />
    <div
      v-else-if="type === 'button'"
      class="skeleton-button"
      :class="{ animated }"
      :style="getSkeletonStyle()"
    />
    <div
      v-else-if="type === 'image'"
      class="skeleton-image"
      :class="{ animated }"
      :style="getSkeletonStyle()"
    />
  </div>
</template>

<style scoped lang="scss">
.skeleton-container {
  display: inline-block;
  width: 100%;
}
.skeleton-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-line {
  height: 16px;
  background: var(--skeleton-bg, #e2e8f0);
  border-radius: 4px;
  width: 100%;

  &.skeleton-title {
    height: 20px;
    width: 80%;
  }
  &.skeleton-subtitle {
    height: 14px;
    width: 60%;
  }
  &.skeleton-short {
    width: 40%;
  }

  &.animated {
    background: linear-gradient(
      90deg,
      var(--skeleton-bg, #e2e8f0) 25%,
      var(--skeleton-shine, #f7fafc) 50%,
      var(--skeleton-bg, #e2e8f0) 75%
    );
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s infinite;
  }
}

.skeleton-card {
  background: var(--bg-card, #fff);
  border: 1px solid var(--border-color, #e9ecef);
  border-radius: var(--border-radius, 8px);
  padding: 20px;
  box-shadow: var(--shadow-light, 0 2px 8px rgba(0, 0, 0, 0.1));
}

.skeleton-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.skeleton-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--skeleton-bg, #e2e8f0);

  &.animated {
    background: linear-gradient(
      90deg,
      var(--skeleton-bg, #e2e8f0) 25%,
      var(--skeleton-shine, #f7fafc) 50%,
      var(--skeleton-bg, #e2e8f0) 75%
    );
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s infinite;
  }
}

.skeleton-card-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.skeleton-card-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}
.skeleton-card-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.skeleton-button {
  height: 32px;
  width: 80px;
  background: var(--skeleton-bg, #e2e8f0);
  border-radius: 6px;

  &.animated {
    background: linear-gradient(
      90deg,
      var(--skeleton-bg, #e2e8f0) 25%,
      var(--skeleton-shine, #f7fafc) 50%,
      var(--skeleton-bg, #e2e8f0) 75%
    );
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s infinite;
  }
}

.skeleton-image {
  background: var(--skeleton-bg, #e2e8f0);
  border-radius: var(--border-radius, 8px);

  &.animated {
    background: linear-gradient(
      90deg,
      var(--skeleton-bg, #e2e8f0) 25%,
      var(--skeleton-shine, #f7fafc) 50%,
      var(--skeleton-bg, #e2e8f0) 75%
    );
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s infinite;
  }
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

:global([data-theme="dark"]) {
  --skeleton-bg: #2d3748;
  --skeleton-shine: #4a5568;
}
:global(.dark-mode) {
  --skeleton-bg: #2d3748;
  --skeleton-shine: #4a5568;
}
</style>
