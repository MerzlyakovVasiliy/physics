import {EPostSortField, TPost, EPostType, EPostView} from "@/entities/Post/model/types/post.ts";
import {SortOrder} from "@/shared/types";

export interface PostsPageSchema {
    isLoading?: boolean;
    error?: string;
    posts: TPost[];

    page: number;
    limit?: number;
    hasMore: boolean;

    // filters
    view: EPostView;
    order: SortOrder;
    sort: EPostSortField;
    search: string;
    type: EPostType;

    _inited: boolean;
}
