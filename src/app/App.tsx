import {CssBaseline} from "@mui/material";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {getUserInited, userActions} from "@/entities/User";
import {Suspense, useEffect} from "react";
import {useSelector} from "react-redux";
import {Navbar} from "@/widgets/Navbar/ui/Navbar/Navbar.tsx";
import {AppRouter} from "@/app/providers/router";

const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={'app'} style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Suspense fallback="">
                <CssBaseline/> {/* Глобальный сброс стилей */}
                <Navbar/>
                {inited && <AppRouter/>}
            </Suspense>
        </div>
    );
}

export default App;
