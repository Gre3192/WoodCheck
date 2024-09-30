import React, { useState } from 'react';
import { serviceDurationClassAtom } from '../Atom/serviceDurationClassAtom';
import { useRecoilState } from 'recoil';
import capitalizeFirstLetter from '../Utils/capitalizeFirstLetter';

const JoinTypeSelector = () => {


  const classes = [
    {
      value: 'chiodi',
      label: 'Chiodi',
    },
    {
      value: 'spinotti',
      label: 'Spinotti',
    },
    {
      value: 'bulloni',
      label: 'Bulloni',
    },
    {
      value: 'cambrette',
      label: 'Cambrette',
    },
    {
      value: 'viti',
      label: 'Viti',
    },

  ];




  return (
    <>
        <div className="">
          <select
            className="w-full py-2 px-3 border border-gray-300 rounded-md cursor-pointer"
            value={''}
            onChange={()=>{}}
          >
            {classes.map((item) => (
              <option key={item.value} value={item.value}>
                  {capitalizeFirstLetter(item.value)}
              </option>
            ))}
          </select>
        </div>
    </>
  );
};

export default JoinTypeSelector;
