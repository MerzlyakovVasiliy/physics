import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import {Box, Button} from "@mui/material";

export const PostDetailsPageHeader = memo(() => {
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.posts);
    }, [navigate]);

    return (
        <Box >
            <Button variant="outlined" onClick={onBackToList}>Назад к списку</Button>
        </Box>
    );
});
