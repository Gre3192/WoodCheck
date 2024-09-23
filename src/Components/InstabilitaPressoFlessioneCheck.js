import getGamma from "../Utils/getGamma";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import CheckCard from "./CheckCard";
import StepBox from "./StepBox";
import { get_sig_c0d, get_sig_myd, get_sig_mzd } from "../Utils/getTensioni";
import { get_f_c0d, get_f_myd, get_f_mzd } from "../Utils/getResistenze";
import { useState } from "react";
import getMcrit from "../Utils/getMcrit";
import get_sig_m_crit from "../Utils/get_sig_m_crit";
import get_lambda_rel_m from "../Utils/get_lambda_rel_m";
import get_kcrit_m from "../Utils/get_kcrit_m";
import get_Ncr from "../Utils/get_Ncr";
import get_lambda_c from "../Utils/get_lambda_c";
import get_lambda_rel_c from "../Utils/get_lambda_rel_c";
import get_beta_c from "../Utils/get_beta_c";
import get_k from "../Utils/get_k";
import get_kcrit_c from "../Utils/get_kcrit_c";


export default function InstabilitaPressoFlessioneCheck(params) {

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed, Med_y: rawMed_y, Med_z: rawMed_z } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const Med_y = rawMed_y > 0 ? rawMed_y : 0
    const Med_z = rawMed_z > 0 ? rawMed_z : 0
    const isDisabled = Med_y == 0 && Med_z == 0 ? true : false


    const Atot = 26
    const kmod = 27527
    const fc0k = 45646
    const fmk = 45646
    const Wel_y = 45646
    const Wel_z = 45646
    const Ig_y = 45646
    const Ig_z = 45646
    const Ig_tor = 45646
    const khy = 45646
    const khz = 45646
    const leff = 45646
    const L = 45646
    const gm = getGamma('m0')
    const woodType = 'lamellare'
    const beta_y = 0.7
    const beta_z = 0.2
    const E005 = 0.7
    const G005 = 0.7



    const {

        sig_c0d,
        sig_c0d_title,
        sig_c0d_formula,
        sig_c0d_formulaVal,
        sig_c0d_description

    } = get_sig_c0d(Ned, Atot)

    const {

        sig_myd,
        sig_myd_title,
        sig_myd_formula,
        sig_myd_formulaVal,
        sig_myd_description

    } = get_sig_myd(Med_y, Wel_y)

    const {

        sig_mzd,
        sig_mzd_title,
        sig_mzd_formula,
        sig_mzd_formulaVal,
        sig_mzd_description

    } = get_sig_mzd(Med_z, Wel_z)

    const {

        f_c0d,
        f_c0d_title,
        f_c0d_formula,
        f_c0d_formulaVal,
        f_c0d_description

    } = get_f_c0d(kmod, fc0k, gm)

    const {

        f_myd,
        f_myd_title,
        f_myd_formula,
        f_myd_formulaVal,
        f_myd_description

    } = get_f_myd(khy, kmod, fmk, gm)

    const {

        f_mzd,
        f_mzd_title,
        f_mzd_formula,
        f_mzd_formulaVal,
        f_mzd_description

    } = get_f_mzd(khz, kmod, fmk, gm)

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

        Ncr_y,
        Ncr_y_title,
        Ncr_y_formula,
        Ncr_y_formulaVal,
        Ncr_y_description,

        Ncr_z,
        Ncr_z_title,
        Ncr_z_formula,
        Ncr_z_formulaVal,
        Ncr_z_description

    } = get_Ncr(L, beta_y, beta_z, Ig_y, Ig_z, E005)

    const {

        lambda_c_y,
        lambda_c_y_title,
        lambda_c_y_formula,
        lambda_c_y_formulaVal,
        lambda_c_y_description,

        lambda_c_z,
        lambda_c_z_title,
        lambda_c_z_formula,
        lambda_c_z_formulaVal,
        lambda_c_z_description

    } = get_lambda_c(Atot, fc0k, Ncr_y, Ncr_z)

    const {

        lambda_rel_c_y,
        lambda_rel_c_y_title,
        lambda_rel_c_y_formula,
        lambda_rel_c_y_formulaVal,
        lambda_rel_c_y_description,

        lambda_rel_c_z,
        lambda_rel_c_z_title,
        lambda_rel_c_z_formula,
        lambda_rel_c_z_formulaVal,
        lambda_rel_c_z_description,

    } = get_lambda_rel_c(lambda_c_y, lambda_c_z, fc0k, E005)

    const {

        beta_c,
        beta_c_title,
        beta_c_formula,
        beta_c_formulaVal,
        beta_c_description,

    } = get_beta_c(woodType)

    const {

        k_y,
        k_y_title,
        k_y_formula,
        k_y_formulaVal,
        k_y_description,

        k_z,
        k_z_title,
        k_z_formula,
        k_z_formulaVal,
        k_z_description,

    } = get_k(beta_c, lambda_rel_c_y, lambda_rel_c_z)

    const {

        kcrit_c_z,
        kcrit_c_z_title,
        kcrit_c_z_formula,
        kcrit_c_z_formulaVal,
        kcrit_c_z_description,

        kcrit_c_y,
        kcrit_c_y_title,
        kcrit_c_y_formula,
        kcrit_c_y_formulaVal,
        kcrit_c_y_description,

    } = get_kcrit_c(k_y, k_z, lambda_rel_c_y, lambda_rel_c_z)



    
    const title = 'Verifica a Instabilità a Presso-Flessione - Instabilità composta trave-colonna [CNR DT 206-R1/2018 - \u00A77.6.1.2.3]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={sig_c0d_title}
                formula={sig_c0d_formula}
                formulaVal={sig_c0d_formulaVal}
                value={sig_c0d}
                description={sig_c0d_description}
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

