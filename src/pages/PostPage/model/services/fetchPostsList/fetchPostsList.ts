import {createAsyncThunk} from '@reduxjs/toolkit';
import {
    getPostsPageLimit,
    getPostsPageNum,
    getPostsPageOrder,
    getPostsPageSearch,
    getPostsPageSort,
    getPostsPageType
} from '../../selectors/postsPageSelectors';
import {ThunkConfig} from "@/app/store/config/StateSchema.ts";
import {EPostType, TPost} from "@/entities/Post/model/types/post.ts";
import {addQueryParams} from "@/shared/lib/url/addQueryParams/addQueryParams.ts";

interface FetchPostsListProps {
    replace?: boolean;
}

export const fetchPostsList = createAsyncThunk<
    TPost[],
    FetchPostsListProps,
    ThunkConfig<string>
>(
    'postsPage/fetchPostsList',
    async (_props, thunkApi) => {
        const {extra, rejectWithValue, getState} = thunkApi;
        const limit = getPostsPageLimit(getState());
        const sort = getPostsPageSort(getState());
        const order = getPostsPageOrder(getState());
        const search = getPostsPageSearch(getState());
        const page = getPostsPageNum(getState());
        const type = getPostsPageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });

            const params = {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === EPostType.ALL ? undefined : type,
            }

            const response = await extra.api.get<TPost[]>('/posts', {
                params
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e)
            return rejectWithValue('error');
        }
    },
);
