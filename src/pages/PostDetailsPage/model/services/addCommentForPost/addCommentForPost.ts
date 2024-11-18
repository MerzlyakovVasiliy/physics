import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { TComment } from '@/entities/Comment';
import {
    fetchCommentsByPostId,
} from '../../services/fetchCommentsByPostId/fetchCommentsByPostId';
import {ThunkConfig} from "@/app/store/config/StateSchema.ts";
import {getPostDetailsData} from "@/entities/Post";

export const addCommentForPost = createAsyncThunk<
    TComment,
    string,
    ThunkConfig<string>
    >(
        'postDetails/addCommentForPost',
        async (text, thunkApi) => {
            const {
                extra, dispatch, rejectWithValue, getState,
            } = thunkApi;

            const userData = getUserAuthData(getState());
            const post = getPostDetailsData(getState());

            if (!userData || !text || !post) {
                return rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<TComment>('/comments', {
                    postId: post.id,
                    userId: userData.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByPostId(post.id));

                return response.data;
            } catch (e) {
                console.log(e)
                return rejectWithValue('error');
            }
        },
    );
