import React from 'react';
import { useRecoilState } from 'recoil';
import { joinProprertiesAtom } from '../Atom/joinProprertiesAtom';
import capitalizeFirstLetter from '../Utils/capitalizeFirstLetter';

const ConnectorTypeSelector = () => {

  const [joinProprerties, setJoinProprerties] = useRecoilState(joinProprertiesAtom);

  const classes = [
    { value: 'chiodi', label: 'Chiodi' },
    { value: 'spinotti', label: 'Spinotti' },
    { value: 'bulloni', label: 'Bulloni' },
    { value: 'cambrette', label: 'Cambrette' },
    { value: 'graffe', label: 'Graffe' },
    { value: 'viti', label: 'Viti' },
  ];
  
  return (
    <div className="">
      <select
        className="w-full py-2 px-3 border border-gray-300 rounded-md cursor-pointer"
        value={joinProprerties?.connectorType || ''}
        onChange={(e) => setJoinProprerties({ ...joinProprerties, connectorType: e.target.value })}  
      >
        {classes.map((item) => (
          <option key={item.value} value={item.value}>
            {capitalizeFirstLetter(item.value)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConnectorTypeSelector;
