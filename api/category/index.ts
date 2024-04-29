import type { ICategoryData } from '@/api/category/type'
import { http } from '~/api/http'

export const getCategoryList = (params?: {
    categoryName?: string;
    categoryCode?: string;
    pageSize?: number;
    pageNum?: number;
}) => {
  return http.request<ICategoryData>({
    url: 'admin/category/list',
    isLoading: false,
    method: 'GET',
    params
  })
}
