import { defineNuxtPlugin } from '#app'
import { usePinia } from '#imports'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin(() => {
  const pinia = usePinia()
  if (pinia && typeof pinia.use === 'function') {
    pinia.use(piniaPluginPersistedstate)
  }
})


