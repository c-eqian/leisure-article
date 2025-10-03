import { http } from "../http";
import type {
    IClickParams,
    IDeleteParams,
    IFavoriteForm, IFavoriteGroupedByCategory,
    IFavoriteGroupedListRes,
    IFavoriteListRes,
    IFavoriteQuery,
    ISiteCategoryForm,
    ISiteCategoryListRes,
    ISiteCategoryQuery,
} from "./type";

/**
 * 获取收藏夹列表
 * @param params - 查询参数
 * @returns Promise<IFavoriteListRes> 收藏夹列表响应数据
 */
export const getFavoritesList = (params?: IFavoriteQuery) => {
  return http.request<IFavoriteListRes>({
    url: "/favorites/list",
    method: "GET",
    params,
    isLoading: false,
  });
};

/**
 * 获取按分类分组的收藏夹列表
 * @param params - 查询参数
 * @returns Promise<IFavoriteGroupedListRes> 按分类分组的收藏夹列表响应数据
 */
export const getFavoritesGroupedList = (params?: IFavoriteQuery) => {
  return http.request<IFavoriteGroupedByCategory[]>({
    url: "/favorites/list/grouped",
    method: "GET",
    params,
    isLoading: false,
  });
};

/**
 * 新增收藏夹
 * @param data - 收藏夹表单数据
 * @returns Promise<any> 新增响应数据
 */
export const addFavorite = (data: IFavoriteForm) => {
  return http.request({
    url: "/favorites/add",
    method: "POST",
    params: data,
    isLoading: false,
    isShowSuccessText: true,
  });
};

/**
 * 更新收藏夹
 * @param data - 收藏夹表单数据
 * @returns Promise<any> 更新响应数据
 */
export const updateFavorite = (data: IFavoriteForm) => {
  return http.request({
    url: "/favorites/update",
    method: "PUT",
    params: data,
    isLoading: false,
    isShowSuccessText: true,
  });
};

/**
 * 删除收藏夹
 * @param data - 删除参数
 * @returns Promise<any> 删除响应数据
 */
export const deleteFavorite = (data: IDeleteParams) => {
  return http.request({
    url: "/favorites/delete",
    method: "DELETE",
    params: data,
    isLoading: false,
    isShowSuccessText: true,
  });
};

/**
 * 点击收藏夹
 * @param data - 点击参数
 * @returns Promise<any> 点击响应数据
 */
export const clickFavorite = (data: IClickParams) => {
  return http.request({
    url: "/favorites/click",
    method: "PUT",
    params: { favorite_id: data.uid },
    isLoading: false,
  });
};

/**
 * 获取站点分类列表
 * @param params - 查询参数
 * @returns Promise<ISiteCategoryListRes> 站点分类列表响应数据
 */
export const getSiteCategoryList = (params?: ISiteCategoryQuery) => {
  return http.request<ISiteCategoryListRes>({
    url: "/favorites/category/list",
    method: "GET",
    params,
    isLoading: false,
  });
};

/**
 * 获取所有站点分类（不分页）
 * @returns Promise<ISiteCategoryListRes> 所有站点分类响应数据
 */
export const getAllSiteCategories = () => {
  return http.request<ISiteCategoryListRes>({
    url: "/favorites/category/list",
    method: "GET",
    params: { page_size: 999 },
    isLoading: false,
  });
};

/**
 * 新增站点分类
 * @param data - 站点分类表单数据
 * @returns Promise<any> 新增响应数据
 */
export const addSiteCategory = (data: ISiteCategoryForm) => {
  return http.request({
    url: "/favorites/category/add",
    method: "POST",
    params: data,
    isLoading: false,
    isShowSuccessText: true,
  });
};

/**
 * 更新站点分类
 * @param data - 站点分类表单数据
 * @returns Promise<any> 更新响应数据
 */
export const updateSiteCategory = (data: ISiteCategoryForm) => {
  return http.request({
    url: "/favorites/category/update",
    method: "PUT",
    params: data,
    isLoading: false,
    isShowSuccessText: true,
  });
};

/**
 * 删除站点分类
 * @param data - 删除参数
 * @returns Promise<any> 删除响应数据
 */
export const deleteSiteCategory = (data: IDeleteParams) => {
  return http.request({
    url: "/favorites/category/delete",
    method: "DELETE",
    params: data,
    isLoading: false,
    isShowSuccessText: true,
  });
};
