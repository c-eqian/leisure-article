import { http } from "../http";
import type { IArticleItem, IArticleRes } from "./type";

/**
 * 文章列表查询参数接口
 */
type ArticleListParams = {
  page_size?: number;
  page_num?: number;
  title?: string;
};

/**
 * 文章时间线查询参数接口
 */
type ArticleTimelineParams = {
  page_size?: number;
  page_num?: number;
  user_id?: number;
};

/**
 * 查询首页文章列表
 * @param params - 查询参数，包含分页和标题筛选
 * @returns Promise<IArticleRes> 文章列表响应数据
 */
export const getArticleList = (params?: ArticleListParams) => {
  return http.request<IArticleRes>({
    url: "/article/list",
    method: "GET",
    params,
    isLoading: false,
  });
};

/**
 * 搜索文章列表
 * @param text - 搜索关键词
 * @returns Promise<IArticleItem[]> 匹配的文章列表
 */
export const getArticleFilterList = (text: string) => {
  return http.request<IArticleRes["list"]>({
    url: `/article/query/${text}`,
    method: "GET",
    isLoading: false,
  });
};

/**
 * 根据文章ID获取文章详情
 * @param uid - 文章唯一标识
 * @returns Promise<IArticleItem> 文章详情数据
 */
export const getArticleItemDetailById = (uid: string) => {
  return http.request<IArticleItem>({
    url: `/article/detail`,
    params: {
      article_id: uid,
    },
    server: true,
    method: "GET",
  });
};

/**
 * 点赞文章
 * @param articleId - 文章ID
 * @returns Promise<IArticleItem> 更新后的文章数据
 */
export const articleLike = (articleId: string | number) => {
  return http.request<IArticleItem>({
    url: `/article/like/${articleId}`,
    method: "PUT",
  });
};

/**
 * 根据文章作者UID查询该作者的近期文章
 * @param uid - 作者唯一标识
 * @returns Promise<IArticleItem[]> 作者近期文章列表
 */
export const getArticleRecentByUid = (uid: string) => {
  return http.request<IArticleItem[]>({
    url: `/article/author/recent/${uid}`,
    method: "GET",
  });
};

/**
 * 获取首页最近文章
 * @returns Promise<IArticleItem[]> 最近文章列表
 */
export const getArticleRecent = () => {
  return http.request<IArticleItem[]>({
    url: "/article/recent",
    isLoading: false,
    method: "GET",
  });
};

/**
 * 获取文章时间线
 * @param params - 时间线查询参数，包含分页和用户ID
 * @returns Promise<IArticleRes> 文章时间线数据
 */
export const getArticleTimeline = (params?: ArticleTimelineParams) => {
  return http.request<IArticleRes>({
    url: "/article/timeline",
    method: "GET",
    params,
    isLoading: false,
  });
};
