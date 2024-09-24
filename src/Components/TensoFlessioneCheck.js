import Latex from "react-latex-next";
import get_gammaM from "../Utils/get_gammaM";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import CheckCard from "./CheckCard";
import StepBox from "./StepBox";
import { get_TensoflessioneCheck } from "../Utils/getChecks";
import { get_sig_t0d, get_sig_myd, get_sig_mzd } from "../Utils/getTensioni";
import { get_f_t0d, get_f_myd, get_f_mzd } from "../Utils/getResistenze";
import { useState } from "react";
import getKm from "../Utils/getKm";


export default function TensoFlessioneCheck(params) {

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed, Med_y: rawMed_y, Med_z: rawMed_z } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed < 0 ? rawNed : 0
    const Med_y = rawMed_y > 0 ? Math.abs(rawMed_y) : 0
    const Med_z = rawMed_z > 0 ? Math.abs(rawMed_z) : 0
    const isDisabled = Ned >= 0 || (Med_y == 0 && Med_z == 0) ? true : false


    const Atot = 26
    const Aeff = 1289.6
    const Wel_y = 543
    const Wel_z = 543
    const kmod = 564
    const fmk = 564
    const fc0k = 564
    const khy = 564
    const khz = 564
    const shape='rettangolare'
    const woodType = 'lamellare'
    





    
    const gm = get_gammaM(woodType)

    const {

        km,
        km_title,
        km_formula,
        km_formulaVal,
        km_description,

    } = getKm(shape)

    const {

        sig_t0d,
        sig_t0d_title,
        sig_t0d_formula,
        sig_t0d_formulaVal,
        sig_t0d_description

    } = get_sig_t0d(Ned, Atot)

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

        f_t0d,
        f_t0d_title,
        f_t0d_formula,
        f_t0d_formulaVal,
        f_t0d_description

    } = get_f_t0d(kmod, fc0k, gm)

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

        check_z,
        check_z_title,
        check_z_formulaVal,

        check_y,
        check_y_title,
        check_y_formulaVal

    } = get_TensoflessioneCheck(sig_t0d, sig_myd, sig_mzd, f_t0d, f_myd, f_mzd, km)



    const title = 'Verifica a Tenso-Flessione [NTC18 - \u00A74.4.8.1.7]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                title={sig_t0d_title}
                formula={sig_t0d_formula}
                formulaVal={sig_t0d_formulaVal}
                value={sig_t0d}
                description={sig_t0d_description}
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
                title={f_t0d_title}
                formula={f_t0d_formula}
                formulaVal={f_t0d_formulaVal}
                value={f_t0d}
                description={f_t0d_description}
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
                title={km_title}
                formula={km_formula}
                formulaVal={km_formulaVal}
                value={km}
                description={km_description}
            />
            <hr />
        </div>

    const finalContent
        = <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected} isCheck={true}
            title={[check_z_title, check_y_title]}
            formula={[]}
            formulaVal={[check_z_formulaVal, check_y_formulaVal]}
            value={[check_z, check_y]}
            description={[]}
        />

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: [check_z, check_y], isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />;

}

