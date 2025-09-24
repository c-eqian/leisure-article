import { http } from "../http";
import type {
  IWallpaperData,
  IWallpaperReq,
  IWallpaperRes,
  IWallpaperTypes,
} from "./type";

export const getWallpaperList = (params?: IWallpaperReq) => {
  return http.request<IWallpaperRes>({
    url: "/system/wallpaper",
    method: "GET",
    params,
    isLoading: false,
  });
};
/**
 * 必应今日壁纸
 */
export const getWallpaperBing = () => {
  return http.request<IWallpaperData>({
    url: "/system/wallpaper-today",
    method: "GET",
    isLoading: false,
  });
};

/**
 * 壁纸类型/目录
 */
export const getWallpaperTypes = () => {
  return http.request<IWallpaperTypes[]>({
    url: "/system/wallpaper-type",
    method: "GET",
    isLoading: false,
  });
};
