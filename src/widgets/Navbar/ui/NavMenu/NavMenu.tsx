import {Avatar, Box, IconButton, Menu, Typography} from "@mui/material";
import React, { memo, useMemo } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { getNavItems } from "@/widgets/Navbar/model/selectors/getNavItems.ts";
import { useSelector } from "react-redux";
import { NavMenuItem } from "@/widgets/Navbar/ui/NavMenu/NavMenuItem.tsx";
import squareAcademic from "@/assets/header/square-academic-cap-svgrepo-com.svg";

export const NavMenu = memo(() => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const navItemsList = useSelector(getNavItems);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const itemsList = useMemo(() => navItemsList.map((item) => (
        <NavMenuItem
            item={item}
            key={item.path}
            onClick={handleCloseNavMenu}
        />
    )), [navItemsList]);

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >

                    <MenuIcon />
                </IconButton>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    { itemsList }
                </Menu>

            </Box>

            <Avatar
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                src={squareAcademic }
            />

            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                { itemsList }
            </Box>
        </>
    );
});
