import customDecimal from "./customDecimal"


export default function get_Ncr(L,beta_y,beta_z,Ig_y,Ig_z,E0_05) {


    return {

        Ncr_y: Math.PI * E0_05 * Ig_y / ((beta_y * L) ** 2),
        Ncr_y_title: `N_{cr,y} = `,
        Ncr_y_formula: `\\dfrac{\\pi\\cdot E_{0,05}\\cdot I_{g,y}}{\\left(\\beta_y\\cdot L\\right)^2} = `,
        Ncr_y_formulaVal: `\\dfrac{\\pi\\cdot ${customDecimal(E0_05)}\\cdot ${customDecimal(Ig_y)}}{\\left(${customDecimal(beta_y)}\\cdot ${customDecimal(L)}\\right)^2} = `,
        Ncr_y_description: `Carico critico euleriano per instabilità attorno a y`,

        Ncr_z: Math.PI * E0_05 * Ig_z / ((beta_z * L) ** 2),
        Ncr_z_title: `N_{cr,z} = `,
        Ncr_z_formula: `\\dfrac{\\pi\\cdot E_{0,05}\\cdot I_{g,z}}{\\left(\\beta_z\\cdot L\\right)^2} = `,
        Ncr_z_formulaVal: `\\dfrac{\\pi\\cdot ${customDecimal(E0_05)}\\cdot ${customDecimal(Ig_z)}}{\\left(${customDecimal(beta_z)}\\cdot ${customDecimal(L)}\\right)^2} = `,
        Ncr_z_description: `Carico critico euleriano per instabilità attorno a z`
    }
}