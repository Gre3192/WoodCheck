import Latex from "react-latex-next";
import getGamma from "../Utils/getGamma";
import getCheckSymbol from "../Utils/getCheckSymbol";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import customDecimal from "../Utils/customDecimal";
import CheckCard from "./CheckCard";


export default function FlessioneCheck(params) {

    const { Med_y: rawMed_y, Med_z: rawMed_z } = useRecoilValue(forcesStateAtom)
    const Med_y = rawMed_y > 0 ? rawMed_y : 0
    const Med_z = rawMed_z > 0 ? rawMed_z : 0
    const geometryMass = 464
    const fyk = 453

    const isDisabled = Med_y == 0 && Med_z == 0 ? true : false


    const Atot = 26
    const Aeff = 1289.6
    const Wel_y = 1289.6
    const Wel_z = 1289.6
    const khy = 1289.6
    const khz = 1289.6
    const fmk = 1289.6

    const gm = getGamma('m0')
    const km = 0.6
    const kmod = 0.7

    const sig_myd = Med_y / Wel_y
    const sig_mzd = Med_z / Wel_z

    const f_myd = khy * kmod * fmk / gm
    const f_mzd = khz * kmod * fmk / gm

    const check_z = (sig_myd / f_myd) + km * (sig_mzd / f_mzd)
    const check_y = km * (sig_myd / f_myd) + (sig_mzd / f_mzd)


    const title = 'Verifica a Flessione [NTC18 - 4.4.8.1.6]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <Latex>{`$\\sigma_{m,y,d} = \\dfrac{M_{Ed,y}}{W_{el,y}} = \\dfrac{${Med_y}}{${Wel_y}} = ${sig_myd}$`}</Latex>
                <div>Tensione di progetto massima per flessione attorno a y</div>
            </div>
            <div className="flex justify-between items-center">
                <Latex>{`$\\sigma_{m,z,d} = \\dfrac{M_{Ed,z}}{W_{el,z}} = \\dfrac{${Med_z}}{${Wel_z}} = ${sig_mzd}$`}</Latex>
                <div>Tensione di progetto massima per flessione attorno a z</div>
            </div>
            <div className="flex justify-between items-center">
                <Latex>{`$f_{m,y,d} = k_{mod}\\cdot\\dfrac{k_{hy}\\cdot f_{m,k}}{\\gamma_m} = ${kmod}\\cdot\\dfrac{${khy}\\cdot${fmk}}{${gm}} = ${f_myd}$`}</Latex>
                <div>Resistenza di progetto per flessione attorno a y</div>
            </div>
            <div className="flex justify-between items-center">
                <Latex>{`$f_{m,z,d} = k_{mod}\\cdot\\dfrac{k_{hz}\\cdot f_{m,k}}{\\gamma_m} = ${kmod}\\cdot\\dfrac{${khz}\\cdot${fmk}}{${gm}} = ${f_mzd}$`}</Latex>
                <div>Resistenza di progetto per flessione attorno a z</div>
            </div>
        </div>

    const finalContent
        = <div className="flex flex-col gap-8">
            <Latex>{`$\\displaystyle \\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = \\frac{${sig_myd}}{${f_myd}} + ${km}\\cdot\\frac{${sig_mzd}}{${f_mzd}} = ${check_z}${getCheckSymbol(check_z)}$`}</Latex>
            <Latex>{`$\\displaystyle k_m\\cdot\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = ${km}\\cdot\\frac{${sig_myd}}{${f_myd}} + \\frac{${sig_mzd}}{${f_mzd}}= ${check_y}${getCheckSymbol(check_y)}$`}</Latex>
        </div>


    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: [check_y, check_z], isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} />;

}

