import {memo} from 'react';
import {Avatar, Box, Typography, Card, CardContent, Skeleton} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {TComment} from "../../model/types/comment";

interface TProps {
    comment?: TComment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: TProps) => {
    const {comment, isLoading} = props;

    if (isLoading) {
        return (
            <Card variant="outlined" sx={{padding: 2}}>
                <Box display="flex" alignItems="center" mb={2}>
                    <Skeleton variant="circular" width={30} height={30}/>
                    <Skeleton variant="text" width={100} height={16} sx={{ml: 1}}/>
                </Box>
                <Skeleton variant="rectangular" width="100%" height={50}/>
            </Card>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <Card variant="outlined" sx={{padding: 2, marginTop: 1}}>
            <Box
                component={RouterLink}
                to={`/profile/${comment.user.id}`}
                display="flex"
                alignItems="center"
                sx={{textDecoration: 'none', color: 'inherit', mb: 2}}
            >
                {comment.user.avatar ? (
                    <Avatar src={comment.user.avatar} sx={{width: 30, height: 30}}/>
                ) : null}
                <Typography variant="body2" sx={{ml: 1}}>
                    {comment.user.username}
                </Typography>
            </Box>
            <CardContent>
                <Typography variant="body1">{comment.text}</Typography>
            </CardContent>
        </Card>
    );
});
