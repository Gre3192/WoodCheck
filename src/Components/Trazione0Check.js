import get_gammaM from "../Utils/get_gammaM";
import getCheckSymbol from "../Utils/getCheckSymbol";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import CheckCard from "./CheckCard";
import Latex from "react-latex-next";
import { useState } from "react";


export default function Trazione0Check(params) {

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);
    
    const { Ned: rawNed } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed < 0 ? rawNed : 0
    const geometryMass = 464
    const fyk = 453


    const isDisabled = Ned >= 0 ? true : false

    

    const Atot = 26
    const Aeff = 1289.6
    const woodType = 'lamellare'
    
    const NcRd = 161
    const check = Ned / NcRd



    
    const gm0 = get_gammaM(woodType)
    
    const title = 'Verifica a Trazione parallela alla fibratura [NTC18 - \u00A74.4.8.1.1]'

    const centralContent =
        <div className="flex flex-col gap-4">

           
                <div className="flex justify-between items-center">
                    <Latex>{`$N_{c,Rd} = \\dfrac{A_{tot}\\cdot f_{yk}}{\\gamma_{M0}} = \\dfrac{${Atot}\\cdot ${fyk}}{${gm0}} = ${NcRd}$`}</Latex>
                    <div>Resistenza a Compressione  per sezioni in Classe 1, 2 e 3</div>
                </div>
        
        </div>

    const finalContent
        = <Latex>{`$\\dfrac{\\sigma_{t,0,d}}{f_{t,0,d}} = \\dfrac{${Ned}}{${NcRd}} = ${check}${getCheckSymbol(check)}$`}</Latex>

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />;

}

