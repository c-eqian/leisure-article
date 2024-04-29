<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { PropType } from 'vue'

defineOptions({
  name: 'CzLetterLoading'
})
const props = defineProps({
  size: {
    type: Number,
    default: 60
  },
  letters: {
    type: Array as PropType<string[]>,
    default: () => ['Q', 'C', 'Y', 'C', 'M', 'M'],
    validator: (letters: string[]) => letters.length === 6
  },
  bgColor: {
    type: String,
    default: '#41b883'
  }
})
const _innerStyles = ref({
  transform: `scale(${(props.size / 2) / 75})`,
  '--cz-letter-bg-color': props.bgColor
})
const innerStyles = computed(() => _innerStyles.value)
const styles = computed(() => {
  return {
    width: `${props.size}px`,
    height: `${props.size}px`
  }
})
const faces = computed(() => {
  const _faces = ['front', 'back', 'left', 'right', 'bottom', 'top']
  return _faces.map((face, index) => ({
    side: face,
    letter: props.letters[index]
  }))
})
</script>

<template>
  <div
    :style="styles"
    class="spinner spinner--socker"
  >
    <div
      :style="innerStyles"
      class="spinner-inner"
    >
      <div class="cube panelLoad">
        <div
          v-for="{side, letter} of faces"
          :key="side"
          :class="`cube-face cube-face-${side}`"
        >
          {{ letter }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }
}

.cube {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.5s 0.1s;
  perspective: 9999px;
  color: #333;
  opacity: 1;
  position: relative;

  &.panelLoad {
    z-index: 11;
    top: 50%;
    animation: letter-cube-panel 2.2s infinite forwards;

    .cube-face {
      font-family: "Open Sans", sans-serif;
      font-size: 50px;
      color: var(--cz-letter-bg-color);
      box-shadow: inset 0 0 0 1px var(--cz-letter-bg-color), 0 0 1px 1px var(--cz-letter-bg-color);
    }
  }

  .cube-face {
    width: inherit;
    height: inherit;
    position: absolute;
    background: white;
    box-shadow: inset 0 0 0 1px #333, 0 0 1px 1px #333;
    opacity: 1;
  }

  .cube-face-front {
    transform: translate3d(0, 0, 40px);
    font-size: 57px;
  }

  .cube-face-back {
    transform: rotateY(180deg) translate3d(0, 0, 40px);
  }

  .cube-face-left {
    transform: rotateY(-90deg) translate3d(0, 0, 40px);
  }

  .cube-face-right {
    transform: rotateY(90deg) translate3d(0, 0, 40px);
  }

  .cube-face-top {
    transform: rotateX(90deg) translate3d(0, 0, 40px);
  }

  .cube-face-bottom {
    transform: rotateX(-90deg) translate3d(0, 0, 40px);
  }
}

@keyframes letter-cube-panel {
  0% {
    transform: rotateY(0deg) rotateZ(0deg);
  }
  20% {
    transform: rotateY(90deg) rotateZ(0deg);
  }
  40% {
    transform: rotateX(45deg) rotateZ(45deg);
  }
  60% {
    transform: rotateX(90deg) rotateY(180deg) rotateX(90deg);
  }
  80% {
    transform: rotateX(310deg) rotateZ(230deg)
  }
  100% {
    transform: rotateX(360deg) rotateZ(360deg)
  }
}
</style>
