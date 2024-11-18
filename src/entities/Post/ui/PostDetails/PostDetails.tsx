import {memo, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Avatar, Box, Skeleton, Typography} from "@mui/material";
import {Visibility as EyeIcon, CalendarToday as CalendarIcon} from '@mui/icons-material';
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {fetchPostById} from "@/entities/Post/model/services/fetchPostById/fetchPostById.ts";

import {
    getPostDetailsData,
    getPostDetailsError,
    getPostDetailsIsLoading,
} from '../../model/selectors/postDetails';

interface TProps {
    id: string;
}

export const PostDetails = memo((props: TProps) => {
    const {id} = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getPostDetailsIsLoading);
    const post = useSelector(getPostDetailsData);
    const error = useSelector(getPostDetailsError);

    useEffect(() => {
        dispatch(fetchPostById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Box display="flex" justifyContent="center">
                    <Skeleton variant="circular" width={200} height={200}/>
                </Box>
                <Skeleton variant="text" width={300} height={32}/>
                <Skeleton variant="text" width={600} height={24}/>
                <Skeleton variant="rectangular" width="100%" height={200}/>
                <Skeleton variant="rectangular" width="100%" height={200}/>
            </>
        );
    } else if (error) {
        content = (
            <Typography align="center" variant="h6">
                Произошла ошибка при загрузке статьи.
            </Typography>
        );
    } else {
        content = (
            <>
                <Typography variant="h4" align="center" gutterBottom>
                    {post?.title}
                </Typography>

                <Box display="flex" justifyContent="center">
                    <Avatar
                        src={post?.img}
                        sx={{width: 200, height: 200}}
                    />
                </Box>

                <Typography variant="subtitle1" align="center" gutterBottom>
                    {post?.subtitle}
                </Typography>

                <Box mt={2}>
                    {post?.blocks.paragraphs}
                </Box>

                <Box display="flex" alignItems="center" justifyContent={'space-between'} mt={2}>
                    <Box display="flex" alignItems="center">
                        <EyeIcon fontSize="small"/>
                        <Typography ml={1} variant="body2">{String(post?.views)}</Typography>
                    </Box>

                    <Box display="flex" alignItems="center">
                        <CalendarIcon fontSize="small"/>
                        <Typography ml={1} variant="body2">{post?.createdAt}</Typography>
                    </Box>
                </Box>
            </>
        );
    }

    return (
        <Box>
            {content}
        </Box>
    );
});
