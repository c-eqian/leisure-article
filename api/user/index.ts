import type { User } from './type'
import { http } from '~/api/http'

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
export const userInfo = () => {
  return http.request<User.IUserInfoResponse>({
    url: 'user/info',
    method: 'GET',
    isLoading: false
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
  return http.request<{
    'size': number,
    'name': string,
    'url': string
  }>({
    url: 'oss/ali-oss-upload',
    method: 'POST',
    header: {
      'Content-Type': 'multipart/form-data'
    },
    params: data
  })
}
