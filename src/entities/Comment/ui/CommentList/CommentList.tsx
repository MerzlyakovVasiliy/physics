import {memo} from 'react';
import {Box, Typography} from '@mui/material';
import {CommentCard} from '../CommentCard/CommentCard';
import {TComment} from '../../model/types/comment';

interface TProps {
    comments?: TComment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: TProps) => {
    const {isLoading, comments} = props;

    if (isLoading) {
        return (
            <Box>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
            </Box>
        );
    }

    return (
        <Box>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        comment={comment}
                        key={comment.id}
                    />
                ))
            ) : (
                <Typography variant="body1">
                    Комментарии отсутствуют
                </Typography>
            )}
        </Box>
    );
});
