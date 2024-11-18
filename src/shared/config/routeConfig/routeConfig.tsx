import {RouteProps} from 'react-router-dom';
import {NotFoundPage} from '@/pages/NotFoundPage';
import {MainPage} from '@/pages/MainPage';
import {PhysicsPage} from "@/pages/PhysicsPage";

export type AppRoutProps = RouteProps & {
    authOnly?: boolean
}

/**
 * Список роутов приложения
 */
export enum AppRouters {
    MAIN = 'main',
    PHYSICS = 'physics',
    // PROFILE = 'profile',
    // POSTS = 'posts',
    // POST_DETAILS = 'post_details',
    NOT_FOUND = 'not_found',
}

/**
 * Пути страниц
 */
export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.PHYSICS]: '/physics',
    // [AppRouters.PROFILE]: '/profile/', // :id
    // [AppRouters.POSTS]: '/posts',
    // [AppRouters.POST_DETAILS]: '/post/', // :id
    [AppRouters.NOT_FOUND]: '/*',
};

/**
 * Конфиг путей
 */
export const routeConfig: Record<AppRouters, AppRoutProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRouters.PHYSICS]: {
        path: RoutePath.physics,
        element: <PhysicsPage/>,
    },
    // [AppRouters.PROFILE]: {
    //     path: `${RoutePath.profile}:id?`,
    //     element: <ProfilePage/>,
    //     authOnly: true,
    // },
    // [AppRouters.POSTS]: {
    //     path: RoutePath.posts,
    //     element: <PostPage/>,
    //     authOnly: true,
    // },
    // [AppRouters.POST_DETAILS]: {
    //     path: `${RoutePath.post_details}:id`,
    //     element: <PostDetailsPage/>,
    //     authOnly: true,
    // },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>,
    },

};
