import { TComment } from '@/entities/Comment';

export interface PostDetailsPageSchema {
    comments: TComment[];
    isLoading?: boolean;
    error?: string;
}
