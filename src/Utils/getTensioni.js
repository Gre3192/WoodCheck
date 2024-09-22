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