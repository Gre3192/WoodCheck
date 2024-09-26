import React, { useState } from 'react';

const DurationClassSelector = () => {
  const [selectedYears, setSelectedYears] = useState('');
  const [durationClass, setDurationClass] = useState('');

  const handleChange = (event) => {
    const years = event.target.value;
    setSelectedYears(years);

    // Associare gli anni alla classe di durata
    if (years > 10) {
      setDurationClass('Permanente');
    } else if (years >= 0.5 && years <= 10) {
      setDurationClass('Lunga durata');
    } else if (years >= 0.02 && years < 0.5) {
      setDurationClass('Media durata');
    } else if (years < 0.02) {
      setDurationClass('Breve durata');
    } else {
      setDurationClass('Istantaneo');
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center">
        <label htmlFor="years" className="mr-4">Seleziona la durata del carico (in anni):</label>
        <select id="years" value={selectedYears} onChange={handleChange} className="border px-2 py-1 rounded">
          <option value="">-- Seleziona --</option>
          <option value="0.001">Meno di 1 settimana</option>
          <option value="0.1">1 settimana - 6 mesi</option>
          <option value="1">6 mesi - 10 anni</option>
          <option value="11">Più di 10 anni</option>
        </select>
      </div>

      {durationClass && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Classe di durata: {durationClass}</h3>
        </div>
      )}
    </div>
  );
};

export default DurationClassSelector;
