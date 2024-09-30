import customDecimal from "./customDecimal"


export default function get_Fax_Rk() {


    const joinType = 'chodi'
    const fax_k = 345
    const t_pen = 345
    const t = 353
    const d = 534
    const fhead_k = 345
    const dh = 346
    const dr = 346
    const fu = 3634
    const kd = 346
    const t_testa = 36
    const fc90k = 36     //Dell'elemento in esame
    const l_eff = 346
    const alpha_viti = 346
    const gambo = 346
    const n_ef = 8709


    if (joinType.toLowerCase().includes('chiodi')) {
        if (gambo.toLowerCase().includes('liscio')) {
            if (t_pen < 12 * d) {
                return {
                    Fax_Rk: ((t_pen / (4 * d)) - 2) * Math.min(fax_k * d * t_pen, (fax_k * d * t_pen) + (fhead_k * dh ** 2)),
                    Fax_Rk_title: `F_{ax,Rk} = `,
                    Fax_Rk_formula: `\\left(\\dfrac{t_{pen}}{4\\cdot d}-2\\right)\\cdot\\text{min}\\left(f_{ax,k}\\cdot d\\cdot t_{pen}; f_{ax,k}\\cdot d\\cdot t + f_{head,k}\\cdot d_h^2\\right) = `,
                    Fax_Rk_formulaVal: `\\left(\\dfrac{${t_pen}}{4\\cdot ${d}}-2\\right)\\cdot\\text{min}\\left(${fax_k}\\cdot ${d}\\cdot ${t_pen}; ${fax_k}\\cdot ${d}\\cdot ${t} + ${fhead_k}\\cdot ${dh}^2\\right) = `,
                    Fax_Rk_description: `Resistenza caratteristica a estrazione per chiodi a gambo liscio con $t_{pen}<12\\cdot d$`,
                }
            }
            else {
                return {
                    Fax_Rk: Math.min(fax_k * d * t_pen, (fax_k * d * t_pen) + (fhead_k * dh ** 2)),
                    Fax_Rk_title: `F_{ax,Rk} = `,
                    Fax_Rk_formula: `\\text{min}\\left(f_{ax,k}\\cdot d\\cdot t_{pen}; f_{ax,k}\\cdot d\\cdot t + f_{head,k}\\cdot d_h^2\\right) = `,
                    Fax_Rk_formulaVal: `\\text{min}\\left(${fax_k}\\cdot ${d}\\cdot ${t_pen}; ${fax_k}\\cdot ${d}\\cdot ${t} + ${fhead_k}\\cdot ${dh}^2\\right) = `,
                    Fax_Rk_description: `Resistenza caratteristica a estrazione per chiodi a gambo liscio e $t_{pen}\\geq 12\\cdot d$`,
                }
            }
        }
        else {
            if (t_pen < 8 * d) {
                return {
                    Fax_Rk: ((t_pen / (2 * d)) - 3) * Math.min(fax_k * d * t_pen, fhead_k * dh ** 2),
                    Fax_Rk_title: `F_{ax,Rk} = `,
                    Fax_Rk_formula: `\\left(\\dfrac{t_{pen}}{2\\cdot d}-3\\right)\\cdot\\text{min}\\left(f_{ax,k}\\cdot d\\cdot t_{pen}; f_{head,k}\\cdot d_h^2\\right) = `,
                    Fax_Rk_formulaVal: `\\left(\\dfrac{${t_pen}}{2\\cdot ${d}}-3\\right)\\cdot\\text{min}\\left(${fax_k}\\cdot ${d}\\cdot ${t_pen}; ${fhead_k}\\cdot ${dh}^2\\right) = `,
                    Fax_Rk_description: `Resistenza caratteristica a estrazione per chiodi a gambo non liscio e $t_{pen}\\geq 8\\cdot d$`,
                }
            }
            else {
                return {
                    Fax_Rk: Math.min(fax_k * d * t_pen, fhead_k * dh ** 2),
                    Fax_Rk_title: `F_{ax,Rk} = `,
                    Fax_Rk_formula: `\\text{min}\\left(f_{ax,k}\\cdot d\\cdot t_{pen}; f_{head,k}\\cdot d_h^2\\right) = `,
                    Fax_Rk_formulaVal: `\\text{min}\\left(${fax_k}\\cdot ${d}\\cdot ${t_pen}; ${fhead_k}\\cdot ${dh}^2\\right) = `,
                    Fax_Rk_description: `Resistenza caratteristica a estrazione per chiodi a gambo non liscio e $t_{pen}\\geq 8\\cdot d$`,
                }
            }
        }
    }
    else if (joinType.toLowerCase().includes('bulloni')) {
        return {
            Fax_Rk: Math.min(fu * (Math.PI * d ** 2 / 4), (((Math.PI * dr ** 2) / 4) - ((Math.PI * d ** 2) / 4)) * 3 * fc90k),
            Fax_Rk_title: `F_{ax,Rk} = `,
            Fax_Rk_formula: `\\text{min}\\left[f_u\\cdot\\dfrac{\\pi\\cdot d^2}{4};\\left(\\dfrac{\\pi\\cdot d_r^2}{4}\\cdot\\dfrac{\\pi\\cdot d^2}{4}\\right)\\cdot 3\\cdot f_{c,90,k}\\right] = `,
            Fax_Rk_formulaVal: `\\text{min}\\left[${fu}\\cdot\\dfrac{\\pi\\cdot ${d}^2}{4};\\left(\\dfrac{\\pi\\cdot ${dr}^2}{4}\\cdot\\dfrac{\\pi\\cdot ${d}^2}{4}\\right)\\cdot 3\\cdot ${fc90k}\\right] = `,
            Fax_Rk_description: `Resistenza caratteristica a estrazione per bulloni`,
        }
    }
    else if (joinType.toLowerCase().includes('viti')) {
        return {
            Fax_Rk: ((1 * fax_k * d * l_eff * kd) / (1.2 * Math.cos(alpha_viti) ** 2 + Math.sin(alpha_viti) ** 2)),
            Fax_Rk_title: `F_{ax,Rk} = `,
            Fax_Rk_formula: `\\dfrac{n_{ef}\\cdot f_{ax,k}\\cdot d\\cdot l_{eff}\\cdot k_d}{1.2\\cdot cos{\\alpha}^2 + sin{\\alpha}^2} = `,
            Fax_Rk_formulaVal: `\\dfrac{${n_ef}\\cdot ${fax_k}\\cdot ${d}\\cdot ${l_eff}\\cdot ${kd}}{1.2\\cdot cos{${alpha_viti}}^2 + sin{${alpha_viti}}^2} = `,
            Fax_Rk_description: `Resistenza caratteristica a estrazione per viti`,
        }
    }
    else if (joinType.toLowerCase().includes('graffe') || joinType.toLowerCase().includes('spinotti')) {
        return {
            Fax_Rk: 0,
            Fax_Rk_title: `F_{ax,Rk} = `,
            Fax_Rk_formula: ``,
            Fax_Rk_formulaVal: ``,
            Fax_Rk_description: `Resistenza caratteristica a estrazione ${joinType.toLowerCase().includes('graffe') ? 'per graffe' : 'per spinotti'} `,
        }
    }
}