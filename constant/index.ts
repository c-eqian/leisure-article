export enum YES_OR_NO_ENUM {
  NO = 0,
  YES = 1,
}
export const ROUTER_PREFIX = ''
/**
 * 文章是否置顶枚举
 */
export enum IS_TOP_ENUM {
  YES = 1,
  NO = 0
}

/**
 * 文章是否置顶枚举
 */
export enum SOURCE_TYPE_ENUM {
  /**
   * 系统内部编辑
   */
  SYSTEM = 0,
  /**
   * 外部上传
   */
  EXTERNAL = 1
}

/**
 * 文章是否置顶标签
 */
export const SOURCE_TYPE_LIST = [
  { value: SOURCE_TYPE_ENUM.SYSTEM, label: '系统' },
  { value: SOURCE_TYPE_ENUM.EXTERNAL, label: '外部' }
]

/**
 * 文章是否置顶标签
 */
export const IS_TOP_LIST = [
  { value: IS_TOP_ENUM.YES, label: '已置顶' },
  { value: IS_TOP_ENUM.NO, label: '未置顶' }
]
export enum WALLPAPER_ENUM {
  // 必应
  BING = 1,
  // 网络
  NETWORK = 2,
  // 上传
  UPLOAD = 3
}

export const wallpaperLabelList = [
  {
    label: '必应壁纸',
    value: WALLPAPER_ENUM.BING
  },
  {
    label: '网络',
    value: WALLPAPER_ENUM.NETWORK
  },
  {
    label: '用户上传',
    value: WALLPAPER_ENUM.UPLOAD
  }
];
