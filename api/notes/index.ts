import { http } from "../http";
import { useAsyncFetch } from "../server";
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
    params,
    isLoading: false,
  });
};
export const getNoteListFetch = (params?: {}) => {
  return useAsyncFetch<INoteRes>("note/list", {
    params,
  });
};
export const getNote = (uid: string) => {
  return http.request<INoteItem>({
    url: `/note/detail`,
    method: "GET",
    server: true,
    params: {
      note_id: uid,
    },
    isLoading: false,
  });
};
