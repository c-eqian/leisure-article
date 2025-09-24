import { http } from "../http";
import type { INoteItem, INoteRes } from "./type";
/**
 * 笔记列表
 * @param params
 */
export const getNotesList = (params?: {
  page_size?: number;
  page_num?: number;
}) => {
  return http.request<INoteRes>({
    url: "/note/list",
    method: "GET",
    server: false,
    params,
    isLoading: false,
  });
};
export const getNote = (uid: string) => {
  return http.request<INoteItem>({
    url: `/note/detail/${uid}`,
    method: "GET",
    server: true,
    isLoading: false,
  });
};
