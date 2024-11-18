import {StateSchema} from "@/app/store";

export const getPostDetailsData = (state: StateSchema) => state.postDetails?.data;
export const getPostDetailsIsLoading = (state: StateSchema) => state.postDetails?.isLoading || false;
export const getPostDetailsError = (state: StateSchema) => state.postDetails?.error;
