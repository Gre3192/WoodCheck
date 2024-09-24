import React from 'react';
import { useRecoilState } from 'recoil';
import { forcesStateAtom } from '../Atom/forcesStateAtom';
import InputBox from './InputBox';
import ActionSectionDraw from './ActionSectionDraw';

export default function InputForces() {

  const [forces, setForces] = useRecoilState(forcesStateAtom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value === '' ? null : parseFloat(value);

    setForces((prevForces) => ({
      ...prevForces,
      [name]: numericValue,
    }));
  };

  const inputForcesConfig = [
    { titleInputBox: 'N_{Ed}', name: 'Ned', isLatexTitle: true },
    { titleInputBox: 'V_{Ed,y}', name: 'Ved_y', isLatexTitle: true },
    { titleInputBox: 'V_{Ed,z}', name: 'Ved_z', isLatexTitle: true },
    { titleInputBox: 'M_{Ed,y}', name: 'Med_y', isLatexTitle: true },
    { titleInputBox: 'M_{Ed,z}', name: 'Med_z', isLatexTitle: true },
    { titleInputBox: 'M_{Ed,tor}', name: 'Med_tor', isLatexTitle: true }
  ];

  console.log(forces)

  return (
    <div className="p-5 items-center">
      <h2 className="text-lg font-bold mb-4">Azioni agenti sulla sezione</h2>
      <form className="grid grid-cols-6 gap-4">
        {inputForcesConfig.map((item, index) => (
          <InputBox
            key={index}
            props={{
              name: item.name,
              titleInputBox: item.titleInputBox,
              placeholder: 'Inserisci valore...',
              type: 'number',
              value: forces[item.name] === null ? '' : forces[item.name],
              handleInputChange: handleChange,
              isLatexTitle: item.isLatexTitle
            }}
          />
        ))}
      </form>

      <div className='flex justify-center mt-10'>
        <ActionSectionDraw
          shape={'rettangolare'}
          Ned={forces.Ned}
          Ved_y={forces.Ved_y}
          Ved_z={forces.Ved_z}
          Med_y={forces.Med_y}
          Med_z={forces.Med_z}
          Med_tor={forces.Med_tor}
        />
      </div>


    </div>
  );
}
