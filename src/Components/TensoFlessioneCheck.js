import Latex from "react-latex-next";
import getGamma from "../Utils/getGamma";
import getCheckSymbol from "../Utils/getCheckSymbol";
import { useRecoilValue } from 'recoil';
import { forcesStateAtom } from "../Atom/forcesStateAtom";
import customDecimal from "../Utils/customDecimal";
import CheckCard from "./CheckCard";


export default function TensoFlessioneCheck(params) {

    const { Ned: rawNed, Med_y: rawMed_y, Med_z: rawMed_z } = useRecoilValue(forcesStateAtom)
    const Ned = rawNed > 0 ? rawNed : 0
    const Med_y = rawMed_y > 0 ? rawMed_y : 0
    const Med_z = rawMed_z > 0 ? rawMed_z : 0

    const isDisabled = Ned == 0 ? true : false


    const Atot = 26
    const Aeff = 1289.6
    const gm = getGamma('m0')

    const Wel_y = 543
    const Wel_z = 543
    const km = 564
    const kmod = 564
    const fmk = 564
    const khy = 564
    const khz = 564

    const sig_t0d = 89
    const sig_myd = Med_y / Wel_y
    const sig_mzd = Med_z / Wel_z


    const f_t0d = 89
    const f_myd = khy * kmod * fmk / gm
    const f_mzd = khz * kmod * fmk / gm


    const check_y = (sig_t0d / f_t0d) + km * (sig_myd / f_myd) + (sig_mzd / f_mzd)
    const check_z = (sig_t0d / f_t0d) + (sig_myd / f_myd) + km * (sig_mzd / f_mzd)



    const title = 'Verifica a Tenso-Flessione [NTC18 - 4.4.8.1.7]'

    const centralContent =
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <Latex>{`$\\sigma_{t,0,d} = \\dfrac{N_{Ed}}{A_{tot}} = \\dfrac{${Ned}}{${Atot}} = ${sig_t0d}$`}</Latex>
                <div>Tensione di progetto massima per trazione</div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <Latex>{`$\\sigma_{m,y,d} = \\dfrac{M_{Ed,y}}{W_{el,y}} = \\dfrac{${Med_y}}{${Wel_y}} = ${sig_myd}$`}</Latex>
                <div>Tensione di progetto massima per flessione attorno a y</div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <Latex>{`$\\sigma_{m,z,d} = \\dfrac{M_{Ed,z}}{W_{el,z}} = \\dfrac{${Med_z}}{${Wel_z}} = ${sig_mzd}$`}</Latex>
                <div>Tensione di progetto massima per flessione attorno a z</div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <Latex>{`$f_{t,0,d} = k_{mod}\\cdot\\dfrac{k_{h}\\cdot f_{t,0,k}}{\\gamma_m} = ${kmod}\\cdot\\dfrac{${khz}\\cdot${fmk}}{${gm}} = ${f_mzd}$`}</Latex>
                <div>Resistenza di progetto per trazione</div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <Latex>{`$f_{m,y,d} = k_{mod}\\cdot\\dfrac{k_{h,y}\\cdot f_{m,k}}{\\gamma_m} = ${kmod}\\cdot\\dfrac{${khy}\\cdot${fmk}}{${gm}} = ${f_myd}$`}</Latex>
                <div>Resistenza di progetto per flessione attorno a y</div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <Latex>{`$f_{m,z,d} = k_{mod}\\cdot\\dfrac{k_{h,z}\\cdot f_{m,k}}{\\gamma_m} = ${kmod}\\cdot\\dfrac{${khz}\\cdot${fmk}}{${gm}} = ${f_mzd}$`}</Latex>
                <div>Resistenza di progetto per flessione attorno a z</div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <Latex>{`$k_m = ${km}$`}</Latex>
                <div>Coefficiente per la ridistribuzione delle tensioni e disomogeneità del materiale </div>
            </div>
            <hr />

        </div>

    const finalContent
        = <div className="flex flex-col gap-5">
            <Latex>{`$\\displaystyle\\frac{\\sigma_{t,0,d}}{f_{t,0,d}} + \\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + k_m\\cdot\\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = \\frac{${sig_t0d}}{${f_t0d}} + \\frac{${sig_myd}}{${f_myd}} + ${km}\\cdot\\frac{${sig_mzd}}{${f_mzd}} = ${check_z}${getCheckSymbol(check_z)}$`}</Latex>
            <Latex>{`$\\displaystyle\\frac{\\sigma_{t,0,d}}{f_{t,0,d}} + k_m\\cdot\\frac{\\sigma_{m,y,d}}{f_{m,y,d}} + \\frac{\\sigma_{m,z,d}}{f_{m,z,d}} = \\frac{${sig_t0d}}{${f_t0d}} + ${km}\\cdot\\frac{${sig_myd}}{${f_myd}} + \\frac{${sig_mzd}}{${f_mzd}} = ${check_y}${getCheckSymbol(check_y)}$`}</Latex>
        </div>

    const checkCardProps = { title: title, centralContent: centralContent, finalContent: finalContent, check: [check_z, check_y], isDisabled: isDisabled }
    return <CheckCard props={checkCardProps} />;

}

