export default function get_lambda_rel_m(fmk, sigma_m_crit_y, sigma_m_crit_z) {


    return {

        lambda_rel_m_y: Math.sqrt(fmk / sigma_m_crit_y),
        lambda_rel_m_y_title: `\\lambda_{rel,m,y} = `,
        lambda_rel_m_y_formula: `\\sqrt{\\dfrac{f_{m,k}}{\\sigma_{m,y,crit}}} = `,
        lambda_rel_m_y_formulaVal: `\\sqrt{\\dfrac{${fmk}}{${sigma_m_crit_y}}} = `,
        lambda_rel_m_y_description: `Snellezza relativa di trave per instabilità attorno a z`,

        lambda_rel_m_z: Math.sqrt(fmk / sigma_m_crit_z),
        lambda_rel_m_z_title: `\\lambda_{rel,m,z} = `,
        lambda_rel_m_z_formula: `\\sqrt{\\dfrac{f_{m,k}}{\\sigma_{m,z,crit}}} = `,
        lambda_rel_m_z_formulaVal: `\\sqrt{\\dfrac{${fmk}}{${sigma_m_crit_z}}} = `,
        lambda_rel_m_z_description: `Snellezza relativa di trave per instabilità attorno a y`
    }
}