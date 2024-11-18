import {Box, Button, Typography} from "@mui/material";
import {memo} from "react";

type TProps = {
    total: number;
    current: number;
    onPageChange: (page: number) => void;
}

export const Pagination = memo(({total, current, onPageChange}: TProps) => {
    const handlePrev = () => {
        if (current > 0) onPageChange(current - 1);
    };

    const handleNext = () => {
        if (current < total - 1) onPageChange(current + 1);
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <Button variant={'contained'} onClick={handlePrev} disabled={current === 0}>
                &larr; Назад
            </Button>
            <Typography variant="body2" color="textSecondary">
                {current + 1} из {total}
            </Typography>
            <Button variant={'contained'} onClick={handleNext} disabled={current === total - 1}>
                Вперед &rarr;
            </Button>
        </Box>
    );
});