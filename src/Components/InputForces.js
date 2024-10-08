import React from 'react';
import { useRecoilState } from 'recoil';
import { forcesStateAtom } from '../Atom/forcesStateAtom';
import InputBox from './InputBox';
import ActionSectionDraw from './ActionSectionDraw';
import { FaRedo } from 'react-icons/fa';
import MinimalTable from './MinimalTable';


export default function InputForces() {

  const [forces, setForces] = useRecoilState(forcesStateAtom);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value === '' ? null : parseFloat(value);

    setForces((prevForces) => ({
      ...prevForces,
      [name]: numericValue,
    }));
  };

  const handleReset = () => {
    setForces(
      {
        Ned: null,
        Ved_y: null,
        Ved_z: null,
        Med_y: null,
        Med_z: null,
        Med_tor: null
      }
    )
  }


  const inputBoxActionConfig = () => {

    let arrayObj = [

      {
        name: 'Ned',
        label: 'N_{Ed}\\\\\\text{[$kN$]}',
        textHover: "Compressione/Trazione",
        value: forces['Ned'] === null ? '' : forces['Ned'],
      },
      {
        name: 'Ved_y',
        label: 'V_{Ed,y}\\\\\\text{[$kN$]}',
        textHover: "Taglio lungo y",
        value: forces['Ved_y'] === null ? '' : forces['Ved_y'],
      },
      {
        name: 'Ved_z',
        label: 'V_{Ed,z}\\\\\\text{[$kN$]}',
        textHover: "Taglio lungo z",
        value: forces['Ved_z'] === null ? '' : forces['Ved_z'],
      },
      {
        name: 'Med_y',
        label: 'M_{Ed,y}\\\\\\text{[$kN\\cdot m$]}',
        textHover: "Momento flettente attorno l'asse y",
        value: forces['Med_y'] === null ? '' : forces['Med_y'],
      },
      {
        name: 'Med_z',
        label: 'M_{Ed,z}\\\\\\text{[$kN\\cdot m$]}',
        textHover: "Momento flettente attorno l'asse z",
        value: forces['Med_z'] === null ? '' : forces['Med_z'],
      },
      {
        name: 'Med_tor',
        label: 'M_{Ed,tor}\\\\\\text{[$kN\\cdot m$]}',
        textHover: "Momento torcente",
        value: forces['Med_tor'] === null ? '' : forces['Med_tor'],
      }
    ]


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
        <h2 className="text-lg font-bold">Azioni agenti sulla sezione</h2>
        <button
          onClick={handleReset}
          className="flex items-center p-3 border border-gray-300 rounded-lg text-gray-500 bg-white font-semibold hover:bg-gray-200 transition duration-100"
        >
          <FaRedo />
        </button>
      </div>



      <MinimalTable list={inputBoxActionConfig()} />





    </div>
  );
}
