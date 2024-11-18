import {TPost} from "@/entities/Post/model/types/post.ts";

export interface PostDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: TPost;
}
