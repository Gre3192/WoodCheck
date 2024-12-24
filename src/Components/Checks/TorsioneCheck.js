import get_gammaM from "../../Utils/get_gammaM";
import CheckCard from "../CheckCard";
import get_ksh from "../../Utils/get_ksh";
import { get_fvd } from "../../Utils/getResistenze";
import { get_tau_tord } from "../../Utils/getTensioni";
import StepBox from "../StepBox";
import { get_TorsioneCheck } from "../../Utils/getChecks";
import { useState } from "react";
import get_kmod from "../../Utils/get_kmod";
import setUom from "../../Utils/setUom";


export default function TorsioneCheck({ showAll, sectionProp, sectionGeometryMass }) {

    
    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);

    const Med_tor = sectionProp?.actingLoad?.Med_tor?.value && sectionProp?.actingLoad?.Med_tor?.value != 0 ? Math.abs(sectionProp?.actingLoad?.Med_tor?.value) * setUom(sectionProp?.actingLoad?.Med_tor?.uom) : 0
    const isDisabled = Med_tor == 0 ? true : false

    const fvk = sectionProp.mechanics?.fvk
    const Ig_tor = sectionGeometryMass?.value.Ig_tor
    const b = sectionProp?.geometry.b?.value?.value * setUom(sectionProp?.geometry.b?.value?.uom)
    const h = sectionProp?.geometry.h?.value * setUom(sectionProp?.geometry.h?.value?.uom)
    const shape = sectionProp?.geometry?.shape
    const woodType = sectionProp.mechanics?.woodType
    const serviceClass = sectionProp?.serviceClass
    const durationClass = sectionProp?.durationClass

    const kmod = get_kmod(woodType, serviceClass, durationClass)
    const gm = get_gammaM(woodType)

    const {

        ksh,
        ksh_title,
        ksh_formula,
        ksh_formulaVal,
        ksh_description

    } = get_ksh(shape, h, b)

    const {

        tau_tord,
        tau_tord_title,
        tau_tord_formula,
        tau_tord_formulaVal,
        tau_tord_description

    } = get_tau_tord(Med_tor, b, Ig_tor)

    const {

        fvd,
        fvd_title,
        fvd_formula,
        fvd_formulaVal,
        fvd_description

    } = get_fvd(kmod, fvk, gm)

    const {

        check,
        check_title,
        check_formulaVal

    } = get_TorsioneCheck(tau_tord, fvd, ksh)



    const title = 'Verifica a Torsione [NTC18 - \u00A74.4.8.1.10]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <div className="mb-2 font-semibold ">Calcolo Geometria</div>
            <div className="flex flex-col gap-7">
                <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected}
                    title={sectionGeometryMass?.title.Ig_tor}
                    formula={sectionGeometryMass?.formula.Ig_tor}
                    formulaVal={sectionGeometryMass?.formulaVal.Ig_tor}
                    value={sectionGeometryMass?.value.Ig_tor}
                    description={sectionGeometryMass?.description.Ig_tor}
                />
            </div>
            <hr />
            <div className="mb-2 font-semibold ">Calcolo Tensioni</div>
            <div className="flex flex-col gap-7">
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
            withInfo={false}
        />

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return (
        !showAll && isDisabled ?
            null
            :
            <CheckCard props={checkCardProps} isFormulaProps={{ isFormulaSelected, setIsFormulaSelected }} isFormulaValProps={{ isFormulaValSelected, setIsFormulaValSelected }} />
    )
}

