export default function get_km(shape = 'rettangolare') {

    return {

        km: shape?.toLocaleLowerCase() === 'rettangolare' ? 0.7 : 1,
        km_title: `k_m = `,
        km_formula: ``,
        km_formulaVal: ``,
        km_description: shape?.toLocaleLowerCase() === 'rettangolare' ? `Coefficiente per la disomogeneità del materiale per sezioni rettangolari` : 
        `Coefficiente per la disomogeneità del materiale per sezioni non rettangolari`,

    }
}