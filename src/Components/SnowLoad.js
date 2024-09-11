import ItalySnowMap from "./ItalySnowMap";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import getCaricoNeve from "../Utils/getSnowLoad";
import customDecimal from "../Utils/customDecimal";
import { useState } from "react";
import ProvinceSelector from "./ProvinceSelector";
import TopographySelector from "./TopographySelector ";


const SnowLoad = () => {

  const [as, setAs] = useState(300); // Gestisci lo stato di as
  const [selectedTopography, setSelectedTopography] = useState("Normale");
  const [selectedProvince, setSelectedProvince] = useState({
    prov_name: '',
    reg_name: '',
    zone: ''
  });

  const valoriCaricoNeve = getCaricoNeve(selectedProvince?.prov_name, as, selectedTopography)

  const zone = valoriCaricoNeve.zona
  const qsk = valoriCaricoNeve.caricoNeveAlSuolo.valori.qsk
  const ce = valoriCaricoNeve.coeffCe.ce
  const ct = valoriCaricoNeve.coeffCt.ct
  const qs = valoriCaricoNeve.caricoNeve.valori.qs

  const qskFormula = valoriCaricoNeve.caricoNeveAlSuolo.formula.qsk
  const qsFormula = valoriCaricoNeve.caricoNeve.formula.qs

  return (
    <>
      <div className="flex">
        <div className="flex flex-col w-full gap-5 text-2xl p-10">
          <p className="font-bold text-3xl underline mb-10">CARICO NEVE</p>
          <div className="flex gap-10 text-base">
            <div className="w-1/3">
              <ProvinceSelector props={{ selectedProvince: selectedProvince, setSelectedProvince: setSelectedProvince }} />
            </div>
            <div className="w-1/3">
              <TopographySelector props={{ selectedTopography: selectedTopography, setSelectedTopography: setSelectedTopography }} />
            </div>
            <div className="w-1/3">
              <label className="block text-gray-700 text-sm font-bold mb-2">{"Altitudine [m s.l.m.]:"}</label>
              <input
                type="number"
                value={as}
                onChange={(e) => setAs(Number(e.target.value))} // Aggiorna il valore di as
                placeholder="Altitudine (m)"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex w-2/3 flex-col gap-10 text-base">
              <p className="font-bold">
                <Latex >{`${zone ? zone : 'Seleziona una provincia per identificare una Zona'}`}</Latex>
              </p>
              <div className="flex flex-col gap-10 text-base">
                <div>
                  <p className="font-bold">Carico neve al suolo</p>
                  <Latex >{'$q_{sk}=$'}{' '}{qskFormula}{'$ = $'}{' '}{`$${customDecimal(qsk, 2)}$`}{' $Mpa$'}</Latex>
                </div>
                <div>
                  <p className="font-bold">Coefficiente di esposizione</p>
                  <Latex >{'$C_{e}=$'}{' '}{`$${customDecimal(ce, 2)}$`}</Latex>
                </div>
                <div>
                  <p className="font-bold">Coefficiente termico</p>
                  <Latex >{'$C_{t}=$'}{' '}{`$${customDecimal(ct, 2)}$`}</Latex>
                </div>
                <div>
                  <p className="font-bold">Carico neve</p>
                  <Latex >{'$q_{s}=$'}{' '}{qsFormula}{'$ = $'}{' '}{`$${customDecimal(qs, 2)}$`}{' $Mpa$'}</Latex>
                </div>
              </div>
            </div>
            <div className="w-1/3 overflow-hidden">
              <ItalySnowMap props={{ selectedProvince: selectedProvince, setSelectedProvince: setSelectedProvince }} />
            </div>
          </div>
        </div>

      </div>

    </>
  );
}


export default SnowLoad