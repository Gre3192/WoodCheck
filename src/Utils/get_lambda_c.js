import customDecimal from "./customDecimal"


export default function get_lambda_c(Atot, fc0k, Ncr_y, Ncr_z) {


    return {

        lambda_c_y: Math.sqrt((Atot * fc0k) / Ncr_y),
        lambda_c_y_title: `\\lambda_{c,y} = `,
        lambda_c_y_formula: `\\sqrt{\\dfrac{A_{tot}\\cdot f_{c,0,k}}{N_{cr,y}}} = `,
        lambda_c_y_formulaVal: `\\sqrt{\\dfrac{${customDecimal(Atot)}\\cdot ${customDecimal(fc0k)}}{${customDecimal(Ncr_y)}}} = `,
        lambda_c_y_description: `Snellezza asimensionale dell'elemento strutturale per instabilità attorno a y`,

        lambda_c_z: Math.sqrt((Atot * fc0k) / Ncr_z),
        lambda_c_z_title: `\\lambda_{c,z} = `,
        lambda_c_z_formula: `\\sqrt{\\dfrac{A_{tot}\\cdot f_{c,0,k}}{N_{cr,z}}} = `,
        lambda_c_z_formulaVal: `\\sqrt{\\dfrac{${customDecimal(Atot)}\\cdot ${customDecimal(fc0k)}}{${customDecimal(Ncr_z)}}} = `,
        lambda_c_z_description: `Snellezza asimensionale dell'elemento strutturale per instabilità attorno a z`
    }
}