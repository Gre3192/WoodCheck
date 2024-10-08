import customDecimal from "./customDecimal"



export function get_sig_t0d(Ned, Atot) {

    return {
        sig_t0d: Math.abs(Ned) / Atot,
        sig_t0d_title: `\\sigma_{t,0,d} = `,
        sig_t0d_formula: `\\dfrac{N_{Ed}}{A_{tot}} = `,
        sig_t0d_formulaVal: `\\dfrac{${Math.abs(customDecimal(Ned))}}{${customDecimal(Atot)}} = `,
        sig_t0d_description: `Tensione di progetto a trazione parallela alla fibratura valutata sulla sezione netta`
    }
}

export function get_sig_t90d(Ned, Atot) {

    return {
        sig_t90d: Math.abs(Ned) / Atot,
        sig_t90d_title: `\\sigma_{t,90,d} = `,
        sig_t90d_formula: `\\dfrac{N_{Ed}}{A_{tot}} = `,
        sig_t90d_formulaVal: `\\dfrac{${Math.abs(customDecimal(Ned))}}{${customDecimal(Atot)}} = `,
        sig_t90d_description: `Tensione di progetto a trazione ortogonale alla fibratura`
    }
}

export function get_sig_c0d(Ned, Atot) {

    return {
        sig_c0d: Math.abs(Ned) / Atot,
        sig_c0d_title: `\\sigma_{c,0,d} = `,
        sig_c0d_formula: `\\dfrac{N_{Ed}}{A_{tot}} = `,
        sig_c0d_formulaVal: `\\dfrac{${Math.abs(customDecimal(Ned))}}{${customDecimal(Atot)}} = `,
        sig_c0d_description: `Tensione di progetto a compressione parallela alla fibratura`
    }
}

export function get_sig_c90d(Ned, Atot) {

    return {
        sig_c90d: Math.abs(Ned) / Atot,
        sig_c90d_title: `\\sigma_{c,90,d} = `,
        sig_c90d_formula: `\\dfrac{N_{Ed}}{A_{tot}} = `,
        sig_c90d_formulaVal: `\\dfrac{${Math.abs(customDecimal(Ned))}}{${customDecimal(Atot)}} = `,
        sig_c90d_description: `Tensione di progetto a compressione ortogonale alla fibratura`
    }
}

export function get_sig_cAlphad(Ned, Atot) {

    return {
        sig_cAlphad: Math.abs(Ned) / Atot,
        sig_cAlphad_title: `\\sigma_{c,\\alpha,d} = `,
        sig_cAlphad_formula: `\\dfrac{N_{Ed}}{A_{tot}} = `,
        sig_cAlphad_formulaVal: `\\dfrac{${Math.abs(customDecimal(Ned))}}{${customDecimal(Atot)}} = `,
        sig_cAlphad_description: `Tensione di progetto a compressione inclinata di $\\alpha$ rispetto alla fibratura`
    }
}

export function get_sig_myd(Med_y, Wel_y) {

    return {
        sig_myd: Med_y / Wel_y,
        sig_myd_title: `\\sigma_{m,y,d} = `,
        sig_myd_formula: `\\dfrac{M_{Ed,y}}{W_{el,y}} = `,
        sig_myd_formulaVal: `\\dfrac{${customDecimal(Med_y)}}{${customDecimal(Wel_y)}} = `,
        sig_myd_description: `Tensione di progetto massima per flessione attorno a y`
    }
}

export function get_sig_mzd(Med_z, Wel_z) {

    return {
        sig_mzd: Med_z / Wel_z,
        sig_mzd_title: `\\sigma_{m,z,d} = `,
        sig_mzd_formula: `\\dfrac{M_{Ed,z}}{W_{el,z}} = `,
        sig_mzd_formulaVal: `\\dfrac{${customDecimal(Med_z)}}{${customDecimal(Wel_z)}} = `,
        sig_mzd_description: `Tensione di progetto massima per flessione attorno a z`
    }
}

export function get_tau_d(shape = 'rettangolare', Ved_y, Ved_z, Atot) {

    // ricordati di inserire kef

    return {
        tau_d: (shape?.toLowerCase() === 'rettangolare' ? (3 / 2) : (4 / 3)) * (Math.sqrt(Ved_y ** 2 + Ved_z ** 2) / Atot),
        tau_d_title: `\\tau_{d} = `,
        tau_d_formula: `${shape?.toLowerCase() === 'rettangolare' ? '\\dfrac{3}{2}' : '\\dfrac{4}{3} '}\\cdot\\dfrac{\\sqrt{V_{Ed,y}^2+V_{Ed,z}^2}}{A_{tot}} = `,
        tau_d_formulaVal: `${shape?.toLowerCase() === 'rettangolare' ? '\\dfrac{3}{2}' : '\\dfrac{4}{3} '}\\cdot\\dfrac{\\sqrt{${customDecimal(Ved_y)}^2+${customDecimal(Ved_z)}^2}}{${customDecimal(Atot)}} = `,
        tau_d_description: `Tensione tangenziale di progetto massima per sezioni ${shape?.toLowerCase() === 'rettangolare' ? 'rettangolari' : 'circolari'}`
    }
}

export function get_tau_tord(Med_tor, b, Ig_tor) {

    return {
        tau_tord: (Med_tor * b) / Ig_tor,
        tau_tord_title: `\\tau_{tor,d} = `,
        tau_tord_formula: `\\dfrac{M_{Ed,tor} \\cdot b}{I_{tor}} = `,
        tau_tord_formulaVal: `\\dfrac{${customDecimal(Med_tor)} \\cdot ${customDecimal(b)}}{${customDecimal(Ig_tor)}} = `,
        tau_tord_description: `Tensione di progetto massima per torsione`
    }
}