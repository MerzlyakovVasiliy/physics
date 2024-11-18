import { NavItemType } from "../types/navbar";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig.tsx";

export const sidebarItemsList: NavItemType[] = [
    {
        path: RoutePath.profile,
        text: 'Профиль',
    },
];