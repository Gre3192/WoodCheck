import get_gammaM from "../../Utils/get_gammaM";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../../Atom/forcesStateAtom";
import CheckCard from "../CheckCard";
import StepBox from "../StepBox";
import { get_sig_c90d } from "../../Utils/getTensioni";
import { get_f_c90d } from "../../Utils/getResistenze";
import { get_Compressione90Check } from "../../Utils/getChecks";
import { useState } from "react";
import get_kmod from "../../Utils/get_kmod";
import { sectionGeometryMassAtom } from "../../Atom/sectionGeometryMassAtom";
import { meccanicPropSectionAtom } from "../../Atom/meccanicPropSectionAtom";
import { serviceDurationClassAtom } from "../../Atom/serviceDurationClassAtom";


export default function Compressione90Check(params) {

    
    const geometryMass = useRecoilValue(sectionGeometryMassAtom)
    const mecchanicProps = useRecoilValue(meccanicPropSectionAtom)
    const serviceDuration = useRecoilValue(serviceDurationClassAtom)

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const isDisabled = Ned <= 0 ? true : false


    const Atot = geometryMass?.value.Atot
    const fc90k = mecchanicProps?.fc90k
    const woodType = mecchanicProps?.woodType
    const serviceClass = serviceDuration?.serviceClass
    const durationClass = serviceDuration?.durabilityClass



    const kmod = get_kmod(woodType, serviceClass, durationClass)

    const gm = get_gammaM(woodType)

    const {

        sig_c90d,
        sig_c90d_title,
        sig_c90d_formula,
        sig_c90d_formulaVal,
        sig_c90d_description

    } = get_sig_c90d(Ned, Atot)

    const {

        f_c90d,
        f_c90d_title,
        f_c90d_formula,
        f_c90d_formulaVal,
        f_c90d_description

    } = get_f_c90d(kmod, fc90k, gm)

    const {

        check,
        check_title,
        check_formulaVal

    } = get_Compressione90Check(sig_c90d, f_c90d)


    const title = 'Verifica a Compressione perpendicolare alla fibratura [NTC18 - \u00A74.4.8.1.4]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <div className="mb-2 font-semibold ">Calcolo Geometria</div>
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={geometryMass?.title.Atot}
                formula={geometryMass?.formula.Atot}
                formulaVal={geometryMass?.formulaVal.Atot}
                value={geometryMass?.value.Atot}
                description={geometryMass?.description.Atot}
            />
            <hr />
            <div className="mb-2 font-semibold ">Calcolo Tensioni</div>
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={sig_c90d_title}
                formula={sig_c90d_formula}
                formulaVal={sig_c90d_formulaVal}
                value={sig_c90d}
                description={sig_c90d_description}
            />
            <hr />
            <div className="mb-2 font-semibold ">Calcolo Resistenze</div>
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={f_c90d_title}
                formula={f_c90d_formula}
                formulaVal={f_c90d_formulaVal}
                value={f_c90d}
                description={f_c90d_description}
            />
            <hr />
        </div>

    const finalContent =
        <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected} isCheck={true}
            title={check_title}
            formula={''}
            formulaVal={check_formulaVal}
            value={check}
            description={''}
        />

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />;

}

