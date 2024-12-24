import Latex from "react-latex-next";
import get_gammaM from "../../Utils/get_gammaM";
import getCheckSymbol from "../../Utils/getCheckSymbol";
import CheckCard from "../CheckCard";
import { useState } from "react";
import get_kmod from "../../Utils/get_kmod";
import setUom from "../../Utils/setUom";



export default function Trazione90Check({ showAll, sectionProp, sectionGeometryMass }) {

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const Ned = sectionProp.actingLoad.Ned.value < 0 ? sectionProp.actingLoad.Ned.value * setUom(sectionProp?.actingLoad?.Ned?.uom) : 0
    const isDisabled = Ned >= 0 ? true : false


    const Atot = sectionGeometryMass?.value?.Atot
    const shape = sectionProp?.geometry?.shape
    const woodType = sectionProp?.mechanics?.woodType
    const serviceClass = sectionProp?.serviceClass
    const durationClass = sectionProp?.durationClass    

    const NcRd = 161
    const check = Ned / NcRd

    const kmod = get_kmod(woodType, serviceClass, durationClass)
    const gm0 = get_gammaM(woodType)

    
    const title = 'Verifica a Trazione perpendicolare alla fibratura [NTC18 -\u00A74.4.8.1.2]'

    const centralContent =
        <div className="flex flex-col gap-4">

           
        
        </div>

    const finalContent
        = <Latex>{`$\\dfrac{N_{Ed}}{N_{c,Rd}} = \\dfrac{${Ned}}{${NcRd}} = ${check}${getCheckSymbol(check)}$`}</Latex>

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return (
      !showAll && isDisabled ? 
      null 
      :
      <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />
    )
}

