interface IDirective {
	value: string | string[]
}

export const imgLazy = {
  mounted (el: HTMLImageElement, binding: IDirective) {
    const { value } = binding
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        if (typeof value === 'string') {
          el.src = value
        } else {
          el.src = value[0]
        }
        // 停止监听
        stop()
      }
      el.onerror = () => {
        if (typeof value === 'string') {
          // el.src = new URL('../assets/svg/img-error.svg', import.meta.url).href;
        } else {
          el.src = value[1]
        }
        console.log('加载出错')
      }
      el.onload = (ev) => {
        console.log(ev)
      }
    })
  }
}
// 定义nuxt插件
export default defineNuxtPlugin((nuxtApp) => {
  // 通过循环注册所有指令
  nuxtApp.vueApp.directive('img-lazy', imgLazy)
})
