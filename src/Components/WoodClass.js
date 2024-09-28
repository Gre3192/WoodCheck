import React from 'react';
import SectionSelector from './SectionSelector';
import MinimalTable from './MinimalTable';
import { FaRedo } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { meccanicPropSectionAtom } from '../Atom/meccanicPropSectionAtom';


export default function WoodClass() {


  const [woodProperties, setWoodProperties] = useRecoilState(meccanicPropSectionAtom);


  const handleReset = () => {
    setWoodProperties(
      {
        sectionName: '',
        treeClass: '',
        woodType: '',
        fmk: null,
        ft0k: null,
        ft90k: null,
        fc0k: null,
        fc90k: null,
        fvk: null,
        frk: null,
        E0_mean: null,
        E0_05: null,
        E90_mean: null,
        E90_05: null,
        G_mean: null,
        G_05: null,
        Gr_mean: null,
        Gr_05: null,
        rho_k: null,
        rho_mean: null
      }
    )
  }

  const minimalTablewoodClassConfig1 = [
    { label: 'f_{c,0,k}\\\\\\text{[$MPa$]}', value: woodProperties.fc0k ? woodProperties.fc0k : '-', textHover: 'Resistenza a compressione parallela alla fibratura' },
    { label: 'f_{c,90,k}\\\\\\text{[$MPa$]}', value: woodProperties.fc90k ? woodProperties.fc90k : '-', textHover: 'Resistenza a compressione ortogonale alla fibratura' },
    { label: 'f_{t,0,k}\\\\\\text{[$MPa$]}', value: woodProperties.ft0k ? woodProperties.ft0k : '-', textHover: 'Resistenza a trazione parallela alla fibratura' },
    { label: 'f_{t,90,k}\\\\\\text{[$MPa$]}', value: woodProperties.ft90k ? woodProperties.ft90k : '-', textHover: 'Resistenza a trazione ortogonale alla fibratura' },
    { label: 'f_{m,k}\\\\\\text{[$MPa$]}', value: woodProperties.fmk ? woodProperties.fmk : '-', textHover: 'Resistenza a flessione' },
    { label: 'f_{v,k}\\\\\\text{[$MPa$]}', value: woodProperties.fvk ? woodProperties.fvk : '-', textHover: 'Resistenza a taglio' },
    { label: 'f_{r,k}\\\\\\text{[$MPa$]}', value: woodProperties.frk ? woodProperties.frk : '-', textHover: 'Resistenza a rototaglio' }

  ]
  const minimalTablewoodClassConfig2 = [
    { label: 'E_{0,mean}\\\\\\text{[$mm^2$]}', value: woodProperties.E0_mean ? woodProperties.E0_mean : '-', textHover: 'Modulo di resistenza elastico medio parallelo alla fibratura' },
    { label: 'E_{0,05}\\\\\\text{[$mm^2$]}', value: woodProperties.E0_05 ? woodProperties.E0_05 : '-', textHover: 'Modulo di resistenza elastico caratteristico parallelo alla fibratura' },
    { label: 'E_{90,mean}\\\\\\text{[$mm^2$]}', value: woodProperties.E90_mean ? woodProperties.E90_mean : '-', textHover: 'Modulo di resistenza elastico medio ortogonale alla fibratura' },
    { label: 'E_{90,05}\\\\\\text{[$mm^2$]}', value: woodProperties.E90_05 ? woodProperties.E90_05 : '-', textHover: 'Modulo di resistenza elastico caratteristico ortogonale alla fibratura' },
    { label: 'G_{mean}\\\\\\text{[$mm^2$]}', value: woodProperties.G_mean ? woodProperties.G_mean : '-', textHover: 'Modulo di taglio medio' },
    { label: 'G_{05}\\\\\\text{[$mm^2$]}', value: woodProperties.G_05 ? woodProperties.G_05 : '-', textHover: 'Modulo di taglio caratteristico' },
    { label: 'G_{r,mean}\\\\\\text{[$mm^2$]}', value: woodProperties.Gr_mean ? woodProperties.Gr_mean : '-', textHover: 'Modulo di rototaglio medio' },
    { label: 'G_{r,05}\\\\\\text{[$mm^2$]}', value: woodProperties.Gr_05 ? woodProperties.Gr_05 : '-', textHover: 'Modulo di rototaglio caratteristico' },
    { label: '\\rho_{k}\\\\\\text{[$mm^2$]}', value: woodProperties.rho_k ? woodProperties.rho_k : '-', textHover: 'Massa volumica caratteristica' },
    { label: '\\rho_{mean}\\\\\\text{[$mm^2$]}', value: woodProperties.rho_mean ? woodProperties.rho_mean : '-', textHover: 'Massa volumica media' },
  ]


  return (
    <div className="p-5 items-center">
      <div className='flex justify-between items-center mb-4'>
        <h2 className="text-lg font-bold ">Classe legno</h2>
        <button
          onClick={handleReset}
          className="flex items-center p-3 border border-gray-300 rounded-lg text-gray-500 bg-white font-semibold hover:bg-gray-200 transition duration-100"
        >
          <FaRedo />
        </button>
      </div>

      {/* Input valori geometria sezione */}
      <div className="flex flex-col gap-4">
        <SectionSelector />
        <MinimalTable list={minimalTablewoodClassConfig1} isInput={false} />
        <MinimalTable list={minimalTablewoodClassConfig2} isInput={false} />
      </div>

      {/* Disegno della sezione */}
      {/* <SectionDrawing sectionGeometry={sectionGeometry} sectionGeometryMass={sectionGeometryMass} /> */}

      {/* Geometria delle masse*/}
      {/* <SectionGeometryMass sectionGeometryMass={sectionGeometryMass} /> */}

    </div>
  );
}
