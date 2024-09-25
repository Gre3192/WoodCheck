import customDecimal from "./customDecimal"


export default function getMcrit(E0_05, Ig_z, Ig_y, G_05, Ig_tor, leff) {


    return {

        Mcrit_y: (Math.PI / leff) * Math.sqrt(E0_05 * Ig_z * G_05 * Ig_tor),
        Mcrit_y_title: `M_{y,crit} = `,
        Mcrit_y_formula: `\\frac{\\pi}{l_{eff}}\\cdot\\sqrt{E_{0.05}\\cdot I_{g,z}\\cdot G_{0.05}\\cdot I_{g,tor}} = `,
        Mcrit_y_formulaVal: `\\frac{\\pi}{${customDecimal(leff)}}\\cdot\\sqrt{${customDecimal(E0_05)}\\cdot ${customDecimal(Ig_z)}\\cdot ${customDecimal(G_05)}\\cdot ${customDecimal(Ig_tor)}} = `,
        Mcrit_y_description: `Momento critico per instabilità flesso-torsionale attorno a z`,

        Mcrit_z: (Math.PI / leff) * Math.sqrt(E0_05 * Ig_y * G_05 * Ig_tor),
        Mcrit_z_title: `M_{z,crit} = `,
        Mcrit_z_formula: `\\frac{\\pi}{l_{eff}}\\cdot\\sqrt{E_{0.05}\\cdot I_{g,y}\\cdot G_{0.05}\\cdot I_{g,tor}} = `,
        Mcrit_z_formulaVal: `\\frac{\\pi}{${customDecimal(leff)}}\\cdot\\sqrt{${customDecimal(E0_05)}\\cdot ${customDecimal(Ig_y)}\\cdot ${customDecimal(G_05)}\\cdot ${customDecimal(Ig_tor)}} = `,
        Mcrit_z_description: `Momento critico per instabilità flesso-torsionale attorno a y`
    }
}