import { StateSchema } from "@/app/store/config/StateSchema.ts";


export const getUserAuthData = (state: StateSchema) => state.user.authData;
