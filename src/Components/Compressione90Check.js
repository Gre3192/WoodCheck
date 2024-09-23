import getGamma from "../Utils/getGamma";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import CheckCard from "./CheckCard";
import StepBox from "./StepBox";
import { get_sig_c90d } from "../Utils/getTensioni";
import { get_f_c90d } from "../Utils/getResistenze";
import { get_Compressione90Check } from "../Utils/getChecks";
import { useState } from "react";


export default function Compressione90Check(params) {

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const isDisabled = Ned <= 0 ? true : false

    
    const Atot = 26
    const Aeff = 1289.6
    const kmod = 27527
    const fc90k = 45646
    const gm = getGamma('m0')


    const { sig_c90d, sig_c90d_title, sig_c90d_formula, sig_c90d_formulaVal, sig_c90d_description } = get_sig_c90d(Ned, Atot)
    const { f_c90d, f_c90d_title, f_c90d_formula, f_c90d_formulaVal, f_c90d_description } = get_f_c90d(kmod, fc90k, gm)

    const { check, check_title, check_formulaVal } = get_Compressione90Check(sig_c90d, f_c90d)


    const title = 'Verifica a Compressione perpendicolare alla fibratura [NTC18 - \u00A74.4.8.1.4]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={sig_c90d_title}
                formula={sig_c90d_formula}
                formulaVal={sig_c90d_formulaVal}
                value={sig_c90d}
                description={sig_c90d_description}
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

