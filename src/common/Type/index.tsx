export interface Item {
    link: string;
    label: string;
    icon: JSX.Element;
    active?: boolean;
    dropdownData?: any;
}

export interface ModalPopup {
    status: string;
    payload?: any;
}

export interface FavoriteLocationType {
    id: number;
    title: string;
    image: string;
    link: string;
}

export interface StyleSidebarType {
    position: string;
    top: string | number;
    bottom: string | number;
    width?: string;
};

export interface AuthType {
    nickname?: string;
    username: number | string;
    password: number | string;
    post?: object;
    permission?: string;
};

export interface ValuePost {
    id: string;
    nickname: string;
    province: string;
    category: string;
    title: string;
    content: any;
    banner: string;
    like: number;
    share: number;
    view: number;
    createDate: string;
}

export interface RegisterType {
    _id?: string;
    nickname: string;
    username: number | string;
    password: number | string;
    passwordConfirmation?: number | string;
    permission: string;
    listPost: Array<any>;
};