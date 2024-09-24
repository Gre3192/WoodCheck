import { buildQueries } from "@testing-library/react";

export default function get_kh(h, b, shape = 'rettangolare', woodType = 'laminare') {


    return {

        kh_y: shape != 'circolare' && woodType?.toLocaleLowerCase().includes('laminare') && h < 600 ? Math.min((600 / h) ** 0.1, 1.1) :
            shape != 'circolare' && woodType?.toLocaleLowerCase().includes('massiccio') && h < 150 ? Math.min((150 / h) ** 0.2, 1.3) : 1,

        kh_y_title: `k_{h,y} = `,

        kh_y_formula: shape != 'circolare' && woodType?.toLocaleLowerCase().includes('laminare') && h < 600 ? `\\min\\left{\\left(\\dfrac{600}{h}\\right)^(0.1); 1.1\\right} = ` :
            shape != 'circolare' && woodType?.toLocaleLowerCase().includes('massiccio') && h < 150 ? `\\min\\left{\\left(\\dfrac{150}{h}\\right)^(0.2); 1.3\\right} = ` : ``,

        kh_y_formulaVal: shape != 'circolare' && woodType?.toLocaleLowerCase().includes('laminare') && h < 600 ? `\\min\\left{\\left(\\dfrac{600}{${h}}\\right)^(0.1); 1.1\\right} = ` :
            shape != 'circolare' && woodType?.toLocaleLowerCase().includes('massiccio') && h < 150 ? `\\min\\left{\\left(\\dfrac{150}{${h}}\\right)^(0.2); 1.3\\right} = ` : ``,

        kh_y_description: shape != 'circolare' && woodType?.toLocaleLowerCase().includes('laminare') && h < 600 ? `Coefficiente correttivo per sezione standard, per legno laminare con $h<600$` :
            shape != 'circolare' && woodType?.toLocaleLowerCase().includes('massiccio') && h < 150 ? `Coefficiente correttivo per sezione standard, per legno laminare con $h<150$` : `Coefficiente correttivo per sezione standard$`,



            

        kh_z: shape != 'circolare' && woodType?.toLocaleLowerCase().includes('laminare') && b < 600 ? Math.min((600 / b) ** 0.1, 1.1) :
            shape != 'circolare' && woodType?.toLocaleLowerCase().includes('massiccio') && b < 150 ? Math.min((150 / b) ** 0.2, 1.3) : 1,

        kh_z_title: `k_{h,z} = `,

        khz_formula: shape != 'circolare' && woodType?.toLocaleLowerCase().includes('laminare') && b < 600 ? `\\min\\left{\\left(\\dfrac{600}{b}\\right)^(0.1); 1.1\\right} = ` :
            shape != 'circolare' && woodType?.toLocaleLowerCase().includes('massiccio') && b < 150 ? `\\min\\left{\\left(\\dfrac{150}{b}\\right)^(0.2); 1.3\\right} = ` : ``,

        kh_z_formulaVal: shape != 'circolare' && woodType?.toLocaleLowerCase().includes('laminare') && b < 600 ? `\\min\\left{\\left(\\dfrac{600}{${b}}\\right)^(0.1); 1.1\\right} = ` :
            shape != 'circolare' && woodType?.toLocaleLowerCase().includes('massiccio') && b < 150 ? `\\min\\left{\\left(\\dfrac{150}{${b}}\\right)^(0.2); 1.3\\right} = ` : ``,

        kh_z_description: shape != 'circolare' && woodType?.toLocaleLowerCase().includes('laminare') && h < 600 ? `Coefficiente correttivo per sezione standard, per legno laminare con $b<600$` :
            shape != 'circolare' && woodType?.toLocaleLowerCase().includes('massiccio') && h < 150 ? `Coefficiente correttivo per sezione standard, per legno laminare con $b<150$` : `Coefficiente correttivo per sezione standard$`,

    }
}