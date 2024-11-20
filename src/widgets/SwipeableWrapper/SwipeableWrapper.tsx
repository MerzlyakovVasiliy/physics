import {Box, Button} from "@mui/material";
import {memo, useRef} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type TProps = {
    currentElement: React.ReactNode; // Текущий элемент, который нужно отобразить
    current: number; // Текущая страница
    onPageChange: (page: number) => void; // Функция для изменения страницы
    total: number; // Общее количество элементов (длина массива)
};

export const SwipeableWrapper = memo(({currentElement, current, onPageChange, total}: TProps) => {
    const touchStartX = useRef<number | null>(null); // Начальная точка касания
    const touchEndX = useRef<number | null>(null); // Конечная точка касания

    const handlePrev = () => {
        if (current > 0) onPageChange(current - 1);
    };

    const handleNext = () => {
        if (current < total - 1) onPageChange(current + 1);
    };

    const handleTouchStart = (event: React.TouchEvent) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event: React.TouchEvent) => {
        touchEndX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;

        const deltaX = touchStartX.current - touchEndX.current;

        // Определяем свайп влево или вправо
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0 && current < total - 1) {
                // Свайп влево (вперёд)
                onPageChange(current + 1);
            } else if (deltaX < 0 && current > 0) {
                // Свайп вправо (назад)
                onPageChange(current - 1);
            }
        }

        // Сбрасываем координаты
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <Box
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            display="flex"
            sx={{
                width: '100%',
                height: '100%',
                position: 'relative'
            }}
        >
            <Button
                onClick={handlePrev}
                disabled={current === 0}
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    padding: 0
                }}
            >
                <ArrowBackIosIcon />
            </Button>
            {currentElement} {/* Отображаем текущий элемент */}
            <Button
                onClick={handleNext}
                disabled={current === total - 1}
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    padding: 0
                }}
            >
                <ArrowForwardIosIcon />
            </Button>
        </Box>
    );
});
