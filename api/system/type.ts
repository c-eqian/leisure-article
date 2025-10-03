/**
 * 验证码
 */
export namespace ISystemCaptcha {
  export type Data = {
    image_base: string;
    key: number;
  };

  export type IRes = {
    code: number;
    data: Data;
    msg: string;
    successful: string;
  };
}
/**
 * 站点配置
 */

export namespace IWebsite {
  export type Data = {
    article_count: number;
    create_date: null;
    creator: null;
    description: null;
    dynamics_cover: number;
    id: number;
    is_code: number;
    is_registry: number;
    is_registry_code: number;
    modifier: null;
    status: number;
    uid: string;
    update_date: null;
    website_color: null;
    website_cover: string;
    website_icp: string;
    website_logo: null;
    website_request_count: number;
    website_run_days: number;
    website_title: string;
    website_view_count: number;
    [property: string]: any;
  };

  export interface IRes {
    code: number;
    data: Data;
    msg: string;
    successful: string;
  }
}
export namespace ISystemSentence {
  export type Datum = {
    create_date: string;
    id: number;
    status: number;
    text: string;
  };

  export interface IRes {
    code: number;
    data: Datum[];
    msg: string;
    successful: string;
  }
}
export namespace ISystemVisitor {
  export type Datum = {
    /**
     * 省份名
     */
    province: string;
    /*
            城市名
         */
    city: string;
    request_city: string;
    /**
     * 区域编码
     */
    adcode: string;
    /**
     * 天气现象（汉字描述）
     */
    weather: string;
    /**
     *  实时气温，单位：摄氏度
     */
    temperature: string;
    /**
     * 风向描述
     */
    winddirection: number;
    /**
     * 风力级别，单位：级
     */
    windpower: number;
    /**
     * 空气湿度
     */
    humidity: string;
    /**
     * 数据发布的时间
     */
    reporttime: string;
  };

  export interface IRes {
    code: number;
    data: Datum | null;
    msg: string;
    successful: string;
  }
}

export type Github = {
  repo_name: string;
  description: string;
  private: boolean;
  forks_count: number;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
  html_url: string;
  avatar_url: string;
  readme: string;
};
