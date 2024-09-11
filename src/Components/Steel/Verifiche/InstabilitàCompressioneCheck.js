import Latex from "react-latex-next";
import { FaCheckCircle } from 'react-icons/fa';




export default function InstabilitàCompressioneCheck(params) {


    const classSection = 3

    // const lambda = classSection == 4 ? Math.sqrt((Aeff * fyk) / Ncr) : Math.sqrt((Atot * fyk) / Ncr)
    // const phi = 0.5 * (1 + alpha * (lambda - 0.2) + lambda ** 2)
    // const chi = Math.min(1 / (phi + Math.sqrt(phi ** 2 - lambda ** 2)), 1)

    // const NbRd = classSection == 4 ? (chi * Aeff * fyk) / gm1 : (chi * Atot * fyk) / gm1

    // const check = Ned / NbRd
    const check = 28

    return (
        <div className="p-5">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold mb-4">Instabilità a Compressione [4.2.4.1.3.1]</h2>
                    <div className="flex">
                        {`Tasso = ${check}`}
                        <FaCheckCircle className={`h-6 w-6 ${check < '1' ? 'text-green-500' : check === '1' ? 'text-yellow-500' : 'text-red-500'} ml-2`} />
                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-4 py-5">




                    {classSection == 4
                        ? <Latex>{'$\\overline{\\lambda} = \\sqrt{\\dfrac{A_{eff}\\cdotp f_{yk}}{N_{cr}}} = $'}</Latex>
                        : <Latex>{'$\\overline{\\lambda} = \\sqrt{\\dfrac{A_{tot}\\cdotp f_{yk}}{N_{cr}}} = $'}</Latex>
                    }
                    <Latex>{'$\\Phi = 0.5\\cdotp\\left[1+\\alpha\\cdotp\\left(\\overline{\\lambda}^2-0.2\\right)+\\overline{\\lambda}^2\\right] = $'}</Latex>
                    <Latex>{'$\\chi = \\text{min}\\left(\\dfrac{1}{\\Phi+\\sqrt{\\Phi^2-\\overline{\\lambda}^2}}; 1\\right) = $'}</Latex>
                    {classSection == 4
                        ? <Latex>{'$N_{b,Rd} = \\chi\\cdotp\\dfrac{A_{eff}\\cdotp f_{yk}}{\\gamma_{M1}} = $'}</Latex>
                        : <Latex>{'$N_{b,Rd} = \\chi\\cdotp\\dfrac{A_{tot}\\cdotp f_{yk}}{\\gamma_{M1}} = $'}</Latex>
                    }
                    <Latex>{'$\\dfrac{N_{Ed}}{N_{b,Rd}} = $'}</Latex>
                </div>
            </div>
        </div>
    )
}