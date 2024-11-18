import {memo} from 'react';
import {EPostView} from "@/entities/Post";
import {Avatar, Box, Card, CardContent, CardHeader, Skeleton, Typography} from "@mui/material";

interface TProps {
    className?: string;
    view: EPostView;
}

export const PostListItemSkeleton = memo((props: TProps) => {
    const {view} = props;

    if (view === EPostView.BIG) {
        return (
            <Box
                flexBasis="100%"
                p={1}
            >
                <Card variant="outlined" sx={{padding: '15px'}}>
                    <CardHeader
                        title={
                            <Box>
                                <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                                    <Skeleton variant="circular">
                                        <Avatar sx={{width: 30, height: 30}}/>
                                    </Skeleton>
                                    <Typography variant="body2">
                                        <Skeleton width="100px"/>
                                    </Typography>
                                </Box>
                                <Typography component="h3" variant="h3">
                                    <Skeleton width="80%"/>
                                </Typography>
                                <Typography variant="h6">
                                    <Skeleton width="60%"/>
                                </Typography>
                            </Box>
                        }
                    />
                    <Skeleton variant="rectangular" height={270}/>
                    <CardContent>
                        <Typography variant="h6" align={'center'}>
                            <Skeleton width="70%"/>
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            <Skeleton width="90%"/>
                            <Skeleton width="80%"/>
                            <Skeleton width="95%"/>
                        </Typography>
                    </CardContent>
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Skeleton variant="rectangular" width={120} height={36}/>
                    </Box>
                </Card>
            </Box>
        );
    }

    return (
        <Box
            flexBasis={{xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)'}}
            p={1}
        >
            <Card variant="outlined">
                <CardHeader
                    title={<Skeleton width="60%"/>}
                    subheader={<Skeleton width="40%"/>}
                />
                <Skeleton variant="rectangular" height={194}/>
                <CardContent>
                    <Typography variant="h6">
                        <Skeleton width="80%"/>
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        <Skeleton width="90%"/>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
});
