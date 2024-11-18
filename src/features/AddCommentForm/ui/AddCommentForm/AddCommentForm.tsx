import { memo, useCallback } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';

export interface AddCommentFormProps {
    onSendComment: (text: string) => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { onSendComment } = props;
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addCommentFormActions.setText(event.target.value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        dispatch(addCommentFormActions.setText(''));
    }, [onSendComment, text, dispatch]);

    return (
        <Box display="flex" alignItems="center" gap={2}>
            <TextField
                placeholder="Введите текст комментария"
                value={text}
                onChange={onCommentTextChange}
                error={!!error}
                helperText={error ? 'Ошибка ввода комментария' : ''}
                fullWidth
                variant="outlined"
            />
            <Button
                variant="outlined"
                onClick={onSendHandler}
            >
                Отправить
            </Button>
        </Box>
    );
});

export default AddCommentForm;
