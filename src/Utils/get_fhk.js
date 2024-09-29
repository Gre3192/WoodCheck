import customDecimal from "./customDecimal"



export default function get_fhk() {

    const preforatura = true
    const d = 34
    const rho_k = 242





    if (joinType.toLowerCase().includes('chiodi')) {
        if (gambo.toLowerCase().includes('liscio')) {


            if (d <= 8) {
                if (preforatura) {
                    return {
                        fhk: 0.082 * rho_k * d ** (-0.3),
                        fhk_title: `f_{h,k} = `,
                        fhk_formula: ``,
                        fhk_formulaVal: ``,
                        fhk_description: `Resistenza caratteristica a estrazione per chiodi`,
                    }
                }
                else {
                    return {
                        fhk: 0.082 * (1 - 0.01 * d) * rho_k,
                        fhk_title: `f_{h,k} = `,
                        fhk_formula: ``,
                        fhk_formulaVal: ``,
                        fhk_description: `Resistenza caratteristica a estrazione per chiodi`,
                    }
                }
            }
            else {
                return {
                    fhk: 0.082 * (1 - 0.01 * d) * rho_k,
                    fhk_title: `f_{h,k} = `,
                    fhk_formula: ``,
                    fhk_formulaVal: ``,
                    fhk_description: `Resistenza caratteristica a estrazione per chiodi`,
                }
            }
        }
        else {
            return {
                fhk: (t_pen < 8 * d ? (t_pen / (4 * d)) - 2 : 1) * Math.min(fax_k * d * t_pen, fhead_k * dh ** 2 + fax_k * d * t_testa),
                fhk_title: `f_{h,k} = `,
                fhk_formula: ``,
                fhk_formulaVal: ``,
                fhk_description: `Resistenza caratteristica a estrazione per chiodi`,
            }
        }
    }
    else if (joinType.toLowerCase().includes('bulloni')) {
        return {
            fhk: min(fu * (Math.PI * d ** 2 / 4), (((Math.PI * dr ** 2) / 4) - ((Math.PI * d ** 2) / 4)) * 3 * fc90k),
            fhk_title: `f_{h,k} = `,
            fhk_formula: ``,
            fhk_formulaVal: ``,
            fhk_description: `Resistenza caratteristica a estrazione per bulloni`,
        }
    }
    else if (joinType.toLowerCase().includes('viti')) {
        return {
            fhk: ((1 * fax_k * d * l_ef * kd) / (1.2 * Math.cos(alpha_viti) ** 2 + Math.sin(alpha_viti) ** 2)),
            fhk_title: `f_{h,k} = `,
            fhk_formula: ``,
            fhk_formulaVal: ``,
            fhk_description: `Resistenza caratteristica a estrazione per viti`,
        }
    }
    else if (joinType.toLowerCase().includes('graffe') || joinType.toLowerCase().includes('spinotti')) {
        return {
            fhk: 0,
            fhk_title: `f_{h,k} = `,
            fhk_formula: ``,
            fhk_formulaVal: ``,
            fhk_description: `Resistenza caratteristica a estrazione ${joinType.toLowerCase().includes('graffe') ? 'per graffe' : 'per spinotti'} `,
        }
    }
}