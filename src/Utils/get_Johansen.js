function get_coeff_fax(params) {

    if (true) return 0.15
    else if (true) return 0.25
    else if (true) return 1
    else if (true) return 0

}


export default function get_Johansen(params) {

    const shearPlane = 2
    const joinType = `legno-legno`
    const acciaio_interno_esterno = true
    const fh1k = 26
    const fh2k = 26
    const t1 = 26
    const t2 = 26
    const d = 26
    const fax_rk = 989
    const myrk = 989
    const beta = fh2k / fh1k
    const coeff_fax = get_coeff_fax(params)


    if (joinType == `legno-legno`) {

        if (shearPlane == 1) {

            const rk1c_prev = ((fh1k * t1 * d) / (1 + beta)) * (Math.sqrt(beta + 2 * (beta ** 2) * (1 + (t2 / t1) + ((t2 / t1) ** 2)) + (beta ** 3) * (t2 / t1) ** 2)) - beta * (1 + (t2 / t1))
            const rk2a_prev = 1.05 * ((fh1k * t1 * d) / (2 + beta)) * (Math.sqrt(2 * beta * (1 + beta) + ((4 * beta * (2 + beta) * myrk) / (fh1k * (t1 ** 2) * d))) - beta)
            const rk2b_prev = 1.05 * ((fh1k * t2 * d) / (1 + 2 * beta)) * (Math.sqrt(2 * (beta ** 2) * (1 + beta) + ((4 * beta * (1 + 2 * beta) * myrk) / (fh1k * (t2 ** 2) * d))) - beta)
            const rk3_prev = 1.15 * Math.sqrt(((2 * beta) / (1 + beta))) * Math.sqrt(2 * myrk * fh1k * d)

            return {

                rk1a: fh1k * t1 * d,
                rk1b: fh2k * t2 * d,
                rk1c_prev: rk1c_prev,
                rk1c: rk1c_prev + Math.min(coeff_fax * rk1c_prev, (fax_rk / 4)),
                rk2a_prev: rk2a_prev,
                rk2a: rk2a_prev + Math.min(coeff_fax * rk2a_prev, (fax_rk / 4)),
                rk2b_prev: rk2b_prev,
                rk2b: rk2b_prev + Math.min(coeff_fax * rk2b_prev, (fax_rk / 4)),
                rk3_prev: rk3_prev,
                rk3: rk3_prev + Math.min(coeff_fax * rk3_prev, (fax_rk / 4)),

                rk1a_title: `(a) R_{k,IA} = `,
                rk1b_title: `(b) R_{k,IB} = `,
                rk1c_prev_title: `(c) R^*_{k,IC} = `,
                rk1c_title: `(c) R_{k,IC} = `,
                rk2a_prev_title: `(d) R^*_{k,IIA} = `,
                rk2a_title: `(d) R_{k,IIA} = `,
                rk2b_prev_title: `(e) R^*_{k,IIB} = `,
                rk2b_title: `(e) R_{k,IIB} = `,
                rk3_prev_title: `(f) R^*_{k,III} = `,
                rk3_title: `(f) R_{k,III} = `,

                rk1a_formula: `f_{h,1,k} \\cdot t_1 \\cdot d = `,
                rk1b_formula: `f_{h,2,k} \\cdot t_2 \\cdot d = `,
                rk1c_prev_formula: `\\dfrac{f_{h,1,k} \\cdot t_1 \\cdot d}{1+\\beta} \\left[ \\sqrt{\\beta + 2\\cdot\\beta^2 \\left[ 1 + \\dfrac{t_2}{t_1} + \\left( \\dfrac{t_2}{t_1} \\right)^2 \\right] + \\beta^3 \\cdot\\left( \\dfrac{t_2}{t_1} \\right)^2} - \\beta\\cdot \\left( 1 + \\dfrac{t_2}{t_1} \\right) \\right] = `,
                rk1c_formula: `R^*_{k,IC} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,IC}; \\dfrac{F_{ax,rk}}{4}\\right) = `,
                rk2a_prev_formula: `1.05\\cdot\\dfrac{f_{h,1,k} \\cdot t_1 \\cdot d}{2+\\beta} \\left[ \\sqrt{2\\cdot\\beta\\cdot (1+\\beta) + \\dfrac{4 \\cdot \\beta\\cdot(2+\\beta) \\cdot M_{y,k}}{f_{h,1,k} \\cdot d \\cdot t_1^2}} - \\beta \\right] = `,
                rk2a_formula: `R^*_{k,IIA} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,IIA}; \\dfrac{F_{ax,rk}}{4}\\right) = `,
                rk2b_prev_formula: `1.05\\cdot\\dfrac{f_{h,1,k} \\cdot t_2 \\cdot d}{1+2\\cdot \\beta} \\left[ \\sqrt{2 \\cdot \\beta^2\\cdot(1+\\beta) + \\dfrac{4 \\cdot \\beta\\cdot(1+2\\cdot\\beta) \\cdot M_{y,k}}{f_{h,1,k} \\cdot d \\cdot t_2^2}} - \\beta \\right] = `,
                rk2b_formula: `R^*_{k,IIB} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,IIB}; \\dfrac{F_{ax,rk}}{4}\\right) = `,
                rk3_prev_formula: `1.15\\cdot\\dfrac{2 \\cdot \\beta}{\\sqrt{1+\\beta}} \\sqrt{2 \\cdot M_{y,k} \\cdot f_{h,1,k} \\cdot d} = `,
                rk3_formula: `R^*_{k,III} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,III}; \\dfrac{F_{ax,rk}}{4}\\right) = `,

                rk1a_formulaVal: `${fh1k} \\cdot ${t1} \\cdot ${d} = `,
                rk1b_formulaVal: `${fh2k} \\cdot ${t1} \\cdot ${d} = `,
                rk1c_prev_formulaVal: `\\dfrac{${fh1k} \\cdot ${t1} \\cdot ${d}}{1+${beta}} \\left[ \\sqrt{${beta} + 2\\cdot ${beta}^2 \\left[ 1 + \\dfrac{${t2}}{${t1}} + \\left( \\dfrac{${t2}}{${t1}} \\right)^2 \\right] + ${beta}^3 \\cdot\\left( \\dfrac{${t2}}{${t1}} \\right)^2} - \\beta\\cdot \\left( 1 + \\dfrac{${t2}}{${t1}} \\right) \\right] = `,
                rk1c_formulaVal: `${rk1c_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk1c_prev}; \\dfrac{${fax_rk}{4}\\right) = `,
                rk2a_prev_formulaVal: `1.05\\cdot\\dfrac{${fh1k} \\cdot ${t1} \\cdot ${d}}{2+${beta}} \\left[ \\sqrt{2\\cdot ${beta}\\cdot (1+${beta}) + \\dfrac{4 \\cdot ${beta} \\cdot(2+${beta}) \\cdot ${myrk}}{${fh1k} \\cdot ${d} \\cdot ${t1}^2}} - ${beta} \\right] = `,
                rk2a_formulaVal: `${rk2a_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk2a_prev}; \\dfrac{${fax_rk}{4}\\right) = `,
                rk2b_prev_formulaVal: `1.05\\cdot\\dfrac{${fh1k} \\cdot ${t2} \\cdot ${d}}{1+2\\cdot ${beta}} \\left[ \\sqrt{2 \\cdot ${beta}^2\\cdot(1+${beta}) + \\dfrac{4 \\cdot ${beta}\\cdot(1+2\\cdot ${beta}) \\cdot ${myrk}}{${fh1k} \\cdot ${d} \\cdot ${t2}^2}} - ${beta} \\right] = `,
                rk2b_formulaVal: `${rk2b_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk2b_prev}; \\dfrac{${fax_rk}{4}\\right) = `,
                rk3_prev_formulaVal: `1.15\\cdot\\dfrac{2 \\cdot ${beta}}{\\sqrt{1+${beta}}} \\sqrt{2 \\cdot ${myrk} \\cdot ${fh1k} \\cdot ${d}} = `,
                rk3_formulaVal: `${rk3_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk3_prev}; \\dfrac{${fax_rk}{4}\\right) = `,

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
        else if (shearPlane == 2) {

            const rk2a_prev = 1.05 * ((fh1k * t1 * d) / (2 + beta)) * (Math.sqrt(2 * beta * (1 + beta) + ((4 * beta * (2 + beta) * myrk) / (fh1k * (t1 ** 2) * d))) - beta)
            const rk3_prev = 1.15 * Math.sqrt((2 * beta) / (1 + beta)) * Math.sqrt(2 * myrk * fh1k * d)

            return {

                rk1a: fh1k * t1 * d,
                rk1b: 0.5 * fh2k * t2 * d,
                rk2a_prev: rk2a_prev,
                rk2a: rk2a_prev + Math.min(coeff_fax * rk2a_prev, (fax_rk / 4)),
                rk3_prev: rk3_prev,
                rk3: rk3_prev + Math.min(coeff_fax * rk3_prev, (fax_rk / 4)),

                rk1a_title: `(g) R_{k,IA} = `,
                rk1b_title: `(h) R_{k,IB} = `,
                rk2a_prev_title: `(j) R^*_{k,IIA} = `,
                rk2a_title: `(j) R_{k,IIA} = `,
                rk3_prev_title: `(k) R^*_{k,III} = `,
                rk3_title: `(k) R_{k,III} = `,

                rk1a_formula: `f_{h,1,k} \\cdot t_1 \\cdot d = `,
                rk1b_formula: `0.5 \\cdot f_{h,2,k} \\cdot t_2 \\cdot d = `,
                rk2a_prev_formula: `1.05 \\cdot \\dfrac{f_{h,1,k} \\cdot t_1 \\cdot d}{2+\\beta} \\left[ \\sqrt{2\\cdot\\beta(1+\\beta) + \\dfrac{4 \\cdot \\beta(2+\\beta) \\cdot M_{y,k}}{f_{h,1,k} \\cdot d \\cdot t_1^2}} - \\beta \\right] = `,
                rk2a_formula: `R^*_{k,IIA} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,IIA}; \\dfrac{F_{ax,rk}}{4}\\right) = `,
                rk3_prev_formula: `1.15 \\cdot \\dfrac{2 \\cdot \\beta}{\\sqrt{1+\\beta}} \\sqrt{2 \\cdot M_{y,k} \\cdot f_{h,1,k} \\cdot d} = `,
                rk3_formula: `R^*_{k,III} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,III}; \\dfrac{F_{ax,rk}}{4}\\right) = `,

                rk1a_formulaVal: `${fh1k} \\cdot ${t1} \\cdot ${d} = `,
                rk1b_formulaVal: `0.5 \\cdot ${fh2k} \\cdot ${t2} \\cdot ${d} = `,
                rk2a_prev_formulaVal: `1.05 \\cdot \\dfrac{${fh1k} \\cdot ${t1} \\cdot ${d}}{2+${beta}} \\left[ \\sqrt{2\\cdot ${beta}(1+${beta}) + \\dfrac{4 \\cdot ${beta}(2+${beta}) \\cdot ${myrk}}{${fh1k} \\cdot ${d} \\cdot ${t1}^2}} - ${beta} \\right] = `,
                rk2a_formulaVal: `${rk2a_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk2a_prev}; \\dfrac{${fax_rk}{4}\\right) = `,
                rk3_prev_formulaVal: `1.15 \\cdot \\dfrac{2 \\cdot ${beta}}{\\sqrt{1+${beta}} \\sqrt{2 \\cdot ${myrk} \\cdot ${fh1k} \\cdot ${d}} = `,
                rk3_formulaVal: `${rk3_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk3_prev}; \\dfrac{${fax_rk}{4}\\right) = `,

                rk1a_description: ``,
                rk1b_description: ``,
                rk2a_prev_description: ``,
                rk2a_description: ``,
                rk3_prev_description: ``,
                rk3_description: ``,
            }
        }
    }
    else if (joinType == `acciaio-legno`) {

        if (shearPlane == 1) {

            const rk2a_prev = 1.15 * Math.sqrt(2 * myrk * fh1k * d)
            const rk2b_prev = fh1k * d * t1 * (Math.sqrt(2 + ((4 * myrk) / (fh1k * d * (t1 ** 2)))) - 1)
            const rk3_prev = 2.3 * Math.sqrt(myrk * fh1k * d)

            return {

                rk1a: 0.4 * fh1k * t1 * d,                                                                  //piastra acciao sottile
                rk2a_prev: rk2a_prev,                                                                       //piastra acciao sottile
                rk2a: rk2a_prev + Math.min(coeff_fax * rk2a_prev, (fax_rk / 4)),
                rk1b: fh1k * t1 * d,                                                                        //piastra acciao spessa
                rk2b_prev: rk2b_prev,                                                                       //piastra acciao spessa
                rk2b: rk2b_prev + Math.min(coeff_fax * rk2b_prev, (fax_rk / 4)),
                rk3_prev: rk3_prev,                                                                         //piastra acciao spessa
                rk3: rk3_prev + Math.min(coeff_fax * rk3_prev, (fax_rk / 4)),

                rk1a_title: `(a) R_{k,IA} = `,
                rk2a_prev_title: `(b) R^*_{k,IIA} = `,
                rk2a_title: `(b) R_{k,IIA} = `,
                rk1b_title: `(c) R_{k,IB} = `,
                rk2b_prev_title: `(d) R^*_{k,IIB} = `,
                rk2b_title: `(d) R_{k,IIB} = `,
                rk3_prev_title: `(e) R^*_{k,III} = `,
                rk3_title: `(e) R_{k,III} = `,

                rk1a_formula: `0.4\\cdot f_{h,1,k} \\cdot t_1 \\cdot d = `,
                rk2a_prev_formula: `1.15\\cdot\\sqrt{2\\cdot M_{y,k} \\cdot f_{h,1,k} \\cdot d } = `,
                rk2a_formula: `R^*_{k,IIA} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,IIA}; \\dfrac{F_{ax,rk}}{4}\\right) = `,
                rk1b_formula: `f_{h,1,k} \\cdot t_1 \\cdot d = `,
                rk2b_prev_formula: `f_{h,1,k} \\cdot d \\cdot t_1 \\left[ \\sqrt{2 + \\dfrac{4 \\cdot M_{y,k}}{f_{h,1,k} \\cdot d \\cdot t_1^2}} - 1 \\right] = `,
                rk2b_formula: `R^*_{k,IIB} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,IIB}; \\dfrac{F_{ax,rk}}{4}\\right) = `,
                rk3_prev_formula: `2.3 \\cdot \\sqrt{M_{y,k} \\cdot f_{h,1,k} \\cdot d} = `,
                rk3_formula: `R^*_{k,III} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,III}; \\dfrac{F_{ax,rk}}{4}\\right) = `,

                rk1a_formulaVal: `0.4\\cdot ${fh1k} \\cdot ${t1} \\cdot ${d} = `,
                rk2a_prev_formulaVal: `1.15\\cdot\\sqrt{2\\cdot ${myrk} \\cdot ${fh1k} \\cdot ${d} } = `,
                rk2a_formulaVal: `${rk2a_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk2a_prev}; \\dfrac{${fax_rk}{4}\\right) = `,
                rk1b_formulaVal: `${fh1k} \\cdot ${t1} \\cdot ${d} = `,
                rk2b_prev_formulaVal: `${fh1k} \\cdot ${d} \\cdot ${t1} \\left[ \\sqrt{2 + \\dfrac{4 \\cdot ${myrk}}{${fh1k} \\cdot ${d} \\cdot ${t1}^2}} - 1 \\right] = `,
                rk2b_formulaVal: `${rk2b_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk2b_prev}; \\dfrac{${fax_rk}{4}\\right) = `,
                rk3_prev_formulaVal: `2.3 \\cdot \\sqrt{${myrk} \\cdot ${fh1k} \\cdot ${d}} = `,
                rk3_formulaVal: `${rk3_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk3_prev}; \\dfrac{${fax_rk}{4}\\right) = `,

                rk1a_description: ``,
                rk2a_prev_description: ``,
                rk2a_description: ``,
                rk1b_description: ``,
                rk2b_prev_description: ``,
                rk2b_description: ``,
                rk3_prev_description: ``,
                rk3_description: ``,
            }
        }
        else if (shearPlane == 2) {

            if (acciaio_interno_esterno == 1) {

                const rk2a_prev = fh1k * d * t1 * (Math.sqrt(2 + ((4 * myrk) / (fh1k * d * (t1 ** 2)))) - 1)
                const rk3a_prev = 2.3 * Math.sqrt(myrk * fh1k * d)

                return {
                    rk1a: fh1k * t1 * d,
                    rk2a_prev: rk2a_prev,
                    rk2a: rk2a_prev + Math.min(coeff_fax * rk2a_prev, (fax_rk / 4)),
                    rk3a_prev: rk3a_prev,
                    rk3a: rk3a_prev + Math.min(coeff_fax * rk3a_prev, (fax_rk / 4)),

                    rk1a_title: `(f) R_{k,IA} = `,
                    rk2a_prev_title: `(g) R^*_{k,IIA} = `,
                    rk2a_title: `(g) R_{k,IIA} = `,
                    rk3a_prev_title: `(h) R^*_{k,IIIA} = `,
                    rk3a_title: `(h) R_{k,IIIA} = `,

                    rk1a_formula: `f_{h,1,k} \\cdot t_1 \\cdot d = `,
                    rk2a_prev_formula: `f_{h,1,k} \\cdot d \\cdot t_1 \\left[ \\sqrt{2 + \\dfrac{4 \\cdot M_{y,k}}{f_{h,1,k} \\cdot d \\cdot t_1^2}} - 1 \\right] = `,
                    rk2a_formula: `R^*_{k,IIA} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,IIA}; \\dfrac{F_{ax,rk}}{4}\\right) = `,
                    rk3a_prev_formula: `2.3 \\cdot \\sqrt{M_{y,k} \\cdot f_{h,1,k} \\cdot d} = `,
                    rk3a_formula: `R^*_{k,IIIA} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,IIIA}; \\dfrac{F_{ax,rk}}{4}\\right) = `,

                    rk1a_formulaVal: `${fh1k} \\cdot ${t1} \\cdot ${d} = `,
                    rk2a_prev_formulaVal: `${fh1k} \\cdot ${d} \\cdot ${t1} \\left[ \\sqrt{2 + \\dfrac{4 \\cdot ${myrk}}{${fh1k} \\cdot ${d} \\cdot ${t1}^2}} - 1 \\right] = `,
                    rk2a_formulaVal: `${rk2a_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk2a_prev}; \\dfrac{${fax_rk}{4}\\right) = `,
                    rk3a_prev_formulaVal: `2.3 \\cdot \\sqrt{${myrk} \\cdot ${fh1k} \\cdot ${d}} = `,
                    rk3a_formulaVal: `${rk3a_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk3a_prev}; \\dfrac{${fax_rk}{4}\\right) = `,

                    rk1a_description: ``,
                    rk2a_prev_description: ``,
                    rk2a_description: ``,
                    rk3a_prev_description: ``,
                    rk3a_description: ``,

                }
            }
            else if (acciaio_interno_esterno == 2) {

                const rk3b_prev = 1.15 * Math.sqrt(2 * myrk * fh2k * d)
                const rk3c_prev = 2.3 * Math.sqrt(myrk * fh2k * d)

                return {

                    rk1b: 0.5 * fh2k * t2 * d,
                    rk3b_prev: rk3b_prev,                                                    //piastra acciao sottile
                    rk3b: rk3b_prev + Math.min(coeff_fax * rk3b_prev, (fax_rk / 4)),
                    rk3c_prev: rk3c_prev,                                                    //piastra acciao spessa
                    rk3c: rk3c_prev + Math.min(coeff_fax * rk3c_prev, (fax_rk / 4)),

                    rk1b_title: `(j) R_{k,IB} = `,
                    rk3b_prev_title: `(k) R^*_{k,IIIB} = `,
                    rk3b_title: `(k) R_{k,IIIB} = `,
                    rk3c_prev_title: `(l) R^*_{k,IIIC} = `,
                    rk3c_title: `(l) R_{k,IIIC} = `,

                    rk1b_formula: `0.5\\cdot f_{h,2,k} \\cdot t_2 \\cdot d = `,
                    rk3b_prev_formula: `1.15\\cdot\\sqrt{2\\cdot M_{y,k} \\cdot f_{h,2,k} \\cdot d } = `,
                    rk3b_formula: `R^*_{k,IIIB} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,IIIB}; \\dfrac{F_{ax,rk}}{4}\\right) = `,
                    rk3c_prev_formula: `2.3 \\cdot \\sqrt{M_{y,k} \\cdot f_{h,2,k} \\cdot d} = `,
                    rk3c_formula: `R^*_{k,IIIC} + \\text{min}\\left(${coeff_fax}\\cdot R^*_{k,IIIC}; \\dfrac{F_{ax,rk}}{4}\\right) = `,

                    rk1b_formulaVal: `0.5\\cdot ${fh2k} \\cdot ${t2} \\cdot ${d} = `,
                    rk3b_prev_formulaVal: `1.15\\cdot\\sqrt{2\\cdot ${myrk} \\cdot ${fh2k} \\cdot ${d} } = `,
                    rk3b_formulaVal: `${rk3b_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk3b_prev}; \\dfrac{${fax_rk}{4}\\right) = `,
                    rk3c_prev_formulaVal: `2.3 \\cdot \\sqrt{${myrk} \\cdot ${fh2k} \\cdot ${d}} = `,
                    rk3c_formulaVal: `${rk3c_prev} + \\text{min}\\left(${coeff_fax}\\cdot ${rk3c_prev}; \\dfrac{${fax_rk}{4}\\right) = `,

                    rk1b_description: ``,
                    rk3b_prev_description: ``,
                    rk3b_description: ``,
                    rk3c_prev_description: ``,
                    rk3c_description: ``,

                }
            }
        }
    }
}