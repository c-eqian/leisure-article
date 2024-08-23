import { type BaseListParams, type IUser } from '@/api/types'

export interface ListParams extends BaseListParams {
    title?: string;
    tags?: string[];
    status?: 0 | 1;
}
export interface NoteData {
    title?: string;
    tags?: string[];
    id?:number;
    content: string;
}

export interface INoteItem {
    /**
     * 城市，城市
     */
    city?: null | string;
    /**
     * 国家，国家
     */
    country?: null | string;
    /**
     * 创建时间，创建时间
     */
    create_date?: Date;
    /**
     * 描述，描述
     */
    describe?: null | string;
    /**
     * 所在区，所在区
     */
    district?: null | string;
    /**
     * 省份，省份
     */
    province?: null | string;
    /**
     * 标签，标签
     */
    tags?: string[];
    /**
     * 标题，标题
     */
    title: string;
    /**
     * UID唯一标识，UID唯一标识
     */
    uid?: string;
    id: number;
    /**
     * 更新时间，更新时间
     */
    update_date?: Date;
    user_info?: IUser;
    /**
     * 阅读量，阅读量
     */
    view_number?: number;
    /**
     * 字数，字数
     */
    word_count?: number;
    /**
     * 内容，只在详情有
     */
    content?: string;
    status: 1 | 0;
    [property: string]: any;
}
export interface INoteRes {
    total: number;
    list: INoteItem[];
    is_more: 0 | 1;
}
