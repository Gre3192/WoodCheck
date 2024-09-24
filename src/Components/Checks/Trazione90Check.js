import Latex from "react-latex-next";
import get_gammaM from "../../Utils/get_gammaM";
import getCheckSymbol from "../../Utils/getCheckSymbol";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../../Atom/forcesStateAtom";
import CheckCard from "../CheckCard";
import { useState } from "react";
import get_kmod from "../../Utils/get_kmod";
import { meccanicPropSectionAtom } from "../../Atom/meccanicPropSectionAtom";
import { sectionGeometryMassAtom } from "../../Atom/sectionGeometryMassAtom";
import { sectionGeometryAtom } from "../../Atom/sectionGeometryAtom";



export default function Trazione90Check(params) {

    const sectionGeometry = useRecoilValue(sectionGeometryAtom)
    const geometryMass = useRecoilValue(sectionGeometryMassAtom)
    const mecchanicProps = useRecoilValue(meccanicPropSectionAtom)

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed < 0 ? rawNed : 0
    const isDisabled = Ned >= 0 ? true : false




    const Atot = geometryMass?.Atot
    const shape = sectionGeometry?.shape
    const woodType = mecchanicProps?.woodType


    const NcRd = 161
    const check = Ned / NcRd
    const serviceClass = 1
    const classLoad = 'permanente'

    const kmod = get_kmod(woodType, serviceClass, classLoad)
    const gm0 = get_gammaM(woodType)

    
    const title = 'Verifica a Trazione perpendicolare alla fibratura [NTC18 -\u00A74.4.8.1.2]'

    const centralContent =
        <div className="flex flex-col gap-4">

           
                <div className="flex justify-between items-center">
                    <Latex>{`$N_{c,Rd} = \\dfrac{A_{tot}\\cdot f_{yk}}{\\gamma_{M0}} = \\dfrac{${Atot}\\cdot ${fyk}}{${gm0}} = ${NcRd}$`}</Latex>
                    <div>Resistenza a Compressione  per sezioni in Classe 1, 2 e 3</div>
                </div>
        
        </div>

    const finalContent
        = <Latex>{`$\\dfrac{N_{Ed}}{N_{c,Rd}} = \\dfrac{${Ned}}{${NcRd}} = ${check}${getCheckSymbol(check)}$`}</Latex>

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />;

}

