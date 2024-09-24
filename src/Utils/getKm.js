export default function getKm(shape = 'rettangolare') {

    return {

        km: shape?.toLocaleLowerCase() === 'rettangolare' ? 0.7 : 1,
        km_title: `k_m = `,
        km_formula: ``,
        km_formulaVal: ``,
        km_description: shape?.toLocaleLowerCase() === 'rettangolare' ? `Coefficiente per la disomogeneità del materiale per sezione rettangolare` : 
        `Coefficiente per la disomogeneità del materiale per sezione non rettangolare`,

    }
}