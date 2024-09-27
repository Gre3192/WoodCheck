import React, { useState } from 'react';

const DurationClassSelector = () => {

  const [durationClass, setDurationClass] = useState('permanente');


  const handleChange = (event) => {
    const duration = event.target.value;
    setDurationClass(duration)
  };



  return (
    <div className="p-5 items-center">
      <div className='flex justify-between items-center'>
        <h2 className="text-lg font-bold ">Classe di durata del carico</h2>
      </div>




      <div className="flex items-center">
        <label htmlFor="years" className="mr-4">Seleziona la durata del carico:</label>
        <select id="years" value={durationClass} onChange={handleChange} className="border px-2 py-1 rounded  cursor-pointer">
          <option value="breve durata">Meno di 1 settimana</option>
          <option value="media durata">1 settimana - 6 mesi</option>
          <option value="lunga durata">6 mesi - 10 anni</option>
          <option value="permanente">Più di 10 anni</option>
        </select>
      </div>

    </div>

  );
};

export default DurationClassSelector;
