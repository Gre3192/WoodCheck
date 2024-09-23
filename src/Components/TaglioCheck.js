import getGamma from "../Utils/getGamma";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import { get_tau_d } from "../Utils/getTensioni"
import { get_fvd } from "../Utils/getResistenze"
import { get_TaglioCheck } from "../Utils/getChecks";
import CheckCard from "./CheckCard";
import StepBox from "./StepBox";
import { useState } from "react";


export default function TaglioCheck(params) {

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ved_y: rawVed_y, Ved_z: rawVed_z } = useRecoilValue(forcesStateAtom)
    const Ved_y = rawVed_y > 0 ? rawVed_y : 0
    const Ved_z = rawVed_z > 0 ? rawVed_z : 0
    const isDisabled = Ved_y == 0 && Ved_z == 0 ? true : false


    const shape = true
    const Atot = 26
    const Aeff = 1289.6
    const gm = getGamma('m0')
    const kmod = 0.7
    const fvk = 9


    const { tau_d, tau_d_title, tau_d_formula, tau_d_formulaVal, tau_d_description } = get_tau_d(shape, Ved_y, Ved_z, Atot)
    const { fvd, fvd_title, fvd_formula, fvd_formulaVal, fvd_description } = get_fvd(kmod, fvk, gm)
    const { check, check_title, check_formulaVal } = get_TaglioCheck(tau_d, fvd)


    const title = 'Verifica a Taglio [NTC18 - \u00A74.4.8.1.9]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={tau_d_title}
                formula={tau_d_formula}
                formulaVal={tau_d_formulaVal}
                value={tau_d}
                description={tau_d_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={fvd_title}
                formula={fvd_formula}
                formulaVal={fvd_formulaVal}
                value={fvd}
                description={fvd_description}
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

