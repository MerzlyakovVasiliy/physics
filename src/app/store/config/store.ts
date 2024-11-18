import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {userReducer} from '@/entities/User';
import {uiReducer} from '@/features/UI';
import {postsPageReducer} from '@/pages/PostPage/model/slices/postPageSlice';
import {loginReducer} from '@/features/AuthByUsername/model/slice/loginSlice';
import {StateSchema, ThunkExtraArg} from './StateSchema';
import {$api} from '@/shared/api/api';
import {postDetailsReducer} from "@/entities/Post/model/slice/postDetailsSlice.ts";
import {postDetailsCommentsReducer} from "@/pages/PostDetailsPage/model/slices/postDetailsPageSlice.ts";
import {addCommentFormReducer} from "@/features/AddCommentForm/model/slices/addCommentFormSlice.ts";

export function createStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        ui: uiReducer,
        loginForm: loginReducer,
        postsPage: postsPageReducer,
        postDetailsPage: postDetailsCommentsReducer,
        postDetails: postDetailsReducer,
        addCommentForm: addCommentFormReducer,
    };

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware<{
                thunk: {
                    extraArgument: ThunkExtraArg;
                };
            }>({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];