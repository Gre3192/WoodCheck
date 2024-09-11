import React, { useState } from 'react';
import SteelSectionDrawing from './SteelSectionDrawing';
import { useRecoilState } from 'recoil';
import CustomToggle from '../../CustomToggle';
import SectionShapeToggleBar from '../../SectionShapeToggleBar';
import getSteelGeometryMass from '../../../Utils/getSteelGeometryMass';
import { geometrySectionSteelAtom } from '../../../Atom/geometrySectionAtom';
import SteelSectionSelector from '../../SteelSectionSelector';
import MinimalTable from '../../MinimalTable';
import SteelSectionGeometryMass from './SteelSectionGeometryMass';
import getShapeParams from '../../../Utils/getShapeParams';



export default function SteelSectionGeometry() {

  const [sectionGeometry, setSectionGeometry] = useRecoilState(geometrySectionSteelAtom)
  const [isCustomShape, setCustomInput] = useState(false);
  const geometry = getShapeParams(sectionGeometry.shape, sectionGeometry, 'Atom -> Gen')
  console.log('geometry', geometry)
  console.log('sectionGeometry', sectionGeometry)
  const sectionGeometryMass = getSteelGeometryMass(geometry)

  // Cambia la forma della sezione dalla ToggleBar
  const handleSectionShape = (shape) => {
    setSectionGeometry((prev) => ({ ...prev, shape: shape }))
  };

  // Cambia il parametro della sezione dall'input del MinimalTable
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSectionGeometry((prev) => ({ ...prev, sectionName: '', [name]: value, }));
  };

  // Cambia da tabella fissa a tabella con gli input tramite il Toggle
  const handleCustomInputToggle = () => {
    setCustomInput(!isCustomShape);
  };

  const InputBoxGeometryConfig = [
    {
      name: 'b',
      label: 'b\\\\\\text{[mm]}',
      placeholder: "Base sezione...",
      type: 'number',
      value: sectionGeometry.b,
      handleInputChange: handleInputChange,
      isLatexTitle: true,
      isFor: 'rettangolare, L, U'
    },
    {
      name: 'h',
      label: 'h\\\\\\text{[mm]}',
      placeholder: "Altezza sezione...",
      type: 'number',
      value: sectionGeometry.h,
      handleInputChange: handleInputChange,
      isLatexTitle: true,
      isFor: 'doppioT, T, rettangolare, L, U'
    },
    {
      name: "raggio",
      label: 'r\\\\\\text{[mm]}',
      placeholder: "Raggio...",
      type: 'number',
      value: sectionGeometry.raggio,
      handleInputChange: handleInputChange,
      isLatexTitle: true,
      isFor: 'circolare'
    },
    {
      name: 'tw',
      label: 't_{w}\\\\\\text{[mm]}',
      placeholder: "Anima sezione...",
      type: 'number',
      value: sectionGeometry.tw,
      handleInputChange: handleInputChange,
      isLatexTitle: true,
      isFor: 'doppioT, T, circolare'
    },
    {
      name: "tf_sup",
      label: 't_{f,sup}\\\\\\text{[mm]}',
      placeholder: "Spessore ala sup...",
      type: 'number',
      value: sectionGeometry.tf_sup,
      handleInputChange: handleInputChange,
      isLatexTitle: true,
      isFor: 'doppioT, T'
    },
    {
      name: "tf_inf",
      label: 't_{f,inf}\\\\\\text{[mm]}',
      placeholder: "Spessore ala inf...",
      type: 'number',
      value: sectionGeometry.tf_inf,
      handleInputChange: handleInputChange,
      isLatexTitle: true,
      isFor: 'doppioT'
    },
    {
      name: "b_sup",
      label: 'b_{sup}\\\\\\text{[mm]}',
      placeholder: "Larghezza ala sup...",
      type: 'number',
      value: sectionGeometry.b_sup,
      handleInputChange: handleInputChange,
      isLatexTitle: true,
      isFor: 'doppioT, T'
    },
    {
      name: "b_inf",
      label: 'b_{inf}\\\\\\text{[mm]}',
      placeholder: "Larghezza ala inf...",
      type: 'number',
      value: sectionGeometry.b_inf,
      handleInputChange: handleInputChange,
      isLatexTitle: true,
      isFor: 'doppioT'
    },
    {
      name: "raccordo",
      label: 'r\\\\\\text{[mm]}',
      placeholder: "Raggio di raccordo...",
      type: 'number',
      value: sectionGeometry.raccordo,
      handleInputChange: handleInputChange,
      isLatexTitle: true,
      isFor: 'doppioT, T'
    },
  ]


  return (
    <>
      <div className="p-5 flex items-center">
        <p className="text-xl font-semibold mr-5">Geometria sezione</p>
      </div>


      {/* Input valori geometria sezione */}
      <div className="p-5">
        <div className='flex justify-between'>
          <CustomToggle props={{
            isSelected: isCustomShape,
            handleCustomInputToggle: handleCustomInputToggle,
            firstLabel: 'Sezione',
            secondLabel: 'Manuale',
          }}
          />
        </div>
        <div className="mb-2">
          {
            !isCustomShape
              ? <SteelSectionSelector />
              : <SectionShapeToggleBar props={{ sectionShape: sectionGeometry.shape, handleSectionTypeChange: handleSectionShape }} />
          }
        </div>
        <MinimalTable list={InputBoxGeometryConfig} isInput={isCustomShape} />
      </div>

      {/* Disegno della sezione */}
      <SteelSectionDrawing sectionGeometry={sectionGeometry} sectionGeometryMass={sectionGeometryMass} />

      {/* Geometria delle masse*/}
      <SteelSectionGeometryMass sectionGeometryMass={sectionGeometryMass} />

    </>
  );
}
