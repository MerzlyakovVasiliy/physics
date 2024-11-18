import { createAsyncThunk } from '@reduxjs/toolkit';
import {TComment} from "@/entities/Comment";
import {ThunkConfig} from "@/app/store/config/StateSchema.ts";

export const fetchCommentsByPostId = createAsyncThunk<
    TComment[],
    string | undefined,
    ThunkConfig<string>
    >(
        'postDetails/fetchCommentsByPostId',
        async (postId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            if (!postId) {
                return rejectWithValue('error');
            }

            try {
                const response = await extra.api.get<TComment[]>('/comments', {
                    params: {
                        postId,
                        _expand: 'user',
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
