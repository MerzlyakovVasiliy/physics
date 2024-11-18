import Page from '@/widgets/Page/Page';
import {useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getPosts, getPostsPageView, getPostsPageIsLoading} from "@/pages/PostPage/model/selectors/postsPageSelectors";
import {fetchNextPostsPage} from "@/pages/PostPage/model/services/fetchNextPostsPage/fetchNextPostsPage";
import {initPostsPage} from "@/pages/PostPage/model/services/initPostsPage/initPostsPage";
import {PostList} from "@/entities/Post";
import {PostPageFilters} from "../PostPageFilters/PostPageFilters";
import {useSearchParams} from "react-router-dom";

const PostPage = () => {
    const dispatch = useAppDispatch()
    const allPosts = useSelector(getPosts)
    const view = useSelector(getPostsPageView);
    const isLoading = useSelector(getPostsPageIsLoading);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextPostsPage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(initPostsPage(searchParams));
    }, [dispatch, searchParams]);

    return (
        <Page
            onScrollEnd={onLoadNextPart}
        >
            <PostPageFilters />
            <PostList
                isLoading={isLoading}
                view={view}
                posts={allPosts}
            />
        </Page>
    );
};

export default PostPage;
