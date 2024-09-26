import get_gammaM from "../../Utils/get_gammaM";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../../Atom/forcesStateAtom";
import CheckCard from "../CheckCard";
import StepBox from "../StepBox";
import { get_sig_cAlphad } from "../../Utils/getTensioni";
import { get_f_cAlphad, get_f_c0d, get_f_c90d } from "../../Utils/getResistenze";
import { get_CompressioneAlphaCheck } from "../../Utils/getChecks";
import { useState } from "react";
import get_kmod from "../../Utils/get_kmod";
import { sectionGeometryMassAtom } from "../../Atom/sectionGeometryMassAtom";
import { meccanicPropSectionAtom } from "../../Atom/meccanicPropSectionAtom";
import { serviceDurationClassAtom } from "../../Atom/serviceDurationClassAtom";



export default function CompressioneAlphaCheck(params) {

    const geometryMass = useRecoilValue(sectionGeometryMassAtom)
    const mecchanicProps = useRecoilValue(meccanicPropSectionAtom)
    const serviceDuration = useRecoilValue(serviceDurationClassAtom)


    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const isDisabled = Ned <= 0 ? true : false


    const Atot = geometryMass?.value.Atot
    const fc0k = mecchanicProps?.fc0k
    const fc90k = mecchanicProps?.fc90k
    const woodType = mecchanicProps?.woodType
    const serviceClass = serviceDuration?.serviceClass
    const durationClass = serviceDuration?.durabilityClass

    const alpha = 45




    const kmod = get_kmod(woodType, serviceClass, durationClass)

    const gm = get_gammaM(woodType)

    const {

        sig_cAlphad,
        sig_cAlphad_title,
        sig_cAlphad_formula,
        sig_cAlphad_formulaVal,
        sig_cAlphad_description

    } = get_sig_cAlphad(Ned, Atot)

    const {

        f_c0d,
        f_c0d_title,
        f_c0d_formula,
        f_c0d_formulaVal,
        f_c0d_description

    } = get_f_c0d(kmod, fc0k, gm)

    const {

        f_c90d,
        f_c90d_title,
        f_c90d_formula,
        f_c90d_formulaVal,
        f_c90d_description

    } = get_f_c90d(kmod, fc90k, gm)

    const {

        f_cAlphad,
        f_cAlphad_title,
        f_cAlphad_formula,
        f_cAlphad_formulaVal,
        f_cAlphad_description

    } = get_f_cAlphad(f_c0d, f_c90d, alpha)

    const {

        check,
        check_title,
        check_formulaVal

    } = get_CompressioneAlphaCheck(sig_cAlphad, f_cAlphad)




    const title = 'Verifica a Compressione inclinata rispetto alla fibratura [NTC18 - \u00A74.4.8.1.5]'

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
                title={sig_cAlphad_title}
                formula={sig_cAlphad_formula}
                formulaVal={sig_cAlphad_formulaVal}
                value={sig_cAlphad}
                description={sig_cAlphad_description}
            />
            <hr />
            <div className="mb-2 font-semibold ">Calcolo Resistenze</div>
            <div className="flex flex-col gap-7">
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={f_c0d_title}
                    formula={f_c0d_formula}
                    formulaVal={f_c0d_formulaVal}
                    value={f_c0d}
                    description={f_c0d_description}
                />
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={f_c90d_title}
                    formula={f_c90d_formula}
                    formulaVal={f_c90d_formulaVal}
                    value={f_c90d}
                    description={f_c90d_description}
                />
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={f_cAlphad_title}
                    formula={f_cAlphad_formula}
                    formulaVal={f_cAlphad_formulaVal}
                    value={f_cAlphad}
                    description={f_cAlphad_description}
                />
            </div>
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

