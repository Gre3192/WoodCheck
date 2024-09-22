import Latex from "react-latex-next";
import React from "react";
import getCheckSymbol from "../Utils/getCheckSymbol";

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
            <div className={`${isCheck ? 'flex flex-col gap-8' : 'flex justify-between items-center'}`}>
                {values.map((item, index) => {

                    const itemValue = typeof item === 'object' && item !== null ? item.value : item;

                    return (
                        <React.Fragment key={index}>
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
                                descriptions[index] ? <div>{descriptions[index]}</div> : null
                            }
                        </React.Fragment>
                    )
                })}
            </div>
        </>
    );
}
