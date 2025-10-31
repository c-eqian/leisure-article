import { http } from "../http";
import type { IArticleComment, ICommentList } from "./type";

/**
 * 评论
 * @param data
 */
export const postArticleComment = (data: IArticleComment.ICommentReq) => {
  return http.request({
    url: "article/comment",
    params: data,
    method: "POST",
    cache: false,
    isLoading: false,
    isShowSuccessText: true,
  });
};

/**
 * 评论列表
 * @param params
 */
export const getCommentList = (params?: ICommentList.IReq) => {
  return http.request<ICommentList.IResponse>({
    url: "article/comment/list",
    params,
    method: "GET",
    cache: false,
    isLoading: false,
  });
};
/**
 * 删除评论
 * @param params
 */
export const deleteCommentItem = (params: {
  comment_id?: number;
  sub_comment_id?: number;
}) => {
  return http.request({
    url: "article/comment/delete",
    params,
    cache: false,
    method: "DELETE",
    isLoading: false,
    isShowSuccessText: true,
  });
};
