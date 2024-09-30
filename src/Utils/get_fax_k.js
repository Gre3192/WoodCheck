import customDecimal from "./customDecimal"


export default function get_fax_k() {


    const joinType = 'chodi'



    if (joinType.toLowerCase().includes('chiodi')) {

        return {
            fax_k: 20 * (10 ** (-6)) * (rho_k ** 2),
            fax_k_title: `f_{ax,k} = `,
            fax_k_formula: `20\\cdot 10^{-6}\\rho_k^2 = `,
            fax_k_formulaVal: `20\\cdot 10^{-6}\\${rho_k}^2 = `,
            fax_k_description: `Resistenza caratteristica a estrazione sul lato della punta, per chiodi`,
        }
    }
    else if (joinType.toLowerCase().includes('viti')) {
        return {
            fax_k: 0.52 * (d ** (-0.5)) * (l_eff ** (-0.1)) * (rho_k ** (0.8)),
            fax_k_title: `f_{ax,k} = `,
            fax_k_formula: `0.52\\cdot d^{0.5}\\cdot l_{eff}^{0.1}\\cdot\\rho_k^{0.8} = `,
            fax_k_formulaVal: `0.52\\cdot ${d}^{0.5}\\cdot ${l_eff}^{0.1}\\cdot${rho_k}^{0.8} = `,
            fax_k_description: `Resistenza caratteristica a estrazione sul lato della punta, per viti`,
        }
    }
    else  {
        return {
            fax_k: 0,
            fax_k_title: `f_{ax,k} = `,
            fax_k_formula: ``,
            fax_k_formulaVal: ``,
            fax_k_description: ``,
        }
    }
}