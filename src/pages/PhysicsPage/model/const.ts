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
import bodyDensity from '@/assets/dynamics/bodyDensity.png'
import newtonSecondLaw from '@/assets/dynamics/newtonSecondLaw.png'
import newtonThirdLaw from '@/assets/dynamics/newtonThirdLaw.png'
import momentumChangeRate from '@/assets/dynamics/momentumChangeRate.png'
import lawOfUniversalGravitation from '@/assets/dynamics/lawOfUniversalGravitation.png'
import gravityHeight from '@/assets/dynamics/gravityHeight.png'
import firstCosmicVelocity from '@/assets/dynamics/firstCosmicVelocity.png'
import secondCosmicVelocity from '@/assets/dynamics/secondCosmicVelocity.png'
import hookesLaw from '@/assets/dynamics/hookesLaw.png'
import slidingFriction from '@/assets/dynamics/slidingFriction.png'
import f_static from '@/assets/dynamics/f_static.png'
import pressure from '@/assets/dynamics/pressure.png'
import restEnergy from '@/assets/stoFundamentals/restEnergy.png'
import e_free from '@/assets/stoFundamentals/e_free.png'
import particleMomentum from '@/assets/stoFundamentals/particleMomentum.png'
import massEnergy from '@/assets/stoFundamentals/massEnergy.png'

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

const dynamics = [
    {
        id: 13,
        title: "Плотность тела",
        img: bodyDensity
    },
    {
        id: 14,
        title: "Второй закон Ньютона",
        img: newtonSecondLaw
    },
    {
        id: 15,
        title: "Второй закон Ньютона в импульсной форме",
        img: momentumChangeRate
    },
    {
        id: 16,
        title: "Третий закон Ньютона",
        img: newtonThirdLaw
    },
    {
        id: 17,
        title: "Закон всемирного тяготения",
        img: lawOfUniversalGravitation
    },
    {
        id: 18,
        title: "Зависимость силы тяжести от высоты ℎ над поверхностью планеты радиусом 0",
        img: gravityHeight
    },
    {
        id: 19,
        title: "Первая космическая скорость",
        img: firstCosmicVelocity
    },
    {
        id: 20,
        title: "Вторая космическая скорость",
        img: secondCosmicVelocity
    },
    {
        id: 21,
        title: "Закон Гука",
        img: hookesLaw
    },
    {
        id: 22,
        title: "Модуль силы трения скольжения",
        img: slidingFriction
    },
    {
        id: 23,
        title: "Сила трения покоя",
        img: f_static
    },
    {
        id: 24,
        title: "Давление твердого тела",
        img: pressure
    },
]

const stoFundamentals = [
    {
        id: 25,
        title: "Энергия покоя свободной частицы",
        img: restEnergy
    },
    {
        id: 26,
        title: "Энергия свободной частицы",
        img: e_free
    },
    {
        id: 27,
        title: "Импульс частицы",
        img: particleMomentum
    },
    {
        id: 28,
        title: "Связь массы и энергии свободной частицы",
        img: massEnergy
    },
]

// Список всех формул (объединение категорий)
const allFormulas = [
    ...staticsAndHydrostatics,
    ...magneticField,
    ...electromagneticVibrationsAndWaves,
    ...dynamics
];

// Экспорт категорий
export const formulas = {
    "Все": allFormulas,
    "Статика и гидростатика": staticsAndHydrostatics,
    "Магнитное поле": magneticField,
    "Электромагнитные колебания и волны": electromagneticVibrationsAndWaves,
    "Динамика": dynamics,
    "Основы специальной теории относительности (СТО)": stoFundamentals
};