import type { IOssData } from './type'
import { http } from '~/api/http'

/**
 * 获取临时上传令牌
 */
export const getOssStsToken = () => {
  return http.request<IOssData>({
    url: '/oss/ali-oss-sts',
    method: 'GET',
    isLoading: false
  })
}
