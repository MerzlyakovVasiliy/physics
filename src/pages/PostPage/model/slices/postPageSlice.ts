import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EPostSortField, EPostType, EPostView} from "@/entities/Post/model/types/post.ts";
import {PostsPageSchema} from "@/pages/PostPage/model/types/postsPageSchema.ts";
import {POSTS_VIEW_LOCALSTORAGE_KEY} from "@/shared/const/localstorage.ts";
import {fetchPostsList} from "@/pages/PostPage/model/services/fetchPostsList/fetchPostsList.ts";
import {SortOrder} from "@/shared/types";

const initialState: PostsPageSchema = {
    isLoading: false,
    error: undefined,
    view: EPostView.SMALL,
    posts: [],
    _inited: false,
    type: EPostType.ALL,
    limit: 9,
    hasMore: true,
    page: 1,
    order: 'asc',
    search: '',
    sort: EPostSortField.CREATED,
}

const postsPageSlice = createSlice({
    name: 'postPageSlice',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<EPostView>) => {
            state.view = action.payload;
            localStorage.setItem(POSTS_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<EPostSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<EPostType>) => {
            state.type = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(POSTS_VIEW_LOCALSTORAGE_KEY) as EPostView;
            state.view = view;
            state.limit = view === EPostView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    state.posts = []
                }
            })
            .addCase(fetchPostsList.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.hasMore = action.payload.length > 0;
                if (action.meta.arg.replace) {
                    state.posts = action.payload;
                } else {
                    state.posts = [...state.posts, ...action.payload];
                }
            })
            .addCase(fetchPostsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: postsPageReducer,
    actions: postsPageActions,
} = postsPageSlice;
