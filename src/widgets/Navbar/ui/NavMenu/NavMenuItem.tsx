import { memo } from 'react'
import {MenuItem, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import { NavItemType } from "../../model/types/navbar";

interface TProps {
    item: NavItemType;
    onClick: () => void;
}

export const NavMenuItem = memo(({ item, onClick }: TProps) => {

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
});
