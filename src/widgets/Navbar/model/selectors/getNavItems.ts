import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { NavItemType } from '../types/navbar';

export const getNavItems = createSelector(
    getUserAuthData,
    (/* userData */) => {
        const sidebarItemsList: NavItemType[] = [
            {
                path: RoutePath.main,
                text: 'Главная',
            },
            {
                path: RoutePath.physics,
                text: 'Физика',
            },
        ];

        // if (userData) {
        //     sidebarItemsList.push(
        //         {
        //             path: RoutePath.posts,
        //             text: 'Посты',
        //             authOnly: true,
        //         },
        //     );
        // }

        return sidebarItemsList;
    },
);
