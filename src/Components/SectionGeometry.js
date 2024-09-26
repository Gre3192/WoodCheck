import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import SectionShapeToggleBar from './SectionShapeToggleBar';
import SectionSelector from './SectionSelector';
import MinimalTable from './MinimalTable';
import { sectionGeometryAtom } from '../Atom/sectionGeometryAtom';
import getGeometryMass from '../Utils/getGeometryMass';
import { sectionGeometryMassAtom } from '../Atom/sectionGeometryMassAtom';


export default function SectionGeometry() {


  const [sectionGeometry, setSectionGeometry] = useRecoilState(sectionGeometryAtom)
  const setSectionGeometryMass = useSetRecoilState(sectionGeometryMassAtom)

  const sectionGeometryMass = getGeometryMass(sectionGeometry)


  useEffect(() => {
    setSectionGeometryMass(sectionGeometryMass)
  }, [sectionGeometry])


  // Cambia la forma della sezione dalla ToggleBar
  const handleSectionShape = (shape) => {
    setSectionGeometry({

      shape: shape,
      b: null,
      h: null,
      r: null
      
    })
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

      case 'rettangolare': arrayObj = [
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
          placeholder: "Altezza...",
          textHover: "Altezza",
          value: sectionGeometry.h,
        },
      ]
        break;

      case 'circolare': arrayObj = [
        {
          name: "r",
          label: 'r\\\\\\text{[mm]}',
          placeholder: "Raggio esterno...",
          textHover: "Raggio",
          value: sectionGeometry.r,
        }
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
        <div className="mb-2">
          <SectionSelector />
          <SectionShapeToggleBar props={sectionShapeToggleBarProps} />
        </div>
        <MinimalTable list={inputBoxGeometryConfig(sectionGeometry.shape)} />
      </div>

      {/* Disegno della sezione */}
      {/* <SectionDrawing sectionGeometry={sectionGeometry} sectionGeometryMass={sectionGeometryMass} /> */}

      {/* Geometria delle masse*/}
      {/* <SectionGeometryMass sectionGeometryMass={sectionGeometryMass} /> */}

    </>
  );
}
