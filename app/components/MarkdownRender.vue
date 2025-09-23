<script setup lang="ts">
import { MdPreview } from 'md-editor-v3'
import { useTheme } from '@/composables/useTheme'
import 'md-editor-v3/lib/preview.css'
const theme = useTheme()
const props = defineProps({ content: { type: String, default: '' } })
</script>

<template>
  <MdPreview id="preview-only" :theme="theme.themeClass" :model-value="props.content" />
</template>

<style scoped lang="scss"></style>


