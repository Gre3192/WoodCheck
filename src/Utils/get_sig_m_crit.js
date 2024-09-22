export default function get_sig_m_crit(Mcrit_y, Mcrit_z, Wel_y, Wel_z) {

    return {

        sigma_m_crit_y: Mcrit_y / Wel_y,
        sigma_m_crit_y_title: `\\sigma_{m,y,crit} = `,
        sigma_m_crit_y_formula: `\\dfrac{M_{y,crit}}{W_{el,y}} = `,
        sigma_m_crit_y_formulaVal: `\\dfrac{M_{y,crit}}{W_{el,y}} = `,
        sigma_m_crit_y_description: `Tensione critica per flessione attorno all'asse y`,

        sigma_m_crit_z: Mcrit_z / Wel_z,
        sigma_m_crit_z_title: `\\sigma_{m,z,crit} = `,
        sigma_m_crit_z_formula: `\\dfrac{M_{z,crit}}{W_{el,z}} = `,
        sigma_m_crit_z_formulaVal: `\\dfrac{${Mcrit_z}}{${Wel_z}} = `,
        sigma_m_crit_z_description: `Tensione critica per flessione attorno all'asse z`
    }
}