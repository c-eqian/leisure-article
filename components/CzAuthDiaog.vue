<script setup lang="ts">
const dialogVisible = defineModel('value', {
  type: Boolean,
  default: false
})
const formModel = ref({
  account: '',
  password: ''
})
</script>

<template>
  <div>
    <q-dialog v-model="dialogVisible" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">
            用户登录
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="formModel.account" dense autofocus label="账号" @keyup.enter="dialogVisible = false" />
          <q-input v-model="formModel.password" dense autofocus label="密码" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn v-close-popup flat label="取消" />
          <q-btn v-close-popup flat label="确定" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped lang="scss">

</style>
