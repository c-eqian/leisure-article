export default defineEventHandler(async (event)=>{
    const id = getRouterParam(event, 'id')
    const { data } = await $fetch(`http://43.138.222.187:8000/article/detail/${id}`)
    return data
})
