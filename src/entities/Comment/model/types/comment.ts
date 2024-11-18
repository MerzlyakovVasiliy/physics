import {TUser} from '@/entities/User';

export interface TComment {
    id: string;
    user: TUser;
    text: string;
}
