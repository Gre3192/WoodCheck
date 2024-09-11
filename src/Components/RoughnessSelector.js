import React from 'react';

const roughnessOptions = [
  { name: "Classe A", description: "Aree urbane in cui almeno il 15% della superficie sia coperto da edifici la cui altezza media superi i 15 m." },
  { name: "Classe B", description: "Aree urbane (non di classe A), suburbane, industriali e boschive." },
  { name: "Classe C", description: "Aree con ostacoli diffusi (alberi, case, muri, recinzioni, ecc.); aree con rugosità non riconducibile alle classi A, B, D." },
  { name: "Classe D", description: "a) Mare e relativa fascia costiera (entro 2 km dalla costa); b) Lago (con larghezza massima pari ad almeno 1 km) e relativa fascia costiera (entro 1 km dalla costa); c) Aree prive di ostacoli o con al più rari ostacoli isolati (aperta campagna, aeroporti, aree agricole, pascoli, zone paludose o sabbiose, superfici innevate o ghiacciate, ecc.)." }, 
];

const RoughnessSelector = ({ props }) => {

  const { selectedRoughness, setSelectedRoughness } = props;

  const handleSelectChange = (e) => {
    setSelectedRoughness(e.target.value);
  };

  const selectedDescription = roughnessOptions.find(
    (option) => option.name === selectedRoughness
  )?.description;

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">Classe di Rugosità del Terreno:</label>
      <select
        value={selectedRoughness}
        onChange={handleSelectChange}
        className="cursor-pointer block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {roughnessOptions.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {/* <p className="mt-4 text-gray-600 text-sm">{selectedDescription}</p> */}
    </div>
  );
};

export default RoughnessSelector;
