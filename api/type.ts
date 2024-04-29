import type { NitroFetchRequest } from 'nitropack'
// import type { NitroFetchRequest, TypedInternalResponse, AvailableRouterMethod as _AvailableRouterMethod } from 'nitropack';
export interface IRequestParamsConfig {
    method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' ;
    url: string;
    isCancel?: boolean;
    isLoading?: boolean;
    lazy?: boolean;
    server?: boolean;
    loadingIcon?: string;
    loadingText?: string;
    isExtra?: boolean;
    isShowSuccessText?: boolean;
    cache?: boolean;
    params?: any;
    header?: {
        'Content-Type':string;
    };
}
