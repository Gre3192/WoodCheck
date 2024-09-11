import ItalyWindMap from "./ItalyWindMap";
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import customDecimal from "../Utils/customDecimal";
import { useState } from "react";
import ProvinceSelector from "./ProvinceSelector";
import RoughnessSelector from "./RoughnessSelector";
import getWindLoad from "../Utils/getWindLoad";


const WindLoad = () => {

  const [as, setAs] = useState(null);
  const [distanceFromCoast, setDistanceFromCoast] = useState(null);
  const [selectedRoughness, setSelectedRoughness] = useState("A");
  const [selectedProvince, setSelectedProvince] = useState({
    prov_name: '',
    reg_name: '',
    zone: ''
  });

  const z = 6;

  const valoriCaricoVento = getWindLoad(selectedProvince?.prov_name, as, selectedRoughness.slice(-1), distanceFromCoast, z)

  const zone = valoriCaricoVento.zona
  const categoriaEsposizione = valoriCaricoVento.categoriaEsposizione
  const vb0 = valoriCaricoVento.valori.vb0;
  const a0 = valoriCaricoVento.valori.a0;
  const ks = valoriCaricoVento.valori.ks;
  const ca = valoriCaricoVento.valori.ca;
  const vb = valoriCaricoVento.valori.vb;
  const cr = valoriCaricoVento.valori.cr;
  const ct = valoriCaricoVento.valori.ct;
  const vr = valoriCaricoVento.valori.vr;
  const ro = valoriCaricoVento.valori.ro;
  const qr = valoriCaricoVento.valori.qr;
  const kr = valoriCaricoVento.valori.kr;
  const z0 = valoriCaricoVento.valori.z0;
  const zmin = valoriCaricoVento.valori.zmin;
  const cd = valoriCaricoVento.valori.cd;
  const cf = valoriCaricoVento.valori.cf;
  const cp = valoriCaricoVento.valori.cp;
  const ce = valoriCaricoVento.valori.ce;
  const p = valoriCaricoVento.valori.p;
  const pf = valoriCaricoVento.valori.pf;


  const vb0Formula = '';
  const a0Formula = '';
  const ksFormula = '';
  const caFormula = valoriCaricoVento.formula.ca;
  const vbFormula = valoriCaricoVento.formula.vb;
  const crFormula = valoriCaricoVento.formula.cr;
  const ctFormula = '';
  const vrFormula = valoriCaricoVento.formula.vr;
  const roFormula = '';
  const qrFormula = valoriCaricoVento.formula.qr;
  const krFormula = '';
  const z0Formula = '';
  const zminFormula = '';
  const cdFormula = '';
  const cfFormula = '';
  const cpFormula = '';
  const ceFormula = valoriCaricoVento.formula.ce;
  const pFormula = valoriCaricoVento.formula.p;
  const pfFormula = valoriCaricoVento.formula.pf;




  return (
    <>
      <div className="flex">
        <div className="flex w-full flex-col gap-5 text-2xl  p-10">
          <p className="font-bold text-3xl underline mb-10">CARICO VENTO</p>
          <div className="flex gap-10 text-xs">
            <div className="w-1/4">
              <ProvinceSelector props={{ selectedProvince: selectedProvince, setSelectedProvince: setSelectedProvince }} />
            </div>
            <div className="w-1/4">
              <RoughnessSelector props={{ selectedRoughness: selectedRoughness, setSelectedRoughness: setSelectedRoughness }} />
            </div>
            <div className="w-1/4">
              <label className="block text-gray-700 text-sm font-bold mb-2">{"Altitudine [m s.l.m.]:"}</label>
              <input
                type="number"
                value={as}
                onChange={(e) => setAs(Number(e.target.value))} // Aggiorna il valore di as
                placeholder="Altitudine (m)"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="w-1/4">
              <label className="block text-gray-700 text-sm font-bold mb-2">{"Distanza dalla costa [m]:"}</label>
              <input
                type="number"
                value={distanceFromCoast}
                onChange={(e) => setDistanceFromCoast(Number(e.target.value))} // Aggiorna il valore di as
                placeholder="Distanza costa (m)"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex justify-between">
          <div className="flex w-2/3 flex-col gap-10 text-base">
            <p className="font-bold">
              <Latex >{`${zone ? zone : 'Seleziona una provincia per identificare una Zona'}`}</Latex>
            </p>
            <div className="flex flex-col">
              <p className="font-bold">Veocità base di riferimento</p>
              <Latex>{'$v_{b,0}=$'}{' '}{`$${customDecimal(vb0, 2)}$`}{' '}{'$m/s$'}</Latex>
              <Latex>{'$a_{0}=$'}{' '}{`$${customDecimal(a0, 2)}$`}{' '}{'$m$'}</Latex>
              <Latex>{'$k_{s}=$'}{' '}{`$${customDecimal(ks, 2)}$`}</Latex>
              <Latex>{'$C_{a}=$'}{' '}{caFormula}{'$ = $'}{' '}{`$${customDecimal(ca, 2)}$`}</Latex>
              <Latex >{'$v_{b}=$'}{' '}{vbFormula}{'$ = $'}{' '}{`$${customDecimal(vb, 2)}$`}{' $m/s$'}</Latex>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Veocità di riferimento</p>
              <Latex >{'$C_{r}=$'}{' '}{crFormula}{'$ = $'}{' '}{`$${customDecimal(cr, 2)}$`}</Latex>
              <Latex >{'$v_{r}=$'}{' '}{vrFormula}{'$ = $'}{' '}{`$${customDecimal(vr, 2)}$`}{' $m/s$'}</Latex>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Pressione cinetica di riferimento</p>
              <Latex >{'$\\rho=$'}{' '}{roFormula}{'$ = $'}{' '}{`$${customDecimal(ro, 2)}$`}{' $kg/m^3$'}</Latex>
              <Latex >{'$q_{r}=$'}{' '}{qrFormula}{'$ = $'}{' '}{`$${customDecimal(qr, 2)}$`}{' $Mpa$'}</Latex>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Coefficiente di topografia</p>
              <Latex >{'$C_{t}=$'}{' '}{ctFormula}{'$ = $'}{' '}{`$${customDecimal(ct, 2)}$`}</Latex>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Coefficiente di attrito</p>
              <Latex >{'$C_{f}=$'}{' '}{cfFormula}{'$ = $'}{' '}{`$${customDecimal(cf, 2)}$`}</Latex>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Coefficiente di esposizione: {categoriaEsposizione}</p>
              <Latex >{'$k_{r}=$'}{' '}{krFormula}{'$ = $'}{' '}{`$${customDecimal(kr, 2)}$`}</Latex>
              <Latex >{'$z_{0}=$'}{' '}{z0Formula}{'$ = $'}{' '}{`$${customDecimal(z0, 2)}$`}{' $m$'}</Latex>
              <Latex >{'$z_{\\text{min}}=$'}{' '}{zminFormula}{'$ = $'}{' '}{`$${customDecimal(zmin, 2)}$`}{' $m$'}</Latex>
              <Latex >{z >= zmin ? '$C_{e}(z)=$' : '$C_{e}(z_{\\text{min}})=$'}{' '}{ceFormula}{'$ = $'}{' '}{`$${customDecimal(ce, 2)}$`}</Latex>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Azione tangente del vento</p>
              <Latex >{'$p_{f}=$'}{' '}{pfFormula}{'$ = $'}{' '}{`$${customDecimal(pf, 2)}$`}{' $Mpa$'}</Latex>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Pressione del vento</p>
              <Latex >{'$p=$'}{' '}{pFormula}{'$ = $'}{' '}{`$${customDecimal(p, 2)}$`}{' $Mpa$'}</Latex>
            </div>
          </div>
            <div className="w-1/3 overflow-hidden">
              <ItalyWindMap props={{ selectedProvince: selectedProvince, setSelectedProvince: setSelectedProvince }} />
            </div>

          </div>

        </div>

      </div>

    </>
  );
}


export default WindLoad