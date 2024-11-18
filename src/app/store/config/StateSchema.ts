import {TUserSchema} from '@/entities/User';
import {UISchema} from "@/features/UI";
import {LoginSchema} from '@/features/AuthByUsername';
import {AxiosInstance} from "axios";
import {PostDetailsPageSchema} from "@/pages/PostDetailsPage";
import {PostDetailsSchema} from "@/entities/Post";
import {AddCommentFormSchema} from "@/features/AddCommentForm";
import {PostsPageSchema} from "@/pages/PostPage";

export interface StateSchema {
    user: TUserSchema;
    ui: UISchema,
    loginForm: LoginSchema;
    postsPage: PostsPageSchema;
    postDetailsPage: PostDetailsPageSchema;
    postDetails: PostDetailsSchema;
    addCommentForm: AddCommentFormSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}