import Latex from "react-latex-next";
import customDecimal from "../Utils/customDecimal";
import MinimalTable from "./MinimalTable";
import { useState } from "react";


export default function SectionGeometryMass({ sectionGeometryMass }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleTable = () => {
        setIsExpanded(!isExpanded);
    };

    const minimalTableGeometryMassConfig = [
        { label: 'A_{tot}\\\\\\text{[$mm^2$]}', value: customDecimal(sectionGeometryMass?.valori.Atot, 2), textHover: 'Area totale' },
        { label: 'I_{g,y}\\\\\\text{[$mm^4$]}', value: customDecimal(sectionGeometryMass?.valori.ig_y, 2), textHover: 'Momento di inerzia attorno a Y-Y' },
        { label: 'I_{g,z}\\\\\\text{[$mm^4$]}', value: customDecimal(sectionGeometryMass?.valori.ig_z, 2), textHover: 'Momento di inerzia attorno a Z-Z' },
        { label: 'W_{el,sup}\\\\\\text{[$mm^3$]}', value: customDecimal(sectionGeometryMass?.valori.wel_sup_y, 2), textHover: 'Modulo di resistenza elastico lembo superiore' },
        { label: 'W_{el,inf}\\\\\\text{[$mm^3$]}', value: customDecimal(sectionGeometryMass?.valori.wel_inf_y, 2), textHover: 'Modulo di resistenza elastico lembo inferiore' },
        { label: 'W_{pl,y}\\\\\\text{[$mm^3$]}', value: customDecimal(sectionGeometryMass?.valori.wpl_y, 2), textHover: 'Modulo di resistenza plastico attorno a Y-Y' },
        { label: 'W_{pl,z}\\\\\\text{[$mm^3$]}', value: customDecimal(sectionGeometryMass?.valori.wpl_z, 2), textHover: 'Modulo di resistenza plastico attorno a Z-Z' }
    ]

    return (
        <>
            <div className='px-5 flex gap-4'>
                <button onClick={toggleTable} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    {isExpanded ? '-' : '+'}
                </button>
                <p className="text-xl font-semibold mr-5">Geometria delle masse</p>
            </div>

            {/* Modalità Minimizzata */}
            {!isExpanded && (
                <div className='p-5'>
                    <MinimalTable list={minimalTableGeometryMassConfig} />
                </div>
            )}

            {/* Modalità Espansa */}
            {isExpanded && (
                <div className="p-5">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="text-left px-4 py-2 font-bold">Proprietà</th>
                                    <th className="text-left px-4 py-2 font-bold">Formula</th>
                                    <th className="text-left px-4 py-2 font-bold">Valore</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Area */}
                                <tr className="bg-gray-200">
                                    <td className="px-4 py-2 font-semibold" colSpan="3">Area</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Area totale</td>
                                    <td className="px-4 py-2"><Latex>{sectionGeometryMass?.formule.Atot}</Latex></td>
                                    <td className="px-4 py-2">{customDecimal(sectionGeometryMass?.valori.Atot, 2)}</td>
                                </tr>

                                {/* Rotazione attorno all'asse Y-Y */}
                                <tr className="bg-gray-200">
                                    <td className="px-4 py-2 font-semibold" colSpan="3">Rotazione attorno all'asse Y-Y</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Posizione del Baricentro</td>
                                    <td className="px-4 py-2"><Latex>{sectionGeometryMass?.formule.yg}</Latex></td>
                                    <td className="px-4 py-2">{customDecimal(sectionGeometryMass?.valori.yg, 2)}</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Momento di Inerzia</td>
                                    <td className="px-4 py-2">
                                        <div className="flex flex-col space-y-1">
                                            <Latex>{sectionGeometryMass?.formule.ig_sup_y}</Latex>
                                            <Latex>{sectionGeometryMass?.formule.igw_y}</Latex>
                                            <Latex>{sectionGeometryMass?.formule.ig_inf_y}</Latex>
                                            <Latex>{sectionGeometryMass?.formule.ig_y}</Latex>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="flex flex-col space-y-1">
                                            <span>{customDecimal(sectionGeometryMass?.valori.ig_sup_y, 2)}</span>
                                            <span>{customDecimal(sectionGeometryMass?.valori.igw_y, 2)}</span>
                                            <span>{customDecimal(sectionGeometryMass?.valori.ig_inf_y, 2)}</span>
                                            <span>{customDecimal(sectionGeometryMass?.valori.ig_y, 2)}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Modulo di Resistenza Elastico</td>
                                    <td className="px-4 py-2">
                                        <div className="flex flex-col space-y-1">
                                            <Latex>{sectionGeometryMass?.formule.wel_sup_y}</Latex>
                                            <Latex>{sectionGeometryMass?.formule.wel_inf_y}</Latex>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="flex flex-col space-y-1">
                                            <span>{customDecimal(sectionGeometryMass?.valori.wel_sup_y, 2)}</span>
                                            <span>{customDecimal(sectionGeometryMass?.valori.wel_inf_y, 2)}</span>
                                        </div>
                                    </td>
                                </tr>

                                {/* Rotazione attorno all'asse Z-Z */}
                                <tr className="bg-gray-200">
                                    <td className="px-4 py-2 font-semibold" colSpan="3">Rotazione attorno all'asse Z-Z</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Posizione del Baricentro</td>
                                    <td className="px-4 py-2"><Latex>{sectionGeometryMass?.formule.zc}</Latex></td>
                                    <td className="px-4 py-2">{customDecimal(sectionGeometryMass?.valori.zc, 2)}</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Momento di Inerzia</td>
                                    <td className="px-4 py-2">
                                        <div className="flex flex-col space-y-1">
                                            <Latex>{sectionGeometryMass?.formule.ig_sup_z}</Latex>
                                            <Latex>{sectionGeometryMass?.formule.igw_z}</Latex>
                                            <Latex>{sectionGeometryMass?.formule.ig_inf_z}</Latex>
                                            <Latex>{sectionGeometryMass?.formule.ig_z}</Latex>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="flex flex-col space-y-1">
                                            <span>{customDecimal(sectionGeometryMass?.valori.ig_sup_z, 2)}</span>
                                            <span>{customDecimal(sectionGeometryMass?.valori.igw_z, 2)}</span>
                                            <span>{customDecimal(sectionGeometryMass?.valori.ig_inf_z, 2)}</span>
                                            <span>{customDecimal(sectionGeometryMass?.valori.ig_z, 2)}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Modulo di Resistenza Plastico</td>
                                    <td className="px-4 py-2"><Latex>{sectionGeometryMass?.formule.wpl_z}</Latex></td>
                                    <td className="px-4 py-2">{customDecimal(sectionGeometryMass?.valori.wpl_z, 2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    )

}