import Latex from "react-latex-next";
import React, { useState } from "react";
import getCheckSymbol from "../Utils/getCheckSymbol";
import getCheckCircle from "../Utils/getCheckCircle";
import customDecimal from "../Utils/customDecimal";
import InfoModal from "./ElementUI/InfoModal";
import { FaExclamationCircle } from "react-icons/fa";


export default function StepBox({
    title = '',
    formula = '',
    formulaVal = '',
    value = '',
    description = '',
    isFormula = false,
    isFormulaVal = false,
    isCheck = false,
    withInfo = true
}) {

    // Funzione per trasformare qualsiasi input in array
    const toArray = (input) => {
        if (Array.isArray(input)) return input;
        return [input];  // Se non è un array, lo trasformiamo in un array con un elemento
    };

    // Trasformiamo tutti i valori in array
    const titles = toArray(title);
    const formulas = toArray(formula);
    const formulaVals = toArray(formulaVal);
    const values = toArray(value);
    const descriptions = toArray(description);

    const [isOpenDialog, setIsOpenDialog] = useState(false)

    function openDialog() {
        setIsOpenDialog(true)
    }

    function closeDialog() {
        setIsOpenDialog(false)
    }


    return (
        <>
            <div className={`w-full ${isCheck ? 'flex flex-col gap-8' : 'flex justify-between items-center'}`}>
                {values.map((item, index) => {

                    const itemValue = typeof item === 'object' && item !== null ? item.value : item;
                    return (
                        <div key={index} className={'w-full flex items-center justify-between gap-8'}>
                            <Latex>
                                {`$ \\displaystyle
                                    ${titles[index] ? titles[index] : 'titles = '}
                                    ${isFormula && formulas[index] ? formulas[index] : ''}
                                    ${isFormula && isFormulaVal && formulaVals[index] ? formulaVals[index] : ''}
                                    ${itemValue ? customDecimal(itemValue, 2) : '0'}
                                    ${isCheck ? getCheckSymbol(itemValue) : ''}
                                $`}
                            </Latex>

                            {withInfo ?
                                <FaExclamationCircle onClick={openDialog} className='text-gray-400 focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white cursor-pointer' />
                                : null
                            }
                            {/* {
                                descriptions[index] ?
                                    <Latex>{`${descriptions[index]}`}</Latex>
                                    : null
                            } */}

                            {
                                isCheck ?
                                    <div className="flex gap-2 items-center">
                                        <Latex>{`${customDecimal(itemValue * 100, 2)} \u0025`}</Latex>
                                        {getCheckCircle(itemValue)}
                                    </div>
                                    : null
                            }
                        </div>
                    )
                })}
            </div>
            {withInfo ?
                <InfoModal open={isOpenDialog} handleClose={closeDialog} title={title} message={description} />
                : null}
        </>
    );
}
