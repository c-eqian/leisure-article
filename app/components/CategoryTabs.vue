<script setup lang="ts">
import { getCatalogueList } from "~~/api/catalogue";
import { ref } from "vue";
import type { ICatalogueData } from "~~/api/catalogue/type";
const activeCategory = ref(0);
const categories = ref<ICatalogueData["list"]>([]);
const emits = defineEmits(["select-category"]);
getCatalogueList().then((res) => {
  categories.value = [
    {
      category_id: 0,
      category_name: "全部",
      article_count: 0,
    },
    ...res.list,
  ];
});
const setActiveCategory = (category: number) => {
  activeCategory.value = category;
  emits("select-category", category);
};
defineExpose({ activeCategory, setActiveCategory });
</script>

<template>
  <div class="category-section">
    <div class="category-tabs">
      <button
        v-for="category in categories"
        :key="category"
        :class="{ active: activeCategory === category.category_id }"
        class="category-tab"
        @click="setActiveCategory(category.category_id)"
      >
        {{ category.category_name }}
      </button>
    </div>
    <!--    <div class="quote-text">时光扑面,斯人如风。</div>-->
  </div>
</template>

<style scoped lang="scss">
.category-section {
  padding: 20px 30px;
  background: var(--bg-content);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition:
    background-color var(--transition-normal),
    border-color var(--transition-normal);
}

.category-tabs {
  display: flex;
  gap: 8px;
}

.category-tab {
  padding: 8px 16px;
  border: 1px solid var(--border-color);
  background: var(--bg-content);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: all var(--transition-normal);
  font-size: 14px;
  color: var(--text-muted);
}

.category-tab:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}
.category-tab.active {
  background: var(--primary-color);
  color: var(--text-white-on-primary, var(--text-white));
  border-color: var(--primary-color);
}

.quote-text {
  font-size: 14px;
  color: var(--text-muted);
  font-style: italic;
  transition: color var(--transition-normal);
}

@media (max-width: 768px) {
  .category-section {
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
  .category-tabs {
    width: 100%;
    justify-content: space-between;
  }
  .category-tab {
    flex: 1;
    text-align: center;
    padding: 10px 8px;
  }
}
</style>
