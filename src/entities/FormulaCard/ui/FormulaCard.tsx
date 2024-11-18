import {TFormula} from "../model/types/formula.ts";
import {Box, Typography} from "@mui/material";
import cls from './FormulaCard.module.scss';
import {memo} from "react";

type TProps = {
    formula: TFormula
}

export const FormulaCard = memo(({ formula }: TProps) => {
    if (!formula) return <p>Формулы не найдены.</p>;

    return (
        <Box
            display="flex"
            flexDirection="column"
            flexGrow={1}
        >
            <Typography variant={"h6"} align={'center'}>{formula.title}</Typography>
            <img className={cls.formulaImg} src={formula.img} alt={formula.title} />
        </Box>
    );
});

