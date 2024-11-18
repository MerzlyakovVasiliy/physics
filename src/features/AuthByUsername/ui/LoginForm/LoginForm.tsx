import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getLoginUsername,
    getLoginPassword,
    getLoginIsLoading,
    getLoginError
} from '../../model/selectors/selectors';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import { Box, Button, TextField, Typography } from '@mui/material';

export interface TProps {
    onSuccess: () => void;
}

const LoginForm = memo(({ onSuccess }: TProps) => {
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Остановка отправки формы

        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <Box
            component="form"
            onSubmit={onLoginClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 400,
                margin: 'auto',
            }}
        >
            <Typography variant="h6" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
                Форма авторизации
            </Typography>
            <TextField
                label="Логин"
                variant="outlined"
                value={username}
                onChange={(e) => onChangeUsername(e.target.value)}
                required
            />
            <TextField
                label="Пароль"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => onChangePassword(e.target.value)}
                required
            />
            {error && (
                <Typography color="error" variant="body2">
                    Вы ввели неверный логин или пароль
                </Typography>
            )}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading}
            >
                Войти
            </Button>
        </Box>
    );
});

export default LoginForm;
