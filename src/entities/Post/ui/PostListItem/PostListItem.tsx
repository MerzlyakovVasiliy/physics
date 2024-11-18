import {HTMLAttributeAnchorTarget, memo} from 'react';
import {
    TPost,
    EPostView,
} from '../../model/types/post';
import {BigCard} from "@/entities/Post/ui/PostListItem/BigCard/BigCard.tsx";
import {SmallCard} from "./SmallCard/SmallCard.tsx";

interface TProps {
    post: TPost;
    view: EPostView;
    target?: HTMLAttributeAnchorTarget;
}

export const PostListItem = memo((props: TProps) => {
    const {
        post,
        view,
    } = props;

    if (view === EPostView.BIG) {

        return (
            <BigCard
                key={post.id}
                post={post}
            />
        );
    }

    return (
        <SmallCard
            post={post}
        />
    );
});
