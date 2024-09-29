export const getServer = () => {
  const { $config } = useNuxtApp()
  return $config.public.BASE_URL
}
