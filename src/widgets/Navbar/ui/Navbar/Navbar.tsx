import {AppBar, Avatar, Container, Toolbar, Typography} from "@mui/material";
import {memo} from "react";
import squareAcademic from '@/assets/header/square-academic-cap-svgrepo-com.svg'
// import {UserMenu} from "@/widgets/Navbar/ui/UserMenu/UserMenu.tsx";
import {NavMenu} from "@/widgets/Navbar/ui/NavMenu/NavMenu.tsx";
// import {useSelector} from "react-redux";
// import {getUserAuthData} from "@/entities/User";
// import {LoginModal} from "@/features/AuthByUsername";

export const Navbar = memo(() => {
    // const [isAuthModal, setIsAuthModal] = useState(false);
    // const authData = useSelector(getUserAuthData);
    //
    // const onCloseModal = useCallback(() => {
    //     setIsAuthModal(false);
    // }, []);
    //
    // const onShowModal = useCallback(() => {
    //     setIsAuthModal(true);
    // }, []);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>*/}
                    <Avatar
                        sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}
                        src={squareAcademic }
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <NavMenu/>

                    {/*{*/}
                    {/*    authData ? <UserMenu/> : <Button color="inherit" onClick={onShowModal}>Login</Button>*/}
                    {/*}*/}

                    {/*{isAuthModal && (*/}
                    {/*    <LoginModal*/}
                    {/*        isOpen={isAuthModal}*/}
                    {/*        onClose={onCloseModal}*/}
                    {/*    />*/}
                    {/*)}*/}

                </Toolbar>
            </Container>
        </AppBar>
    );
});
