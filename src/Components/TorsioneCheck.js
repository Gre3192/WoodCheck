import getGamma from "../Utils/getGamma";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import CheckCard from "./CheckCard";
import getKsh from "../Utils/getKsh";
import { get_fvd } from "../Utils/getResistenze";
import { get_tau_tord } from "../Utils/getTensioni";
import StepBox from "./StepBox";
import { get_TorsioneCheck } from "../Utils/getChecks";

export default function TorsioneCheck(params) {

    const { Med_tor: rawMed_tor } = useRecoilValue(forcesStateAtom)
    const Med_tor = rawMed_tor > 0 ? rawMed_tor : 0
    const isDisabled = Med_tor == 0 ? true : false

    const kmod = 0.7
    const Atot = 26
    const Aeff = 1289.6
    const gm = getGamma('m0')
    const fvk = 9
    const Itor = 98798
    const b = 453


    const { ksh, ksh_title, ksh_formula, ksh_formulaVal, ksh_description } = getKsh('circolare')
    const { tau_tord, tau_tord_title, tau_tord_formula, tau_tord_formulaVal, tau_tord_description } = get_tau_tord(Med_tor, b, Itor)
    const { fvd, fvd_title, fvd_formula, fvd_formulaVal, fvd_description } = get_fvd(kmod, fvk, gm)
    const { check, check_title, check_formulaVal } = get_TorsioneCheck(tau_tord, fvd, ksh)

    const title = 'Verifica a Torsione [NTC18 - 4.4.8.1.10]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <StepBox isFormula={true} isFormulaVal={true}
                title={tau_tord_title}
                formula={tau_tord_formula}
                formulaVal={tau_tord_formulaVal}
                value={tau_tord}
                description={tau_tord_description}
            />
            <hr />
            <StepBox isFormula={true} isFormulaVal={true}
                title={fvd_title}
                formula={fvd_formula}
                formulaVal={fvd_formulaVal}
                value={fvd}
                description={fvd_description}
            />
            <hr />
            <StepBox isFormula={true} isFormulaVal={true}
                title={ksh_title}
                formula={ksh_formula}
                formulaVal={ksh_formulaVal}
                value={ksh}
                description={ksh_description}
            />
            <hr />
        </div>

    const finalContent
        = <StepBox isFormula={true} isFormulaVal={true} isCheck={true}
            title={check_title}
            formula={''}
            formulaVal={check_formulaVal}
            value={check}
            description={''}
        />

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} />;

}

