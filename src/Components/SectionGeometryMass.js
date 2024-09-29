import Latex from "react-latex-next";
import customDecimal from "../Utils/customDecimal";
import MinimalTable from "./MinimalTable";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { sectionGeometryMassAtom } from '../Atom/sectionGeometryMassAtom';
import { sectionGeometryAtom } from '../Atom/sectionGeometryAtom';
import getGeometryMass from "../Utils/getGeometryMass";
import { FaPlus, FaMinus } from 'react-icons/fa';



export default function SectionGeometryMass() {


    const sectionGeometry = useRecoilValue(sectionGeometryAtom)
    const [sectionGeometryMass, setSectionGeometryMass] = useRecoilState(sectionGeometryMassAtom)
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setSectionGeometryMass(getGeometryMass(sectionGeometry))
    }, [sectionGeometry])


    const toggleTable = () => {
        setIsExpanded(!isExpanded);
    };

    const minimalTableGeometryMassConfig = [
        { label: 'A_{tot}\\\\\\text{[$mm^2$]}', value: sectionGeometryMass?.value.Atot ? customDecimal(sectionGeometryMass?.value.Atot, 2) : '-', textHover: 'Area totale' },
        { label: 'I_{g,y}\\\\\\text{[$mm^4$]}', value: sectionGeometryMass?.value.Ig_y ? customDecimal(sectionGeometryMass?.value.Ig_y, 2) : '-', textHover: 'Momento di inerzia attorno a y' },
        { label: 'I_{g,z}\\\\\\text{[$mm^4$]}', value: sectionGeometryMass?.value.Ig_z ? customDecimal(sectionGeometryMass?.value.Ig_z, 2) : '-', textHover: 'Momento di inerzia attorno a z' },
        { label: 'I_{g,tor}\\\\\\text{[$mm^4$]}', value: sectionGeometryMass?.value.Ig_tor ? customDecimal(sectionGeometryMass?.value.Ig_tor, 2) : '-', textHover: 'Momento di inerzia attorno a X-X' },
        { label: 'W_{el,y}\\\\\\text{[$mm^3$]}', value: sectionGeometryMass?.value.Wel_y ? customDecimal(sectionGeometryMass?.value.Wel_y, 2) : '-', textHover: 'Modulo di resistenza elastico attorno a y' },
        { label: 'W_{el,z}\\\\\\text{[$mm^3$]}', value: sectionGeometryMass?.value.Wel_z ? customDecimal(sectionGeometryMass?.value.Wel_z, 2) : '-', textHover: 'Modulo di resistenza elastico attorno a z' },
    ]

    return (
        <div className="p-5 items-center">
            <div className='flex justify-between items-center mb-4'>
                <h2 className="text-lg font-bold">Geometria delle masse</h2>
                <button
                    onClick={toggleTable}
                    className="flex items-center p-3 border border-gray-300 rounded-lg text-gray-500 bg-white font-semibold hover:bg-gray-200 transition duration-100"
                >
                    {isExpanded ? <FaMinus /> : <FaPlus />}
                </button>
            </div>

            {/* Modalità Minimizzata */}
            {!isExpanded && (

                <MinimalTable list={minimalTableGeometryMassConfig} isInput={false} />

            )}

            {/* Modalità Espansa */}
            {isExpanded && (
                <>



                </>
            )}
        </div>
    )

}