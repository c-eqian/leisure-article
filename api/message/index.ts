import type { IMessage, IMessageList } from './type'
import { http } from '~/api/http'

/**
 * 留言
 * @param data
 */
export const postMessage = (data: IMessage.IMessageReq) => {
  return http.request({
    url: 'message/add',
    params: data,
    method: 'POST',
    cache: false,
    isLoading: false,
    isShowSuccessText: true
  })
}

/**
 * 留言列表
 * @param params
 */
export const getMessageList = (params?: IMessageList.IReq) => {
  return http.request<IMessageList.IResponse>({
    url: 'message/list',
    params,
    method: 'GET',
    server: true,
    cache: false,
    isLoading: false
  })
}
/**
 * 删除评论
 * @param params
 */
export const deleteMessageItem = (params: {
    id?: number;
    sub_id?: number;
}) => {
  return http.request({
    url: 'message/delete',
    params,
    cache: false,
    method: 'DELETE',
    isLoading: false,
    isShowSuccessText: true
  })
}
