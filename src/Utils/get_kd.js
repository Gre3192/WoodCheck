import customDecimal from "./customDecimal"



export default function get_kd() {

    const d = 9

    return {

        kd: Math.min(d / 8, 1),
        kd_title: `kd = `,
        kd_formula: ``,
        kd_formulaVal: ``,
        kd_description: ``,

    }
}