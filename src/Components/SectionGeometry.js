import React, { useState, useEffect } from 'react';
import SectionDrawing from './SectionDrawing';
import { useRecoilState, useSetRecoilState } from 'recoil';
import CustomShapeToggle from './CustomShapeToggle';
import SectionShapeToggleBar from './SectionShapeToggleBar';
import getSteelGeometryMass from '../Utils/getSteelGeometryMass';
import { geometrySectionSteelAtom } from '../Atom/geometrySectionAtom';
import SectionSelector from './SectionSelector';
import MinimalTable from './MinimalTable';
import SectionGeometryMass from './SectionGeometryMass';
import { geometryMassSectionSteelAtom } from '../Atom/geometryMassSectionAtom';



export default function SectionGeometry() {


  const [sectionGeometry, setSectionGeometry] = useRecoilState(geometrySectionSteelAtom)
  const setSectionGeometryMass = useSetRecoilState(geometryMassSectionSteelAtom)
  const [isCustomShape, setCustomInput] = useState(false);

  const sectionGeometryMass = getSteelGeometryMass(sectionGeometry)

  useEffect(() => {
    setSectionGeometryMass(sectionGeometryMass.valori)
  }, [sectionGeometry])

  // Cambia da tabella fissa a tabella con gli input tramite il Toggle
  const handleCustomShapeToggle = () => {
    setCustomInput(!isCustomShape);
  };
  const customShapeToggleProps = {
    isSelected: isCustomShape,
    handleCustomInputToggle: handleCustomShapeToggle,
    firstLabel: 'Commerciale',
    secondLabel: 'Custom',
  }


  // Cambia la forma della sezione dalla ToggleBar
  const handleSectionShape = (shape) => {
    setSectionGeometry((prev) => ({ ...prev, shape: shape }))
  };
  const sectionShapeToggleBarProps = {
    sectionShape: sectionGeometry?.shape,
    handleSectionTypeChange: handleSectionShape
  }


  // Cambia le dimensioni della sezione dall'input del MinimalTable
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSectionGeometry((prev) => ({ ...prev, sectionName: '', [name]: value, }));
  };


  const inputBoxGeometryConfig = (shape) => {

    let arrayObj = []

    switch (shape) {

      case 'doppioT': arrayObj = [
        {
          name: 'h',
          label: 'h\\\\\\text{[mm]}',
          placeholder: "Altezza sezione...",
          textHover: "Altezza sezione",
          value: sectionGeometry.h,
        },
        {
          name: 'tw',
          label: 't_{w}\\\\\\text{[mm]}',
          placeholder: "Spessore anima...",
          textHover: "Spessore anima",
          value: sectionGeometry.tw,
        },
        {
          name: "b_sup",
          label: 'b_{sup}\\\\\\text{[mm]}',
          placeholder: "Larghezza base sup...",
          textHover: "Larghezza base superiore",
          value: sectionGeometry.b_sup,
        },
        {
          name: "tf_sup",
          label: 't_{f,sup}\\\\\\text{[mm]}',
          placeholder: "Spessore ala sup...",
          textHover: "Spessore ala superiore",
          value: sectionGeometry.tf_sup,
        },
        {
          name: "b_inf",
          label: 'b_{inf}\\\\\\text{[mm]}',
          placeholder: "Larghezza base inf...",
          textHover: "Larghezza base inferiore",
          value: sectionGeometry.b_inf,
        },
        {
          name: "tf_inf",
          label: 't_{f,inf}\\\\\\text{[mm]}',
          placeholder: "Spessore ala inf...",
          textHover: "Spessore ala inferiore",
          value: sectionGeometry.tf_inf,
        },
        {
          name: "r",
          label: 'r\\\\\\text{[mm]}',
          placeholder: "Raggio di raccordo...",
          textHover: "Raggio di raccordo",
          value: sectionGeometry.r,
        },
      ]
        break;

      case 'Ocava': arrayObj = [
        {
          name: "r",
          label: 'r\\\\\\text{[mm]}',
          placeholder: "Raggio esterno...",
          textHover: "Raggio esterno",
          value: sectionGeometry.r,
        },
        {
          name: "t",
          label: 't\\\\\\text{[mm]}',
          placeholder: "Spessore...",
          textHover: "Spessore",
          value: sectionGeometry.t,
        },
      ]
        break;

      case 'T': arrayObj = [
        {
          name: 'h',
          label: 'h\\\\\\text{[mm]}',
          placeholder: "Altezza sezione...",
          textHover: "Altezza sezione",
          value: sectionGeometry.h,
        },
        {
          name: 'tw',
          label: 't_{w}\\\\\\text{[mm]}',
          placeholder: "Spessore anima...",
          textHover: "Spessore anima",
          value: sectionGeometry.tw,
        },
        {
          name: "b_sup",
          label: 'b_{sup}\\\\\\text{[mm]}',
          placeholder: "Larghezza base sup...",
          textHover: "Larghezza base superiore",
          value: sectionGeometry.b_sup,
        },
        {
          name: "tf_sup",
          label: 't_{f,sup}\\\\\\text{[mm]}',
          placeholder: "Spessore ala sup...",
          textHover: "Spessore ala superiore",
          value: sectionGeometry.tf_sup,
        },
        {
          name: "r",
          label: 'r\\\\\\text{[mm]}',
          placeholder: "Raggio di raccordo...",
          textHover: "Raggio di raccordo",
          value: sectionGeometry.r,
        },
      ]
        break;

      case 'rettangolarePiena': arrayObj = [
        {
          name: "b",
          label: 'b\\\\\\text{[mm]}',
          placeholder: "Base...",
          textHover: "Base",
          value: sectionGeometry.b,
        },
        {
          name: "h",
          label: 'h\\\\\\text{[mm]}',
          placeholder: "Altezza sezione...",
          textHover: "Altezza sezione",
          value: sectionGeometry.h,
        },
      ]
        break;

      case 'L': arrayObj = [
        {
          name: "h",
          label: 'h\\\\\\text{[mm]}',
          placeholder: "Altezza...",
          textHover: "Altezza",
          value: sectionGeometry.h,
        },
        {
          name: "tw",
          label: 't_{w}\\\\\\text{[mm]}',
          placeholder: "Spessore...",
          textHover: "Spessore",
          value: sectionGeometry.tw,
        },
        {
          name: "b_inf",
          label: 'b_{inf}\\\\\\text{[mm]}',
          placeholder: "Spessore...",
          textHover: "Spessore",
          value: sectionGeometry.tw,
        },
        {
          name: "tf_inf",
          label: 't_{f,inf}\\\\\\text{[mm]}',
          placeholder: "Spessore...",
          textHover: "Spessore",
          value: sectionGeometry.tw,
        },
      ]
        break;

      case 'Opiena': arrayObj = [
        {
          name: "r",
          label: 'r\\\\\\text{[mm]}',
          placeholder: "Raggio esterno...",
          textHover: "Raggio esterno",
          value: sectionGeometry.r,
        }
      ]
        break;

      case 'Z': arrayObj = [
        {
          name: 'h',
          label: 'h\\\\\\text{[mm]}',
          placeholder: "Altezza sezione...",
          textHover: "Altezza sezione",
          value: sectionGeometry.h,
        },
        {
          name: 'tw',
          label: 't_{w}\\\\\\text{[mm]}',
          placeholder: "Spessore anima...",
          textHover: "Spessore anima",
          value: sectionGeometry.tw,
        },
        {
          name: "b_sup",
          label: 'b_{sup}\\\\\\text{[mm]}',
          placeholder: "Larghezza base sup...",
          textHover: "Larghezza base superiore",
          value: sectionGeometry.b_sup,
        },
        {
          name: "tf_sup",
          label: 't_{f,sup}\\\\\\text{[mm]}',
          placeholder: "Spessore ala sup...",
          textHover: "Spessore ala superiore",
          value: sectionGeometry.tf_sup,
        },
        {
          name: "b_inf",
          label: 'b_{inf}\\\\\\text{[mm]}',
          placeholder: "Larghezza base inf...",
          textHover: "Larghezza base inferiore",
          value: sectionGeometry.b_inf,
        },
        {
          name: "tf_inf",
          label: 't_{f,inf}\\\\\\text{[mm]}',
          placeholder: "Spessore ala inf...",
          textHover: "Spessore ala inferiore",
          value: sectionGeometry.tf_inf,
        },
        {
          name: "r",
          label: 'r\\\\\\text{[mm]}',
          placeholder: "Raggio di raccordo...",
          textHover: "Raggio di raccordo",
          value: sectionGeometry.r,
        },
      ]
        break;

      case 'C': arrayObj = [
        {
          name: 'h',
          label: 'h\\\\\\text{[mm]}',
          placeholder: "Altezza sezione...",
          textHover: "Altezza sezione",
          value: sectionGeometry.h,
        },
        {
          name: 'tw',
          label: 't_{w}\\\\\\text{[mm]}',
          placeholder: "Spessore anima...",
          textHover: "Spessore anima",
          value: sectionGeometry.tw,
        },
        {
          name: "b_sup",
          label: 'b_{sup}\\\\\\text{[mm]}',
          placeholder: "Larghezza base sup...",
          textHover: "Larghezza base superiore",
          value: sectionGeometry.b_sup,
        },
        {
          name: "tf_sup",
          label: 't_{f,sup}\\\\\\text{[mm]}',
          placeholder: "Spessore ala sup...",
          textHover: "Spessore ala superiore",
          value: sectionGeometry.tf_sup,
        },
        {
          name: "b_inf",
          label: 'b_{inf}\\\\\\text{[mm]}',
          placeholder: "Larghezza base inf...",
          textHover: "Larghezza base inferiore",
          value: sectionGeometry.b_inf,
        },
        {
          name: "tf_inf",
          label: 't_{f,inf}\\\\\\text{[mm]}',
          placeholder: "Spessore ala inf...",
          textHover: "Spessore ala inferiore",
          value: sectionGeometry.tf_inf,
        },
        {
          name: "r",
          label: 'r\\\\\\text{[mm]}',
          placeholder: "Raggio di raccordo...",
          textHover: "Raggio di raccordo",
          value: sectionGeometry.r,
        },
      ]
        break;

    }

    arrayObj.map((item) => {
      item.handleInputChange = handleInputChange
      item.isLatexTitle = true
      item.type = 'number'
    })
    return arrayObj
  }


  return (
    <>
      <div className="p-5 flex items-center">
        <p className="text-xl font-semibold mr-5">Geometria sezione</p>
      </div>


      {/* Input valori geometria sezione */}
      <div className="p-5">
        <div className='flex justify-between'>
          <CustomShapeToggle props={customShapeToggleProps} />
        </div>
        <div className="mb-2">
          {
            !isCustomShape
              ? <SectionSelector />
              : <SectionShapeToggleBar props={sectionShapeToggleBarProps} />
          }
        </div>
        <MinimalTable list={inputBoxGeometryConfig(sectionGeometry.shape)} isInput={isCustomShape} />
      </div>

      {/* Disegno della sezione */}
      <SectionDrawing sectionGeometry={sectionGeometry} sectionGeometryMass={sectionGeometryMass} />

      {/* Geometria delle masse*/}
      <SectionGeometryMass sectionGeometryMass={sectionGeometryMass} />

    </>
  );
}
