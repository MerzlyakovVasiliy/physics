export interface TUser {
    id: string;
    username: string;
    avatar?: string;
}

export interface TUserSchema {
    authData?: TUser;

    _inited: boolean;
}
