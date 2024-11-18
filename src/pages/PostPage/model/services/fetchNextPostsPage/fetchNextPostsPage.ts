import { createAsyncThunk } from '@reduxjs/toolkit';
import {ThunkConfig} from "@/app/store/config/StateSchema.ts";
import {
    getPostsPageHasMore,
    getPostsPageIsLoading,
    getPostsPageNum
} from "@/pages/PostPage/model/selectors/postsPageSelectors";
import {fetchPostsList} from "@/pages/PostPage/model/services/fetchPostsList/fetchPostsList.ts";
import {postsPageActions} from "@/pages/PostPage/model/slices/postPageSlice.ts";

export const fetchNextPostsPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'postsPage/fetchNextPostsPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const hasMore = getPostsPageHasMore(getState());
        const page = getPostsPageNum(getState());
        const isLoading = getPostsPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(postsPageActions.setPage(page + 1));
            dispatch(fetchPostsList({}));
        }
    },
);
