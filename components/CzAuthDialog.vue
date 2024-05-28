<script setup lang="ts">
import { useQuasar, useDialogPluginComponent } from 'quasar'
import { useEmptyObject, usePick } from 'co-utils-vue'
import { useGlobalStore } from '~/store'
import { userRegistry } from '~/api/user'
const dialogVisible = defineModel('value', {
  type: Boolean,
  default: false
})
const formModel = ref({
  account: '',
  password: '',
  acc_password: '',
  username: '',
  remember: false
})
const registryFormModel = ref({
  account: '',
  password: '',
  acc_password: '',
  username: ''
})
const systemStore = useGlobalStore()
const $q = useQuasar()
const loginFormRef = ref()
const registryFormRef = ref()
const isRegistry = ref(false)
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
const handleConfirm = () => {
  if (!isRegistry.value) {
    loginFormRef.value?.validate().then((success :boolean) => {
      if (success) {
        systemStore.login(usePick(formModel.value, ['account', 'password'])).then(() => {
          if (formModel.value.remember) {
            systemStore.setLoginInfo({
              account: formModel.value.account,
              password: formModel.value.password
            })
          } else {
            systemStore.setLoginInfo({
              account: '',
              password: ''
            })
          }
          formModel.value = useEmptyObject(formModel.value)
          // dialogVisible.value = false
          onDialogOK()
        }).catch((e) => {
          $q.notify({
            type: 'warning',
            position: 'top',
            timeout: 3000,
            message: e.msg || '请求错误'
          })
        })
      }
    })
  } else {
    registryFormRef.value?.validate().then(async (success :boolean) => {
      if (success) {
        await userRegistry(registryFormModel.value)
        $q.notify({
          type: 'positive',
          position: 'top',
          timeout: 3000,
          message: '注册成功'
        })
        registryFormModel.value = useEmptyObject(registryFormModel.value)
        isRegistry.value = false
      }
    })
  }
}
if (process.browser) {
  formModel.value = Object.assign({}, formModel.value, systemStore.loginInfo || {})
}
</script>

<template>
  <div>
    <q-dialog ref="dialogRef" persistent @hide="onDialogHide">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">
            {{ isRegistry ? '用户注册' : '欢迎使用' }}
          </div>
        </q-card-section>

        <q-card-section v-if="!isRegistry">
          <q-form ref="loginFormRef" no-error-focus>
            <q-input
              v-model="formModel.account"
              lazy-rules
              :rules="[
                (val)=> !!val || '请输入账号',
                (val:string)=> val.length >= 5 && val.length <= 16 || '账号长度为5-16位',
              ]"
              dense
              autofocus
              label="账号"
              @keyup.enter="dialogVisible = false"
            />
            <q-input
              v-model="formModel.password"
              lazy-rules
              type="password"
              :rules="[
                (val)=> !!val || '请输入密码',
                (val:string)=> val.length >= 6 && val.length <= 16 || '密码长度为6-16位',
              ]"
              dense
              autofocus
              label="密码"
            />
            <div class="cz-flex cz-justify-between cz-items-center">
              <q-checkbox v-model="formModel.remember" keep-color label="记住密码" color="cyan" />
              <div>
                <span class="cz-text-gray-500 cz-select-none">没有账号？</span>
                <q-btn color="primary" flat label="注册" @click.stop="isRegistry=true" />
              </div>
            </div>
          </q-form>
        </q-card-section>
        <q-card-section v-else>
          <q-banner v-if="systemStore.website.is_registry===0" rounded class="cz-bg-orange-400">
            管理员已禁止注册！
          </q-banner>
          <q-form v-else ref="registryFormRef" no-error-focus>
            <q-input
              v-model="formModel.account"
              lazy-rules
              :rules="[
                (val)=> !!val || '请输入账号',
                (val:string)=> val.length >= 5 && val.length <= 16 || '账号长度为5-16位',
              ]"
              dense
              autofocus
              label="账号"
              @keyup.enter="dialogVisible = false"
            />
            <q-input
              v-model="formModel.username"
              lazy-rules
              :rules="[
                (val:string)=> !!val.trim() || '请输入昵称'
              ]"
              dense
              autofocus
              label="昵称"
            />
            <q-input
              v-model="formModel.password"
              lazy-rules
              :rules="[
                (val:string)=> !!val.trim() || '请输入密码',
                (val:string)=> val.length >= 6 && val.length <= 16 || '密码长度为6-16位',
              ]"
              type="password"
              dense
              autofocus
              label="密码"
            />
            <q-input
              v-model="registryFormModel.acc_password"
              lazy-rules
              :rules="[
                (val:string)=> !!val.trim() || '请输入确认密码',
                (val:string)=> val ===registryFormModel.password || '两次密码不一致'
              ]"
              type="password"
              dense
              autofocus
              label="确认密码"
            />
          </q-form>
          <div class="cz-flex cz-justify-between cz-items-center">
            <div class="cz-py-2">
              <span class="cz-text-gray-500 cz-select-none">已账号？</span>
              <q-btn color="primary" flat label="登录" @click.stop="isRegistry=false" />
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn color="secondary" flat label="取消" @click="onDialogCancel" />
          <q-btn v-if="!(isRegistry && systemStore.website.is_registry===1)" flat icon="bi-box-arrow-in-right" label="确定" @click.stop="handleConfirm" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped lang="scss">

</style>
