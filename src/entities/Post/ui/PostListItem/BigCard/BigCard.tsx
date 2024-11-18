import {memo} from 'react';
import {Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import {TPost} from "@/entities/Post/model/types/post.ts";
import {Link} from "react-router-dom";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig.tsx";

type TCart = {
    post: TPost
}

export const BigCard = memo((props: TCart) => {
    const {
        post
    } = props;

    return (
        <Box
            key={post.id}
            flexBasis="100%"
            p={1}
        >
            <Card variant="outlined" sx={{padding: '15px'}}>

                <CardHeader
                    title={
                        <Box>
                            <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                                <Avatar sx={{width: 30, height: 30}}/>
                                <Typography variant="body2">{post.user.username}</Typography>
                            </Box>
                            <Typography component="h3" variant="h3">
                                {post.title}
                            </Typography>
                            <Typography variant="h6">
                                {post.type}
                            </Typography>
                        </Box>
                    }
                />
                <CardMedia
                    component="img"
                    height="270"
                    image={post.img}
                    alt={post.title}
                />
                <CardContent>
                    <Typography variant="h6" align={'center'}>
                        {post.blocks.title}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {post.blocks.paragraphs}
                    </Typography>
                </CardContent>
                <Box>
                    <Link
                        to={RoutePath.post_details + post.id}
                    >
                        <Button variant="outlined">Читать далее...</Button>
                    </Link>
                </Box>
            </Card>
        </Box>
    );
});
