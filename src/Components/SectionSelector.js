import React, { useState, useEffect, useRef } from 'react';
import sectionProfiles from '../Json/woodPropreties.json';
import { useRecoilState } from 'recoil';
import { meccanicPropSectionAtom } from '../Atom/meccanicPropSectionAtom';

const SectionSelector = () => {
  const [woodProperties, setWoodProperties] = useRecoilState(meccanicPropSectionAtom);
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
    .filter(({ sectionName }) => sectionName?.toLowerCase().includes(searchTerm?.toLowerCase()))
    .sort((a, b) => a.sectionName.localeCompare(b.sectionName));

  const handleSelect = (section) => {
    setWoodProperties(section);
    setSearchTerm(section.sectionName);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true); // Apre automaticamente la tendina al cambio dell'input
  };

  const handleClearInput = () => {
    setWoodProperties({
      sectionName: '',
      treeClass: '',
      woodType: '',
      fmk: null,
      ft0k: null,
      ft90k: null,
      fc0k: null,
      fc90k: null,
      fvk: null,
      frk: null,
      E0_mean: null,
      E0_05: null,
      E90_mean: null,
      E90_05: null,
      G_mean: null,
      G_05: null,
      Gr_mean: null,
      Gr_05: null,
      rho_k: null,
      rho_mean: null
    });
    setSearchTerm('');
    setIsOpen(true); // Apre automaticamente la tendina anche quando si cancella l'input
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setIsOpen(true); // Apre la tendina automaticamente al focus
  };

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
    if (woodProperties) setSearchTerm(woodProperties.sectionName);
  }, [woodProperties]);

  return (
    <div ref={ref}>
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
                  className={`p-2 cursor-pointer ${
                    woodProperties.sectionName === section.sectionName
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

export default SectionSelector;
