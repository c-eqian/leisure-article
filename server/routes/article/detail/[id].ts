export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const config = useRuntimeConfig()
  const { data={} } = await event.$fetch(`${config.public.BASE_URL}article/detail/${id}`)
  return data
})
