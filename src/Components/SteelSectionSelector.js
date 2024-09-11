import React, { useState, useEffect, useRef } from 'react';
import sectionProfiles from '../Json/steelSectionGeometry.json';
import { useRecoilState } from 'recoil';
import { geometrySectionSteelAtom } from '../Atom/geometrySectionAtom';
import getShapeParams from '../Utils/getShapeParams';

const SteelSectionSelector = () => {

  const [sectionGeometry, setSectionGeometry] = useRecoilState(geometrySectionSteelAtom);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const ref = useRef(null);

  // Crea dinamicamente la lista delle sezioni
  const sectionList = Object.entries(sectionProfiles).map(([sectionName, sectionData]) => ({
    sectionName,
    ...sectionData,
  }));

  // Filtra e ordina le sezioni in base al termine di ricerca
  const filteredSections = sectionList
    .filter(({ sectionName }) => sectionName.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.sectionName.localeCompare(b.sectionName));

  const handleSelect = (section) => {
    handleClearInput()
    setSectionGeometry((prevSection) => ({
      ...prevSection,
      shape: section.shape,
      sectionName: section.sectionName,
      ...getShapeParams(section.shape, section, 'Gen -> Atom'),
    }));
    setSearchTerm(section.sectionName);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(e.target.value.length > 0);
  };

  const handleClearInput = (e) => {
    e?.preventDefault();
    setSearchTerm('');
    setSectionGeometry((prev) => {
      const resetSection = { sectionName: '', shape: 'doppioT' };
      Object.keys(prev).forEach((key) => {
        if (key !== 'sectionName' && key !== 'shape') resetSection[key] = '0';
      });
      return resetSection;
    });
  };

  const handleInputFocus = () => setIsInputFocused(true);
  const handleInputBlur = () => setTimeout(() => setIsInputFocused(false), 150);

  // Chiude la tendina al click esterno
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useEffect(() => {
    if (sectionGeometry) setSearchTerm(sectionGeometry.sectionName);
  }, [sectionGeometry]);

  return (
    <div ref={ref}>
      <label className="block text-gray-700 text-sm font-bold mb-2">Sezione:</label>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="Inserisci sezione..."
          className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {isInputFocused && searchTerm && (
          <button
            className="absolute top-2 right-4 scale-150 text-gray-500 hover:text-gray-700"
            onClick={handleClearInput}
          >
            &times;
          </button>
        )}
        {isOpen && (
          <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded max-h-48 overflow-y-auto z-10">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => (
                <div
                  key={section.sectionName}
                  className={`p-2 cursor-pointer ${sectionGeometry.sectionName === section.sectionName
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : "hover:bg-gray-300"
                    }`}
                  onClick={() => handleSelect(section)}
                >
                  {section.sectionName}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-700">Nessuna sezione trovata</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SteelSectionSelector;
