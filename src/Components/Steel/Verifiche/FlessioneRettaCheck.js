import Latex from "react-latex-next";
import { FaCheckCircle } from 'react-icons/fa';




export default function FlessioneRettaCheck(params) {

    const classSection = 3

    // const McRd =
    //     classSection == 3 ? (Wel*fyk/gm0)
    //         : classSection == 4 ? (Weff*fyk/gm0)
    //             : (Wpl*fyk/gm0)

    // const check = Med/McRd
    const check = 0.6

    return (
        <div className="p-5">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold mb-4">Verifica a Flessione monoassiale (retta) [4.2.4.1.2.3]</h2>
                    <div className="flex">
                        {`Tasso = ${check}`}
                        <FaCheckCircle className={`h-6 w-6 ${check < '1' ? 'text-green-500' : check === '1' ? 'text-yellow-500' : 'text-red-500'} ml-2`} />
                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-4 py-5">
                    <div className="flex flex-col gap-4">
                        {
                            classSection == 3 ? <Latex>{'$M_{c,Rd} = M_{el,Rd} = \\dfrac{W_{el,min}\\cdotp f_{yk}}{\\gamma_{M0}} = $'}</Latex>
                                : classSection == 4 ? <Latex>{'$M_{c,Rd} = \\dfrac{W_{eff,min}\\cdotp f_{yk}}{\\gamma_{M0}} = $'}</Latex>
                                    : <Latex>{'$M_{c,Rd} = M_{pl,Rd} = \\dfrac{W_{pl}\\cdotp f_{yk}}{\\gamma_{M0}} = $'}</Latex>
                        }
                        <Latex>{'$\\dfrac{M_{Ed}}{M_{c,Rd}} = $'}</Latex>
                    </div>
                </div>
            </div>
        </div>
    )
}