export default function get_beta_c(woodType = 'lamellare') {

    return {

        beta_c: woodType?.toLocaleLowerCase() === 'lamellare' ? 0.1 : 0.2,
        beta_c_title: `\\beta_{c} = `,
        beta_c_formula: ``,
        beta_c_formulaVal: ``,
        beta_c_description: ``,

    }
}