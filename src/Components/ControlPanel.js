import { useRecoilState } from "recoil";
import { globalFormatFormulaAtom } from "../Atom/globalFormatFormula";
import { ReactComponent as FormulaIcon } from '../Assets/formulaIcon.svg';
import { ReactComponent as FormulaValIcon } from '../Assets/formulaValcon.svg';

export default function ControlPanel(params) {

    const [globalFormatFormula, setGlobalFormatFormula] = useRecoilState(globalFormatFormulaAtom); 

    const toggleIsGlobalFormula = () => {
        setGlobalFormatFormula((prevState) => ({
            ...prevState,
            isGlobalFormula: !prevState.isGlobalFormula, 
        }));
    };

    const toggleIsGlobalFormulaVal = () => {
        setGlobalFormatFormula((prevState) => ({
            ...prevState,
            isGlobalFormulaVal: !prevState.isGlobalFormulaVal,
        }));
    };

    return (
        <>
            <button
                className={`border border-gray-300 rounded-lg p-3 transition duration-100 bg-white hover:bg-gray-200`}
                onClick={toggleIsGlobalFormula} // Cambia funzione
            >
                <FormulaIcon width="20" height="20" className={`text-black`} />
            </button>

            <button
                className={`border border-gray-300 rounded-lg p-3 transition duration-100 bg-white hover:bg-gray-200`}
                onClick={toggleIsGlobalFormulaVal} // Cambia funzione
            >
                <FormulaValIcon width="20" height="20" className={`text-black hover:text-blue-500`} />
            </button>
        </>
    );
}
