import React, {
    memo,
    MutableRefObject,
    useRef,
    UIEvent,
    useEffect
} from 'react';
import {useInfiniteScroll} from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';
import {Box} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUIScrollByPath} from "@/features/UI";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {useThrottle} from "@/shared/lib/hooks/useThrottle/useThrottle.ts";
import {uiActions} from "@/features/UI/models/slice/UISlice.ts";
import {StateSchema} from "@/app/store";

interface TProps {
    children?: React.ReactNode;
    onScrollEnd?: () => void;
}

const Page = (props: TProps) => {
    const {children, onScrollEnd} = props;
    const dispatch = useAppDispatch();

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const {pathname} = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getUIScrollByPath(state, pathname),
    );

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [scrollPosition]);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <Box
            component="section"
            className={cls.Page}
            ref={wrapperRef}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
        </Box>
    );
};

export default memo(Page);
