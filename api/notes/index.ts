import { http } from '~/api/http'
import type { INoteItem, NoteData } from '~/api/notes/type'
/**
 * 笔记列表
 * @param params
 */
export const getNotesList = (params?: {
    page_size?: number;
    page_num?: number;
}) => {
  return http.request<NoteData>({
    url: '/note/list',
    method: 'GET',
    params,
    isLoading: false
  })
}
export const getNote = (uid:string) => {
  return http.request<INoteItem>({
    url: `/note/detail/${uid}`,
    method: 'GET',
    isLoading: false
  })
}
