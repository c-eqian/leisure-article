export interface BaseListParams {
  page_num?: number;
  page_size?: number;
}
/**
 * CommonUser，用户序列化
 */
export interface IUser {
  /**
   * 头像，头像
   */
  avatar?: null | string;
  /**
   * UID唯一标识，UID唯一标识
   */
  uid?: string;
  id?: number;
  /**
   * 用户昵称
   */
  username: string;
  [property: string]: any;
}
