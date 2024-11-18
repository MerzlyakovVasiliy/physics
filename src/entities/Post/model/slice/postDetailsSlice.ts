import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {fetchPostById} from "@/entities/Post/model/services/fetchPostById/fetchPostById.ts";
import {TPost} from "@/entities/Post/model/types/post.ts";
import {PostDetailsSchema} from "@/entities/Post/model/types/postDetailsSchema.ts";

const initialState: PostDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const postDetailsSlice = createSlice({
    name: 'postDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPostById.fulfilled, (
                state,
                action: PayloadAction<TPost>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: postDetailsActions } = postDetailsSlice;
export const { reducer: postDetailsReducer } = postDetailsSlice;
