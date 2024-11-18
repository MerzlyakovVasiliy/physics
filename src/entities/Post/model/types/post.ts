import { TUser } from '@/entities/User';

export enum EPostView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export enum EPostSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export enum EPostType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface TPostBlock {
    paragraphs: string;
    title?: string;
}

export interface TPost {
    id: string;
    title: string;
    user: TUser;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: EPostType[];
    blocks: TPostBlock;
}
