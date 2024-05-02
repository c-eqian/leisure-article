<script setup lang="ts">
import { useQuasar } from 'quasar'
import { useEmptyObject, usePick } from 'co-utils-vue'
import { useGlobalStore } from '~/store'
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
const systemStore = useGlobalStore()
const $q = useQuasar()
const loginFormRef = ref()
const registryFormRef = ref()
const isRegistry = ref(false)
const handleConfirm = async () => {
  if (!isRegistry.value) {
    await loginFormRef.value?.validate()
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
      dialogVisible.value = false
    }).catch((e) => {
      $q.notify({
        type: 'warning',
        position: 'top',
        timeout: 3000,
        message: e.msg || '请求错误'
      })
    })
  }
}
if (process.browser) {
  formModel.value = Object.assign({}, formModel.value, systemStore.loginInfo || {})
}
</script>

<template>
  <div>
    <q-dialog v-model="dialogVisible" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">
            {{ isRegistry ? '用户注册' : '用户登录' }}
          </div>
        </q-card-section>

        <q-card-section v-if="!isRegistry">
          <q-form ref="loginFormRef">
            <q-input
              v-model="formModel.account"
              lazy-rules
              :rules="[
                (val)=> !!val || '请输入账号',
                (val:string)=> val.length >= 5 && val.length <= 16 || '账号长度为6-16位',
              ]"
              dense
              autofocus
              label="账号"
              @keyup.enter="dialogVisible = false"
            />
            <q-input
              v-model="formModel.password"
              lazy-rules
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
          <q-form ref="registryFormRef">
            <q-input v-model="formModel.account" dense autofocus label="账号" @keyup.enter="dialogVisible = false" />
            <q-input v-model="formModel.username" dense autofocus label="昵称" />
            <q-input v-model="formModel.password" dense autofocus label="密码" />
            <q-input v-model="formModel.acc_password" dense autofocus label="确认密码" />
            <div class="cz-flex cz-justify-between cz-items-center">
              <div class="cz-py-2">
                <span class="cz-text-gray-500 cz-select-none">已账号？</span>
                <q-btn color="primary" flat label="登录" @click.stop="isRegistry=false" />
              </div>
            </div>
          </q-form>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn v-close-popup color="secondary" flat label="取消" />
          <q-btn flat icon="bi-box-arrow-in-right" label="确定" @click.stop="handleConfirm" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped lang="scss">

</style>
