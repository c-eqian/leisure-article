<script lang="ts" setup>

import { useQuasar } from 'quasar'
import { onClickOutside } from '@vueuse/core'
import { initEmoji } from '~/composables/emoji'
import CzAuthDialog from '~/components/CzAuthDialog.vue'
interface IEmoji {
  title: string;
  name: string;
  url?:string;
}
const $q = useQuasar()
const emits = defineEmits<{(event: 'onSubMit', v: string): void;
}>()
const valueComputed = defineModel('value', {
  type: String,
  default: ''
})
const placeholder = defineModel('placeholder', {
  type: String,
  default: '留下点什么吧...'
})
const isLogin = defineModel('isLogin', {
  type: Boolean,
  default: false
})
const emoji = ref<IEmoji[]>([])
const emojiRef = ref<HTMLDivElement | null>(null)
const isShowEmojiSelect = ref(false)
const input = ref('')
const isShowAction = ref(false)
const handleShowEmoji = (item: any) => {
  if (item.url) { return item.url }
  return `https://oss.cz-leisure.com/face/${emoji.name}`
}
const handleClickEmoji = (item: IEmoji) => {
  valueComputed.value += item.title
  input.value += item.title
}
onMounted(() => {
  emoji.value = initEmoji()
  // 点击表情容器外，隐藏
  onClickOutside(emojiRef, () => {
    isShowEmojiSelect.value = false
  })
})
onBeforeUnmount(() => {
  valueComputed.value = ''
})
const handleLogin = () => {
  $q.dialog({
    component: CzAuthDialog

  }).onOk(() => {
    console.log('OK')
  }).onCancel(() => {
    console.log('Cancel')
  }).onDismiss(() => {
    console.log('Called on OK or Cancel')
  })
}
</script>

<template>
  <client-only>
    <div class="cz-w-full">
      <div class="comment-title">
        <slot />
      </div>
      <div class="comment-input-wrapper">
        <div class="cz-flex">
          <div class="avatar">
            <img
              alt=""
              src="@/assets/default-avatar.jpg"
            >
          </div>
          <div class="cz-ml-3 cz-w-full">
            <div class="comment-input">
              <textarea
                v-model.trim="input"
                :placeholder="placeholder"
                class="comment-textarea"
                @blur="isShowAction=!!input.trim()"
                @focus="isShowAction=true"
              />
            </div>
            <div v-if="isLogin" class="emoji-container cz-flex cz-justify-between">
              <div
                class="cursor-pointer"
                @click="isShowEmojiSelect=!isShowEmojiSelect"
              >
                <img
                  alt=""
                  class="cz-w-6 cz-h-6"
                  src="@/assets/svg/emoji.svg"
                >
              </div>
              <div v-show="isShowAction">
                <QBtn
                  v-if="input"
                  @click="()=> input=''"
                >
                  清空
                </QBtn>
                <QBtn
                  class="upload-btn comment-btn px-5px"
                  icon="navigation"
                  color="primary"
                  :disable="!input"
                  style="margin-left: auto;"
                  @click="()=> {emits('onSubMit', input); input=''}"
                >
                  提交
                </QBtn>
              </div>
            </div>
            <div v-else class="cz-flex cz-justify-end">
              <q-btn color="primary" icon="bi-arrow-in-right" label="登录" @click="handleLogin" />
            </div>
            <div
              v-show="isShowEmojiSelect"
              ref="emojiRef"
              class="emoji-wrapper animate__fadeInDown"
            >
              <span
                v-for="item in emoji"
                :key="item.name"
                class="emoji-item cz-p-[5px]"
                @click="handleClickEmoji(item)"
              >
                <img
                  alt=""
                  :src="handleShowEmoji(item)"
                  :title="item.title"
                  class="cz-w-6 cz-h-6 emoji"
                >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<style lang="scss" scoped>
.comment-title {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 10px;
}

.comment-input-wrapper {
  border: 1px solid rgba(144, 147, 153, .31);
  border-radius: 4px;
  padding: 10px;
  margin: 0 0 10px;
}

.avatar {
  height: 40px;
  min-width: 40px;
  width: 40px;
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  line-height: normal;
  position: relative;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
}

img {
  border-style: none;
}

.avatar .icon, .avatar .image, .avatar .responsive__content, .avatar img, .avatar svg {
  border-radius: inherit;
  display: inline-flex;
  height: inherit;
  width: inherit;
}

.comment-input {
  position: relative;
}

.comment-textarea {
  font-size: .875rem;
  color: var(--cz-secondary-color, #4c4948);
  outline: none;
  padding: 10px 5px;
  min-height: 122px;
  resize: none;
  width: 100%;
  border-radius: 4px;

}

@media (min-width: 960px) {
  .comment-textarea {
    background: url(@/assets/commentBack.webp) 100% 100% no-repeat;
  }
}

button, input, select, textarea {
  background-color: transparent;
  border-style: none;
}

.emoji-container, .send-wrapper {
  display: flex;
  align-items: center;
}

.emoji-container {
  margin: 10px 0;
}

.emoji-item {
  cursor: pointer;
  display: block;
  float: left;
}

.emoji-wrapper {
  max-height: 150px;
  overflow-y: auto;
}

.emoji {
  user-select: none;
  margin: 0.25rem;
  display: inline-block;
  vertical-align: middle;
}
</style>
