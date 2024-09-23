export default function get_kcrit_c(k_y, k_z, lambda_rel_c_y, lambda_rel_c_z) {


    return {

        kcrit_c_y: (lambda_rel_c_y <= 0.3) ? 1 : 1 / (k_y + Math.sqrt(k_y ** 2 - lambda_rel_c_y ** 2)),
        kcrit_c_y_title: `k_{crit,c,y} = `,
        kcrit_c_y_formula: (lambda_rel_c_y <= 0.3) ? `` : `\\dfrac{1}{k_y+\\sqrt{k_y^2-\\lambda_{rel,c,y}^2}} = `,
        kcrit_c_y_formulaVal: (lambda_rel_c_y <= 0.3) ? `` : `\\dfrac{1}{${k_y}+\\sqrt{${k_y}^2-${lambda_rel_c_y}^2}} = `,
        kcrit_c_y_description: `Coefficiente riduttivo di tensione critica per instabilità di colonna attorno a y`,

        kcrit_c_z: (lambda_rel_c_z <= 0.3) ? 1 : 1 / (k_z + Math.sqrt(k_z ** 2 - lambda_rel_c_z ** 2)),
        kcrit_c_z_title: `k_{crit,c,z} = `,
        kcrit_c_z_formula: (lambda_rel_c_z <= 0.3) ? `` : `\\dfrac{1}{k_z+\\sqrt{k_z^2-\\lambda_{rel,c,z}^2}} = `,
        kcrit_c_z_formulaVal: (lambda_rel_c_z <= 0.3) ? `` : `\\dfrac{1}{${k_z}+\\sqrt{${k_z}^2-${lambda_rel_c_z}^2}} = `,
        kcrit_c_z_description: `Coefficiente riduttivo di tensione critica per instabilità di colonna attorno a z`,

    }
}