export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { data } = await event.$fetch(`${config.public.BASE_URL}system/website?_t=${new Date().getTime()}`)
  return data
})
