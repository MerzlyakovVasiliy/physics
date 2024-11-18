import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/store/config/StateSchema.ts";
import {getPostsPageInited} from "@/pages/PostPage/model/selectors/postsPageSelectors";
import {postsPageActions} from "@/pages/PostPage/model/slices/postPageSlice";
import {fetchPostsList} from "@/pages/PostPage/model/services/fetchPostsList/fetchPostsList";
import {SortOrder} from "@/shared/types";
import {EPostSortField, EPostType} from "@/entities/Post";

export const initPostsPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'postsPage/initPostsPage',
    async (searchParams, thunkApi) => {
        const {getState, dispatch} = thunkApi;
        const inited = getPostsPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as EPostSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as EPostType;

            if (orderFromUrl) {
                dispatch(postsPageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(postsPageActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(postsPageActions.setSearch(searchFromUrl));
            }
            if (typeFromUrl) {
                dispatch(postsPageActions.setType(typeFromUrl));
            }

            dispatch(postsPageActions.initState());
            dispatch(fetchPostsList({}));
        }
    },
);
