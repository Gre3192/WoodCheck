import Latex from "react-latex-next";
import { FaCheckCircle } from 'react-icons/fa';




export default function TaglioCheck(params) {


    // const Av = ''
    // const VcRd = (Av * fyk) / (Math.sqrt(3) * gm0)


    // const check = Ved/VcRd
    const check = 0.5



    return (
        <div className="p-5">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold mb-4">Verifica a Taglio [4.2.4.1.2.4]</h2>
                    <div className="flex">
                        {`Tasso = ${check}`}
                        <FaCheckCircle className={`h-6 w-6 ${check < '1' ? 'text-green-500' : check === '1' ? 'text-yellow-500' : 'text-red-500'} ml-2`} />
                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-4 py-5">
                    <div className="flex flex-col gap-4">
                        <Latex>{'$V_{c,Rd} = \\dfrac{A_{v}\\cdotp f_{yk}}{\\sqrt{3}\\cdotp\\gamma_{M0}} = $'}</Latex>
                        <Latex>{'$\\dfrac{V_{Ed}}{V_{c,Rd}} = $'}</Latex>
                    </div>
                </div>
            </div>
        </div>
    )
}