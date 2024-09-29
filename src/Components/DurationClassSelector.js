import React, { useState } from 'react';
import { serviceDurationClassAtom } from '../Atom/serviceDurationClassAtom';
import { useRecoilState } from 'recoil';
import { FaMinus, FaPlus } from 'react-icons/fa';
import capitalizeFirstLetter from '../Utils/capitalizeFirstLetter';

const DurationClassSelector = ({ viewType = 'table' }) => {
  const [durationClass, setDurationClass] = useRecoilState(serviceDurationClassAtom);
  const [isOpen, setisOpen] = useState(false);

  const handleCheck = (event) => {
    const { value } = event.target;
    setDurationClass((prevState) => ({
      ...prevState,
      durationClass: value,
    }));
  };

  const handleOpen = () => {
    setisOpen(!isOpen);
  };

  const classes = [
    {
      value: 'permanente',
      label: 'più di 10 anni',
      description: 'Permanente',
      loadType: 'Il peso proprio e i carichi non rimovibili durante il normale esercizio della struttura',
    },
    {
      value: 'lunga durata',
      label: '6 mesi - 10 anni',
      description: 'Lunga durata',
      loadType: 'I carichi permanenti suscettibili di cambiamenti durante il normale esercizio della struttura e i sovraccarichi variabili relativi a magazzini e depositi',
    },
    {
      value: 'media durata',
      label: '1 settimana - 6 mesi',
      description: 'Media durata',
      loadType: 'I sovraccarichi variabili di abitazione e di uffici in generale; Il sovraccarico da neve riferito al suolo qsk, calcolato in uno specifico sito ad una altitudine superiori o uguali a 1000 m',
    },
    {
      value: 'breve durata',
      label: 'meno di 1 settimana',
      description: 'Breve durata',
      loadType: 'Il sovraccarico da neve riferito al suolo qsk, calcolato in uno specifico sito ad una altitudine inferiori a 1000 m',
    },
    {
      value: 'istantaneo',
      label: 'Istantaneo',
      description: 'Istantaneo',
      loadType: "L'azione del vento e le azioni eccezionali",
    },
  ];

  return (
    <>
      {viewType === 'table' ?
        <div className="p-5 items-center">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold flex gap-2">
              <p>
                Classe di durata del carico{!isOpen ? `:` : null}
              </p>
              <p className="font-normal">
                {!isOpen ? `${capitalizeFirstLetter(durationClass.durationClass)}` : null}
              </p>
            </h2>
            <button
              onClick={handleOpen}
              className="flex items-center p-3 border border-gray-300 rounded-lg text-gray-500 bg-white font-semibold hover:bg-gray-200 transition duration-100"
            >
              {isOpen ? <FaMinus /> : <FaPlus />}
            </button>
          </div>

          {isOpen ?

            <div className="p-0">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left w-1/5">Seleziona</th>
                    <th className="border border-gray-300 px-4 py-2 text-left w-1/5">Durata</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Tipi di carico</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((item, index) => (
                    <tr key={index}>
                      <td className="border flex items-center gap-2 border-gray-300 px-4 py-2">
                        <div>
                          <input
                            type="radio"
                            name="durationClass"
                            value={item.value}
                            checked={durationClass.durationClass === item.value}
                            onChange={handleCheck}
                            className="h-5 w-5 text-blue-600 cursor-pointer"
                          />
                        </div>
                        <p>{item.label}</p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.loadType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            : null}



        </div>
        :
        <div className="">
          <select
            className="w-full py-2 px-3 border border-gray-300 rounded-md cursor-pointer"
            value={durationClass.durationClass}
            onChange={handleCheck}
          >
            {classes.map((item) => (
              <option key={item.value} value={item.value}>
                {capitalizeFirstLetter(item.value)}
              </option>
            ))}
          </select>
        </div>
      }
    </>
  );
};

export default DurationClassSelector;
