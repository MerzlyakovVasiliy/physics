import { StateSchema } from "@/app/store/config/StateSchema.ts";
import { createSelector } from '@reduxjs/toolkit';

export const getUIScroll = (state: StateSchema) => state.ui.scroll;
export const getUIScrollByPath = createSelector(
    getUIScroll,
    (_state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
