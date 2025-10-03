/**
 * 站点分类接口
 */
export interface ISiteCategory {
  /**
   * 分类ID
   */
  uid: string;
  /**
   * 分类名称
   */
  title: string;
  /**
   * 分类描述
   */
  description?: string;
  /**
   * 排序
   */
  sort_order: number;
  /**
   * 创建时间
   */
  create_date: string;
  /**
   * 更新时间
   */
  update_date: string;
}

/**
 * 收藏夹接口
 */
export interface IFavorite {
  /**
   * 收藏夹ID
   */
  uid: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 网站链接
   */
  url: string;
  /**
   * 网站图标
   */
  icon?: string;
  /**
   * 点击量
   */
  clicks: number;
  /**
   * 分类ID
   */
  site_category?: string;
  /**
   * 分类名称
   */
  site_category_title?: string;
  /**
   * 创建时间
   */
  create_date: string;
  /**
   * 更新时间
   */
  update_date: string;
}

/**
 * 收藏夹列表响应
 */
export interface IFavoriteListRes {
  total: number;
  list: IFavorite[];
  is_more: 0 | 1;
}

/**
 * 按分类分组的收藏站点接口
 */
export interface IFavoriteGroupedByCategory {
  /**
   * 分类ID
   */
  uid: string;
  /**
   * 分类名称
   */
  title: string;
  /**
   * 分类描述
   */
  description?: string;
  /**
   * 排序
   */
  sort_order: number;
  /**
   * 创建时间
   */
  create_date?: string;
  /**
   * 该分类下的收藏站点列表
   */
  children: IFavorite[];
}

/**
 * 按分类分组的收藏站点列表响应
 */
export interface IFavoriteGroupedListRes {
  data: IFavoriteGroupedByCategory[];
}

/**
 * 站点分类列表响应
 */
export interface ISiteCategoryListRes {
  total: number;
  list: ISiteCategory[];
  is_more: 0 | 1;
}

/**
 * 站点分类查询参数
 */
export interface ISiteCategoryQuery {
  title?: string;
  page_num?: number;
  page_size?: number;
}

/**
 * 收藏夹查询参数
 */
export interface IFavoriteQuery {
  title?: string;
  category_id?: string;
  page_num?: number;
  page_size?: number;
}

/**
 * 新增/更新站点分类参数
 */
export interface ISiteCategoryForm {
  uid?: string;
  title: string;
  description?: string;
  sort_order?: number;
}

/**
 * 新增/更新收藏夹参数
 */
export interface IFavoriteForm {
  uid?: string;
  title: string;
  url: string;
  icon?: string;
  description?: string;
  site_category_id: string; // 分类UID，必填
}

/**
 * 删除参数
 */
export interface IDeleteParams {
  category_ids?: string[];
  favorite_ids?: string[];
}

/**
 * 点击参数
 */
export interface IClickParams {
  uid: string;
}
