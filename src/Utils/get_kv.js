export default function get_kv(shape = 'rettangolare') {

    const kn = 1.1

    return {

        kv: MAth.min((kn * (1 + (1.1 * i ** (1.5)) / (Math.sqrt(h_intaglio)))) / (Math.sqrt(h_intaglio)*(Math.sqrt(alpha_intaglio*(1-alpha_intaglio)+0.8*(x/h_intaglio)*Math.sqrt((1)/(alpha_intaglio)-alpha_intaglio**2)))), 1),
        kv_title: `k_v = `,
        kv_formula: `\\text{min}\\left[\\frac{k_n\\cdot\\left(1+\\frac{1.1 \\cdot i^{1.5}}{\\sqrt{h}} \\right)}{\\sqrt{h}\\cdot \\left( \\sqrt{\\alpha\\cdot\\left(1 - \\alpha\\right)} + 0.8\\cdot \\frac{x}{h}\\cdot \\sqrt{\\frac{1}{\\alpha} - \\alpha^2} \\right)}; 1 \\right]`,
        kv_formulaVal: `\\text{min}\\left[\\frac{${kn}\\cdot\\left(1+\\frac{1.1 \\cdot ${i}^{1.5}}{\\sqrt{${h_intaglio}}} \\right)}{\\sqrt{${h_intaglio}}\\cdot \\left( \\sqrt{${alpha_intaglio}\\cdot \\left(1 - ${alpha_intaglio}\\right)} + 0.8\\cdot \\frac{${x}}{${h_intaglio}}\\cdot \\sqrt{\\frac{1}{${alpha_intaglio}} - ${alpha_intaglio}^2} \\right)}; 1 \\right]`,
        kv_description: `Coefficiente di riduzione`,

    }
}