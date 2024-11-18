import React from 'react';
import { MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavItemType } from "../../model/types/navbar";

interface UserMenuItemProps {
    item: NavItemType;
    onClick: () => void;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({item, onClick}) => {

    return (
        <MenuItem onClick={onClick}>
            <Typography
                component={Link}
                to={item.path}
                sx={{textDecoration: 'none', color: 'inherit', textAlign: 'center'}}
            >
                {item.text}
            </Typography>
        </MenuItem>
    );
};

export default UserMenuItem;