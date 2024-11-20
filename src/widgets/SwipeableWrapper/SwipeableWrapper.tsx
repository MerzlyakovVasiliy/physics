import {Box} from "@mui/material";
import {memo, useRef} from "react";

type TProps = {
    currentElement: React.ReactNode; // Текущий элемент, который нужно отобразить
    current: number; // Текущая страница
    onPageChange: (page: number) => void; // Функция для изменения страницы
    total: number; // Общее количество элементов (длина массива)
};

export const SwipeableWrapper = memo(({currentElement, current, onPageChange, total}: TProps) => {
    const touchStartX = useRef<number | null>(null); // Начальная точка касания
    const touchEndX = useRef<number | null>(null); // Конечная точка касания

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
                height: '100%'
            }}
        >
            {currentElement} {/* Отображаем текущий элемент */}
        </Box>
    );
});
