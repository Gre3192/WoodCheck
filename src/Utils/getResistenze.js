export function get_f_c0d(kmod, fc0k, gm) {

    return {
        f_c0d: (kmod * fc0k) / gm,
        f_c0d_title: `f_{c,0,d} = `,
        f_c0d_formula: `k_{mod}\\cdot\\dfrac{f_{c,0,k}}{\\gamma_m} = `,
        f_c0d_formulaVal: `${kmod}\\cdot\\dfrac{${fc0k}}{${gm}} = `,
        f_c0d_description: `Resistenza di progetto a compressione parallela alla fibratura`
    }
}

export function get_f_c90d(kmod, fc90k, gm) {

    return {
        f_c90d: (kmod * fc90k) / gm,
        f_c90d_title: `f_{c,90,d} = `,
        f_c90d_formula: `k_{mod}\\cdot\\dfrac{f_{c,90,k}}{\\gamma_m} = `,
        f_c90d_formulaVal: `${kmod}\\cdot\\dfrac{${fc90k}}{${gm}} = `,
        f_c90d_description: `Resistenza di progetto a compressione ortogonale alla fibratura`
    }
}

export function get_f_cAlphad(f_c0d, f_c90d, alpha) {

    return {
        f_cAlphad: f_c0d / ((f_c0d / f_c90d) * Math.sin(alpha) ** 2 + Math.cos(alpha) ** 2),
        f_cAlphad_title: `f_{c,\\alpha,d} = `,
        f_cAlphad_formula: `\\dfrac{f_{c,0,d}}{\\dfrac{f_{c,0,d}}{f_{c,90,d}}\\cdot\\sin^2{\\alpha} + \\cos^2{\\alpha}} = `,
        f_cAlphad_formulaVal: `\\dfrac{${f_c0d}}{\\dfrac{${f_c0d}}{${f_c90d}}\\cdot\\sin^2{${alpha}} + \\cos^2{${alpha}}} = `,
        f_cAlphad_description: `Resistenza di progetto a compressione inclinata rispetto alla fibratura`
    }
}

export function get_f_t0d(kmod, ft0k, gm) {

    return {
        f_t0d: (kmod * ft0k) / gm,
        f_t0d_title: `f_{t,0,d} = `,
        f_t0d_formula: `k_{mod}\\cdot\\dfrac{f_{t,0,k}}{\\gamma_m} = `,
        f_t0d_formulaVal: `${kmod}\\cdot\\dfrac{${ft0k}}{${gm}} = `,
        f_t0d_description: `Resistenza di progetto a trazione parallela alla fibratura`
    }
}

export function get_f_t90d(kmod, ft90k, gm) {

    return {
        f_t90d: (kmod * ft90k) / gm,
        f_t90d_title: `f_{t,90,d} = `,
        f_t90d_formula: `k_{mod}\\cdot\\dfrac{f_{t,90,k}}{\\gamma_m} = `,
        f_t90d_formulaVal: `${kmod}\\cdot\\dfrac{${ft90k}}{${gm}} = `,
        f_t90d_description: `Resistenza di progetto a trazione ortogonale alla fibratura`
    }
}

export function get_f_myd(khy, kmod, fmk, gm) {

    return {
        f_myd: khy * kmod * fmk / gm,
        f_myd_title: `f_{m,y,d} = `,
        f_myd_formula: `k_{mod}\\cdot\\dfrac{k_{h,y}\\cdot f_{m,k}}{\\gamma_m} = `,
        f_myd_formulaVal: `${kmod}\\cdot\\dfrac{${khy}\\cdot${fmk}}{${gm}} = `,
        f_myd_description: `Resistenza di progetto per flessione attorno a y`
    }
}

export function get_f_mzd(khz, kmod, fmk, gm) {

    return {
        f_mzd: khz * kmod * fmk / gm,
        f_mzd_title: `f_{m,z,d} = `,
        f_mzd_formula: `k_{mod}\\cdot\\dfrac{k_{h,z}\\cdot f_{m,k}}{\\gamma_m} = `,
        f_mzd_formulaVal: `${kmod}\\cdot\\dfrac{${khz}\\cdot${fmk}}{${gm}} = `,
        f_mzd_description: `Resistenza di progetto per flessione attorno a z`
    }
}

export function get_fvd(kmod, fvk, gm) {

    return {
        fvd: kmod * fvk / gm,
        fvd_title: `f_{v,d} = `,
        fvd_formula: `k_{mod}\\cdot\\dfrac{f_{v,k}}{\\gamma_m} = `,
        fvd_formulaVal: `${kmod}\\cdot\\dfrac{${fvk}}{${gm}} = `,
        fvd_description: `Resistenza di progetto a taglio`
    }
}