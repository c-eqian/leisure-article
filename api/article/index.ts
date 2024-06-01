import type { IArticleItem, IArticleRes } from './type'
import { http } from '~/api/http'

/**
 * 查询首页文章列表
 * @param params
 */
export const getArticleList = (params?: {
    page_size?: number;
    page_num?: number;
}) => {
  return http.request<IArticleRes>({
    url: '/article/list',
    method: 'GET',
    params,
    isLoading: false
  })
}
/**
 * 文章详情
 * @param uid
 */
export const getArticleItemDetailById = (uid: string) => {
  return http.request<IArticleItem>({
    url: `/article/detail/${uid}`,
    server: true,
    method: 'GET'
  })
}
/**
 * 点赞文章
 * @param articleId
 */
export const articleLike = (articleId: any) => {
  return http.request<IArticleItem>({
    url: `/article/like/${articleId}`,
    method: 'PUT'
  })
}
/**
 * 根据文章uid查询作者近期文章
 * @param uid
 */
export const getArticleRecentByUid = (uid: string) => {
  return http.request<IArticleItem[]>({
    url: `/article/author/recent/${uid}`,
    method: 'GET'
  })
}

/**
 * 首页最近文章
 */
export const getArticleRecent = () => {
  return http.request<IArticleItem[]>({
    url: '/article/recent',
    isLoading: false,
    method: 'GET'
  })
}
