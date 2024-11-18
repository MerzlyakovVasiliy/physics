import {memo, useCallback, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AddCommentForm} from '@/features/AddCommentForm';
import {addCommentForPost} from '../../model/services/addCommentForPost/addCommentForPost';
import {fetchCommentsByPostId} from '../../model/services/fetchCommentsByPostId/fetchCommentsByPostId';
import {Divider, Typography} from "@mui/material";
import Page from "@/widgets/Page/Page.tsx";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {getPostComments, getPostCommentsIsLoading} from "@/pages/PostDetailsPage/model/selectors/comments.ts";
import {PostDetails} from "@/entities/Post";
import {PostDetailsPageHeader} from "@/pages/PostDetailsPage/ui/PostDetailsPageHeader/PostDetailsPageHeader.tsx";
import {CommentList} from "@/entities/Comment";


const PostDetailsPage = () => {
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getPostComments);
    const commentsIsLoading = useSelector(getPostCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForPost(text));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCommentsByPostId(id));
    }, [dispatch, id]);

    if (!id) {
        return (
            <Page>
                Пост не найден
            </Page>
        );
    }

    return (
        <Page>
            <PostDetailsPageHeader/>
            <PostDetails id={id}/>
            <Divider
                sx={{height: "3px", margin: "16px 0"}}
            />
            <Typography>
                Комментарии
            </Typography>
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </Page>
    );
};

export default memo(PostDetailsPage);
