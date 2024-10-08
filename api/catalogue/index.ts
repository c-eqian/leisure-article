import type { ICatalogueData } from './type'
import { http } from '~/api/http'

export const getCatalogueList = () => {
  return http.request<ICatalogueData>({
    url: 'article/catalogue',
    method: 'GET',
    isLoading: false
  })
}
