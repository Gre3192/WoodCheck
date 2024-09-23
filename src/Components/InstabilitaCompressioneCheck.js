import getGamma from "../Utils/getGamma";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import customDecimal from "../Utils/customDecimal";
import CheckCard from "./CheckCard";
import StepBox from "./StepBox";
import { get_sig_c0d } from "../Utils/getTensioni";
import { get_f_c0d } from "../Utils/getResistenze";
import { get_Compressione0Check } from "../Utils/getChecks";
import { useState } from "react";
import get_lambda_c from "../Utils/get_lambda_c";
import get_lambda_rel_c from "../Utils/get_lambda_rel_c";


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
    const gm = getGamma('m0')




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
    
    } = get_Ncr(L,beta_y,beta_z,Ig_y,Ig_z,E005)

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

    } = get_lambda_rel_c(lambda_c_y,lambda_c_z,fc0k,E005)



    

    const title = 'Verifica Instabilità a Compressione - Instabilità di colonna [NTC18 - \u00A74.4.8.2.2]'

    const centralContent =
        <div className="flex flex-col gap-4">

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

