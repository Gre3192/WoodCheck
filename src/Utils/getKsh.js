export default function getKsh(shape = `circolare`,h = null,b = null) {

    if (shape.toLocaleLowerCase() === `circolare`)
        return {
            ksh: 1.2,
            ksh_title: `k_{sh} = `,
            ksh_formula: ``,
            ksh_formulaVal: ``,
            ksh_description: `Coefficiente di forma per sezioni circolari piene`
        }
    else if (shape.toLocaleLowerCase() === `rettangolare`) {

        return {
            ksh: Math.min(1 + 0.15 * (h / b), 2),
            ksh_title: `k_{sh} = `,
            ksh_formula: `\\min\\left[1+0.15\\cdot\\left(\\dfrac{h}{b}\\right), 2\\right] = `,
            ksh_formulaVal: `\\min\\left[1+0.15\\cdot\\left(\\dfrac{${h}}{${b}}\\right); 2\\right] = `,
            ksh_description: `Coefficiente di forma per sezioni rettangolari piene, di lati b e h con b<h`
        }
    }
    else
        return {
            ksh: 1,
            ksh_title: `k_{sh} = `,
            ksh_formula: ``,
            ksh_formulaVal: ``,
            ksh_description: `Coefficiente di forma per sezioni diverse da rettangolari e circolari`
        }
}