export interface ICategory {
    /**
     * 类别编码，类别编码
     */
    category_code?: string;
    /**
     * 类别名称，类别名称
     */
    category_name?: string;
    /**
     * 创建时间，创建时间
     */
    create_date?: Date;
    /**
     * 描述，描述
     */
    description?: null | string;
    /**
     * 使用状态，使用状态
     */
    status?: number;
    /**
     * UID唯一标识，UID唯一标识
     */
    uid?: string;
    category_id: number | string;
    /**
     * 修改时间，修改时间
     */
    update_date?: Date;
}

/**
 * CommonUser，用户序列化
 */
export interface ICommonUser {
    /**
     * 头像，头像
     */
    avatar?: null | string;
    /**
     * UID唯一标识，UID唯一标识
     */
    uid?: string;
    /**
     * 用户昵称
     */
    username: string;
    [property: string]: any;
}
export interface IArticleItem {
    category?: ICategory;
    /**
     * 城市，城市
     */
    city?: null | string;
    /**
     * 国家，国家
     */
    country?: null | string;
    /**
     * 文章封面，文章封面
     */
    cover?: null | string;
    /**
     * 创建时间，创建时间
     */
    create_date: Date;
    /**
     * 描述，描述
     */
    describe?: null | string;
    /**
     * 所在区，所在区
     */
    district?: null | string;
    /**
     * 是否置顶，是否置顶
     */
    is_top?: 0 | 1;
    /**
     * 点赞量，点赞量
     */
    like_number?: number;
    /**
     * 省份，省份
     */
    province?: null | string;
    /**
     * 是否置顶，是否公开
     */
    public?: 0 | 1;
    /**
     * 博客来源，博客来源
     */
    source?: number;
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
    /**
     * 更新时间，更新时间
     */
    update_date: Date;
    /**
     * 评论数
     */
    comment_count: number;
    user_info?: ICommonUser;
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
    /**
     * 上一篇文章
     * 详情时存在
     */
    next_article?: Pick<IArticleItem, 'title' | 'uid' | 'createDate'>;
    /**
     * 下一篇文章
     * 详情时存在
     */
    previous_article?:Pick<IArticleItem, 'title' | 'uid' | 'createDate'>;
    [property: string]: any;
}
export interface IArticleRes {
        total: number;
        list: IArticleItem[];
        is_more: 0 | 1;
}
