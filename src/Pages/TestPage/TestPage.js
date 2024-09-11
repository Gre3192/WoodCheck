import ItalySnowMap from "../../Components/ItalySnowMap";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import getCaricoNeve from "../../Utils/getSnowLoad";
import customDecimal from "../../Utils/customDecimal";
import { useState } from "react";
import ProvinceSelector from "../../Components/provinceSelector";
import TopographySelector from "../../Components/TopographySelector ";


const TestPage = () => {

  const [as, setAs] = useState(300); // Gestisci lo stato di as
  const [selectedTopography, setSelectedTopography] = useState("Normale");
  const [selectedProvince, setSelectedProvince] = useState({
    prov_name: '',
    reg_name: '',
    zone: ''
  });

  const zone = getCaricoNeve(selectedProvince?.prov_name, as, selectedTopography).zona
  const qsk = getCaricoNeve(selectedProvince?.prov_name, as, selectedTopography).caricoNeveAlSuolo.valori.qsk
  const qskFormula = getCaricoNeve(selectedProvince?.prov_name, as, selectedTopography).caricoNeveAlSuolo.formula.qsk
  const ce = getCaricoNeve(selectedProvince?.prov_name, as, selectedTopography).coeffCe.ce
  const ct = getCaricoNeve(selectedProvince?.prov_name, as, selectedTopography).coeffCt.ct
  const qs = getCaricoNeve(selectedProvince?.prov_name, as, selectedTopography).caricoNeve.valori.qs
  const qsFormula = getCaricoNeve(selectedProvince?.prov_name, as, selectedTopography).caricoNeve.formula.qs

  return (
    <>
      <div className="flex">
        <div className="flex flex-col gap-5 text-2xl w-1/2 p-10">
          <p className="font-bold text-3xl underline mb-10">CARICO NEVE</p>
          <div className="flex gap-10">
            <div className="w-1/2">
              <ProvinceSelector props={{ selectedProvince: selectedProvince, setSelectedProvince: setSelectedProvince }} />
            </div>
            <div className="w-1/2">
              <TopographySelector props={{ selectedTopography: selectedTopography, setSelectedTopography: setSelectedTopography }} />
            </div>
            <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Seleziona l'Altitudine:</label>
            <input
                type="number"
                value={as}
                onChange={(e) => setAs(Number(e.target.value))} // Aggiorna il valore di as
                placeholder="Altitudine (m)"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <p className="font-bold">
            <Latex >{`${zone ? zone : 'Seziona una provincia per identificare una Zona'}`}</Latex>
          </p>
          <div>
            <p>Carico neve al suolo</p>
            <Latex >{'$q_{sk}=$'}{' '}{qskFormula}{'$ = $'}{' '}{`$${customDecimal(qsk, 2)}$`}{' $Mpa$'}</Latex>
          </div>
          <div>
            <p>Coefficiente di esposizione</p>
            <Latex >{'$C_{e}=$'}{' '}{`$${customDecimal(ce, 2)}$`}</Latex>
          </div>
          <div>
            <p>Coefficiente termico</p>
            <Latex >{'$C_{t}=$'}{' '}{`$${customDecimal(ct, 2)}$`}</Latex>
          </div>
          <div>
            <p>Carico neve</p>
            <Latex >{'$q_{s}=$'}{' '}{qsFormula}{'$ = $'}{' '}{`$${customDecimal(qs, 2)}$`}{' $Mpa$'}</Latex>
          </div>
        </div>
        <div className="w-1/2 overflow-hidden">
          <ItalySnowMap props={{ selectedProvince: selectedProvince, setSelectedProvince: setSelectedProvince }} />
        </div>
      </div>

    </>
  );
}


export default TestPage