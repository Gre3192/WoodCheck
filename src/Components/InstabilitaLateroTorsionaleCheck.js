import getGamma from "../Utils/getGamma";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import CheckCard from "./CheckCard";
import StepBox from "./StepBox";
import { get_sig_myd, get_sig_mzd } from "../Utils/getTensioni";
import { get_f_myd, get_f_mzd } from "../Utils/getResistenze";
import { get_InstabilitaLateroTorsionaleCheck } from "../Utils/getChecks";
import get_lambda_rel_m from "../Utils/get_lambda_rel_m";
import get_sig_m_crit from "../Utils/get_sig_m_crit";
import get_kcrit_m from "../Utils/get_kcrit_m";
import getMcrit from "../Utils/getMcrit";


export default function InstabilitaLateroTorsionaleCheck(params) {

    const { Ned: rawNed, Med_y: rawMed_y, Med_z: rawMed_z } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const Med_y = rawMed_y > 0 ? rawMed_y : 0
    const Med_z = rawMed_z > 0 ? rawMed_z : 0
    const isDisabled = Med_y == 0 && Med_z == 0 ? true : false


    const Atot = 26
    const Aeff = 1289.6
    const kmod = 27527
    const khy = 27527
    const khz = 27527
    const km = 27527
    const fmk = 45646
    const Wel_y = 45646
    const Wel_z = 45646
    const Ig_z = 45646
    const Ig_y = 45646
    const Ig_tor = 45646
    const gm = getGamma('m0')
    const leff = 2.6
    const E005 = 2.6
    const G005 = 2.6


    const { sig_myd, sig_myd_title, sig_myd_formula, sig_myd_formulaVal, sig_myd_description } = get_sig_myd(Med_y, Wel_y)
    const { sig_mzd, sig_mzd_title, sig_mzd_formula, sig_mzd_formulaVal, sig_mzd_description } = get_sig_mzd(Med_z, Wel_z)
    const { f_myd, f_myd_title, f_myd_formula, f_myd_formulaVal, f_myd_description } = get_f_myd(khy, kmod, fmk, gm)
    const { f_mzd, f_mzd_title, f_mzd_formula, f_mzd_formulaVal, f_mzd_description } = get_f_mzd(khz, kmod, fmk, gm)

    const {

        Mcrit_y,
        Mcrit_y_title,
        Mcrit_y_formula,
        Mcrit_y_formulaVal,
        Mcrit_y_description,

        Mcrit_z,
        Mcrit_z_title,
        Mcrit_z_formula,
        Mcrit_z_formulaVal,
        Mcrit_z_description

    } = getMcrit(E005, Ig_z, Ig_y, G005, Ig_tor, leff)

    const {

        sigma_m_crit_y,
        sigma_m_crit_y_title,
        sigma_m_crit_y_formula,
        sigma_m_crit_y_formulaVal,
        sigma_m_crit_y_description,

        sigma_m_crit_z,
        sigma_m_crit_z_title,
        sigma_m_crit_z_formula,
        sigma_m_crit_z_formulaVal,
        sigma_m_crit_z_description

    } = get_sig_m_crit(Mcrit_y, Mcrit_z, Wel_y, Wel_z)

    const {

        lambda_rel_m_y,
        lambda_rel_m_y_title,
        lambda_rel_m_y_formula,
        lambda_rel_m_y_formulaVal,
        lambda_rel_m_y_description,

        lambda_rel_m_z,
        lambda_rel_m_z_title,
        lambda_rel_m_z_formula,
        lambda_rel_m_z_formulaVal,
        lambda_rel_m_z_description

    } = get_lambda_rel_m(fmk, sigma_m_crit_y, sigma_m_crit_z)

    const {

        kcrit_m_y,
        kcrit_m_y_title,
        kcrit_m_y_formula,
        kcrit_m_y_formulaVal,
        kcrit_m_y_description,

        kcrit_m_z,
        kcrit_m_z_title,
        kcrit_m_z_formula,
        kcrit_m_z_formulaVal,
        kcrit_m_z_description

    } = get_kcrit_m(lambda_rel_m_y, lambda_rel_m_z)


    const {

        check1,
        check1_title,
        check1_formula,
        check1_formulaVal,
        check1_description,

        check2,
        check2_title,
        check2_formula,
        check2_formulaVal,
        check2_description,

        check3,
        check3_title,
        check3_formula,
        check3_formulaVal,
        check3_description,

        check4,
        check4_title,
        check4_formula,
        check4_formulaVal,
        check4_description,

    } = get_InstabilitaLateroTorsionaleCheck(sig_myd, sig_mzd, f_myd, f_mzd, km, kcrit_m_y, kcrit_m_z)




    const title = 'Verifica Instabilità Latero-Torsionale - Instabilità di trave [NTC18 - \u00A74.4.8.2.1]'

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
        </div>

    const finalContent =
        <StepBox isFormula={true} isFormulaVal={true} isCheck={true}
            title={[check1_title, check2_title, check3_title, check4_title]}
            formula={[check1_formula, check2_formula, check3_formula, check4_formula]}
            formulaVal={[check1_formulaVal, check2_formulaVal, check3_formulaVal, check4_formulaVal]}
            value={[check1, check2, check3, check4]}
            description={[check1_description, check2_description, check3_description, check4_description]}
        />

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: [check1, check2, check3, check4], isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} />;

}

