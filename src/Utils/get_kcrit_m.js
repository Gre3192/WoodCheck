import customDecimal from "./customDecimal"


export default function get_kcrit_m(lambda_rel_m_y, lambda_rel_m_z) {


    return {
        
        kcrit_m_y: lambda_rel_m_y <= 0.75 ? 1
            : 0.75 < lambda_rel_m_y && lambda_rel_m_y <= 1.4 ? 1.56 - 0.75 * lambda_rel_m_y
                : 1 / (lambda_rel_m_y ** 2),

        kcrit_m_y_title: `k_{crit,m,y} = `,

        kcrit_m_y_formula: lambda_rel_m_y <= 0.75 ? ``
            : 0.75 < lambda_rel_m_y && lambda_rel_m_y <= 1.4 ? `1.56-0.75\\cdot\\lambda_{rel,m,y} = `
                : `\\dfrac{1}{\\lambda_{rel,m,y}^2} = `,

        kcrit_m_y_formulaVal: lambda_rel_m_y <= 0.75 ? ``
            : 0.75 < lambda_rel_m_y && lambda_rel_m_y <= 1.4 ? `1.56-0.75\\cdot${customDecimal(lambda_rel_m_y)} = `
                : `\\dfrac{1}{${customDecimal(lambda_rel_m_y)}^2} = `,

        kcrit_m_y_description: lambda_rel_m_y <= 0.75 ? `Coefficiente riduttivo di tensione critica per instabilità di trave attorno a z per $\\lambda_{rel,m,y}\\leq 0.75$`
            : 0.75 < lambda_rel_m_y && lambda_rel_m_y <= 1.4 ? `Coefficiente riduttivo di tensione critica per instabilità di trave attorno a z per $0.75<\\lambda_{rel,m,y}\\leq 1.4$`
                : `Coefficiente riduttivo di tensione critica per instabilità di trave attorno a z per $\\lambda_{rel,m,y} > 1.4$`,



        kcrit_m_z: lambda_rel_m_z <= 0.75 ? 1
            : 0.75 < lambda_rel_m_z && lambda_rel_m_z <= 1.4 ? 1.56 - 0.75 * lambda_rel_m_z
                : 1 / (lambda_rel_m_z ** 2),

        kcrit_m_z_title: `k_{crit,m,z} = `,

        kcrit_m_z_formula: lambda_rel_m_z <= 0.75 ? ``
            : 0.75 < lambda_rel_m_z && lambda_rel_m_z <= 1.4 ? `1.56-0.75\\cdot\\lambda_{rel,m,z} = `
                : `\\dfrac{1}{\\lambda_{rel,m,z}^2} = `,

        kcrit_m_z_formulaVal: lambda_rel_m_z <= 0.75 ? ``
            : 0.75 < lambda_rel_m_z && lambda_rel_m_z <= 1.4 ? `1.56-0.75\\cdot${customDecimal(lambda_rel_m_z)} = `
                : `\\dfrac{1}{${customDecimal(lambda_rel_m_z)}^2} = `,

        kcrit_m_z_description: lambda_rel_m_z <= 0.75 ? `Coefficiente riduttivo di tensione critica per instabilità di trave attorno a y per $\\lambda_{rel,m,z}\\leq 0.75$`
            : 0.75 < lambda_rel_m_z && lambda_rel_m_z <= 1.4 ? `Coefficiente riduttivo di tensione critica per instabilità di trave attorno a y per $0.75<\\lambda_{rel,m,z}\\leq 1.4$`
                : `Coefficiente riduttivo di tensione critica per instabilità di trave attorno a y per $\\lambda_{rel,m,z} > 1.4$`,

    }
}