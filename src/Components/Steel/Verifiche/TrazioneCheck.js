import Latex from "react-latex-next";
import { FaCheckCircle } from 'react-icons/fa';




export default function TrazioneCheck(params) {



    // const NplRd = Atot*fyk/gm0
    // const NuRd = 0.9*Anet*ftk/gm2
    // const NtRd = min(NplRd, NuRd)
    // const check = Ned/NtRd


    const check = 1



    return (
        <div className="p-5">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold mb-4">Verifica a Trazione [4.2.4.1.2.1]</h2>
                    <div className="flex">
                        {`Tasso = ${check}`}
                        <FaCheckCircle className={`h-6 w-6 ${check < '1' ? 'text-green-500' : check === '1' ? 'text-yellow-500' : 'text-red-500'} ml-2`} />
                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-4 py-5">
                    <div className="flex flex-col gap-4">
                        <Latex>{'$N_{pl,Rd} = \\dfrac{A_{tot}\\cdotp f_{yk}}{\\gamma_{M0}} = $'}</Latex>
                        <Latex>{'$N_{u,Rd} = 0.9\\cdotp\\dfrac{A_{net}\\cdotp f_{tk}}{\\gamma_{M2}} = $'}</Latex>
                        <Latex>{'$N_{t,Rd} = \\text{min}\\left(N_{pl,Rd},N_{u,Rd}\\right) = $'}</Latex>
                        <Latex>{'$\\dfrac{N_{Ed}}{N_{t,Rd}} = $'}</Latex>
                    </div>
                </div>
            </div>
        </div>
    )
}