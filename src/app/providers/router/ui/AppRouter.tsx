import {memo, Suspense, useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
import {PageLoader} from '@/shared/ui/PageLoader/PageLoader';
import {routeConfig, AppRoutProps} from '@/shared/config/routeConfig/routeConfig';
import {RequireAuth} from './RequireAuth';

const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutProps) => {
        const element = (
            <Suspense fallback={<PageLoader/>}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
});

export default memo(AppRouter);