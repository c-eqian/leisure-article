import { http } from '~/api/http'
import type { Data } from '~/api/daily/type'

/**
 * 查询日记列表
 * @param params
 */
export const getDailyList = (params?: {
    page_size?: number;
    page_num?: number;
}) => {
  return http.request<Data>({
    url: '/daily/list',
    method: 'GET',
    params,
    isLoading: false
  })
}
