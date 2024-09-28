import customDecimal from "./customDecimal"

export default function get_kh(h, b, shape = 'rettangolare', woodType = 'lamellare') {


    return {

        kh_y: shape != 'circolare' && woodType?.toLowerCase().includes('lamellare') && h < 600 ? Math.min((600 / h) ** 0.1, 1.1) :
            shape != 'circolare' && woodType?.toLowerCase().includes('massiccio') && h < 150 ? Math.min((150 / h) ** 0.2, 1.3) : 1,

        kh_y_title: `k_{h,y} = `,

        kh_y_formula: shape != 'circolare' && woodType?.toLowerCase().includes('lamellare') && h < 600 ? `\\text{min}\\left[\\left(\\dfrac{600}{h}\\right)^{0.1}; 1.1\\right] = ` :
            shape != 'circolare' && woodType?.toLowerCase().includes('massiccio') && h < 150 ? `\\text{min}\\left[\\left(\\dfrac{150}{h}\\right)^{0.2}; 1.3\\right] = ` : ``,

        kh_y_formulaVal: shape != 'circolare' && woodType?.toLowerCase().includes('lamellare') && h < 600 ? `\\text{min} \\left[ \\left( \\dfrac{600}{${customDecimal(h)}}\\right)^{0.1}; 1.1 \\right] = ` :
            shape != 'circolare' && woodType?.toLowerCase().includes('massiccio') && h < 150 ? `\\text{min}\\left[\\left(\\dfrac{150}{${customDecimal(h)}}\\right)^{0.2}; 1.3\\right] = ` : ``,

        kh_y_description: shape != 'circolare' && woodType?.toLowerCase().includes('lamellare') && h < 600 ? `Coefficiente correttivo per sezione standard, per legno lamellare con $h<600$` :
            shape != 'circolare' && woodType?.toLowerCase().includes('massiccio') && h < 150 ? `Coefficiente correttivo per sezione standard, per legno lamellare con $h<150$` : `Coefficiente correttivo per sezione standard`,



            

        kh_z: shape != 'circolare' && woodType?.toLowerCase().includes('lamellare') && b < 600 ? Math.min((600 / b) ** 0.1, 1.1) :
            shape != 'circolare' && woodType?.toLowerCase().includes('massiccio') && b < 150 ? Math.min((150 / b) ** 0.2, 1.3) : 1,

        kh_z_title: `k_{h,z} = `,

        kh_z_formula: shape != 'circolare' && woodType?.toLowerCase().includes('lamellare') && b < 600 ? `\\text{min}\\left[\\left(\\dfrac{600}{b}\\right)^{0.1}; 1.1\\right] = ` :
            shape != 'circolare' && woodType?.toLowerCase().includes('massiccio') && b < 150 ? `\\text{min}\\left[\\left(\\dfrac{150}{b}\\right)^{0.2}; 1.3\\right] = ` : ``,

        kh_z_formulaVal: shape != 'circolare' && woodType?.toLowerCase().includes('lamellare') && b < 600 ? `\\text{min}\\left[\\left(\\dfrac{600}{${customDecimal(b)}}\\right)^{0.1}; 1.1\\right] = ` :
            shape != 'circolare' && woodType?.toLowerCase().includes('massiccio') && b < 150 ? `\\text{min}\\left[\\left(\\dfrac{150}{${customDecimal(b)}}\\right)^{0.2}; 1.3\\right] = ` : ``,

        kh_z_description: shape != 'circolare' && woodType?.toLowerCase().includes('lamellare') && h < 600 ? `Coefficiente correttivo per sezione standard, per legno lamellare con $b<600$` :
            shape != 'circolare' && woodType?.toLowerCase().includes('massiccio') && h < 150 ? `Coefficiente correttivo per sezione standard, per legno lamellare con $b<150$` : `Coefficiente correttivo per sezione standard`,

    }
}