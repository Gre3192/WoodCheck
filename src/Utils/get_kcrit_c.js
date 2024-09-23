export default function get_kcrit_c() {


    return {
        
        kcrit_m_y: ,

        kcrit_m_y_title: `k_{crit,c,y} = `,

        kcrit_m_y_formula: ``,

        kcrit_m_y_formulaVal: ``,

        kcrit_m_y_description: lambda_rel_m_y <= 0.75 ? `Coefficiente riduttivo di tensione critica per instabilità di trave attorno a z per \\lambda_{rel,m,y}\\leq 0.75`
            : 0.75 < lambda_rel_m_y && lambda_rel_m_y <= 1.4 ? `Coefficiente riduttivo di tensione critica per instabilità di trave attorno a z per 0.75<\\lambda_{rel,m,y}\\leq 1.4`
                : `Coefficiente riduttivo di tensione critica per instabilità di trave attorno a z per $\\lambda_{rel,m,y}> 1.4$`,



        kcrit_m_z: ``,

        kcrit_m_z_title: ``,

        kcrit_m_z_formula: ``,

        kcrit_m_z_formulaVal: ``,

        kcrit_m_z_description: ``,

    }
}