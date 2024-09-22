import getGamma from "../Utils/getGamma";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import CheckCard from "./CheckCard";
import getKm from "../Utils/getKm";
import { get_sig_myd, get_sig_mzd } from "../Utils/getTensioni"
import { get_f_myd, get_f_mzd } from "../Utils/getResistenze"
import StepBox from "./StepBox";
import { get_flessioneCheck } from "../Utils/getChecks";

export default function FlessioneCheck(params) {

    const { Med_y: rawMed_y, Med_z: rawMed_z } = useRecoilValue(forcesStateAtom)
    const Med_y = rawMed_y > 0 ? rawMed_y : 0
    const Med_z = rawMed_z > 0 ? rawMed_z : 0
    const isDisabled = Med_y == 0 && Med_z == 0 ? true : false


    const Atot = 26
    const Aeff = 1289.6
    const Wel_y = 1289.6
    const Wel_z = 1289.6
    const khy = 1289.6
    const khz = 1289.6
    const fmk = 1289.6

    const gm = getGamma('m0')
    const km = getKm('rettangolare')
    const kmod = 0.7


    const { sig_myd, sig_myd_title, sig_myd_formula, sig_myd_formulaVal, sig_myd_description } = get_sig_myd(Med_y, Wel_y)
    const { sig_mzd, sig_mzd_title, sig_mzd_formula, sig_mzd_formulaVal, sig_mzd_description } = get_sig_mzd(Med_z, Wel_z)
    const { f_myd, f_myd_title, f_myd_formula, f_myd_formulaVal, f_myd_description } = get_f_myd(khy, kmod, fmk, gm)
    const { f_mzd, f_mzd_title, f_mzd_formula, f_mzd_formulaVal, f_mzd_description } = get_f_mzd(khz, kmod, fmk, gm)
    const { check_z, check_z_title, check_z_formulaVal, check_y, check_y_title, check_y_formulaVal } = get_flessioneCheck(sig_myd, sig_mzd, f_myd, f_mzd, km)

    // -------------------------------------------------------------------------------
    const title = 'Verifica a Flessione [NTC18 - 4.4.8.1.6]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <StepBox isFormula={true} isFormulaVal={true}
                title={sig_myd_title}
                formula={sig_myd_formula}
                formulaVal={sig_myd_formulaVal}
                value={sig_myd}
                description={sig_myd_description}
            />
            <hr />
            <StepBox isFormula={true} isFormulaVal={true}
                title={sig_mzd_title}
                formula={sig_mzd_formula}
                formulaVal={sig_mzd_formulaVal}
                value={sig_mzd}
                description={sig_mzd_description}
            />
            <hr />
            <StepBox isFormula={true} isFormulaVal={true}
                title={f_myd_title}
                formula={f_myd_formula}
                formulaVal={f_myd_formulaVal}
                value={f_myd}
                description={f_myd_description}
            />
            <hr />
            <StepBox isFormula={true} isFormulaVal={true}
                title={f_mzd_title}
                formula={f_mzd_formula}
                formulaVal={f_mzd_formulaVal}
                value={f_mzd}
                description={f_mzd_description}
            />
            <hr />

        </div>

    const finalContent =
        <StepBox isFormula={true} isFormulaVal={true} isCheck={true}
            title={[check_z_title, check_y_title]}
            formula={[]}
            formulaVal={[check_z_formulaVal, check_y_formulaVal]}
            value={[check_z, check_y]}
            description={[]}
        />

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: [check_y, check_z], isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} />;

}

