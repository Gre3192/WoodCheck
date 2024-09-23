export function get_Compressione0Check(sig_c0d, f_c0d) {

    return {
        check: sig_c0d / f_c0d,
        check_title: `\\dfrac{\\sigma_{c,0,d}}{f_{c,0,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${sig_c0d}}{${f_c0d}} = `,
        check_description: ``,
    }
}

export function get_Compressione90Check(sig_c90d, f_c90d) {

    return {
        check: sig_c90d / f_c90d,
        check_title: `\\dfrac{\\sigma_{c,90,d}}{f_{c,90,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${sig_c90d}}{${f_c90d}} = `,
        check_description: ``,
    }
}

export function get_CompressioneAlphaCheck(sig_cAlphad, f_cAlphad) {

    return {
        check: sig_cAlphad / f_cAlphad,
        check_title: `\\dfrac{\\sigma_{c,\\alpha,d}}{f_{c,\\alpha,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${sig_cAlphad}}{${f_cAlphad}} = `,
        check_description: ``,
    }
}

export function get_Trazione0Check(sig_t0d, f_t0d) {

    return {
        check: sig_t0d / f_t0d,
        check_title: `\\dfrac{\\sigma_{t,0,d}}{f_{t,0,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${sig_t0d}}{${f_t0d}} = `,
        check_description: ``,
    }
}

export function get_Trazione90Check(sig_t90d, f_t90d) {

    return {
        check: sig_t90d / f_t90d,
        check_title: `\\dfrac{\\sigma_{t,90,d}}{f_{t,90,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${sig_t90d}}{${f_t90d}} = `,
        check_description: ``,
    }
}

export function get_flessioneCheck(sig_myd, sig_mzd, f_myd, f_mzd, km) {

    return {
        check_z: (sig_myd / f_myd) + km * (sig_mzd / f_mzd),
        check_z_title: `\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_z_formula: ``,
        check_z_formulaVal: `\\frac{${sig_myd}}{${f_myd}} + ${km}\\cdot\\frac{${sig_mzd}}{${f_mzd}} = `,
        check_z_description: ``,

        check_y: km * (sig_myd / f_myd) + (sig_mzd / f_mzd),
        check_y_title: `k_m\\cdot\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_y_formula: ``,
        check_y_formulaVal: `${km}\\cdot\\frac{${sig_myd}}{${f_myd}} + \\frac{${sig_mzd}}{${f_mzd}} = `,
        check_y_description: ``
    }
}

export function get_TensoflessioneCheck(sig_t0d, sig_myd, sig_mzd, f_t0d, f_myd, f_mzd, km) {

    return {
        check_z: (sig_t0d / f_t0d) + (sig_myd / f_myd) + km * (sig_mzd / f_mzd),
        check_z_title: `\\left(\\frac{\\sigma_{t,0,d}}{f_{t,0,d}}\\right) + \\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_z_formula: ``,
        check_z_formulaVal: `\\left(\\frac{${sig_t0d}}{${f_t0d}}\\right) + \\frac{${sig_myd}}{${f_myd}} + ${km}\\cdot\\frac{${sig_mzd}}{${f_mzd}} = `,
        check_z_description: ``,

        check_y: (sig_t0d / f_t0d) + km * (sig_myd / f_myd) + (sig_mzd / f_mzd),
        check_y_title: `\\left(\\frac{\\sigma_{t,0,d}}{f_{t,0,d}}\\right) + k_m\\cdot\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_y_formula: ``,
        check_y_formulaVal: `\\left(\\frac{${sig_t0d}}{${f_t0d}}\\right) + ${km}\\cdot\\frac{${sig_myd}}{${f_myd}} + \\frac{${sig_mzd}}{${f_mzd}} = `,
        check_y_description: ``
    }
}

export function get_PressoflessioneCheck(sig_c0d, sig_myd, sig_mzd, f_c0d, f_myd, f_mzd, km) {


    return {
        check_z: (sig_c0d / f_c0d) ** 2 + (sig_myd / f_myd) + km * (sig_mzd / f_mzd),
        check_z_title: `\\left(\\frac{\\sigma_{c,0,d}}{f_{c,0,d}}\\right)^2 + \\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_z_formula: ``,
        check_z_formulaVal: `\\left(\\frac{${sig_c0d}}{${f_c0d}}\\right)^2 + \\frac{${sig_myd}}{${f_myd}} + ${km}\\cdot\\frac{${sig_mzd}}{${f_mzd}} = `,
        check_z_description: ``,

        check_y: (sig_c0d / f_c0d) ** 2 + km * (sig_myd / f_myd) + (sig_mzd / f_mzd),
        check_y_title: `\\left(\\frac{\\sigma_{c,0,d}}{f_{c,0,d}}\\right)^2 + k_m\\cdot\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_y_formula: ``,
        check_y_formulaVal: `\\left(\\frac{${sig_c0d}}{${f_c0d}}\\right)^2 + ${km}\\cdot\\frac{${sig_myd}}{${f_myd}} + \\frac{${sig_mzd}}{${f_mzd}} = `,
        check_y_description: ``
    }
}

export function get_TaglioCheck(tau_d, fvd) {

    return {
        check: tau_d / fvd,
        check_title: `\\dfrac{\\tau_{d}}{f_{v,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${tau_d}}{${fvd}} = `,
        check_description: ``,
    }
}

export function get_TorsioneCheck(tau_tord, fvd, ksh) {

    return {
        check: tau_tord / (ksh * fvd),
        check_title: `\\dfrac{\\tau_{tor,d}}{k_{sh}\\cdot f_{v,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${tau_tord}}{${ksh}\\cdot ${fvd}} = `,
        check_description: ``,
    }
}

export function get_TaglioTorsioneCheck(tau_tord, tau_d, fvd, ksh) {

    return {
        check: (tau_tord / (ksh * fvd)) + (tau_d / fvd) ** 2,
        check_title: `\\frac{\\tau_{tor,d}}{k_{sh}\\cdot f_{v,d}} + \\left(\\frac{\\tau_d}{f_{v,d}}\\right)^2 = `,
        check_formula: ``,
        check_formulaVal: `\\frac{${tau_tord}}{${ksh}\\cdot ${fvd}} + \\left(\\frac{${tau_d}}{${fvd}} \\right)^2 = `,
        check_description: ``,
    }
}

export function get_InstabilitaCompressioneCheck(sig_c0d, f_c0d, kcrit_c_y, kcrit_c_z) {

    return {

        check_y: sig_c0d / (kcrit_c_y * f_c0d),
        check_y_title: `\\frac{\\sigma_{c,0,d}}{k_{crit,c,y} \\cdot f_{c,0,d}} = `,
        check_y_formula: ``,
        check_y_formulaVal: `\\frac{${sig_c0d}}{${kcrit_c_y} \\cdot ${f_c0d}} = `,
        check_y_description: ``,

        check_z: sig_c0d / (kcrit_c_z * f_c0d),
        check_z_title: `\\frac{\\sigma_{c,0,d}}{k_{crit,c,z} \\cdot f_{c,0,d}} = `,
        check_z_formula: ``,
        check_z_formulaVal: `\\frac{${sig_c0d}}{${kcrit_c_z} \\cdot ${f_c0d}} = `,
        check_z_description: ``,
    }
}

export function get_InstabilitaLateroTorsionaleCheck(sig_myd, sig_mzd, f_myd, f_mzd, km, kcrit_m_y, kcrit_m_z) {

    return {

        check1: (sig_myd) / (kcrit_m_y * f_myd) + km * (sig_mzd) / (f_mzd),
        check1_title: `\\frac{\\sigma_{m,y,d}}{k_{crit,m,y}\\cdot f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check1_formula: ``,
        check1_formulaVal: `\\frac{${sig_myd}}{${kcrit_m_y}\\cdot ${f_myd}} + ${km}\\cdot\\frac{${sig_mzd}}{${f_mzd}} = `,
        check1_description: ``,

        check2: km * (sig_myd) / (kcrit_m_y * f_myd) + (sig_mzd) / (f_mzd),
        check2_title: `k_m\\cdot\\frac{\\sigma_{m,y,d}}{k_{crit,m,y}\\cdot f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check2_formula: ``,
        check2_formulaVal: `${km}\\cdot\\frac{${sig_myd}}{${kcrit_m_y}\\cdot ${f_myd}} + \\frac{${sig_mzd}}{${f_mzd}} = `,
        check2_description: ``,

        check3: (sig_myd) / (f_myd) + km * (sig_mzd) / (kcrit_m_z * f_mzd),
        check3_title: `\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{k_{crit,m,z}\\cdot f_{m,z,d}} = `,
        check3_formula: ``,
        check3_formulaVal: `\\frac{${sig_myd}}{${f_myd}} + ${km}\\cdot\\frac{${sig_mzd}}{${kcrit_m_z}\\cdot${f_mzd}} = `,
        check3_description: ``,

        check4: km * (sig_myd) / (f_myd) + (sig_mzd) / (kcrit_m_z * f_mzd),
        check4_title: `k_m\\cdot\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{k_{crit,m,z}\\cdot f_{m,z,d}} = `,
        check4_formula: ``,
        check4_formulaVal: `${km}\\cdot\\frac{${sig_myd}}{${f_myd}} + \\frac{${sig_mzd}}{${kcrit_m_z}\\cdot${f_mzd}} = `,
        check4_description: ``,

    }
}

export function get_InstabilitaPressoFlessioneCheck() {

    return {

        check1: (sig_c0d / (kcrit_c_y * f_c0d)) + (sig_myd / (kcrit_m_y * f_myd)) + km * (sig_mzd / f_mzd),
        check1_title: ``,
        check1_formula: ``,
        check1_formulaVal: ``,
        check1_description: ``,

        check2: (sig_c0d / (kcrit_c_y * f_c0d)) + km * (sig_myd / (kcrit_m_y * f_myd)) + (sig_mzd / f_mzd),
        check2_title: ``,
        check2_formula: ``,
        check2_formulaVal: ``,
        check2_description: ``,

        check3: (sig_c0d / (kcrit_c_z * f_c0d)) + (sig_myd / (kcrit_m_y * f_myd)) + km * (sig_mzd / f_mzd),
        check3_title: ``,
        check3_formula: ``,
        check3_formulaVal: ``,
        check3_description: ``,

        check4: (sig_c0d / (kcrit_c_z * f_c0d)) + km * (sig_myd / (kcrit_m_y * f_myd)) + (sig_mzd / f_mzd),
        check4_title: ``,
        check4_formula: ``,
        check4_formulaVal: ``,
        check4_description: ``,



        check1: (sig_c0d / (kcrit_c_y * f_c0d)) + (sig_myd / f_myd) + km * (sig_mzd / (kcrit_m_z * f_mzd)),
        check1_title: ``,
        check1_formula: ``,
        check1_formulaVal: ``,
        check1_description: ``,

        check2: (sig_c0d / (kcrit_c_y * f_c0d)) + km * (sig_myd / f_myd) + (sig_mzd / (kcrit_m_z * f_mzd)),
        check2_title: ``,
        check2_formula: ``,
        check2_formulaVal: ``,
        check2_description: ``,

        check3: (sig_c0d / (kcrit_c_z * f_c0d)) + (sig_myd / f_myd) + km * (sig_mzd / (kcrit_m_z * f_mzd)),
        check3_title: ``,
        check3_formula: ``,
        check3_formulaVal: ``,
        check3_description: ``,

        check4: (sig_c0d / (kcrit_c_z * f_c0d)) + km * (sig_myd / f_myd) + (sig_mzd / (kcrit_m_z * f_mzd)),
        check4_title: ``,
        check4_formula: ``,
        check4_formulaVal: ``,
        check4_description: ``,


    }
}
