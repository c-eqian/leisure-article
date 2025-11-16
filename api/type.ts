// import type { NitroFetchRequest, TypedInternalResponse, AvailableRouterMethod as _AvailableRouterMethod } from 'nitropack';
export interface IRequestParamsConfig {
  method: "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE";
  url: string;
  isCancel?: boolean;
  isLoading?: boolean;
  lazy?: boolean;
  server?: boolean;
  loadingIcon?: string;
  loadingText?: string;
  isExtra?: boolean;
  isShowSuccessText?: boolean;
  cache?: boolean;
  params?: any;
  header?: {
    "Content-Type": string;
  };
}
/**
 * 壁纸背景配置
 * 支持图片和视频两种类型
 */
export interface WallpaperConfig {
  // 背景类型: 'image' | 'video' | 'gradient'
  type: "image" | "video" | "gradient";
  // 图片URL（当type为'image'时使用）
  imageUrl?: string;
  // 视频URL（当type为'video'时使用）
  videoUrl?: string;
  // 视频是否自动播放
  autoplay?: boolean;
  // 视频是否循环播放
  loop?: boolean;
  // 视频是否静音
  muted?: boolean;
  // 背景覆盖模式: 'cover' | 'contain' | 'fill'
  objectFit?: "cover" | "contain" | "fill";
  // 背景位置
  objectPosition?: string;
  // 是否显示装饰效果（星星、流星等）
  showDecorations?: boolean;
}
