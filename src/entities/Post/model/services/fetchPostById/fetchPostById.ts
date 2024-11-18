import {createAsyncThunk} from '@reduxjs/toolkit';
import {TPost} from "@/entities/Post/model/types/post.ts";
import {ThunkConfig} from "@/app/store/config/StateSchema.ts";

export const fetchPostById = createAsyncThunk<
    TPost,
    string,
    ThunkConfig<string>
>(
    'postDetails/fetchPostById',
    async (postId, thunkApi) => {
        const {extra, rejectWithValue} = thunkApi;

        try {
            const response = await extra.api.get<TPost>(`/posts/${postId}`, {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
