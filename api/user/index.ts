// import { useGetTokenCookie } from '@/composables/use-cookies';
import { http } from "../http";
import type { User } from "./type";

/**
 * 文件上传参数接口
 */
type UploadFileParams = {
  path: string;
  file: File;
};

/**
 * 用户登录
 * @param data - 登录请求数据
 * @returns Promise<User.ILoginResponse> 登录响应数据
 */
export const userLogin = (data: User.ILoginRequest) => {
  return http.request<User.ILoginResponse>({
    url: "user/login",
    method: "POST",
    params: data,
  });
};

/**
 * 用户注册
 * @param data - 注册请求数据
 * @returns Promise<User.IRegistryResponse> 注册响应数据
 */
export const userRegistry = (data: User.IRegistryRequest) => {
  return http.request<User.IRegistryResponse>({
    url: "user/registry",
    method: "POST",
    params: data,
  });
};

/**
 * 获取用户信息
 * @param params - 查询参数
 * @returns Promise<User.IUserInfoResponse> 用户信息响应数据
 */
export const userInfo = (params?: any) => {
  return http.request<User.IUserInfoResponse>({
    url: "user/info",
    method: "GET",
    isLoading: false,
    params,
  });
};

/**
 * 更新用户信息
 * @param data - 用户信息更新数据
 * @returns Promise<any> 更新响应数据
 */
export const updateUserInfo = (data: User.IUserInfoRequest) => {
  return http.request({
    url: "user/info",
    params: data,
    method: "PUT",
    isLoading: false,
    isShowSuccessText: true,
  });
};

/**
 * 用户登出
 * @returns Promise<any> 登出响应数据
 */
export const userLogout = () => {
  return http.request({
    url: "user/logout",
    method: "GET",
  });
};

// /**
//  * 文件上传到阿里云OSS
//  * @param data - 文件上传参数，包含文件路径和文件对象
//  * @returns Promise<Response> 上传响应
//  */
// export const uploadFile = (data: UploadFileParams) => {
//   const form = new FormData();
//   form.append('file', data.file);
//   form.append('path', data.path);
//
//   // const { $config } = useNuxtApp();
//   // const BASEURL = $config.public.BASE_URL;
//   // const cookies = useGetTokenCookie();
//
//   return fetch(`${BASEURL}oss/ali-oss-upload`, {
//     method: 'POST',
//     headers: {
//       Authorization: cookies
//     },
//     body: form
//   });
// };
