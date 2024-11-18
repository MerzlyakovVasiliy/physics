import { memo, useCallback, useMemo } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { EPostSortField } from '@/entities/Post/model/types/post';
import { SortOrder } from '@/shared/types';

interface TProps {
    sort: EPostSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: EPostSortField) => void;
}

export const PostSortSelector = memo((props: TProps) => {
    const { onChangeOrder, onChangeSort, order, sort } = props;

    const orderOptions = useMemo(() => [
        { value: 'asc', label: 'возрастанию' },
        { value: 'desc', label: 'убыванию' },
    ], []);

    const sortFieldOptions = useMemo(() => [
        { value: EPostSortField.CREATED, label: 'дате создания' },
        { value: EPostSortField.TITLE, label: 'названию' },
        { value: EPostSortField.VIEWS, label: 'просмотрам' },
    ], []);

    const handleChangeSort = useCallback((event: SelectChangeEvent) => {
        onChangeSort(event.target.value as EPostSortField);
    }, [onChangeSort]);

    const handleChangeOrder = useCallback((event: SelectChangeEvent) => {
        onChangeOrder(event.target.value as SortOrder);
    }, [onChangeOrder]);

    return (
        <>
            <FormControl fullWidth margin="normal" >
                <InputLabel>{'Сортировать ПО'}</InputLabel>
                <Select
                    value={sort}
                    label={'Сортировать ПО'}
                    onChange={handleChangeSort}
                >
                    {sortFieldOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" sx={{ mx: 2 }}>
                <InputLabel>{'ПО'}</InputLabel>
                <Select
                    value={order}
                    label={'ПО'}
                    onChange={handleChangeOrder}
                >
                    {orderOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
});
