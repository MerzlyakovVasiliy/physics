import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TComment } from '@/entities/Comment';
import {
    fetchCommentsByPostId,
} from '@/pages/PostDetailsPage/model/services/fetchCommentsByPostId/fetchCommentsByPostId.ts';
import { PostDetailsPageSchema } from '../types/postDetailsPageSchema';

const initialState: PostDetailsPageSchema = {
    isLoading: false,
    error: undefined,
    comments: [],
};

const postDetailsPageSlice = createSlice({
    name: 'postDetailsCommentsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByPostId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByPostId.fulfilled, (
                state,
                action: PayloadAction<TComment[]>,
            ) => {
                state.isLoading = false;
                state.comments = action.payload; // Обновляем массив комментариев
            })
            .addCase(fetchCommentsByPostId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: postDetailsCommentsReducer } = postDetailsPageSlice;
