export function get_sig_t0d(Ned, Atot) {

    return {
        sig_t0d: Math.abs(Ned) / Atot,
        sig_t0d_title: `\\sigma_{t,0,d} = `,
        sig_t0d_formula: `\\dfrac{N_{Ed}}{A_{tot}} = `,
        sig_t0d_formulaVal: `\\dfrac{${Math.abs(Ned)}}{${Atot}} = `,
        sig_t0d_description: `Tensione di progetto a trazione parallela alla fibratura valutata sulla sezione netta`
    }
}

export function get_sig_t90d(Med_y, Wel_y) {

    return {
        sig_t90d: ``,
        sig_t90d_title: ``,
        sig_t90d_formula: ``,
        sig_t90d_formulaVal: ``,
        sig_t90d_description: ``
    }
}

export function get_sig_c0d(Ned, Atot) {

    return {
        sig_c0d: Math.abs(Ned) / Atot,
        sig_c0d_title: `\\sigma_{c,0,d} = `,
        sig_c0d_formula: `\\dfrac{N_{Ed}}{A_{tot}} = `,
        sig_c0d_formulaVal: `\\dfrac{${Math.abs(Ned)}}{${Atot}} = `,
        sig_c0d_description: `Tensione di progetto a compressione parallela alla fibratura`
    }
}

export function get_sig_c90d(Med_y, Wel_y) {

    return {
        sig_c90d: ``,
        sig_c90d_title: ``,
        sig_c90d_formula: ``,
        sig_c90d_formulaVal: ``,
        sig_c90d_description: ``
    }
}

export function get_sig_cAlphad(f_c0d, f_c90d, alpha) {

    return {
        sig_cAlphad: f_c0d / ((f_c0d / f_c90d) * Math.sin(alpha) ** 2 + Math.cos(alpha) ** 2),
        sig_cAlphad_title: `\\sigma_{c,\\alpha,d} = `,
        sig_cAlphad_formula: `\\frac{f_{c,0,d}}{\\frac{f_{c,0,d}}{f_{c,90,d}}\\sin^2\\alpha +\\cos^2\\alpha} = `,
        sig_cAlphad_formulaVal: `\\frac{${f_c0d}}{\\frac{${f_c0d}}{${f_c90d}}\\sin^2${alpha} +\\cos^2${alpha}} = `,
        sig_cAlphad_description: `Tensione di progetto a compressione inclinata di \\alpha rispetto alla fibratura`
    }
}

export function get_sig_myd(Med_y, Wel_y) {

    return {
        sig_myd: Med_y / Wel_y,
        sig_myd_title: `\\sigma_{m,y,d} = `,
        sig_myd_formula: `\\dfrac{M_{Ed,y}}{W_{el,y}} = `,
        sig_myd_formulaVal: `\\dfrac{${Med_y}}{${Wel_y}} = `,
        sig_myd_description: `Tensione di progetto massima per flessione attorno a y`
    }
}

export function get_sig_mzd(Med_z, Wel_z) {

    return {
        sig_mzd: Med_z / Wel_z,
        sig_mzd_title: `\\sigma_{m,z,d} = `,
        sig_mzd_formula: `\\dfrac{M_{Ed,z}}{W_{el,z}} = `,
        sig_mzd_formulaVal: `\\dfrac{${Med_z}}{${Wel_z}} = `,
        sig_mzd_description: `Tensione di progetto massima per flessione attorno a z`
    }
}

export function get_tau_d(shape, Ved_y, Ved_z, Atot) {

    // ricordati di inserire kef

    return {
        tau_d: (shape ? (3 / 2) : (4 / 3)) * (Math.sqrt(Ved_y ** 2 + Ved_z ** 2) / Atot),
        tau_d_title: `\\tau_{d} = `,
        tau_d_formula: `${shape ? '\\dfrac{3}{2}' : '\\dfrac{4}{3} '}\\cdot\\dfrac{\\sqrt{V_{Ed,y}^2+V_{Ed,z}^2}}{A_{tot}} = `,
        tau_d_formulaVal: `${shape ? '\\dfrac{3}{2}' : '\\dfrac{4}{3} '}\\cdot\\dfrac{\\sqrt{${Ved_y}^2+${Ved_z}^2}}{${Atot}} = `,
        tau_d_description: `Tensione tangenziale di progetto massima per sezioni ${shape ? 'rettangolari' : 'circolari'}`
    }
}

export function get_tau_tord(Med_tor, b, Itor) {

    return {
        tau_tord: (Med_tor * b) / Itor,
        tau_tord_title: `\\tau_{tor,d} = `,
        tau_tord_formula: `\\dfrac{M_{Ed,tor} \\cdot b}{I_{tor}} = `,
        tau_tord_formulaVal: `\\dfrac{${Med_tor} \\cdot ${b}}{${Itor}} = `,
        tau_tord_description: `Tensione di progetto massima per torsione`
    }
}