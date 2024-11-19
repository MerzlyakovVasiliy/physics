import Page from '@/widgets/Page/Page';
import {formulas} from "../model/const.ts";
import {useCallback, useMemo, useState} from "react";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FormulaCard} from "@/entities/FormulaCard";
import {Pagination} from "@/entities/PaginationForFormul";
import {TFormula} from "@/entities/FormulaCard/model/types/formula.ts";
import {SwipeableWrapper} from "@/widgets/SwipeableWrapper/SwipeableWrapper.tsx";

type FormulaCategories = typeof formulas;

const Physics = () => {
    const [selectedCategory, setSelectedCategory] = useState<keyof FormulaCategories>("Все");
    const [currentPage, setCurrentPage] = useState<number>(0);

    // Мемоизация списка категорий
    const categories = useMemo(() => Object.keys(formulas) as (keyof FormulaCategories)[], []);

    // Мемоизация текущего списка формул
    const currentFormulas = useMemo<TFormula[]>(() => formulas[selectedCategory], [selectedCategory]);

    // Текущая формула
    const currentFormula = useMemo<TFormula>(() => currentFormulas[currentPage], [currentFormulas, currentPage]);

    // Хэндлер смены категории
    const handleCategoryChange = useCallback((event: SelectChangeEvent) => {
        setSelectedCategory(event.target.value as keyof FormulaCategories);
        setCurrentPage(0); // Сброс пагинации
    }, []);

    // Хэндлер смены страницы
    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    return (
        <Page>
            <Box>
                <FormControl fullWidth style={{marginBottom: "20px"}}>
                    <InputLabel id="category-select-label">Выберите категорию</InputLabel>
                    <Select
                        labelId="category-select-label"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        label="Выберите категорию"
                        variant='outlined'>
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <SwipeableWrapper
                currentElement={<FormulaCard formula={currentFormula} />} // Передаем только текущую формулу
                current={currentPage}
                onPageChange={handlePageChange}
                total={currentFormulas.length} // Передаем длину массива
            />

            {currentFormulas.length > 1 && (
                <Pagination
                    total={currentFormulas.length}
                    current={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
        </Page>
    );
};

export default Physics;
