export {
    getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';

export {
    getUserInited,
} from './model/selectors/getUserInited/getUserInited';

export {
    userReducer,
    userActions,
} from './model/slice/userSlice';

export type {
    TUserSchema,
    TUser,
} from './model/types/user';
