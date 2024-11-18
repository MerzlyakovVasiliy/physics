import {StateSchema} from "@/app/store";
import {EPostSortField, EPostType, EPostView} from "@/entities/Post";


export const getPostsPageIsLoading = (state: StateSchema) => state.postsPage?.isLoading || false;
export const getPostsPageError = (state: StateSchema) => state.postsPage?.error;
export const getPostsPageView = (state: StateSchema) => state.postsPage?.view || EPostView.SMALL;
export const getPostsPageNum = (state: StateSchema) => state.postsPage?.page || 1;
export const getPostsPageLimit = (state: StateSchema) => state.postsPage?.limit || 9;
export const getPostsPageHasMore = (state: StateSchema) => state.postsPage?.hasMore;
export const getPosts = (state: StateSchema) => state.postsPage?.posts;
export const getPostsPageInited = (state: StateSchema) => state.postsPage?._inited;
export const getPostsPageOrder = (state: StateSchema) => state.postsPage?.order ?? 'asc';
export const getPostsPageSort = (state: StateSchema) => state.postsPage?.sort ?? EPostSortField.CREATED;
export const getPostsPageSearch = (state: StateSchema) => state.postsPage?.search ?? '';
export const getPostsPageType = (state: StateSchema) => state.postsPage?.type ?? EPostType.ALL;
