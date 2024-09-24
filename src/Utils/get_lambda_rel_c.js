export default function get_lambda_rel_c(lambda_c_y,lambda_c_z,fc0k,E0_05) {


    return {

        lambda_rel_c_y: (lambda_c_y / Math.PI) * Math.sqrt(fc0k / E0_05),
        lambda_rel_c_y_title: `\\lambda_{rel,c,y} = `,
        lambda_rel_c_y_formula: `\\dfrac{\\lambda_y}{\\pi}\\sqrt{\\dfrac{f_{c,0,k}}{E_{0,05}}} = `,
        lambda_rel_c_y_formulaVal: `\\dfrac{${lambda_c_y}}{\\pi}\\sqrt{\\dfrac{${fc0k}}{${E0_05}}} = `,
        lambda_rel_c_y_description: `Snellezza relativa di colonna per instabilità attorno a y`,

        lambda_rel_c_z: (lambda_c_z / Math.PI) * Math.sqrt(fc0k / E0_05),
        lambda_rel_c_z_title: `\\lambda_{rel,c,z} = `,
        lambda_rel_c_z_formula: `\\dfrac{\\lambda_z}{\\pi}\\sqrt{\\dfrac{f_{c,0,k}}{E_{0,05}}} = `,
        lambda_rel_c_z_formulaVal: `\\dfrac{${lambda_c_z}}{\\pi}\\sqrt{\\dfrac{${fc0k}}{${E0_05}}} = `,
        lambda_rel_c_z_description: `Snellezza relativa di colonna per instabilità attorno a z`
    }
}