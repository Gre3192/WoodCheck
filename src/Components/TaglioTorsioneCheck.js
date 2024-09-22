import Latex from "react-latex-next";
import getGamma from "../Utils/getGamma";
import getCheckSymbol from "../Utils/getCheckSymbol";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import customDecimal from "../Utils/customDecimal";
import CheckCard from "./CheckCard";
import getKsh from "../Utils/getKsh";

export default function TaglioTorsioneCheck(params) {

    const { Med_tor: rawMed_tor, Ved_y: rawVed_y, Ved_z: rawVed_z } = useRecoilValue(forcesStateAtom)
    const Med_tor = rawMed_tor > 0 ? rawMed_tor : 0
    const Ved_y = rawVed_y > 0 ? rawVed_y : 0
    const Ved_z = rawVed_z > 0 ? rawVed_z : 0
    const isDisabled = Ved_y == 0 && Ved_z == 0 && Med_tor == 0 ? true : false

    const Atot = 26
    const Aeff = 1289.6
    const gm = getGamma('m0')

    const shape = true

    const tau_d = shape ? (3 / 2) * (Math.sqrt(Ved_y ** 2 + Ved_z ** 2) / Atot) : (4 / 3) * (Math.sqrt(Ved_y ** 2 + Ved_z ** 2) / Atot)
    const tau_tord = 561
    const fvk = 9
    const fvd = 9
    const Itor = 98798
    const b = 453
    const ksh = getKsh('circolare').value

    const check = (tau_tord / (ksh * fvd)) + (tau_d / fvd) ** 2




    const title = 'Verifica a Taglio e Torsione [NTC18 - 4.4.8.1.11]'

    const centralContent =
        <div className="flex flex-col gap-4">
            {
                shape ?
                    <div className="flex justify-between items-center">
                        <Latex>{`$\\tau_{d} = \\dfrac{3}{2}\\cdot\\dfrac{\\sqrt{V_{Ed,y}^2+V_{Ed,z}^2}}{A_{tot}} = \\dfrac{3}{2}\\cdot\\dfrac{\\sqrt{${Ved_y}^2+${Ved_z}^2}}{${Atot}} = ${tau_d}$`}</Latex>
                        <div>Tensione tangenziale di progetto massima per sezioni rettangolari</div>
                    </div>
                    :
                    <div className="flex justify-between items-center">
                        <Latex>{`$\\tau_{d} = \\dfrac{4}{3}\\cdot\\dfrac{\\sqrt{V_{Ed,y}^2+V_{Ed,z}^2}}{A_{tot}} = \\dfrac{4}{3}\\cdot\\dfrac{\\sqrt{${Ved_y}^2+${Ved_z}^2}}{${Atot}} = ${tau_d}$`}</Latex>
                        <div>Tensione tangenziale di progetto massima per sezioni circolari</div>
                    </div>
            }
            <hr />
            <div className="flex justify-between items-center">
                <Latex>{`$\\tau_{tor,d} = \\dfrac{M_{tor,d} \\cdot b}{I_{tor}} = \\dfrac{${Med_tor} \\cdot ${b}}{${Itor}} = ${tau_tord}$`}</Latex>
                <div>Tensione di progetto massima per torsione</div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <Latex>{`$k_{sh} = ${ksh}$`}</Latex>
                <div>{getKsh('circolare').description}</div>
            </div>
            <hr />
        </div>

    const finalContent
        = <Latex>{`$\\displaystyle\\frac{\\tau_{tor,d}}{k_{sh}\\cdot f_{v,d}} + \\left( \\frac{\\tau_d}{f_{v,d}} \\right)^2 = \\frac{${tau_tord}}{${ksh}\\cdot ${fvd}} + \\left( \\frac{${tau_d}}{${fvd}} \\right)^2 = ${check}${getCheckSymbol(check)}$`}</Latex>

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} />;

}

