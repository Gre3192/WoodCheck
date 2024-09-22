import Latex from "react-latex-next";
import getGamma from "../Utils/getGamma";
import getCheckSymbol from "../Utils/getCheckSymbol";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import customDecimal from "../Utils/customDecimal";
import CheckCard from "./CheckCard";
import StepBox from "./StepBox";
import { get_sig_c0d } from "../Utils/getTensioni";
import { get_f_c0d } from "../Utils/getResistenze";
import { get_Compressione0Check } from "../Utils/getChecks";


export default function Compressione0Check(params) {

    const { Ned: rawNed } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const isDisabled = Ned <= 0 ? true : false



    const Atot = 26
    const Aeff = 1289.6
    const kmod = 27527
    const fc0k = 45646
    const gm = getGamma('m0')

    const { sig_c0d, sig_c0d_title, sig_c0d_formula, sig_c0d_formulaVal, sig_c0d_description } = get_sig_c0d(Ned, Atot)
    const { f_c0d, f_c0d_title, f_c0d_formula, f_c0d_formulaVal, f_c0d_description } = get_f_c0d(kmod, fc0k, gm)

    const { check, check_title, check_formulaVal } = get_Compressione0Check(sig_c0d, f_c0d)



    const title = 'Verifica a Compressione parallela alla fibratura [NTC18 - 4.4.8.1.3]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <StepBox isFormula={true} isFormulaVal={true}
                title={sig_c0d_title}
                formula={sig_c0d_formula}
                formulaVal={sig_c0d_formulaVal}
                value={sig_c0d}
                description={sig_c0d_description}
            />
            <hr />
            <StepBox isFormula={true} isFormulaVal={true}
                title={f_c0d_title}
                formula={f_c0d_formula}
                formulaVal={f_c0d_formulaVal}
                value={f_c0d}
                description={f_c0d_description}
            />
            <hr />
        </div>

    const finalContent =
        <StepBox isFormula={true} isFormulaVal={true} isCheck={true}
            title={check_title}
            formula={''}
            formulaVal={check_formulaVal}
            value={check}
            description={''}
        />

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} />;

}

