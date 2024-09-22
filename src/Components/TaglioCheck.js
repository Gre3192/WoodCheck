import Latex from "react-latex-next";
import getGamma from "../Utils/getGamma";
import getCheckSymbol from "../Utils/getCheckSymbol";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import customDecimal from "../Utils/customDecimal";
import CheckCard from "./CheckCard";


export default function TaglioCheck(params) {

    const { Ved_y: rawVed_y, Ved_z: rawVed_z } = useRecoilValue(forcesStateAtom)
    const Ved_y = rawVed_y > 0 ? rawVed_y : 0
    const Ved_z = rawVed_z > 0 ? rawVed_z : 0
    const isDisabled = Ved_y == 0 && Ved_z == 0 ? true : false

    const shape = true
    const Atot = 26
    const Aeff = 1289.6
    const gm = getGamma('m0')
    const kmod = 0.7
    const fvk = 9
    const fvd = kmod * fvk / gm
    const tau_d = shape ? (3 / 2) * (Math.sqrt(Ved_y ** 2 + Ved_z ** 2) / Atot) : (4 / 3) * (Math.sqrt(Ved_y ** 2 + Ved_z ** 2) / Atot)
    const check = tau_d / fvd




    const title = 'Verifica a Taglio [NTC18 - 4.4.8.1.9]'

    const centralContent =
        <div className="flex flex-col gap-4">
            {
                shape ?

                    <div className="flex justify-between items-center">
                        <Latex>{`$\\tau_{d} = \\dfrac{3}{2}\\cdot\\dfrac{\\sqrt{V_{Ed,y}^2+V_{Ed,z}^2}}{A_{tot}} = \\dfrac{3}{2}\\cdot\\dfrac{\\sqrt{${Ved_y}^2+${Ved_z}^2}}{${Atot}} = ${tau_d}$`}</Latex>
                        <div>Tensione tangenziale di progetto massima per sezioni rettangolari</div>
                    </div> :

                    <div className="flex justify-between items-center">
                        <Latex>{`$\\tau_{d} = \\dfrac{4}{3}\\cdot\\dfrac{\\sqrt{V_{Ed,y}^2+V_{Ed,z}^2}}{A_{tot}} = \\dfrac{4}{3}\\cdot\\dfrac{\\sqrt{${Ved_y}^2+${Ved_z}^2}}{${Atot}} = ${tau_d}$`}</Latex>
                        <div>Tensione tangenziale di progetto massima per sezioni circolari</div>
                    </div>
            }
            <div className="flex justify-between items-center">
                <Latex>{`$f_{v,d} = k_{mod}\\cdot\\dfrac{f_{vk}}{\\gamma_m} = ${kmod}\\cdot\\dfrac{${fvk}}{${gm}} = ${fvd}$`}</Latex>
                <div>Resistenza di progetto a taglio</div>
            </div>
        </div>

    const finalContent
        = <Latex>{`$\\dfrac{\\tau_{d}}{f_{v,d}} = \\dfrac{${tau_d}}{${fvd}} = ${check}${getCheckSymbol(check)}$`}</Latex>

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} />;

}

