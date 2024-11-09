import type { ICategoryData, ICategoryTags } from './type'
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
/**
 * 获取分类标
 */
export const getCategoryTagsList = () => {
  return http.request<ICategoryTags[]>({
    url: '/admin/category/tags',
    isLoading: false,
    method: 'GET'
  })
}
