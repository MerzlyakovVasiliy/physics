import {StateSchema} from "@/app/store";

export const getUserInited = (state: StateSchema) => state.user._inited;
