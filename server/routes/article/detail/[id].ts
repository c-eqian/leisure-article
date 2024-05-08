export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const config = useRuntimeConfig()
  console.log(111,config.public.BASE_URL)
  const { data } = await $fetch(`${config.public.BASE_URL}article/detail/${id}`)
  console.log(data)
  return data
})
