import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import React, {memo, useCallback, useMemo, useState} from "react";
import UserMenuItem from "./UserMenuItem.tsx";
import { sidebarItemsList } from "@/widgets/Navbar/model/const/const.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {userActions} from "@/entities/User";

export const UserMenu = memo(() => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const dispatch = useAppDispatch();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        handleCloseUserMenu()
    }, [dispatch]);

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <UserMenuItem
            item={item}
            key={item.path}
            onClick={handleCloseUserMenu}
        />
    )), []);

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {itemsList}
                <MenuItem onClick={onLogout}>
                    <Typography
                        sx={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}
                    >
                        Выйти
                    </Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
});
