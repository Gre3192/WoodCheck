import get_gammaM from "../../Utils/get_gammaM";
import { get_tau_d } from "../../Utils/getTensioni"
import { get_fvd } from "../../Utils/getResistenze"
import { get_TaglioCheck } from "../../Utils/getChecks";
import CheckCard from "../CheckCard";
import StepBox from "../StepBox";
import { useState } from "react";
import get_kmod from "../../Utils/get_kmod";
import setUom from "../../Utils/setUom";


export default function TaglioCheck({ showAll, sectionProp, sectionGeometryMass }) {

    const [isFormulaSelected, setIsFormulaSelected] = useState(false);
    const [isFormulaValSelected, setIsFormulaValSelected] = useState(false);


    const Ved_y = sectionProp?.actingLoad?.Ved_y?.value && sectionProp?.actingLoad?.Ved_y?.value != 0 ? Math.abs(sectionProp?.actingLoad?.Ved_y?.value) * setUom(sectionProp?.actingLoad?.Ved_y?.uom) : 0
    const Ved_z = sectionProp?.actingLoad?.Ved_z?.value && sectionProp?.actingLoad?.Ved_z?.value != 0 ? Math.abs(sectionProp?.actingLoad?.Ved_z?.value) * setUom(sectionProp?.actingLoad?.Ved_z?.uom) : 0
    const isDisabled = Ved_y == 0 && Ved_z == 0 ? true : false


    const Atot = sectionGeometryMass?.value.Atot
    const fvk = sectionProp?.mechanics?.fvk
    const shape = sectionProp?.geometry?.shape
    const woodType = sectionProp?.mechanics?.woodType
    const serviceClass = sectionProp?.serviceClass
    const durationClass = sectionProp?.durationClass

    const kmod = get_kmod(woodType, serviceClass, durationClass)
    const gm = get_gammaM(woodType)

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

        check,
        check_title,
        check_formulaVal

    } = get_TaglioCheck(tau_d, fvd)




    const title = 'Verifica a Taglio [NTC18 - \u00A74.4.8.1.9]'

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



    const finalContent =
        <StepBox isFormula={isFormulaSelected} isFormulaVal={isFormulaValSelected} isCheck={true}
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

