import customDecimal from "./customDecimal"


export default function get_MyRk() {



    const joinType = 'chodi'
    const gamboShape = 'cilindrico'



    if (joinType.toLowerCase().includes('chiodi')) {
        if (gamboShape == 'cilindrico') {
            return {
                My_Rk: 0.3 * fu * d ** (2.6),
                My_Rk_title: `M_{y,Rk} = `,
                My_Rk_formula: `0.3\\cdot f_u\\cdot d^{2.6} = `,
                My_Rk_formulaVal: `0.3\\cdot ${fu}\\cdot ${d}^{2.6} = `,
                My_Rk_description: `Momento caratteristico di snervamento per chiodi con gambo cilindrico`,
            }
        }
        else {
            return {
                My_Rk: 0.45 * fu * d ** (2.6),
                My_Rk_title: `M_{y,Rk} = `,
                My_Rk_formula: `0.45\\cdot f_u\\cdot d^{2.6} = `,
                My_Rk_formulaVal: `0.45\\cdot ${fu}\\cdot ${d}^{2.6} = `,
                My_Rk_description: `Momento caratteristico di snervamento per chiodi con gambo quadro e scanalato`,
            }
        }
    }
    else if (joinType.toLowerCase().includes('bulloni') || joinType.toLowerCase().includes('spinotti')) {
        return {
            My_Rk: 0.3 * fu * d ** (2.6),
            My_Rk_title: `M_{y,Rk} = `,
            My_Rk_formula: `0.3\\cdot f_u\\cdot d^{2.6} = `,
            My_Rk_formulaVal: `0.3\\cdot ${fu}\\cdot ${d}^{2.6} = `,
            My_Rk_description: `Momento caratteristico di snervamento ${joinType.toLowerCase().includes('bulloni') ? 'per bulloni' : 'per spinotti'}`,
        }
    }
    else if (joinType.toLowerCase().includes('viti')) {
        if (d <= 6) {
            if (gamboShape == 'cilindrico') {
                return {
                    My_Rk: 0.3 * fu * d ** (2.6),
                    My_Rk_title: `M_{y,Rk} = `,
                    My_Rk_formula: `0.3\\cdot f_u\\cdot d^{2.6} = `,
                    My_Rk_formulaVal: `0.3\\cdot ${fu}\\cdot ${d}^{2.6} = `,
                    My_Rk_description: `Momento caratteristico di snervamento per viti, con $d\\leq 6$ e gambo cilindrico`,
                }
            }
            else {
                return {
                    My_Rk: 0.45 * fu * d ** (2.6),
                    My_Rk_title: `M_{y,Rk} = `,
                    My_Rk_formula: `0.45\\cdot f_u\\cdot d^{2.6} = \\cdot f_u\\cdot d^{2.6} = `,
                    My_Rk_formulaVal: `0.45\\cdot ${fu}\\cdot ${d}^{2.6} = `,
                    My_Rk_description: `Momento caratteristico di snervamento per viti, con $d\\leq 6$ e gambo quadrato`,
                }
            }
        }
        else {
            return {
                My_Rk: 0.3 * fu * d ** (2.6),
                My_Rk_title: `M_{y,Rk} = `,
                My_Rk_formula: `0.3\\cdot f_u\\cdot d^{2.6} = \\cdot f_u\\cdot d^{2.6} = `,
                My_Rk_formulaVal: `0.3\\cdot ${fu}\\cdot ${d}^{2.6} = `,
                My_Rk_description: `Momento caratteristico di snervamento viti con $d>6 e forma del gambo qualsiasi$`,
            }
        }
    }
    else if (joinType.toLowerCase().includes('graffe') || joinType.toLowerCase().includes('cambratte')) {
        return {
            My_Rk: 240 * (d ** (2.6)),
            My_Rk_title: `M_{y,Rk} = `,
            My_Rk_formula: `240\\cdot d^{2.6} = `,
            My_Rk_formulaVal: `240\\cdot ${d}^{2.6} = `,
            My_Rk_description: `Momento caratteristico di snervamento ${joinType.toLowerCase().includes('graffe') ? 'per graffe' : 'per cambratte'}`,
        }
    }
}