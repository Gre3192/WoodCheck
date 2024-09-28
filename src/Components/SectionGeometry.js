import React from 'react';
import { useRecoilState } from 'recoil';
import SectionShapeToggleBar from './SectionShapeToggleBar';
import MinimalTable from './MinimalTable';
import { sectionGeometryAtom } from '../Atom/sectionGeometryAtom';
import { FaRedo } from 'react-icons/fa';


export default function SectionGeometry() {


  const [sectionGeometry, setSectionGeometry] = useRecoilState(sectionGeometryAtom)


  // Cambia la forma della sezione dalla ToggleBar
  const handleSectionShape = (shape) => {
    setSectionGeometry({

      shape: shape,
      b: '',
      h: '',
      r: ''

    })
  };

  const handleReset = () => {
    setSectionGeometry(
      {
        shape: 'rettangolare',
        b: '',
        h: '',
        r: ''
      }
    )
  }

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

      default: arrayObj = [
        {
          name: "b",
          label: 'b\\\\\\text{[$mm$]}',
          placeholder: "Base...",
          textHover: "Base",
          value: sectionGeometry.b,
        },
        {
          name: "h",
          label: 'h\\\\\\text{[$mm$]}',
          placeholder: "Altezza...",
          textHover: "Altezza",
          value: sectionGeometry.h,
        },
      ]
        break;

      case 'circolare': arrayObj = [
        {
          name: "r",
          label: 'r\\\\\\text{[$mm$]}',
          placeholder: "Raggio...",
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
    <div className="p-5 items-center">
      <div className='flex justify-between items-center mb-4'>
        <h2 className="text-lg font-bold ">Geometria</h2>
        <button
          onClick={handleReset}
          className="flex items-center p-3 border border-gray-300 rounded-lg text-gray-500 bg-white font-semibold hover:bg-gray-200 transition duration-100"
        >
          <FaRedo />
        </button>
      </div>


      {/* Input valori geometria sezione */}
      <div className="flex flex-col gap-4">
        <SectionShapeToggleBar props={sectionShapeToggleBarProps} />
        <MinimalTable list={inputBoxGeometryConfig(sectionGeometry.shape)} />
      </div>

      {/* Disegno della sezione */}
      {/* <SectionDrawing sectionGeometry={sectionGeometry} sectionGeometryMass={sectionGeometryMass} /> */}

      {/* Geometria delle masse*/}
      {/* <SectionGeometryMass sectionGeometryMass={sectionGeometryMass} /> */}

    </div>
  );
}
