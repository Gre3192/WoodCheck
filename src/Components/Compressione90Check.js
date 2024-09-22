import Latex from "react-latex-next";
import getGamma from "../Utils/getGamma";
import getCheckSymbol from "../Utils/getCheckSymbol";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import customDecimal from "../Utils/customDecimal";
import CheckCard from "./CheckCard";


export default function Compressione90Check(params) {

    const { Ned: rawNed } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const geometryMass = 464
    const fyk = 453

    const isDisabled = Ned == 0 ? true : false


    const Atot = 26
    const Aeff = 1289.6
    const gm0 = getGamma('m0')

    const NcRd = 161
    const check = Ned / NcRd

    const title = 'Verifica a Compressione perpendicolare alla fibratura [NTC18 - 4.4.8.1.4]'

    const centralContent =
        <div className="flex flex-col gap-4">

           
                <div className="flex justify-between items-center">
                    <Latex>{`$N_{c,Rd} = \\dfrac{A_{tot}\\cdot f_{yk}}{\\gamma_{M0}} = \\dfrac{${Atot}\\cdot ${fyk}}{${gm0}} = ${NcRd}$`}</Latex>
                    <div>Resistenza a Compressione  per sezioni in Classe 1, 2 e 3</div>
                </div>
        
        </div>

    const finalContent
        = <Latex>{`$\\dfrac{N_{Ed}}{N_{c,Rd}} = \\dfrac{${Ned}}{${NcRd}} = ${check}${getCheckSymbol(check)}$`}</Latex>

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: check, isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} />;

}

