<script setup lang="ts">
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper'
import { Minus, Plus, RefreshLeft, RefreshRight } from '@element-plus/icons-vue'
import { ElDialog, ElRow, ElCol, ElUpload, ElButton } from 'element-plus'
import { defineFormSchema, useFormSchema, EpLine, EpFormSchema, EpCard } from 'e-plus-ui'
import { usePick } from '@eqian/utils-vue'
import { useGlobalStore } from '~/store'
import { updateUserInfo, uploadFile } from '~/api/user'
import type { User } from '~/api/user/type'
const open = ref(false)
const visible = ref(false)
const title = ref('修改头像')
const fileName = ref('')
const avatarUrl = ref('')
const saveLoading = ref(false)
const { proxy } = getCurrentInstance() as any
const userStore = useGlobalStore()
const { registry, setFieldsValues, getFieldsValues } = useFormSchema()
const userInfo = computed(() => userStore.userInfo)
// 图片裁剪数据
const options: any = reactive({
  img: userInfo.value.avatar, // 裁剪图片的地址
  autoCrop: true, // 是否默认生成截图框
  autoCropWidth: 200, // 默认生成截图框宽度
  autoCropHeight: 200, // 默认生成截图框高度
  fixedBox: true, // 固定截图框大小 不允许改变
  outputType: 'png', // 默认生成截图为PNG格式
  previews: {} // 预览数据
})
/** 编辑头像 */
function editCropper () {
  open.value = true
}
/** 打开弹出层结束时的回调 */
function modalOpened () {
  visible.value = true
  setFieldsValues<any>(usePick(userInfo.value, ['email', 'motto', 'phone', 'username']))
}
/** 覆盖默认上传行为 */
/** 向左旋转 */
function rotateLeft () {
  proxy.$refs.cropper.rotateLeft()
}
/** 图片缩放 */
function changeScale (num: any) {
  num = num || 1
  proxy.$refs.cropper.changeScale(num)
}
/** 上传预处理 */
function beforeUpload (file: File) {
  if (!file.type.includes('image/')) {
    ElMessage.error(
      '文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。'
    )
  } else {
    fileName.value = file.name
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      options.img = reader.result
    }
  }
}
/** 实时预览 */
function realTime (data: any) {
  console.log(232, data)
  options.previews = data
}
/** 关闭窗口 */
function closeDialog () {
  options.visible = false
}
/** 向右旋转 */
function rotateRight () {
  proxy.$refs.cropper.rotateRight()
}
// 将blob转换为file
const useBlobToFile = (theBlob: any, fileName: string) => {
  theBlob.lastModifiedDate = new Date()
  theBlob.name = fileName
  return theBlob
}
/** 上传图片 */
// eslint-disable-next-line require-await
const saveUploadImg = async () => {
  saveLoading.value = true
  proxy.$refs.cropper.getCropBlob(async (data: any) => {
    const file = useBlobToFile(data, fileName.value || 'avatar.jpg')
    try {
      const res = await uploadFile({ file, path: 'avatar' })
      saveLoading.value = false
      avatarUrl.value = res.url
      ElMessage.success('保存成功')
    } catch (e) {
      saveLoading.value = false
      ElMessage.success('保存失败')
    }
  })
}
const uploadImg = async () => {
  const data = getFieldsValues()
  if (data) {
    if (avatarUrl.value) {
      data.avatar = avatarUrl.value
    }
    await updateUserInfo({
      ...data,
      id: userInfo.value.id
    })
    await userStore.getUserInfo()
  }
  open.value = false
  visible.value = false
}
const config = defineFormSchema<User.IUserInfoResponse>({
  columns: 3,
  items: [
    {
      type: 'input',
      prop: 'username',
      label: '昵称',
      labelWidth: '80px',
      rules: true
    },
    {
      type: 'input',
      prop: 'phone',
      labelWidth: '80px',
      label: '联系'
    },
    {
      type: 'input',
      prop: 'email',
      labelWidth: '80px',
      label: '邮箱'
    },
    {
      type: 'input',
      prop: 'motto',
      label: '签名',
      col: 24,
      componentProps: {
        type: 'textarea',
        maxlength: 100,
        showWordLimit: true,
        autosize: {
          minRows: 2,
          maxRows: 4
        }
      }
    }
  ]
})

</script>

<template>
  <client-only>
    <div
      class="cz-min-h-24 card-bg cz-rounded-[8px] cz-w-full
      max-md:cz-flex-col cz-p-2 cz-flex cz-justify-between"
    >
      <div class="cz-flex cz-flex-1">
        <img
          :src="userInfo.avatar"
          alt="头像"
          style="object-fit: cover"
          class="cz-h-20 cz-w-20 cz-rounded-[8px]"
          @click="editCropper"
        >
        <div class="cz-px-2 cz-flex-1">
          <div class="cz-font-bold cz-text-sm">
            {{ userInfo.username }}
          </div>
          <div class="cz-text-xs cz-py-2 cz-text-sub">
            <p class="cz-tracking-tight">
              {{ userInfo.motto || '-' }}
            </p>
          </div>
        </div>
      </div>
      <div class="max-md:cz-block md:cz-border-dashed max-md:cz-border-t-[1px] cz-py-1" />
      <div class=" cz-flex cz-text-sm md:cz-px-4 cz-items-center">
        <div>
          <div class="right-line cz-px-4 cz-flex cz-flex-col cz-justify-center cz-items-center">
            <span class="cz-font-medium">3</span>
            <span class="cz-text-[#a0a0a0]">文 章</span>
          </div>
        </div>
        <div>
          <div class="right-line cz-px-4 cz-flex cz-flex-col cz-justify-center cz-items-center ">
            <span class="cz-font-medium">999+</span>
            <span class="cz-text-[#a0a0a0]">获 赞</span>
          </div>
        </div>
      </div>
      <div class="user-info-head">
        <el-dialog
          v-model="open"
          :title="title"
          width="800px"
          :close-on-click-modal="false"
          append-to-body
          @opened="modalOpened"
          @close="closeDialog"
        >
          <el-row>
            <el-col
              :xs="24"
              :md="12"
              :style="{ height: '350px' }"
            >
              <client-only>
                <vue-cropper
                  v-if="visible"
                  ref="cropper"
                  :img="options.img"
                  :info="true"
                  :auto-crop="options.autoCrop"
                  :auto-crop-width="options.autoCropWidth"
                  :auto-crop-height="options.autoCropHeight"
                  :fixed-box="options.fixedBox"
                  :output-type="options.outputType"
                  @real-time="realTime"
                />
              </client-only>
            </el-col>
            <el-col
              :xs="24"
              :md="12"
              :style="{ height: '350px' }"
            >
              <div class="avatar-upload-preview">
                <img
                  :src="options.previews.url"
                  :style="options.previews.img"
                  alt=""
                >
              </div>
            </el-col>
          </el-row>
          <br>
          <el-row>
            <el-col
              :lg="2"
              :md="2"
            >
              <el-upload
                action="#"
                :show-file-list="false"
                :before-upload="beforeUpload"
              >
                <el-button>
                  选择
                  <el-icon class="el-icon--right">
                    <!--                <Upload />-->
                  </el-icon>
                </el-button>
              </el-upload>
            </el-col>
            <el-col
              :lg="{ span: 1, offset: 2 }"
              :md="2"
            >
              <el-button
                :icon="Plus"
                @click="changeScale(1)"
              />
            </el-col>
            <el-col
              :lg="{ span: 1, offset: 1 }"
              :md="2"
            >
              <el-button
                :icon="Minus"
                @click="changeScale(-1)"
              />
            </el-col>
            <el-col
              :lg="{ span: 1, offset: 1 }"
              :md="2"
            >
              <el-button
                :icon="RefreshLeft"
                @click="rotateLeft()"
              />
            </el-col>
            <el-col
              :lg="{ span: 1, offset: 1 }"
              :md="2"
            >
              <el-button
                :icon="RefreshRight"
                @click="rotateRight()"
              />
            </el-col>
          </el-row>
          <ep-line />
          <el-row>
            <el-col>
              <ep-card title="修改信息">
                <ep-form-schema :config @registry="registry" />
              </ep-card>
            </el-col>
          </el-row>
          <template #footer>
            <el-row>
              <el-col
                :lg="{ span: 2, offset: 2 }"
                :md="2"
              >
                <el-button
                  type="primary"
                  :loading="saveLoading"
                  @click="saveUploadImg"
                >
                  保 存
                </el-button>
              </el-col>
              <el-col
                :lg="{ span: 2, offset: 2 }"
                :md="2"
              >
                <el-button
                  :disabled="avatarUrl===''"
                  type="primary"
                  @click="uploadImg"
                >
                  提 交
                </el-button>
              </el-col>
            </el-row>
          </template>
        </el-dialog>
      </div>
    </div>
  </client-only>
</template>

<style scoped lang="scss">
.user-info-head {
  position: relative;
  display: inline-block;
  height: 120px;
}
.avatar-upload-preview {
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 4px #ccc;
  overflow: hidden;
}
</style>
