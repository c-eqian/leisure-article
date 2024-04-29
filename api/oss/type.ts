export interface IUserInfo {
    avatar: string;
    uid: string;
    username: string;

    [property: string]: any;
}

export interface IOssData {
    access_key_id: string;
    access_key_secret: string;
    cname: number;
    bucket: string;
    endpoint: string;
    expiration: string;
    security_token: string;
    user_info: IUserInfo;
}
