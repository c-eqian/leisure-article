import type { User } from './type'
import { http } from '~/api/http'
import { useGetTokenCookie } from '~/composables/use-cookies'

export const userLogin = (data: User.ILoginRequest) => {
  return http.request<User.ILoginResponse>({
    url: 'user/login',
    method: 'POST',
    params: data
  })
}
export const userRegistry = (data: User.IRegistryRequest) => {
  return http.request<User.IRegistryResponse>({
    url: 'user/registry',
    method: 'POST',
    params: data
  })
}
export const userInfo = (params?:any) => {
  return http.request<User.IUserInfoResponse>({
    url: 'user/info',
    method: 'GET',
    isLoading: false,
    params
  })
}
export const updateUserInfo = (
  data: User.IUserInfoRequest
) => {
  return http.request({
    url: 'user/info',
    params: data,
    method: 'PUT',
    isLoading: false,
    isShowSuccessText: true
  })
}
export const userLogout = () => {
  return http.request({
    url: 'user/logout',
    method: 'GET'
  })
}
/**
 * 上传
 * @param data
 */
export const uploadFile = (data: {
  path: string,
  file: File
}) => {
  const form = new FormData()
  form.append('file', data.file)
  form.append('path', data.path)
  const { $config } = useNuxtApp()
  const BASEURL = $config.public.BASE_URL
  // console.log(' 请求处理', request, options)
  const cookies = useGetTokenCookie()
  return fetch(BASEURL + 'oss/ali-oss-upload', {
    method: 'POST',
    headers: {
      Authorization: cookies
    },
    body: form
  })
  // return http.request<{
  //   'size': number,
  //   'name': string,
  //   'url': string
  // }>({
  //   url: 'oss/ali-oss-upload',
  //   method: 'POST',
  //   params: data
  // })
}
