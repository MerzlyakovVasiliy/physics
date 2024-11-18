export {
    PostDetails,
} from './ui/PostDetails/PostDetails';

export {EPostType, EPostView, EPostSortField} from './model/types/post';
export type { TPost, TPostBlock } from './model/types/post';
export type { PostDetailsSchema } from './model/types/postDetailsSchema';

export { PostList } from './ui/PostsList/PostsList';
export { PostViewSelector } from './ui/PostViewSelector/PostViewSelector';
export { PostSortSelector } from './ui/PostSortSelector/PostSortSelector';
export { PostTypeTabs } from './ui/PostTypeTabs/PostTypeTabs';
export { getPostDetailsData } from './model/selectors/postDetails';
