import Latex from "react-latex-next";
import get_gammaM from "../../Utils/get_gammaM";
import getCheckSymbol from "../../Utils/getCheckSymbol";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../../Atom/forcesStateAtom";
import customDecimal from "../../Utils/customDecimal";
import CheckCard from "../CheckCard";
import { get_sig_c0d, get_sig_myd, get_sig_mzd } from "../../Utils/getTensioni";
import { get_f_c0d, get_f_myd, get_f_mzd } from "../../Utils/getResistenze";
import { get_PressoflessioneCheck } from "../../Utils/getChecks";
import StepBox from "../StepBox";
import { useState } from "react";
import get_km from "../../Utils/get_km";
import get_kmod from "../../Utils/get_kmod";
import { meccanicPropSectionAtom } from "../../Atom/meccanicPropSectionAtom";
import { sectionGeometryMassAtom } from "../../Atom/sectionGeometryMassAtom";
import { sectionGeometryAtom } from "../../Atom/sectionGeometryAtom";
import get_kh from "../../Utils/get_kh";
import { serviceDurationClassAtom } from "../../Atom/serviceDurationClassAtom";



export default function PressoFlessioneCheck({ showAll }) {

    const sectionGeometry = useRecoilValue(sectionGeometryAtom)
    const geometryMass = useRecoilValue(sectionGeometryMassAtom)
    const mecchanicProps = useRecoilValue(meccanicPropSectionAtom)
    const serviceDuration = useRecoilValue(serviceDurationClassAtom)


    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Ned: rawNed, Med_y: rawMed_y, Med_z: rawMed_z } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const Med_y = rawMed_y > 0 ? Math.abs(rawMed_y) : 0
    const Med_z = rawMed_z > 0 ? Math.abs(rawMed_z) : 0
    const isDisabled = Ned == 0 || (Med_y == 0 && Med_z == 0) ? true : false


    const Atot = geometryMass?.value.Atot
    const Wel_y = geometryMass?.value.Wel_y
    const Wel_z = geometryMass?.value.Wel_z
    const fc0k = mecchanicProps?.fc0k
    const fmk = mecchanicProps?.fmk
    const shape = sectionGeometry?.shape
    const woodType = mecchanicProps?.woodType
    const b = sectionGeometry?.b
    const h = sectionGeometry?.h
    const serviceClass = serviceDuration?.serviceClass
    const durationClass = serviceDuration?.durabilityClass



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
                    title={geometryMass?.title.Atot}
                    formula={geometryMass?.formula.Atot}
                    formulaVal={geometryMass?.formulaVal.Atot}
                    value={geometryMass?.value.Atot}
                    description={geometryMass?.description.Atot}
                />
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={geometryMass?.title.Ig_y}
                    formula={geometryMass?.formula.Ig_y}
                    formulaVal={geometryMass?.formulaVal.Ig_y}
                    value={geometryMass?.value.Ig_y}
                    description={geometryMass?.description.Ig_y}
                />
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={geometryMass?.title.Ig_z}
                    formula={geometryMass?.formula.Ig_z}
                    formulaVal={geometryMass?.formulaVal.Ig_z}
                    value={geometryMass?.value.Ig_z}
                    description={geometryMass?.description.Ig_z}
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

