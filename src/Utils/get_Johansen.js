function get_prevcoeff_prevfax(params) {

    if (true) return 0.15
    else if (true) return 0.25
    else if (true) return 1
    else if (true) return 0

}


export default function get_Johansen(params) {



    const shearPlane = 2
    const joinType = `legno-legno`
    const acciaio_esterno = true
    const fh1k = 26
    const fh2k = 26

    const beta = fh2k / fh1k

    if (joinType === `legno-legno`) {

        if (shearPlane === 1) {

            return {

                rk1a: fh1k * t1 * d,
                rk1b: fh2k * t2 * d,
                rk1c_prev: ((fh1k * t1 * d) / (1 + beta)) * (Math.sqrt(beta + 2 * (beta ** 2) * (1 + (t2 / t1) + ((t2 / t1) ** 2)) + (beta ** 3) * (t2 / t1) ** 2)) - beta * (1 + (t2 / t1)),
                rk1c: rk1c_prev + Math.min(coeff_fax * rk1c_prev, fax_rk / 4),
                rk2a_prev: 1.05 * ((fh1k * t1 * d) / (2 + beta)) * (Math.sqrt(2 * beta * (1 + beta) + ((4 * beta * (2 + beta) * myrk) / (fh1k * (t1 ** 2) * d))) - beta),
                rk2a: rk2a_prev + Math.min(coeff_fax * rk2a_prev, fax_rk / 4),
                rk2b_prev: 1.05 * ((fh1k * t2 * d) / (1 + 2 * beta)) * (Math.sqrt(2 * (beta ** 2) * (1 + beta) + ((4 * beta * (1 + 2 * beta) * myrk) / (fh1k * (t2 ** 2) * d))) - beta),
                rk2b: rk2b_prev + Math.min(coeff_fax * rk2b_prev, fax_rk / 4),
                rk3_prev: 1.15 * Math.sqrt(((2 * beta) / (1 + beta))) * Math.sqrt(2 * myrk * fh1k * d),
                rk3: rk3_prev + Math.min(coeff_fax * rk3_prev, fax_rk / 4),

                rk1a_title: `(a) R_{k,IA} = `,
                rk1b_title: `(b) R_{k,IB} = `,
                rk1c_prev_title: `(c) R_{k,IC} = `,
                rk1c_title: ``,
                rk2a_prev_title: `(d) R_{k,IIA} = `,
                rk2a_title: ``,
                rk2b_prev_title: `(e) R_{k,IIB} = `,
                rk2b_title: ``,
                rk3_prev_title: `(f) R_{k,III} = `,
                rk3_title: ``,

                rk1a_formula: `f_{h,1,k} \\cdot t_1 \\cdot d = `,
                rk1b_formula: `f_{h,2,k} \\cdot t_2 \\cdot d = `,
                rk1c_prev_formula: `\\dfrac{f_{h,1,k} \\cdot t_1 \\cdot d}{1+\\beta} \\left[ \\sqrt{\\beta + 2\\cdot\\beta^2 \\left[ 1 + \\dfrac{t_2}{t_1} + \\left( \\dfrac{t_2}{t_1} \\right)^2 \\right] + \\beta^3 \\cdot\\left( \\dfrac{t_2}{t_1} \\right)^2} - \\beta\\cdot \\left( 1 + \\dfrac{t_2}{t_1} \\right) \\right] = `,
                rk1c_formula: ``,
                rk2a_prev_formula: `1.05\\cdot\\dfrac{f_{h,1,k} \\cdot t_1 \\cdot d}{2+\\beta} \\left[ \\sqrt{2\\cdot\\beta\\cdot (1+\\beta) + \\dfrac{4 \\cdot \\beta\\cdot(2+\\beta) \\cdot M_{y,k}}{f_{h,1,k} \\cdot d \\cdot t_1^2}} - \\beta \\right] = `,
                rk2a_formula: ``,
                rk2b_prev_formula: `1.05\\cdot\\dfrac{f_{h,1,k} \\cdot t_2 \\cdot d}{1+2\\cdot \\beta} \\left[ \\sqrt{2 \\cdot \\beta^2\\cdot(1+\\beta) + \\dfrac{4 \\cdot \\beta\\cdot(1+2\\cdot\\beta) \\cdot M_{y,k}}{f_{h,1,k} \\cdot d \\cdot t_2^2}} - \\beta \\right] = `,
                rk2b_formula: ``,
                rk3_prev_formula: `1.15\\cdot\\dfrac{2 \\cdot \\beta}{\\sqrt{1+\\beta}} \\sqrt{2 \\cdot M_{y,k} \\cdot f_{h,1,k} \\cdot d} = `,
                rk3_formula: ``,

                rk1a_formulaVal: `${fh1k} \\cdot ${t1} \\cdot ${d} = `,
                rk1b_formulaVal: `${fh2k} \\cdot ${t1} \\cdot ${d} = `,
                rk1c_prev_formulaVal: `\\dfrac{${fh1k} \\cdot ${t1} \\cdot ${d}}{1+${beta}} \\left[ \\sqrt{${beta} + 2\\cdot ${beta}^2 \\left[ 1 + \\dfrac{${t2}}{${t1}} + \\left( \\dfrac{${t2}}{${t1}} \\right)^2 \\right] + ${beta}^3 \\cdot\\left( \\dfrac{${t2}}{${t1}} \\right)^2} - \\beta\\cdot \\left( 1 + \\dfrac{${t2}}{${t1}} \\right) \\right] = `,
                rk1c_formulaVal: ``,
                rk2a_prev_formulaVal: `1.05\\cdot\\dfrac{${fh1k} \\cdot ${t1} \\cdot ${d}}{2+${beta}} \\left[ \\sqrt{2\\cdot ${beta}\\cdot (1+${beta}) + \\dfrac{4 \\cdot ${beta} \\cdot(2+${beta}) \\cdot ${myrk}}{${fh1k} \\cdot ${d} \\cdot ${t1}^2}} - ${beta} \\right] = `,
                rk2a_formulaVal: ``,
                rk2b_prev_formulaVal: `1.05\\cdot\\dfrac{${fh1k} \\cdot ${t2} \\cdot ${d}}{1+2\\cdot ${beta}} \\left[ \\sqrt{2 \\cdot ${beta}^2\\cdot(1+${beta}) + \\dfrac{4 \\cdot ${beta}\\cdot(1+2\\cdot ${beta}) \\cdot ${myrk}}{${fh1k} \\cdot ${d} \\cdot ${t2}^2}} - ${beta} \\right] = `,
                rk2b_formulaVal: ``,
                rk3_prev_formulaVal: `1.15\\cdot\\dfrac{2 \\cdot ${beta}}{\\sqrt{1+${beta}}} \\sqrt{2 \\cdot ${myrk} \\cdot ${fh1k} \\cdot ${d}} = `,
                rk3_formulaVal: ``,

                rk1a_description: ``,
                rk1b_description: ``,
                rk1c_prev_description: ``,
                rk1c_description: ``,
                rk2a_prev_description: ``,
                rk2a_description: ``,
                rk2b_prev_description: ``,
                rk2b_description: ``,
                rk3_prev_description: ``,
                rk3_description: ``,
            }
        }
        else if (shearPlane === 2) {

            return {

                rk1a: fh1k * t1 * d,
                rk1b: 0.5 * fh2k * t2 * d,
                rk2a_prev: 1.05 * ((fh1k * t1 * d) / (2 + beta)) * (Math.sqrt(2 * beta * (1 + beta) + ((4 * beta * (2 + beta) * myrk) / (fh1k * (t1 ** 2) * d))) - beta),
                rk2a: rk2a_prev + Math.min(coeff_fax * rk2a_prev, (fax_rk / 4)),
                rk3_prev: 1.15 * Math.sqrt((2 * beta) / (1 + beta)) * Math.sqrt(2 * myrk * fh1k * d),
                rk3: rk3_prev + Math.min(coeff_fax * rk3_prev, (fax_rk / 4)),

                rk1a_title: `(g) R_{k,IA} = `,
                rk1b_title: `(h) R_{k,IB} = `,
                rk2a_prev_title: `(j) R_{k,IIA} = `,
                rk2a_title: ``,
                rk3_prev_title: `(k) R_{k,III} = `,
                rk3_title: ``,

                rk1a_formula: `f_{h,1,k} \\cdot t_1 \\cdot d = `,
                rk1b_formula: `0.5 \\cdot f_{h,2,k} \\cdot t_2 \\cdot d = `,
                rk2a_prev_formula: `1.05 \\cdot \\dfrac{f_{h,1,k} \\cdot t_1 \\cdot d}{2+\\beta} \\left[ \\sqrt{2\\cdot\\beta(1+\\beta) + \\dfrac{4 \\cdot \\beta(2+\\beta) \\cdot M_{y,k}}{f_{h,1,k} \\cdot d \\cdot t_1^2}} - \\beta \\right] = `,
                rk2a_formula: ``,
                rk3_prev_formula: `1.15 \\cdot \\dfrac{2 \\cdot \\beta}{\\sqrt{1+\\beta}} \\sqrt{2 \\cdot M_{y,k} \\cdot f_{h,1,k} \\cdot d} = `,
                rk3_formula: ``,

                rk1a_formulaVal: `${fh1k} \\cdot ${t1} \\cdot ${d} = `,
                rk1b_formulaVal: `0.5 \\cdot ${fh2k} \\cdot ${t2} \\cdot ${d} = `,
                rk2a_prev_formulaVal: `1.05 \\cdot \\dfrac{${fh1k} \\cdot ${t1} \\cdot ${d}}{2+${beta}} \\left[ \\sqrt{2\\cdot ${beta}(1+${beta}) + \\dfrac{4 \\cdot ${beta}(2+${beta}) \\cdot ${myrk}}{${fh1k} \\cdot ${d} \\cdot ${t1}^2}} - ${beta} \\right] = `,
                rk2a_formulaVal: ``,
                rk3_prev_formulaVal: `1.15 \\cdot \\dfrac{2 \\cdot ${beta}}{\\sqrt{1+${beta}} \\sqrt{2 \\cdot ${myrk} \\cdot ${fh1k} \\cdot ${d}} = `,
                rk3_formulaVal: ``,

                rk1a_description: ``,
                rk1b_description: ``,
                rk2a_prev_description: ``,
                rk2a_description: ``,
                rk3_prev_description: ``,
                rk3_description: ``,
            }
        }
    }
    else if (joinType === `acciaio-legno`) {

        if (shearPlane = 1) {



        }
        else if (shearPlane = 2) {
            if (acciaio_prevesterno_previnterno = 1) {


            } else if (acciaio_prevesterno_previnterno = 2) {


            }
        }
    }
}