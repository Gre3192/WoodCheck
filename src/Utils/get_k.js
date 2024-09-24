export default function get_k(beta_c, lambda_rel_c_y, lambda_rel_c_z) {

    return {

        k_y: 0.5 * (1 + beta_c * (lambda_rel_c_y - 0.3) + lambda_rel_c_y ** 2),
        k_y_title: `k_y = `,
        k_y_formula: `0.5\\cdot\\left[1+\\beta_c\\cdot\\left(\\lambda_{rel,c,y}-0.3\\right)\\cdot\\lambda_{rel,c,y}^2\\right] = `,
        k_y_formulaVal: `0.5\\cdot\\left[1+${beta_c}\\cdot\\left(${lambda_rel_c_y}-0.3\\right)\\cdot${lambda_rel_c_y}^2\\right] = `,
        k_y_description: ``,

        k_z: 0.5 * (1 + beta_c * (lambda_rel_c_z - 0.3) + lambda_rel_c_z ** 2),
        k_z_title: `k_z = `,
        k_z_formula: `0.5\\cdot\\left[1+\\beta_c\\cdot\\left(\\lambda_{rel,c,z}-0.3\\right)\\cdot\\lambda_{rel,c,z}^2\\right] = `,
        k_z_formulaVal: `0.5\\cdot\\left[1+${beta_c}\\cdot\\left(${lambda_rel_c_z}-0.3\\right)\\cdot${lambda_rel_c_z}^2\\right] = `,
        k_z_description: ``,

    }
}