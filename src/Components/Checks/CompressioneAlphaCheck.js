import get_gammaM from "../../Utils/get_gammaM";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../../Atom/forcesStateAtom";
import CheckCard from "../CheckCard";
import StepBox from "../StepBox";
import { get_sig_cAlphad } from "../../Utils/getTensioni";
import { get_f_cAlphad, get_f_c0d, get_f_c90d } from "../../Utils/getResistenze";
import { get_CompressioneAlphaCheck } from "../../Utils/getChecks";
import { useState } from "react";
import getKmod from "../../Utils/getKmod";


export default function CompressioneAlphaCheck(params) {

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0


    const isDisabled = Ned <= 0 ? true : false


    const Atot = 26
    const fc0k = 45646
    const fc90k = 45646
    const alpha = 45
    const serviceClass = 1
    const classLoad = 'permanente'
    const woodType = 'lamellare'



    const kmod = getKmod(woodType, serviceClass, classLoad)

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
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={sig_cAlphad_title}
                formula={sig_cAlphad_formula}
                formulaVal={sig_cAlphad_formulaVal}
                value={sig_cAlphad}
                description={sig_cAlphad_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={f_c0d_title}
                formula={f_c0d_formula}
                formulaVal={f_c0d_formulaVal}
                value={f_c0d}
                description={f_c0d_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={f_c90d_title}
                formula={f_c90d_formula}
                formulaVal={f_c90d_formulaVal}
                value={f_c90d}
                description={f_c90d_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={f_cAlphad_title}
                formula={f_cAlphad_formula}
                formulaVal={f_cAlphad_formulaVal}
                value={f_cAlphad}
                description={f_cAlphad_description}
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

