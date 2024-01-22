<script setup lang="ts">

</script>

<template>
  <div>
    <header class="cz-py-5">
      <nav>
        <ul class="cz-flex">
          <li class="cz-px-5">
            <NuxtLink to="/article/list">
              <span class="cz-p-2">关于</span>
            </NuxtLink>
          </li>
          <li class="cz-px-5">
            <NuxtLink to="/article/1">
              <span class="cz-p-2">文章1</span>
            </NuxtLink>
          </li>
          <li class="cz-px-5">
            <NuxtLink to="/article/2">
              <span class="cz-p-2">文章2</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>

<style scoped>

</style>
