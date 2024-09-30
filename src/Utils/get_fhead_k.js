import customDecimal from "./customDecimal"


export default function fhead_k() {


    const joinType = 'chodi'



    if (joinType.toLowerCase().includes('chiodi')) {

        return {
            fhead_k: 70 * (10 ** (-6)) * (rho_k ** 2),
            fhead_k_title: `f_{head,k} = `,
            fhead_k_formula: `70\\cdot 10^{-6}\\rho_k^2 = `,
            fhead_k_formulaVal: `70\\cdot 10^{-6}\\${rho_k}^2 = `,
            fhead_k_description: `Resistenza caratteristica all'attraversamento dell'elemento dalla testa, sul lato della testa del chiodo`,
        }
    }
    else  {
        return {
            fhead_k: 0,
            fhead_k_title: `f_{ax,k} = `,
            fhead_k_formula: ``,
            fhead_k_formulaVal: ``,
            fhead_k_description: ``,
        }
    }
}