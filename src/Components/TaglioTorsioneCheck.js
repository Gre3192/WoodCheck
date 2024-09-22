import getGamma from "../Utils/getGamma";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import CheckCard from "./CheckCard";
import getKsh from "../Utils/getKsh";
import { get_tau_tord, get_tau_d } from "../Utils/getTensioni";
import { get_fvd } from "../Utils/getResistenze";
import { get_TaglioTorsioneCheck } from "../Utils/getChecks";
import StepBox from "./StepBox";

export default function TaglioTorsioneCheck(params) {

    const { Med_tor: rawMed_tor, Ved_y: rawVed_y, Ved_z: rawVed_z } = useRecoilValue(forcesStateAtom)
    const Med_tor = rawMed_tor > 0 ? rawMed_tor : 0
    const Ved_y = rawVed_y > 0 ? rawVed_y : 0
    const Ved_z = rawVed_z > 0 ? rawVed_z : 0
    const isDisabled = Ved_y == 0 && Ved_z == 0 && Med_tor == 0 ? true : false


    const Atot = 26
    const Aeff = 1289.6
    const gm = getGamma('m0')
    const shape = true
    const kmod = 465
    const fvk = 9
    const Itor = 98798
    const b = 453


    const { tau_tord, tau_tord_title, tau_tord_formula, tau_tord_formulaVal, tau_tord_description } = get_tau_tord(Med_tor, b, Itor)
    const { tau_d, tau_d_title, tau_d_formula, tau_d_formulaVal, tau_d_description } = get_tau_d(shape, Ved_y, Ved_z, Atot)
    const { fvd, fvd_title, fvd_formula, fvd_formulaVal, fvd_description } = get_fvd(kmod, fvk, gm)
    const { ksh, ksh_title, ksh_formula, ksh_formulaVal, ksh_description } = getKsh('circolare')
    const { check, check_title, check_formulaVal } = get_TaglioTorsioneCheck(tau_tord, tau_d, fvd, ksh)


    const title = 'Verifica a Taglio e Torsione [NTC18 - \u00A74.4.8.1.11]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <StepBox isFormula={true} isFormulaVal={true}
                title={tau_d_title}
                formula={tau_d_formula}
                formulaVal={tau_d_formulaVal}
                value={tau_d}
                description={tau_d_description}
            />
            <hr />
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

