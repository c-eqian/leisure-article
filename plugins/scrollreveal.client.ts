import { defineNuxtPlugin } from '#app'
import scrollReveal from 'scrollreveal'

export default defineNuxtPlugin((nuxtApp) => {
  const data = scrollReveal()
  return {
    provide: {
      scrollReveal: data
    }
  }
})
