/**
 * CommonUser，用户序列化
 */
export interface CommonUser {
  /**
   * 头像，头像
   */
  avatar?: null | string;
  /**
   * User id
   */
  user_d?: string;
  /**
   * 用户昵称
   */
  username: string;
}

/**
 *
 * SystemWallPaper，壁纸 1.必应 2.网络 3.自上传
 */
export interface IWallpaperData {
  /**
   * 版权，版权
   */
  copyright?: null | string;
  /**
   * 版权链接，版权链接
   */
  copyright_link?: null | string;
  /**
   * 创建时间，创建时间
   */
  create_date?: Date | string;
  /**
   * 必应请求时间，必应请求时间
   */
  date_time?: Date | string | null;
  /**
   * 描述，描述
   */
  description?: null | string;
  /**
   * ID
   */
  id?: number;
  /**
   * 修改人，修改人
   */
  modifier?: null | string;
  /**
   * 使用状态，使用状态
   */
  status?: number;
  /**
   * 标题，标题
   */
  title?: null | string;
  /**
   * 类型，类型
   */
  type?: number;
  /**
   * 修改时间，修改时间
   */
  update_date?: Date;
  /**
   * 图片url，图片url
   */
  url?: null | string;
  user_info?: CommonUser;
}

export interface IWallpaperRes {
  list: IWallpaperData[];
  total: number;
  is_more: number;
}
export interface IWallpaperTypes {
  type: number;
  name: string;
  count: number;
}
export interface IWallpaperReq {
  source?: 1 | 2 | 3 | null;
  page_size?: number;
  page_num?: number;
}
