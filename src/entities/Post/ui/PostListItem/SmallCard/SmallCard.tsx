import {memo} from 'react';
import {Box, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import {TPost} from "@/entities/Post/model/types/post.ts";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig.tsx";
import {Link} from "react-router-dom";

type TCart = {
    post: TPost
}

export const SmallCard = memo((props: TCart) => {
    const {
        post
    } = props;

    return (
        <Box
            key={post.id}
            flexBasis={{xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)'}}
            p={1}
        >
            <Link to={RoutePath.post_details + post.id}>
            <Card variant="outlined">
                <CardHeader
                    title={post.title}
                    subheader={post.createdAt}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={post.img}
                    alt={post.title}
                />
                <CardContent>
                    <Typography variant="h6">
                        {post.blocks.title}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {post.blocks.paragraphs}
                    </Typography>
                </CardContent>
            </Card>
            </Link>
        </Box>
    );
});
