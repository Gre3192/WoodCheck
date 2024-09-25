import customDecimal from "./customDecimal"


export function get_Compressione0Check(sig_c0d, f_c0d) {

    return {
        check: sig_c0d / f_c0d,
        check_title: `\\dfrac{\\sigma_{c,0,d}}{f_{c,0,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${customDecimal(sig_c0d)}}{${customDecimal(f_c0d)}} = `,
        check_description: ``,
    }
}

export function get_Compressione90Check(sig_c90d, f_c90d) {

    return {
        check: sig_c90d / f_c90d,
        check_title: `\\dfrac{\\sigma_{c,90,d}}{f_{c,90,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${customDecimal(sig_c90d)}}{${customDecimal(f_c90d)}} = `,
        check_description: ``,
    }
}

export function get_CompressioneAlphaCheck(sig_cAlphad, f_cAlphad) {

    return {
        check: sig_cAlphad / f_cAlphad,
        check_title: `\\dfrac{\\sigma_{c,\\alpha,d}}{f_{c,\\alpha,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${customDecimal(sig_cAlphad)}}{${customDecimal(f_cAlphad)}} = `,
        check_description: ``,
    }
}

export function get_Trazione0Check(sig_t0d, f_t0d) {

    return {
        check: sig_t0d / f_t0d,
        check_title: `\\dfrac{\\sigma_{t,0,d}}{f_{t,0,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${customDecimal(sig_t0d)}}{${customDecimal(f_t0d)}} = `,
        check_description: ``,
    }
}

export function get_Trazione90Check(sig_t90d, f_t90d) {

    return {
        check: sig_t90d / f_t90d,
        check_title: `\\dfrac{\\sigma_{t,90,d}}{f_{t,90,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${customDecimal(sig_t90d)}}{${customDecimal(f_t90d)}} = `,
        check_description: ``,
    }
}

export function get_flessioneCheck(sig_myd, sig_mzd, f_myd, f_mzd, km) {

    return {
        check_z: (sig_myd / f_myd) + km * (sig_mzd / f_mzd),
        check_z_title: `\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_z_formula: ``,
        check_z_formulaVal: `\\frac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + ${customDecimal(km)}\\cdot\\frac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check_z_description: ``,

        check_y: km * (sig_myd / f_myd) + (sig_mzd / f_mzd),
        check_y_title: `k_m\\cdot\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_y_formula: ``,
        check_y_formulaVal: `${customDecimal(km)}\\cdot\\frac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + \\frac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check_y_description: ``
    }
}

export function get_TensoflessioneCheck(sig_t0d, sig_myd, sig_mzd, f_t0d, f_myd, f_mzd, km) {

    return {
        check_z: (sig_t0d / f_t0d) + (sig_myd / f_myd) + km * (sig_mzd / f_mzd),
        check_z_title: `\\left(\\frac{\\sigma_{t,0,d}}{f_{t,0,d}}\\right) + \\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_z_formula: ``,
        check_z_formulaVal: `\\left(\\frac{${customDecimal(sig_t0d)}}{${customDecimal(f_t0d)}}\\right) + \\frac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + ${customDecimal(km)}\\cdot\\frac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check_z_description: ``,

        check_y: (sig_t0d / f_t0d) + km * (sig_myd / f_myd) + (sig_mzd / f_mzd),
        check_y_title: `\\left(\\frac{\\sigma_{t,0,d}}{f_{t,0,d}}\\right) + k_m\\cdot\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_y_formula: ``,
        check_y_formulaVal: `\\left(\\frac{${customDecimal(sig_t0d)}}{${customDecimal(f_t0d)}}\\right) + ${customDecimal(km)}\\cdot\\frac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + \\frac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check_y_description: ``
    }
}

export function get_PressoflessioneCheck(sig_c0d, sig_myd, sig_mzd, f_c0d, f_myd, f_mzd, km) {


    return {
        check_z: (sig_c0d / f_c0d) ** 2 + (sig_myd / f_myd) + km * (sig_mzd / f_mzd),
        check_z_title: `\\left(\\frac{\\sigma_{c,0,d}}{f_{c,0,d}}\\right)^2 + \\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_z_formula: ``,
        check_z_formulaVal: `\\left(\\frac{${customDecimal(sig_c0d)}}{${customDecimal(f_c0d)}}\\right)^2 + \\frac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + ${customDecimal(km)}\\cdot\\frac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check_z_description: ``,

        check_y: (sig_c0d / f_c0d) ** 2 + km * (sig_myd / f_myd) + (sig_mzd / f_mzd),
        check_y_title: `\\left(\\frac{\\sigma_{c,0,d}}{f_{c,0,d}}\\right)^2 + k_m\\cdot\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_y_formula: ``,
        check_y_formulaVal: `\\left(\\frac{${customDecimal(sig_c0d)}}{${customDecimal(f_c0d)}}\\right)^2 + ${customDecimal(km)}\\cdot\\frac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + \\frac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check_y_description: ``
    }
}

export function get_TaglioCheck(tau_d, fvd) {

    return {
        check: tau_d / fvd,
        check_title: `\\dfrac{\\tau_{d}}{f_{v,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${customDecimal(tau_d)}}{${customDecimal(fvd)}} = `,
        check_description: ``,
    }
}

export function get_TorsioneCheck(tau_tord, fvd, ksh) {

    return {
        check: tau_tord / (ksh * fvd),
        check_title: `\\dfrac{\\tau_{tor,d}}{k_{sh}\\cdot f_{v,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${customDecimal(tau_tord)}}{${customDecimal(ksh)}\\cdot ${customDecimal(fvd)}} = `,
        check_description: ``,
    }
}

export function get_TaglioTorsioneCheck(tau_tord, tau_d, fvd, ksh) {

    return {
        check: (tau_tord / (ksh * fvd)) + (tau_d / fvd) ** 2,
        check_title: `\\frac{\\tau_{tor,d}}{k_{sh}\\cdot f_{v,d}} + \\left(\\frac{\\tau_d}{f_{v,d}}\\right)^2 = `,
        check_formula: ``,
        check_formulaVal: `\\frac{${customDecimal(tau_tord)}}{${customDecimal(ksh)}\\cdot ${customDecimal(fvd)}} + \\left(\\frac{${customDecimal(tau_d)}}{${customDecimal(fvd)}} \\right)^2 = `,
        check_description: ``,
    }
}

export function get_InstabilitaCompressioneCheck(sig_c0d, f_c0d, kcrit_c_y, kcrit_c_z) {

    return {

        check_y: sig_c0d / (kcrit_c_y * f_c0d),
        check_y_title: `\\frac{\\sigma_{c,0,d}}{k_{crit,c,y} \\cdot f_{c,0,d}} = `,
        check_y_formula: ``,
        check_y_formulaVal: `\\frac{${customDecimal(sig_c0d)}}{${customDecimal(kcrit_c_y)} \\cdot ${customDecimal(f_c0d)}} = `,
        check_y_description: ``,

        check_z: sig_c0d / (kcrit_c_z * f_c0d),
        check_z_title: `\\frac{\\sigma_{c,0,d}}{k_{crit,c,z} \\cdot f_{c,0,d}} = `,
        check_z_formula: ``,
        check_z_formulaVal: `\\frac{${customDecimal(sig_c0d)}}{${customDecimal(kcrit_c_z)} \\cdot ${customDecimal(f_c0d)}} = `,
        check_z_description: ``,
    }
}

export function get_InstabilitaLateroTorsionaleCheck(sig_myd, sig_mzd, f_myd, f_mzd, km, kcrit_m_y, kcrit_m_z) {

    return {

        check1: (sig_myd) / (kcrit_m_y * f_myd) + km * (sig_mzd) / (f_mzd),
        check1_title: `\\frac{\\sigma_{m,y,d}}{k_{crit,m,y}\\cdot f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check1_formula: ``,
        check1_formulaVal: `\\frac{${customDecimal(sig_myd)}}{${customDecimal(kcrit_m_y)}\\cdot ${customDecimal(f_myd)}} + ${customDecimal(km)}\\cdot\\frac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check1_description: ``,

        check2: km * (sig_myd) / (kcrit_m_y * f_myd) + (sig_mzd) / (f_mzd),
        check2_title: `k_m\\cdot\\frac{\\sigma_{m,y,d}}{k_{crit,m,y}\\cdot f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check2_formula: ``,
        check2_formulaVal: `${customDecimal(km)}\\cdot\\frac{${customDecimal(sig_myd)}}{${customDecimal(kcrit_m_y)}\\cdot ${customDecimal(f_myd)}} + \\frac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check2_description: ``,

        check3: (sig_myd) / (f_myd) + km * (sig_mzd) / (kcrit_m_z * f_mzd),
        check3_title: `\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{k_{crit,m,z}\\cdot f_{m,z,d}} = `,
        check3_formula: ``,
        check3_formulaVal: `\\frac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + ${customDecimal(km)}\\cdot\\frac{${customDecimal(sig_mzd)}}{${customDecimal(kcrit_m_z)}\\cdot ${customDecimal(f_mzd)}} = `,
        check3_description: ``,

        check4: km * (sig_myd) / (f_myd) + (sig_mzd) / (kcrit_m_z * f_mzd),
        check4_title: `k_m\\cdot\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{k_{crit,m,z}\\cdot f_{m,z,d}} = `,
        check4_formula: ``,
        check4_formulaVal: `${customDecimal(km)}\\cdot\\frac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + \\frac{${customDecimal(sig_mzd)}}{${customDecimal(kcrit_m_z)}\\cdot ${customDecimal(f_mzd)}} = `,
        check4_description: ``,

    }
}

export function get_InstabilitaPressoFlessioneCheck(sig_c0d, sig_myd, sig_mzd, f_c0d, f_myd, f_mzd, kcrit_c_y, kcrit_c_z, kcrit_m_y, kcrit_m_z, km) {

    return {

        check1: (sig_c0d / (kcrit_c_y * f_c0d)) + (sig_myd / (kcrit_m_y * f_myd)) + km * (sig_mzd / f_mzd),
        check1_title: `\\dfrac{\\sigma_{c,0,d}}{k_{crit,c,y}\\cdot f_{c,0,d}} + \\dfrac{\\sigma_{m,y,d}}{k_{crit,m,y}\\cdot f_{m,y,d}} + k_m \\cdot\\dfrac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check1_formula: ``,
        check1_formulaVal: `\\dfrac{${customDecimal(sig_c0d)}}{${customDecimal(kcrit_c_y)}\\cdot ${customDecimal(f_c0d)}} + \\dfrac{${customDecimal(sig_myd)}}{${customDecimal(kcrit_m_y)}\\cdot ${customDecimal(f_myd)}} + ${customDecimal(km)} \\cdot\\dfrac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check1_description: ``,

        check2: (sig_c0d / (kcrit_c_y * f_c0d)) + km * (sig_myd / (kcrit_m_y * f_myd)) + (sig_mzd / f_mzd),
        check2_title: `\\dfrac{\\sigma_{c,0,d}}{k_{crit,c,y}\\cdot f_{c,0,d}} + k_m\\cdot \\dfrac{\\sigma_{m,y,d}}{k_{crit,m,y}\\cdot f_{m,y,d}} + \\dfrac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check2_formula: ``,
        check2_formulaVal: `\\dfrac{${customDecimal(sig_c0d)}}{${customDecimal(kcrit_c_y)}\\cdot ${customDecimal(f_c0d)}} + ${customDecimal(km)} \\cdot\\dfrac{${customDecimal(sig_myd)}}{${customDecimal(kcrit_m_y)}\\cdot ${customDecimal(f_myd)}} + \\dfrac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check2_description: ``,

        check3: (sig_c0d / (kcrit_c_z * f_c0d)) + (sig_myd / (kcrit_m_y * f_myd)) + km * (sig_mzd / f_mzd),
        check3_title: `\\dfrac{\\sigma_{c,0,d}}{k_{crit,c,z}\\cdot f_{c,0,d}} + \\dfrac{\\sigma_{m,y,d}}{k_{crit,m,y}\\cdot f_{m,y,d}} + k_m \\cdot\\dfrac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check3_formula: ``,
        check3_formulaVal: `\\dfrac{${customDecimal(sig_c0d)}}{${customDecimal(kcrit_c_z)}\\cdot ${customDecimal(f_c0d)}} + \\dfrac{${customDecimal(sig_myd)}}{${customDecimal(kcrit_m_y)}\\cdot ${customDecimal(f_myd)}} + ${customDecimal(km)} \\cdot\\dfrac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check3_description: ``,

        check4: (sig_c0d / (kcrit_c_z * f_c0d)) + km * (sig_myd / (kcrit_m_y * f_myd)) + (sig_mzd / f_mzd),
        check4_title: `\\dfrac{\\sigma_{c,0,d}}{k_{crit,c,z}\\cdot f_{c,0,d}} + k_m \\cdot\\dfrac{\\sigma_{m,y,d}}{k_{crit,m,y}\\cdot f_{m,y,d}} + \\dfrac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check4_formula: ``,
        check4_formulaVal: `\\dfrac{${customDecimal(sig_c0d)}}{${customDecimal(kcrit_c_z)}\\cdot ${customDecimal(f_c0d)}} + ${customDecimal(km)} \\cdot\\dfrac{${customDecimal(sig_myd)}}{${customDecimal(kcrit_m_y)}\\cdot ${customDecimal(f_myd)}} + \\dfrac{${customDecimal(sig_mzd)}}{${customDecimal(f_mzd)}} = `,
        check4_description: ``,

        check5: (sig_c0d / (kcrit_c_y * f_c0d)) + (sig_myd / f_myd) + km * (sig_mzd / (kcrit_m_z * f_mzd)),
        check5_title: `\\dfrac{\\sigma_{c,0,d}}{k_{crit,c,y}\\cdot f_{c,0,d}} + \\dfrac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m \\cdot\\dfrac{\\sigma_{m,z,d}}{k_{crit,m,z}\\cdot f_{m,z,d}} = `,
        check5_formula: ``,
        check5_formulaVal: `\\dfrac{${customDecimal(sig_c0d)}}{${customDecimal(kcrit_c_y)}\\cdot ${customDecimal(f_c0d)}} + \\dfrac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + ${customDecimal(km)}\\cdot\\dfrac{${customDecimal(sig_mzd)}}{${customDecimal(kcrit_m_z)}\\cdot ${customDecimal(f_mzd)}} = `,
        check5_description: ``,

        check6: (sig_c0d / (kcrit_c_y * f_c0d)) + km * (sig_myd / f_myd) + (sig_mzd / (kcrit_m_z * f_mzd)),
        check6_title: `\\dfrac{\\sigma_{c,0,d}}{k_{crit,c,y}\\cdot f_{c,0,d}} + k_m \\cdot\\dfrac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\dfrac{\\sigma_{m,z,d}}{k_{crit,m,z}\\cdot f_{m,z,d}} = `,
        check6_formula: ``,
        check6_formulaVal: `\\dfrac{${customDecimal(sig_c0d)}}{${customDecimal(kcrit_c_y)}\\cdot ${customDecimal(f_c0d)}} + ${customDecimal(km)}\\cdot\\dfrac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + \\dfrac{${customDecimal(sig_mzd)}}{${customDecimal(kcrit_m_z)}\\cdot ${customDecimal(f_mzd)}} = `,
        check6_description: ``,

        check7: (sig_c0d / (kcrit_c_z * f_c0d)) + (sig_myd / f_myd) + km * (sig_mzd / (kcrit_m_z * f_mzd)),
        check7_title: `\\dfrac{\\sigma_{c,0,d}}{k_{crit,c,z}\\cdot f_{c,0,d}} + \\dfrac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m \\cdot\\dfrac{\\sigma_{m,z,d}}{k_{crit,m,z}\\cdot f_{m,z,d}} = `,
        check7_formula: ``,
        check7_formulaVal: `\\dfrac{${customDecimal(sig_c0d)}}{${customDecimal(kcrit_c_z)}\\cdot ${customDecimal(f_c0d)}} + \\dfrac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + ${customDecimal(km)}\\cdot\\dfrac{${customDecimal(sig_mzd)}}{${customDecimal(kcrit_m_z)}\\cdot ${customDecimal(f_mzd)}} = `,
        check7_description: ``,

        check8: (sig_c0d / (kcrit_c_z * f_c0d)) + km * (sig_myd / f_myd) + (sig_mzd / (kcrit_m_z * f_mzd)),
        check8_title: `\\dfrac{\\sigma_{c,0,d}}{k_{crit,c,z}\\cdot f_{c,0,d}} + k_m \\cdot\\dfrac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\dfrac{\\sigma_{m,z,d}}{k_{crit,m,z}\\cdot f_{m,z,d}} = `,
        check8_formula: ``,
        check8_formulaVal: `\\dfrac{${customDecimal(sig_c0d)}}{${customDecimal(kcrit_c_z)}\\cdot ${customDecimal(f_c0d)}} + ${customDecimal(km)}\\cdot\\dfrac{${customDecimal(sig_myd)}}{${customDecimal(f_myd)}} + \\dfrac{${customDecimal(sig_mzd)}}{${customDecimal(kcrit_m_z)}\\cdot ${customDecimal(f_mzd)}} = `,
        check8_description: ``,

    }
}
