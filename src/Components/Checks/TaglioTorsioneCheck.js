import get_gammaM from "../../Utils/get_gammaM";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../../Atom/forcesStateAtom";
import CheckCard from "../CheckCard";
import get_ksh from "../../Utils/get_ksh";
import { get_tau_tord, get_tau_d } from "../../Utils/getTensioni";
import { get_fvd } from "../../Utils/getResistenze";
import { get_TaglioTorsioneCheck } from "../../Utils/getChecks";
import StepBox from "../StepBox";
import { useState } from "react";
import get_kmod from "../../Utils/get_kmod";
import { meccanicPropSectionAtom } from "../../Atom/meccanicPropSectionAtom";
import { sectionGeometryMassAtom } from "../../Atom/sectionGeometryMassAtom";
import { sectionGeometryAtom } from "../../Atom/sectionGeometryAtom";
import { serviceDurationClassAtom } from "../../Atom/serviceDurationClassAtom";



export default function TaglioTorsioneCheck({ showAll }) {

    const sectionGeometry = useRecoilValue(sectionGeometryAtom)
    const geometryMass = useRecoilValue(sectionGeometryMassAtom)
    const mecchanicProps = useRecoilValue(meccanicPropSectionAtom)
    const serviceDuration = useRecoilValue(serviceDurationClassAtom)

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const { Med_tor: rawMed_tor, Ved_y: rawVed_y, Ved_z: rawVed_z } = useRecoilValue(forcesStateAtom)
    const Med_tor = rawMed_tor && rawMed_tor != 0 ? Math.abs(rawMed_tor) : 0
    const Ved_y = rawVed_y && rawVed_y != 0 ? Math.abs(rawVed_y) : 0
    const Ved_z = rawVed_z && rawVed_z != 0 ? Math.abs(rawVed_z) : 0
    const isDisabled = (Ved_y == 0 && Ved_z == 0) || Med_tor == 0 ? true : false


    const Atot = geometryMass?.value.Atot
    const fvk = mecchanicProps?.fvk
    const Ig_tor = geometryMass?.value.Ig_tor
    const b = sectionGeometry?.b
    const h = sectionGeometry?.h
    const shape = sectionGeometry?.shape
    const woodType = mecchanicProps?.woodType
    const serviceClass = serviceDuration?.serviceClass
    const durationClass = serviceDuration?.durabilityClass


    const kmod = get_kmod(woodType, serviceClass, durationClass)

    const gm = get_gammaM(woodType)

    const {

        tau_tord,
        tau_tord_title,
        tau_tord_formula,
        tau_tord_formulaVal,
        tau_tord_description

    } = get_tau_tord(Med_tor, b, Ig_tor)

    const {

        tau_d,
        tau_d_title,
        tau_d_formula,
        tau_d_formulaVal,
        tau_d_description

    } = get_tau_d(shape, Ved_y, Ved_z, Atot)

    const {

        fvd,
        fvd_title,
        fvd_formula,
        fvd_formulaVal,
        fvd_description

    } = get_fvd(kmod, fvk, gm)

    const {

        ksh,
        ksh_title,
        ksh_formula,
        ksh_formulaVal,
        ksh_description

    } = get_ksh(shape, h, b)

    const {

        check,
        check_title,
        check_formulaVal

    } = get_TaglioTorsioneCheck(tau_tord, tau_d, fvd, ksh)






    const title = 'Verifica a Taglio e Torsione [NTC18 - \u00A74.4.8.1.11]'

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
                    title={geometryMass?.title.Ig_tor}
                    formula={geometryMass?.formula.Ig_tor}
                    formulaVal={geometryMass?.formulaVal.Ig_tor}
                    value={geometryMass?.value.Ig_tor}
                    description={geometryMass?.description.Ig_tor}
                />
            </div>
            <hr />
            <div className="mb-2 font-semibold ">Calcolo Tensioni</div>
            <div className="flex flex-col gap-7">
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={tau_d_title}
                    formula={tau_d_formula}
                    formulaVal={tau_d_formulaVal}
                    value={tau_d}
                    description={tau_d_description}
                />
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={tau_tord_title}
                    formula={tau_tord_formula}
                    formulaVal={tau_tord_formulaVal}
                    value={tau_tord}
                    description={tau_tord_description}
                />
            </div>
            <hr />
            <div className="mb-2 font-semibold ">Calcolo Coefficienti</div>
            <div className="flex flex-col gap-7">
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={ksh_title}
                    formula={ksh_formula}
                    formulaVal={ksh_formulaVal}
                    value={ksh}
                    description={ksh_description}
                />
            </div>
            <hr />
            <div className="mb-2 font-semibold ">Calcolo Resistenze</div>
            <div className="flex flex-col gap-7">
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={fvd_title}
                    formula={fvd_formula}
                    formulaVal={fvd_formulaVal}
                    value={fvd}
                    description={fvd_description}
                />
            </div>
            <hr />
        </div>

    const finalContent
        = <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected} isCheck={true}
            title={check_title}
            formula={''}
            formulaVal={check_formulaVal}
            value={check}
            description={''}
        />

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return (
      !showAll && isDisabled ? 
      null 
      :
      <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />
    )
}

