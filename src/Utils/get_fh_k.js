import customDecimal from "./customDecimal"



export default function get_fh_k() {


    const d = 34
    const t = 34
    const rho_k = 242
    const alpha_join = 90
    const fh0k = 453
    const isPreforatura = true


    if (joinType.toLowerCase().includes('chiodi')) {

        if (woodType.toLowerCase().includes('compensato')) {
            return {
                fhk: 0.11 * rho_k * (d ** (-0.3)),
                fhk_title: `f_{h,k} = `,
                fhk_formula: `0.11\\cdot\\rho_k\\cdot d^{-0.3} = `,
                fhk_formulaVal: `0.11\\cdot ${rho_k}\\cdot ${d}^{-0.3} = `,
                fhk_description: `Resistenza caratteristica a rifollamento per pannelli di compensato con chiodi`,
            }
        }
        else if (woodType.toLowerCase().includes('fibre')) {
            return {
                fhk: 30 * (d ** (-0.3)) * (t ** (0.6)),
                fhk_title: `f_{h,k} = `,
                fhk_formula: `30\\cdot ${d}^{-0.3}\\cdot ${t}^{0.6} = `,
                fhk_formulaVal: ``,
                fhk_description: `Resistenza caratteristica a rifollamento per pannelli di particelle con chiodi`,
            }
        }
        else if (woodType.toLowerCase().includes('particelle') || woodType.toLowerCase().includes('OSB')) {
            return {
                fhk: 65 * (d ** (-0.7)) * (t ** (0.1)),
                fhk_title: `f_{h,k} = `,
                fhk_formula: `65\\cdot ${d}^{-0.7}\\cdot ${t}^{0.1} = `,
                fhk_formulaVal: ``,
                fhk_description: `Resistenza caratteristica a rifollamento per pannelli ${woodType.toLowerCase().includes('particelle') ? 'di particelle' : 'OSB'} con chiodi`,
            }
        }
        else {
            if (d <= 8) {
                if (isPreforatura) {
                    return {
                        fhk: 0.082 * (1 - 0.01 * d) * rho_k,
                        fhk_title: `f_{h,k} = `,
                        fhk_formula: `0.082\\cdot\\left(1-0.01\\cdot d\\right)\\cdot\\rho_k = `,
                        fhk_formulaVal: `0.082\\cdot\\left(1-0.01\\cdot ${d}\\right)\\cdot${rho_k} = `,
                        fhk_description: `Resistenza caratteristica a rifollamento per legno ${woodType.toLowerCase().includes('lvl') ? 'LVL' : ''} con preforatura con chiodi con $d\\leq 8 mm$`,
                    }
                }
                else {
                    return {
                        fhk: 0.082 * rho_k * (d ** (-0.3)),
                        fhk_title: `f_{h,k} = `,
                        fhk_formula: `0.082\\cdot\\rho_k\\cdot d^{-0.3} = `,
                        fhk_formulaVal: `0.082\\cdot ${rho_k}\\cdot ${d}^{-0.3} = `,
                        fhk_description: `Resistenza caratteristica a rifollamento per legno ${woodType.toLowerCase().includes('lvl') ? 'LVL' : ''} senza preforatura con chiodi con $d\\leq 8 mm$`,
                    }
                }
            }
            else {
                return {
                    fhk: fh0k / ((k90 * Math.sin(alpha_join) ** 2) + (Math.cos(alpha_join) ** 2)),
                    fhk_title: `f_{h,k} = `,
                    fhk_formula: `\\dfrac{f_{h,0,k}}{k_{90}\\cdot sin{\\alpha}^2 + cos{\\alpha}^2}} = `,
                    fhk_formulaVal: `\\dfrac{${fh0k}}{${k90}\\cdot sin{${alpha_join}}^2 + cos{${alpha_join}}^2} = `,
                    fhk_description: `Resistenza caratteristica a rifollamento per legno ${woodType.toLowerCase().includes('lvl') ? 'LVL' : ''} con chiodi con $d > 8 mm$ (per bulloni)`,
                }
            }
        }
    }

    else if (joinType.toLowerCase().includes('bulloni')) {

        if (woodType.toLowerCase().includes('compensato')) {
            return {
                fhk: 0.11 * (1 - 0.01 * d) * rho_k,
                fhk_title: `f_{h,k} = `,
                fhk_formula: `0.11\\cdot\\left(1-0.01\\cdot d\\right)\\cdot\\rho_k = `,
                fhk_formulaVal: `0.11\\cdot\\left(1-0.01\\cdot ${d}\\right)\\cdot ${rho_k} = `,
                fhk_description: `Resistenza caratteristica a rifollamento per pannelli di compensato con bulloni$`,
            }
        }
        else if (woodType.toLowerCase().includes('particelle') || woodType.toLowerCase().includes('OSB')) {
            return {
                fhk: 50 * (d ** (-0.6)) * (t ** (0.2)),
                fhk_title: `f_{h,k} = `,
                fhk_formula: `50\\cdot d^{-0.6}\\cdot t^{0.2} = `,
                fhk_formulaVal: `50\\cdot ${d}^{-0.6}\\cdot ${t}^{0.2} = `,
                fhk_description: `Resistenza caratteristica a rifollamento per pannelli ${woodType.toLowerCase().includes('particelle') ? 'di particelle' : 'OSB'} con bulloni`,
            }
        }
        else {
            return {
                fhk: fh0k / ((k90 * Math.sin(alpha_join) ** 2) + (Math.cos(alpha_join) ** 2)),
                fhk_title: `f_{h,k} = `,
                fhk_formula: `\\dfrac{f_{h,0,k}}{k_{90}\\cdot sin{\\alpha}^2 + cos{\\alpha}^2}} = `,
                fhk_formulaVal: `\\dfrac{${fh0k}}{${k90}\\cdot sin{${alpha_join}}^2 + cos{${alpha_join}}^2} = `,
                fhk_description: `Resistenza caratteristica a rifollamento per legno ${woodType.toLowerCase().includes('lvl') ? 'LVL' : ''} con bulloni con $d\\leq 30 mm$`,
            }
        }
    }
    else if (joinType.toLowerCase().includes('viti')) {

    }
    else if (joinType.toLowerCase().includes('graffe') || joinType.toLowerCase().includes('spinotti')) {

    }
}
