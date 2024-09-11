import React from 'react';

const topographyOptions = [
  { name: "Battuta dai venti", description: "Aree pianeggianti non ostruite esposte su tutti i lati, senza costruzioni o alberi più alti."},
  { name: "Normale", description: "Aree in cui non è presente una significativa rimozione di neve sulla costruzione prodotta dal vento, a causa del terreno, altre costruzioni o alberi." },
  { name: "Riparata", description: "Aree in cui la costruzione considerata è sensibilmente più bassa del circostante terreno o circondata da costruzioni o alberi più alti."}
];

const TopographySelector = ({props}) => {

  const { selectedTopography, setSelectedTopography } = props;


  const handleSelectChange = (e) => {
    setSelectedTopography(e.target.value);
  };

  const selectedDescription = topographyOptions.find(
    (option) => option.name === selectedTopography
  )?.description;

  return (
    <>
      <label className="block text-gray-700 text-sm font-bold mb-2">Topografia:</label>
      <select
        value={selectedTopography}
        onChange={handleSelectChange}
        className="cursor-pointer block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {topographyOptions.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {/* <p className="mt-4 text-gray-600 text-sm">{selectedDescription}</p> */}
    </>
  );
};

export default TopographySelector;
