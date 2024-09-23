export default function get_k(beta_c, lambda_rel_c_y, lambda_rel_c_z) {

    return {

        ky: 0.5 * (1 + beta_c * (lambda_rel_c_y - 0.3) + lambda_rel_c_y ** 2),
        ky_title: `k_y = `,
        ky_formula: `0.5\\cdot\\left[1+beta_c\\cdot\\left(\\lambda_{rel,c,y}-0.3\\right)\\cdot\\lambda_{rel,c,y}^2\\right] = `,
        ky_formulaVal: `0.5\\cdot\\left[1+${beta_c}\\cdot\\left(${lambda_rel_c_y}-0.3\\right)\\cdot${lambda_rel_c_y}^2\\right] = `,
        ky_description: ``,

        kz: 0.5 * (1 + beta_c * (lambda_rel_c_z - 0.3) + lambda_rel_c_z ** 2),
        kz_title: `k_z = `,
        kz_formula: `0.5\\cdot\\left[1+beta_c\\cdot\\left(\\lambda_{rel,c,z}-0.3\\right)\\cdot\\lambda_{rel,c,z}^2\\right] = `,
        kz_formulaVal: `0.5\\cdot\\left[1+${beta_c}\\cdot\\left(${lambda_rel_c_z}-0.3\\right)\\cdot${lambda_rel_c_z}^2\\right] = `,
        kz_description: ``,

    }
}