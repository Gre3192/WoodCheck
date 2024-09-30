import customDecimal from "./customDecimal"



export default function get_kd() {

    const d = 9

    return {

        kd: Math.min(d / 8, 1),
        kd_title: `kd = `,
        kd_formula: `\\text{min}\\left(\\dfrac{d}{8}; 1\\right) = `,
        kd_formulaVal: `\\text{min}\\left(\\dfrac{${d}}{8}; 1\\right) =`,
        kd_description: ``,

    }
}