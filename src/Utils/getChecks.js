export function get_flessioneCheck(sig_myd, sig_mzd, f_myd, f_mzd, km ) {

    return {
        check_z: (sig_myd / f_myd) + km * (sig_mzd / f_mzd),
        check_z_title: `\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_z_formula: ``,
        check_z_formulaVal: `\\frac{${sig_myd}}{${f_myd}} + ${km}\\cdot\\frac{${sig_mzd}}{${f_mzd}} = `,
        check_z_description: ``,

        check_y: km *(sig_myd / f_myd) + (sig_mzd / f_mzd),
        check_y_title: `k_m\\cdot\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = `,
        check_y_formula: ``,
        check_y_formulaVal: `${km}\\cdot\\frac{${sig_myd}}{${f_myd}} + \\frac{${sig_mzd}}{${f_mzd}} = `,
        check_y_description: ``
    }
}


export function get_TaglioCheck(tau_d, fvd ) {

    return {
        check: tau_d / fvd,
        check_title: `\\dfrac{\\tau_{d}}{f_{v,d}} = `,
        check_formula: ``,
        check_formulaVal: `\\dfrac{${tau_d}}{${fvd}} = `,
        check_description: ``,
    }
}
