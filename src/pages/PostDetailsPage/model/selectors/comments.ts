import {StateSchema} from "@/app/store";

export const getPostCommentsIsLoading = (state: StateSchema) => {
    return state.postDetailsPage?.isLoading;
};

export const getPostCommentsError = (state: StateSchema) => {
    return state.postDetailsPage?.error;
};

export const getPostComments = (state: StateSchema) => {
    return state.postDetailsPage?.comments || [];
};
