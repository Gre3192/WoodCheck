import Latex from "react-latex-next";
import { FaCheckCircle } from 'react-icons/fa';




export default function CompressioneCheck(params) {


    const classSection = 3
    // const NcRd = classSection == 4 ? Aeff * fyk / gm0 : Atot * fyk / gm0


    const check = '1'
    // const check = Ned/NcRd



    return (
        <div className="p-5">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold mb-4">Verifica a Compressione [4.2.4.1.2.2]</h2>
                    <div className="flex">
                        {`Tasso = ${check}`}
                        <FaCheckCircle className={`h-6 w-6 ${check < '1' ? 'text-green-500' : check === '1' ? 'text-yellow-500' : 'text-red-500'} ml-2`} />
                    </div>                </div>
                <hr />
                <div className="flex flex-col gap-4 py-5">
                    <div className="flex flex-col gap-4">
                        {classSection == 4 ?
                            <Latex>{'$N_{c,Rd} = \\dfrac{A_{eff}\\cdotp f_{yk}}{\\gamma_{M0}} = $'}</Latex>
                            : <Latex>{'$N_{c,Rd} = \\dfrac{A_{tot}\\cdotp f_{yk}}{\\gamma_{M0}} = $'}</Latex>
                        }
                        <Latex>{'$\\dfrac{N_{Ed}}{N_{c,Rd}} = $'}</Latex>
                    </div>
                </div>
            </div>
        </div>
    )
}