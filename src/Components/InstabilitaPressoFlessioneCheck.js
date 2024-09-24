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
import { get_InstabilitaPressoFlessioneCheck } from "../Utils/getChecks";
import getKm from "../Utils/getKm";


export default function InstabilitaPressoFlessioneCheck(params) {

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed, Med_y: rawMed_y, Med_z: rawMed_z } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const Med_y = rawMed_y > 0 ? rawMed_y : 0
    const Med_z = rawMed_z > 0 ? rawMed_z : 0
    const isDisabled = Ned == 0 || (Med_y == 0 && Med_z == 0) ? true : false


    const Atot = 26
    const kmod = 27527
    const fc0k = 45646
    const fmk = 45646
    const Wel_y = 45646
    const Wel_z = 45646
    const Ig_y = 45646
    const Ig_z = 45646
    const Ig_tor = 45646
    const leff = 45646
    const L = 45646
    const gm = getGamma('m0')
    const woodType = 'lamellare'
    const beta_y = 0.7
    const beta_z = 0.2
    const E005 = 0.7
    const G005 = 0.7
    const shape = 'rettangolare'
    const khy = 45646
    const khz = 45646


    const {

        km,
        km_title,
        km_formula,
        km_formulaVal,
        km_description,

    } = getKm(shape)

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

        check5,
        check5_title,
        check5_formula,
        check5_formulaVal,
        check5_description,

        check6,
        check6_title,
        check6_formula,
        check6_formulaVal,
        check6_description,

        check7,
        check7_title,
        check7_formula,
        check7_formulaVal,
        check7_description,

        check8,
        check8_title,
        check8_formula,
        check8_formulaVal,
        check8_description,

    } = get_InstabilitaPressoFlessioneCheck(sig_c0d, sig_myd, sig_mzd, f_c0d, f_myd, f_mzd, kcrit_c_y, kcrit_c_z, kcrit_m_y, kcrit_m_z, km)


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
                title={sig_myd_title}
                formula={sig_myd_formula}
                formulaVal={sig_myd_formulaVal}
                value={sig_myd}
                description={sig_myd_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={sig_mzd_title}
                formula={sig_mzd_formula}
                formulaVal={sig_mzd_formulaVal}
                value={sig_mzd}
                description={sig_mzd_description}
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
                title={f_myd_title}
                formula={f_myd_formula}
                formulaVal={f_myd_formulaVal}
                value={f_myd}
                description={f_myd_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={f_mzd_title}
                formula={f_mzd_formula}
                formulaVal={f_mzd_formulaVal}
                value={f_mzd}
                description={f_mzd_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={Mcrit_y_title}
                formula={Mcrit_y_formula}
                formulaVal={Mcrit_y_formulaVal}
                value={Mcrit_y}
                description={Mcrit_y_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={Mcrit_z_title}
                formula={Mcrit_z_formula}
                formulaVal={Mcrit_z_formulaVal}
                value={Mcrit_z}
                description={Mcrit_z_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={sigma_m_crit_y_title}
                formula={sigma_m_crit_y_formula}
                formulaVal={sigma_m_crit_y_formulaVal}
                value={sigma_m_crit_y}
                description={sigma_m_crit_y_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={sigma_m_crit_z_title}
                formula={sigma_m_crit_z_formula}
                formulaVal={sigma_m_crit_z_formulaVal}
                value={sigma_m_crit_z}
                description={sigma_m_crit_z_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={lambda_rel_m_y_title}
                formula={lambda_rel_m_y_formula}
                formulaVal={lambda_rel_m_y_formulaVal}
                value={lambda_rel_m_y}
                description={lambda_rel_m_y_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={lambda_rel_m_z_title}
                formula={lambda_rel_m_z_formula}
                formulaVal={lambda_rel_m_z_formulaVal}
                value={lambda_rel_m_z}
                description={lambda_rel_m_z_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={kcrit_m_y_title}
                formula={kcrit_m_y_formula}
                formulaVal={kcrit_m_y_formulaVal}
                value={kcrit_m_y}
                description={kcrit_m_y_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={kcrit_m_z_title}
                formula={kcrit_m_z_formula}
                formulaVal={kcrit_m_z_formulaVal}
                value={kcrit_m_z}
                description={kcrit_m_z_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={Ncr_y_title}
                formula={Ncr_y_formula}
                formulaVal={Ncr_y_formulaVal}
                value={Ncr_y}
                description={Ncr_y_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={Ncr_z_title}
                formula={Ncr_z_formula}
                formulaVal={Ncr_z_formulaVal}
                value={Ncr_z}
                description={Ncr_z_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={lambda_c_y_title}
                formula={lambda_c_y_formula}
                formulaVal={lambda_c_y_formulaVal}
                value={lambda_c_y}
                description={lambda_c_y_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={lambda_c_z_title}
                formula={lambda_c_z_formula}
                formulaVal={lambda_c_z_formulaVal}
                value={lambda_c_z}
                description={lambda_c_z_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={lambda_rel_c_y_title}
                formula={lambda_rel_c_y_formula}
                formulaVal={lambda_rel_c_y_formulaVal}
                value={lambda_rel_c_y}
                description={lambda_rel_c_y_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={lambda_rel_c_z_title}
                formula={lambda_rel_c_z_formula}
                formulaVal={lambda_rel_c_z_formulaVal}
                value={lambda_rel_c_z}
                description={lambda_rel_c_z_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={beta_c_title}
                formula={beta_c_formula}
                formulaVal={beta_c_formulaVal}
                value={beta_c}
                description={beta_c_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={k_y_title}
                formula={k_y_formula}
                formulaVal={k_y_formulaVal}
                value={k_y}
                description={k_y_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={k_z_title}
                formula={k_z_formula}
                formulaVal={k_z_formulaVal}
                value={k_z}
                description={k_z_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={kcrit_c_y_title}
                formula={kcrit_c_y_formula}
                formulaVal={kcrit_c_y_formulaVal}
                value={kcrit_c_y}
                description={kcrit_c_y_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={kcrit_c_z_title}
                formula={kcrit_c_z_formula}
                formulaVal={kcrit_c_z_formulaVal}
                value={kcrit_c_z}
                description={kcrit_c_z_description}
            />
            <hr />
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={km_title}
                formula={km_formula}
                formulaVal={km_formulaVal}
                value={km}
                description={km_description}
            />
            <hr />
        </div>

    const finalContent =
        <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected} isCheck={true}
            title={[check1_title, check2_title, check3_title, check4_title, check5_title, check6_title, check7_title, check8_title]}
            formula={[check1_formula, check2_formula, check3_formula, check4_formula, check5_formula, check6_formula, check7_formula, check8_formula]}
            formulaVal={[check1_formulaVal, check2_formulaVal, check3_formulaVal, check4_formulaVal, check5_formulaVal, check6_formulaVal, check7_formulaVal, check8_formulaVal]}
            value={[check1, check2, check3, check4, check5, check6, check7, check8]}
            description={[check1_description, check2_description, check3_description, check4_description, check5_description, check6_description, check7_description, check8_description]}
        />

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: 125, isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />;

}

