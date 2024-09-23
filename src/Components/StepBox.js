import Latex from "react-latex-next";
import React from "react";
import getCheckSymbol from "../Utils/getCheckSymbol";
import getCheckCircle from "../Utils/getCheckCircle";
import customDecimal from "../Utils/customDecimal";

export default function StepBox({
    title = '',
    formula = '',
    formulaVal = '',
    value = '',
    description = '',
    isFormula = false,
    isFormulaVal = false,
    isCheck = false
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
                                    ${itemValue ? itemValue : '0'}
                                    ${isCheck ? getCheckSymbol(itemValue) : ''}
                                $`}
                            </Latex>
                            {
                                descriptions[index] ?
                                    <Latex>{`${descriptions[index]}`}</Latex>
                                    : null
                            }
                            {
                                isCheck ?
                                    <div className="flex gap-2 items-center">
                                        <Latex>{`${customDecimal(itemValue, 2) * 100}\u0025`}</Latex>
                                        {getCheckCircle(itemValue)}
                                    </div>
                                    : null
                            }
                        </div>
                    )
                })}
            </div>
        </>
    );
}
