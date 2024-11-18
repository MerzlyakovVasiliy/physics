import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Stack, Typography} from "@mui/material";
import { TPost, EPostView } from "../../model/types/post.ts";
import {PostListItem} from "../PostListItem/PostListItem.tsx";
import {PostListItemSkeleton} from "@/entities/Post/ui/PostListItem/PostListItemSkeleton.tsx";

interface TProps {
    posts: TPost[]
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: EPostView;
    className?: string;
}

const getSkeletons = (view: EPostView) => new Array(view === EPostView.SMALL ? 9 : 3)
    .fill(0)
    .map((_item, index) => (
        <PostListItemSkeleton key={index} view={view} />
    ));

export const PostList = memo((props: TProps) => {
    const {
        posts,
        view = EPostView.SMALL,
        isLoading,
        target,
    } = props;

    const renderPost = (post: TPost) => (
            <PostListItem
                key={post.id}
                post={post}
                view={view}
                target={target}
            />
    );

    if (!isLoading && !posts.length) {
        return (
            <div>
                <Typography variant="h1" component="h2">
                    Посты не найдены
                </Typography>
            </div>
        );
    }

    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="flex-start"
        >
            {posts.length > 0
                ? posts.map(renderPost)
                : null}
            {isLoading && getSkeletons(view)}
        </Stack>
    );
});
