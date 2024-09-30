export const getServer = () => {
  const { $config } = useNuxtApp()
  return $config.public.BASE_URL
}
export const useAsyncRequest = <T=any>(key: string, url:string, options: any = {}) => {
  return useAsyncData(key, () => $fetch<T>(getServer() + url.replace(/^\//, '')), {
    transform: (res:any) => {
      return res.data
    },
    default: () => {
      return {} as T
    },
    ...options
  })
}
