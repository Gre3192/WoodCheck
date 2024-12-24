import get_gammaM from "../../Utils/get_gammaM";
import CheckCard from "../CheckCard";
import { get_sig_c0d, get_sig_myd, get_sig_mzd } from "../../Utils/getTensioni";
import { get_f_c0d, get_f_myd, get_f_mzd } from "../../Utils/getResistenze";
import { get_PressoflessioneCheck } from "../../Utils/getChecks";
import StepBox from "../StepBox";
import { useState } from "react";
import get_km from "../../Utils/get_km";
import get_kmod from "../../Utils/get_kmod";
import get_kh from "../../Utils/get_kh";
import setUom from "../../Utils/setUom";


export default function PressoFlessioneCheck({ showAll, sectionProp, sectionGeometryMass }) {

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);


    const Ned = sectionProp.actingLoad.Ned.value > 0 ? sectionProp.actingLoad.Ned.value * setUom(sectionProp?.actingLoad?.Ned?.uom) : 0
    const Med_y = sectionProp?.actingLoad?.Med_y?.value && sectionProp?.actingLoad?.Med_y?.value != 0 ? Math.abs(sectionProp?.actingLoad?.Med_y?.value) * setUom(sectionProp?.actingLoad?.Med_y?.uom) : 0
    const Med_z = sectionProp?.actingLoad?.Med_z?.value && sectionProp?.actingLoad?.Med_z?.value != 0 ? Math.abs(sectionProp?.actingLoad?.Med_z?.value) * setUom(sectionProp?.actingLoad?.Med_z?.uom) : 0
    const isDisabled = Ned == 0 || (Med_y == 0 && Med_z == 0) ? true : false


    const Atot = sectionGeometryMass?.value.Atot
    const Wel_y = sectionGeometryMass?.value.Wel_y
    const Wel_z = sectionGeometryMass?.value.Wel_z
    const fc0k = sectionProp?.mechanics?.fc0k
    const fmk = sectionProp?.mechanics?.fmk
    const shape = sectionProp?.geometry?.shape
    const woodType = sectionProp?.mechanics?.woodType
    const b = sectionProp?.geometry.b?.value?.value * setUom(sectionProp?.geometry.b?.value?.uom)
    const h = sectionProp?.geometry.h?.value * setUom(sectionProp?.geometry.h?.value?.uom)
    const serviceClass = sectionProp?.serviceClass
    const durationClass = sectionProp?.durationClass



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

    } = get_f_myd(kh_y, kmod, fmk, gm)

    const {

        f_mzd,
        f_mzd_title,
        f_mzd_formula,
        f_mzd_formulaVal,
        f_mzd_description

    } = get_f_mzd(kh_z, kmod, fmk, gm)

    const {

        check_z,
        check_z_title,
        check_z_formulaVal,
        check_y,
        check_y_title,
        check_y_formulaVal

    } = get_PressoflessioneCheck(sig_c0d, sig_myd, sig_mzd, f_c0d, f_myd, f_mzd, km)




    const title = 'Verifica a Presso-Flessione [NTC18 - \u00A74.4.8.1.8]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <div className="mb-2 font-semibold ">Calcolo Geometria</div>
            <div className="flex flex-col gap-7">
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={sectionGeometryMass?.title.Atot}
                    formula={sectionGeometryMass?.formula.Atot}
                    formulaVal={sectionGeometryMass?.formulaVal.Atot}
                    value={sectionGeometryMass?.value.Atot}
                    description={sectionGeometryMass?.description.Atot}
                />
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={sectionGeometryMass?.title.Ig_y}
                    formula={sectionGeometryMass?.formula.Ig_y}
                    formulaVal={sectionGeometryMass?.formulaVal.Ig_y}
                    value={sectionGeometryMass?.value.Ig_y}
                    description={sectionGeometryMass?.description.Ig_y}
                />
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={sectionGeometryMass?.title.Ig_z}
                    formula={sectionGeometryMass?.formula.Ig_z}
                    formulaVal={sectionGeometryMass?.formulaVal.Ig_z}
                    value={sectionGeometryMass?.value.Ig_z}
                    description={sectionGeometryMass?.description.Ig_z}
                />
            </div>
            <hr />
            <div className="mb-2 font-semibold ">Calcolo Tensioni</div>
            <div className="flex flex-col gap-7">
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={sig_c0d_title}
                    formula={sig_c0d_formula}
                    formulaVal={sig_c0d_formulaVal}
                    value={sig_c0d}
                    description={sig_c0d_description}
                />
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={sig_myd_title}
                    formula={sig_myd_formula}
                    formulaVal={sig_myd_formulaVal}
                    value={sig_myd}
                    description={sig_myd_description}
                />
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={sig_mzd_title}
                    formula={sig_mzd_formula}
                    formulaVal={sig_mzd_formulaVal}
                    value={sig_mzd}
                    description={sig_mzd_description}
                />
            </div>
            <hr />
            <div className="mb-2 font-semibold ">Calcolo Coefficienti</div>
            <div className="flex flex-col gap-7">
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={km_title}
                    formula={km_formula}
                    formulaVal={km_formulaVal}
                    value={km}
                    description={km_description}
                />
            </div>
            <hr />
            <div className="mb-2 font-semibold ">Calcolo Resistenze</div>
            <div className="flex flex-col gap-7">
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={f_c0d_title}
                    formula={f_c0d_formula}
                    formulaVal={f_c0d_formulaVal}
                    value={f_c0d}
                    description={f_c0d_description}
                />
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={f_myd_title}
                    formula={f_myd_formula}
                    formulaVal={f_myd_formulaVal}
                    value={f_myd}
                    description={f_myd_description}
                />
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={f_mzd_title}
                    formula={f_mzd_formula}
                    formulaVal={f_mzd_formulaVal}
                    value={f_mzd}
                    description={f_mzd_description}
                />
            </div>
            <hr />
        </div>

    const finalContent =
        <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected} isCheck={true}
            title={[check_z_title, check_y_title]}
            formula={[]}
            formulaVal={[check_z_formulaVal, check_y_formulaVal]}
            value={[check_z, check_y]}
            description={[]}
        />


    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: [check_y, check_z], isDisabled: isDisabled }
    return (
        !showAll && isDisabled ?
            null
            :
            <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />
    )
}

