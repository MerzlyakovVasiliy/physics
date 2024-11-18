import momentOfPower from '@/assets/staticsAndHydrostatics/momentOfPower.png'
import centerOfMassOfTheSystemOfMaterialPoints from '@/assets/staticsAndHydrostatics/centerOfMassOfTheSystemOfMaterialPoints.png'
import conditionsOfEquilibriumOfSolidBodyInISO from './img/StaticsAndHydrostatics/conditionsOfEquilibriumOfSolidBodyInISO.png'
import liquidPressure from '@/assets/staticsAndHydrostatics/liquidPressure.png'
import archimedesLaw from '@/assets/staticsAndHydrostatics/archimedesLaw.png'
import archimedesForceModule from '@/assets/staticsAndHydrostatics/archimedesForceModule.png'
import principleOfSuperpositionOfMagneticFields from '@/assets/magneticField/principleOfSuperpositionOfMagneticFields.png'
import amperePower from '@/assets/magneticField/amperePower.png'
import lorentzForce from '@/assets/magneticField/lorentzForce.png'
import freeElectromagneticOscillationsInIdealOscillatoryCircuit from '@/assets/electromagneticVibrationsAndWaves/freeElectromagneticOscillationsInIdealOscillatoryCircuit.png'
import thomsonFormula from '@/assets/electromagneticVibrationsAndWaves/thomsonFormula.png'
import lawOfConservationOfEnergyInIdeal from '@/assets/electromagneticVibrationsAndWaves/lawOfConservationOfEnergyInIdeal.png'

// Массивы для категорий
const staticsAndHydrostatics = [
    { id: 1, title: "Момент силы", img: momentOfPower },
    { id: 2, title: "Центр масс системы материальных точек", img: centerOfMassOfTheSystemOfMaterialPoints },
    { id: 3, title: "Условия равновесия твёрдого тела в ИСО", img: conditionsOfEquilibriumOfSolidBodyInISO },
    { id: 4, title: "Давление в жидкости", img: liquidPressure },
    { id: 5, title: "Закон Архимеда", img: archimedesLaw },
    { id: 6, title: "Модуль силы Архимеда", img: archimedesForceModule },
];

const magneticField = [
    { id: 7, title: "Принцип суперпозиции магнитных полей", img: principleOfSuperpositionOfMagneticFields },
    { id: 8, title: "Сила Ампера", img: amperePower },
    { id: 9, title: "Сила Лоренца", img: lorentzForce },
];

const electromagneticVibrationsAndWaves = [
    {
        id: 10,
        title: "Свободные электромагнитные колебания идеальном колебательном контуре",
        img: freeElectromagneticOscillationsInIdealOscillatoryCircuit
    },
    {
        id: 11,
        title: "Формула Томсона",
        img: thomsonFormula
    },
    {
        id: 12,
        title: "Закон сохранения энергии в идеальном колебательном контуре",
        img: lawOfConservationOfEnergyInIdeal
    },
]

// Список всех формул (объединение категорий)
const allFormulas = [
    ...staticsAndHydrostatics,
    ...magneticField,
    ...electromagneticVibrationsAndWaves
];

// Экспорт категорий
export const formulas = {
    "Все": allFormulas,
    "Статика и гидростатика": staticsAndHydrostatics,
    "Магнитное поле": magneticField,
    "Электромагнитные колебания и волны": electromagneticVibrationsAndWaves
};