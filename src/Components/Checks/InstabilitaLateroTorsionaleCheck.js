import get_gammaM from "../../Utils/get_gammaM";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../../Atom/forcesStateAtom";
import CheckCard from "../CheckCard";
import StepBox from "../StepBox";
import { get_sig_myd, get_sig_mzd } from "../../Utils/getTensioni";
import { get_f_myd, get_f_mzd } from "../../Utils/getResistenze";
import { get_InstabilitaLateroTorsionaleCheck } from "../../Utils/getChecks";
import get_lambda_rel_m from "../../Utils/get_lambda_rel_m";
import get_sig_m_crit from "../../Utils/get_sig_m_crit";
import get_kcrit_m from "../../Utils/get_kcrit_m";
import getMcrit from "../../Utils/getMcrit";
import { useState } from "react";
import get_km from "../../Utils/get_km";
import get_kmod from "../../Utils/get_kmod";
import { meccanicPropSectionAtom } from "../../Atom/meccanicPropSectionAtom";
import { sectionGeometryMassAtom } from "../../Atom/sectionGeometryMassAtom";
import { sectionGeometryAtom } from "../../Atom/sectionGeometryAtom";
import get_kh from "../../Utils/get_kh";



export default function InstabilitaLateroTorsionaleCheck(params) {

    const sectionGeometry = useRecoilValue(sectionGeometryAtom)
    const geometryMass = useRecoilValue(sectionGeometryMassAtom)
    const mecchanicProps = useRecoilValue(meccanicPropSectionAtom)

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed, Med_y: rawMed_y, Med_z: rawMed_z } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const Med_y = rawMed_y > 0 ? Math.abs(rawMed_y) : 0
    const Med_z = rawMed_z > 0 ? Math.abs(rawMed_z) : 0
    const isDisabled = Med_y == 0 && Med_z == 0 ? true : false


    const fmk = mecchanicProps?.fmk
    const E0_05 = mecchanicProps?.E0_05
    const G_05 = mecchanicProps?.G_05
    const Atot = geometryMass?.value.Atot
    const Wel_y = geometryMass?.value.Wel_y
    const Wel_z = geometryMass?.value.Wel_z
    const Ig_z = geometryMass?.value.Ig_z
    const Ig_y = geometryMass?.value.Ig_y
    const Ig_tor = geometryMass?.value.Ig_tor
    const shape = sectionGeometry?.shape
    const woodType = mecchanicProps?.woodType
    const b = sectionGeometry?.b
    const h = sectionGeometry?.h



    const leff = 2.6
    const serviceClass = 1
    const durationClass = 'permanente'




    const kmod = get_kmod(woodType, serviceClass, durationClass)

    const gm = get_gammaM(woodType)

    const {

        kh_y,
        kh_y_title,
        kh_y_formula,
        kh_y_formulaVal,
        kh_y_description,

        kh_z,
        kh_z_title,
        kh_z_formula,
        kh_z_formulaVal,
        kh_z_description

    } = get_kh(h, b, shape, woodType)

    const {

        km,
        km_title,
        km_formula,
        km_formulaVal,
        km_description,

    } = get_km(shape)

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
        f_myd,
        f_myd_title,
        f_myd_formula,
        f_myd_formulaVal,
        f_myd_description

    } = get_f_myd(kh_y, kmod, fmk, gm)

    const {

        f_mzd,
        f_mzd_title,
        f_mzd_formula,
        f_mzd_formulaVal,
        f_mzd_description

    } = get_f_mzd(kh_z, kmod, fmk, gm)

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

    } = getMcrit(E0_05, Ig_z, Ig_y, G_05, Ig_tor, leff)

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
            title={[check1_title, check2_title, check3_title, check4_title]}
            formula={[check1_formula, check2_formula, check3_formula, check4_formula]}
            formulaVal={[check1_formulaVal, check2_formulaVal, check3_formulaVal, check4_formulaVal]}
            value={[check1, check2, check3, check4]}
            description={[check1_description, check2_description, check3_description, check4_description]}
        />

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: [check1, check2, check3, check4], isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />;

}

