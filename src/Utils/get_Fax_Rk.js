import customDecimal from "./customDecimal"


export default function get_Fax_Rk() {


    const connectionType = 'chodi'
    const fax_k = 'liscio'
    const t_pen = 'liscio'
    const d = 'liscio'
    const fhead_k = 'liscio'
    const dh = 'liscio'
    const dr = 'liscio'
    const fu = 'liscio'
    const kd = 'liscio'
    const t_testa = 'liscio'
    const fc90k = 'liscio'     //Dell'elemento in esame
    const l_ef = 'liscio'
    const alpha_viti = 'liscio'



    if (connectionType.toLowerCase().includes('chiodi')) {
        if (gambo.toLowerCase().includes('liscio')) {
            return {
                Fax_Rk: (t_pen < 12 * d ? (t_pen / (4 * d)) - 2 : 1) * Math.min(fax_k * d * t_pen, fhead_k * dh ** 2),
                Fax_Rk_title: `F_{ax,Rk} = `,
                Fax_Rk_formula: ``,
                Fax_Rk_formulaVal: ``,
                Fax_Rk_description: `Resistenza caratteristica a estrazione chiodi`,
            }
        }
        else {
            return {
                Fax_Rk: (t_pen < 8 * d ? (t_pen / (4 * d)) - 2 : 1) * Math.min(fax_k * d * t_pen, fhead_k * dh ** 2 + fax_k * d * t_testa),
                Fax_Rk_title: `F_{ax,Rk} = `,
                Fax_Rk_formula: ``,
                Fax_Rk_formulaVal: ``,
                Fax_Rk_description: `Resistenza caratteristica a estrazione chiodi`,
            }
        }
    }
    else if (connectionType.toLowerCase().includes('bulloni')) {
        return {
            Fax_Rk: min(fu * (Math.PI * d ** 2 / 4), (((Math.PI * dr ** 2) / 4) - ((Math.PI * d ** 2) / 4)) * 3 * fc90k),
            Fax_Rk_title: `F_{ax,Rk} = `,
            Fax_Rk_formula: ``,
            Fax_Rk_formulaVal: ``,
            Fax_Rk_description: `Resistenza caratteristica a estrazione per bulloni`,
        }
    }
    else if (connectionType.toLowerCase().includes('viti')) {
        return {
            Fax_Rk: ((1 * fax_k * d * l_ef * kd) / (1.2 * Math.cos(alpha_viti) ** 2 + Math.sin(alpha_viti) ** 2)),
            Fax_Rk_title: `F_{ax,Rk} = `,
            Fax_Rk_formula: ``,
            Fax_Rk_formulaVal: ``,
            Fax_Rk_description: `Resistenza caratteristica a estrazione per viti`,
        }
    }
    else if (connectionType.toLowerCase().includes('graffe') || connectionType.toLowerCase().includes('spinotti')) {
        return {
            Fax_Rk: 0,
            Fax_Rk_title: `F_{ax,Rk} = `,
            Fax_Rk_formula: ``,
            Fax_Rk_formulaVal: ``,
            Fax_Rk_description: `Resistenza caratteristica a estrazione ${connectionType.toLowerCase().includes('graffe') ? 'per graffe' : 'per spinotti'} `,
        }
    }




}