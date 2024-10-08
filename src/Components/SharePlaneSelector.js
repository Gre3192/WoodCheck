import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { joinProprertiesAtom } from '../Atom/joinProprertiesAtom';
import capitalizeFirstLetter from '../Utils/capitalizeFirstLetter';

const SharePlaneSelector = () => {

  const [joinProprerties, setJoinProprerties] = useRecoilState(joinProprertiesAtom);


  const classes = [
    {
      value: '1',
      label: '1 Piano di taglio',
    },
    {
      value: '2',
      label: '2 Piano di taglio',
    }
  ];



  return (
    <>
      <div className="">
        <select
          className="w-full py-2 px-3 border border-gray-300 rounded-md cursor-pointer"
          value={joinProprerties?.shearPlane || ''}
          onChange={(e) => setJoinProprerties({ ...joinProprerties, shearPlane: e.target.value })}
        >
          {classes.map((item) => (
            <option key={item.value} value={item.value}>
              {capitalizeFirstLetter(item.label)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SharePlaneSelector;
