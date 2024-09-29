import customDecimal from "./customDecimal"



export default function get_k90() {

    const woodType = 'conifere'
    const d = 433

    if (woodType.toLowerCase().includes('conifere')) {
        return {
            k90: 1.35 + 0.015 * d,
            k90_title: `k_{90} = `,
            k90_formula: `1.35+0.015\\cdot d = `,
            k90_formulaVal: `1.35+0.015\\cdot ${d} = `,
            k90_description: ``,
        }
    }
    if (woodType.toLowerCase().includes('latifoglie')) {
        return {
            k90: 1.30 + 0.015 * d,
            k90_title: `k_{90} = `,
            k90_formula: `1.30+0.015\\cdot d = `,
            k90_formulaVal: `1.30+0.015\\cdot ${d} = `,
            k90_description: ``,
        }
    }
    else {
        return {
            k90: 0.90 + 0.015 * d,
            k90_title: `k_{90} = `,
            k90_formula: `0.90+0.015\\cdot d = `,
            k90_formulaVal: `0.90+0.015\\cdot ${d} = `,
            k90_description: ``,
        }
    }


}