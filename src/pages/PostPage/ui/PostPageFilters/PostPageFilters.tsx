import {memo, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {SortOrder} from '@/shared/types';
import {useDebounce} from '@/shared/lib/hooks/useDebounce/useDebounce';
import {
    getPostsPageOrder,
    getPostsPageSearch,
    getPostsPageSort,
    getPostsPageType,
    getPostsPageView,
} from '../../model/selectors/postsPageSelectors';
import {postsPageActions} from '../../model/slices/postPageSlice';
import {Box, TextField} from "@mui/material";
import {
    EPostSortField,
    EPostType,
    EPostView,
    PostSortSelector,
    PostTypeTabs,
    PostViewSelector
} from "@/entities/Post";
import {fetchPostsList} from "@/pages/PostPage/model/services/fetchPostsList/fetchPostsList.ts";


export const PostPageFilters = memo(() => {
    const dispatch = useAppDispatch();
    const view = useSelector(getPostsPageView);
    const sort = useSelector(getPostsPageSort);
    const order = useSelector(getPostsPageOrder);
    const search = useSelector(getPostsPageSearch);
    const type = useSelector(getPostsPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchPostsList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: EPostView) => {
        dispatch(postsPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: EPostSortField) => {
        dispatch(postsPageActions.setSort(newSort));
        dispatch(postsPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(postsPageActions.setOrder(newOrder));
        dispatch(postsPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(postsPageActions.setSearch(search.target.value));
        dispatch(postsPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeType = useCallback((value: EPostType) => {
        dispatch(postsPageActions.setType(value));
        dispatch(postsPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'center'}>
            <Box display={'flex'}>
                <PostSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </Box>

            <Box>
                <PostViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </Box>

            <Box width={'100%'}>
                <TextField
                    placeholder="Введите текст комментария"
                    value={search}
                    onChange={onChangeSearch}
                    fullWidth
                    variant="outlined"
                />
            </Box>

            <Box width={'100%'}>
                <PostTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                />
            </Box>

        </Box>
    );
});
