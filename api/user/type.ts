export namespace User {
    export interface ILoginRequest {
        account: string;
        password: string;
        code?: string;
        code_key?: number;
    }

    export interface ILoginResponse {
        token: string;
    }

    export interface IRegistryRequest {
        account: string;
        password: string;
        username: string;
        acc_password: string;
    }

    export interface IConfigResponse {
        id: number;
        description?: any;
        modifier?: any;
        update_date: string;
        create_date: string;
        status: number;
        region: string;
        access_key: string;
        key_secret: string;
        bucket: string;
        cname: number;
        endpoint: string;
        creator: number;
    }

    export interface IRegistryResponse {
        token: string;
    }

    export interface IUserInfoResponse {
        id: number;
        username: string;
        account: string;
        avatar?: any;
        phone: string;
        create_date: string;
        update_date: string;
        gender: number;
        email: string;
        motto:string;
        status: boolean;
        role: any[];
    }

    export interface IUserInfoRequest {
        id: any;
        username?: string;
        avatar?: any;
        phone?: string;
        motto?:string;
        gender?: number;
        email?: string;
        password?: string;
        old_password?: string;
    }
}
