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