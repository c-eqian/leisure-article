/**
 * 验证码
 */
export namespace ISystemCaptcha {
    export interface Data {
        image_base: string;
        key: number;
    }

    export interface IRes {
        code: number;
        data: Data;
        msg: string;
        successful: string;
    }
}
/**
 * 站点配置
 */

export namespace IWebsite {
    export interface Data {
        article_count: number;
        is_code: number;
        is_registry: number;
        website_request_count: number;
        website_run_days: number;
        website_view_count: number;
        id: number;
        is_registry_code?: number;
        website_title?: string;
        website_logo?: string;
        website_icp?: string;
        website_cover?: string;
        website_color?: string;
    }

    export interface IRes {
        code: number;
        data: Data;
        msg: string;
        successful: string;
    }
}
export namespace ISystemSentence {

    export interface Datum {
        create_date: string;
        id: number;
        status: number;
        text: string;
    }

    export interface IRes {
        code: number;
        data: Datum[];
        msg: string;
        successful: string;
    }
}
export namespace ISystemVisitor {

    export interface Datum {
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
        temperature:string;
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
        reporttime:string;
    }

    export interface IRes {
        code: number;
        data: Datum | null;
        msg: string;
        successful: string;
    }
}
