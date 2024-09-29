import get_gammaM from "../../Utils/get_gammaM";
import getCheckSymbol from "../../Utils/getCheckSymbol";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../../Atom/forcesStateAtom";
import CheckCard from "../CheckCard";
import Latex from "react-latex-next";
import { useState } from "react";
import get_kmod from "../../Utils/get_kmod";
import { meccanicPropSectionAtom } from "../../Atom/meccanicPropSectionAtom";
import { sectionGeometryMassAtom } from "../../Atom/sectionGeometryMassAtom";
import { sectionGeometryAtom } from "../../Atom/sectionGeometryAtom";
import { serviceDurationClassAtom } from "../../Atom/serviceDurationClassAtom";



export default function Trazione0Check({ showAll }) {

    const sectionGeometry = useRecoilValue(sectionGeometryAtom)
    const geometryMass = useRecoilValue(sectionGeometryMassAtom)
    const mecchanicProps = useRecoilValue(meccanicPropSectionAtom)
    const serviceDuration = useRecoilValue(serviceDurationClassAtom)

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed < 0 ? rawNed : 0
    const isDisabled = Ned >= 0 ? true : false



    const Atot = geometryMass?.Atot
    const shape = sectionGeometry?.shape
    const woodType = mecchanicProps?.woodType
    const serviceClass = serviceDuration?.serviceClass
    const durationClass = serviceDuration?.durabilityClass  



    const NcRd = 161
    const check = Ned / NcRd



    const kmod = get_kmod(woodType, serviceClass, durationClass)
    const gm0 = get_gammaM(woodType)

    const title = 'Verifica a Trazione parallela alla fibratura [NTC18 - \u00A74.4.8.1.1]'

    const centralContent =
        <div className="flex flex-col gap-4">




        </div>

    const finalContent
        = <Latex>{`$\\dfrac{\\sigma_{t,0,d}}{f_{t,0,d}} = \\dfrac{${Ned}}{${NcRd}} = ${check}${getCheckSymbol(check)}$`}</Latex>

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return (
      !showAll && isDisabled ? 
      null 
      :
      <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />
    )
}

