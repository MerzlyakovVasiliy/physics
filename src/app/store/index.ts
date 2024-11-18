import {StoreProvider} from './ui/StoreProvider';
import {createStore, AppDispatch} from './config/store';
import type {StateSchema, ThunkConfig} from './config/StateSchema';

export {
    StoreProvider,
    createStore,
    StateSchema,
    ThunkConfig
};
export type {AppDispatch};

