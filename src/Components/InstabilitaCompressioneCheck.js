import get_gammaM from "../Utils/get_gammaM";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import customDecimal from "../Utils/customDecimal";
import CheckCard from "./CheckCard";
import StepBox from "./StepBox";
import { get_sig_c0d } from "../Utils/getTensioni";
import { get_f_c0d } from "../Utils/getResistenze";
import { get_InstabilitaCompressioneCheck } from "../Utils/getChecks";
import { useState } from "react";
import get_lambda_c from "../Utils/get_lambda_c";
import get_lambda_rel_c from "../Utils/get_lambda_rel_c";
import get_Ncr from "../Utils/get_Ncr";
import get_beta_c from "../Utils/get_beta_c";
import get_k from "../Utils/get_k";
import get_kcrit_c from "../Utils/get_kcrit_c";


export default function InstabilitaCompressioneCheck(params) {

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const isDisabled = Ned <= 0 ? true : false

    const Atot = 26
    const kmod = 27527
    const fc0k = 45646
    const L = 45646
    const beta_y = 45646
    const beta_z = 45646
    const E005 = 45646
    const Ig_y = 45646
    const Ig_z = 45646
    const woodType = 'lamellare'
    
    



    
    
    const gm = get_gammaM(woodType)

    const {

        sig_c0d,
        sig_c0d_title,
        sig_c0d_formula,
        sig_c0d_formulaVal,
        sig_c0d_description

    } = get_sig_c0d(Ned, Atot)

    const {

        f_c0d,
        f_c0d_title,
        f_c0d_formula,
        f_c0d_formulaVal,
        f_c0d_description

    } = get_f_c0d(kmod, fc0k, gm)

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

        check_y,
        check_y_title,
        check_y_formula,
        check_y_formulaVal,
        check_y_description,

        check_z,
        check_z_title,
        check_z_formula,
        check_z_formulaVal,
        check_z_description,

    } = get_InstabilitaCompressioneCheck(sig_c0d, f_c0d, kcrit_c_y, kcrit_c_z)




    const title = 'Verifica Instabilità a Compressione - Instabilità di colonna [NTC18 - \u00A74.4.8.2.2]'

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
        </div>

    const finalContent =
        <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected} isCheck={true}
            title={[check_y_title, check_z_title]}
            formula={[]}
            formulaVal={[check_y_formulaVal, check_z_formulaVal]}
            value={[check_y, check_z]}
            description={[]}
        />

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: [check_y, check_z], isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />;

}

