import Latex from "react-latex-next";
import getGamma from "../Utils/getGamma";
import getCheckSymbol from "../Utils/getCheckSymbol";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import customDecimal from "../Utils/customDecimal";
import CheckCard from "./CheckCard";
import getKsh from "../Utils/getKsh";

export default function TorsioneCheck(params) {

    const { Med_tor: rawMed_tor } = useRecoilValue(forcesStateAtom)
    const Med_tor = rawMed_tor > 0 ? rawMed_tor : 0
    const geometryMass = 464
    const isDisabled = Med_tor == 0 ? true : false

    const kmod = 0.7
    const Atot = 26
    const Aeff = 1289.6
    const gm = getGamma('m0')
    const fvk = 9
    const Itor = 98798
    const b = 453
    const ksh = getKsh('circolare').value

    const fvd = kmod * fvk / gm
    const tau_tord = 561
    const check = tau_tord / fvd


    const title = 'Verifica a Torsione [NTC18 - 4.4.8.1.10]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <Latex>{`$\\tau_{tor,d} = \\dfrac{M_{tor,d} \\cdot b}{I_{tor}} = \\dfrac{${Med_tor} \\cdot ${b}}{${Itor}} = ${tau_tord}$`}</Latex>
                <div>Tensione di progetto massima per torsione</div>
            </div>
            <hr/>
            <div className="flex justify-between items-center">
                <Latex>{`$f_{v,d} = k_{mod}\\cdot\\dfrac{f_{vk}}{\\gamma_m} = ${kmod}\\cdot\\dfrac{${fvk}}{${gm}} = ${fvd}$`}</Latex>
                <div>Resistenza di progetto a taglio</div>
            </div>
            <hr/>
            <div className="flex justify-between items-center">
                <Latex>{`$k_{sh} = ${ksh}$`}</Latex>
                <div>{getKsh('circolare').description}</div>
            </div>
            <hr/>
        </div>

    const finalContent
        = <Latex>{`$\\dfrac{\\tau_{tor,d}}{k_{sh}\\cdot f_{v,d}} = \\dfrac{${tau_tord}}{${ksh}\\cdot ${fvd}} = ${check}${getCheckSymbol(check)}$`}</Latex>

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} />;

}

