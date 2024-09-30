import customDecimal from "./customDecimal"



export default function get_fh0_k() {

    const preforatura = true
    const d = 34
    const rho_k = 242
    const alpha_join = 90

    return {
        fh0k: 0.082 * (1 - 0.01 * d) * rho_k,
        fh0k_title: `f_{h,0,k} = `,
        fh0k_formula: `0.082\\cdot(1 - 0.01\\cdot d)\\cdot\\rho_k = `,
        fh0k_formulaVal: `0.082\\cdot(1 - 0.01\\cdot ${d})\\cdot ${rho_k} = `,
        fh0k_description: `Valore caratteristico della resistenza a rifollamento per $\\alpha=0$`,
    }

}