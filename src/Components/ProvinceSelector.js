import React, { useState, useEffect, useRef } from 'react';
import italyTopoJson from '../Json/ItalyProvincesMap.json'; // Assicurati che il percorso sia corretto

const zones = {
  zona1Alpina: [
    // Lista delle province
  ],
  zona1Mediterranea: [
    // Lista delle province
  ],
  zona2: [
    // Lista delle province
  ],
  zona3: [
    // Lista delle province
  ]
};

const getZone = (provinceName) => {
  if (zones.zona1Alpina.includes(provinceName)) return "Zona I - Alpina";
  if (zones.zona1Mediterranea.includes(provinceName)) return "Zona I - Mediterranea";
  if (zones.zona2.includes(provinceName)) return "Zona II";
  if (zones.zona3.includes(provinceName)) return "Zona III";
  return null;
};

const ProvinceSelector = ({ props }) => {
  const { selectedProvince, setSelectedProvince } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false); // Stato per monitorare il focus
  const ref = useRef(null);

  const provinceList = italyTopoJson.features.map((feature) => ({
    prov_name: feature.properties.prov_name,
    reg_name: feature.properties.reg_name,
    zone: getZone(feature.properties.prov_name)
  }));

  const filteredProvinces = provinceList
    .filter((province) =>
      province.prov_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.prov_name.localeCompare(b.prov_name)); // Ordina le province in ordine alfabetico

  const handleSelect = (province) => {
    setSelectedProvince({
      prov_name: province.prov_name,
      reg_name: province.reg_name,
      zone: province.zone,
    });
    setSearchTerm(province.prov_name);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleClearInput = (e) => {
    e.preventDefault(); // Evita che l'input perda il focus
    setSearchTerm("");
    setSelectedProvince(null); // Resetta la provincia selezionata
  };

  const handleInputFocus = () => {
    setIsInputFocused(true); // Imposta il focus su true quando l'input è selezionato
  };

  const handleInputBlur = (e) => {
    // Se si clicca sulla "x", non chiudere immediatamente il dropdown
    setTimeout(() => {
      setIsInputFocused(false); // Imposta il focus su false quando l'input perde il focus
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (selectedProvince) {
      setSearchTerm(selectedProvince.prov_name);
    }
  }, [selectedProvince]);

  return (
    <div ref={ref}>
      <label className="block text-gray-700 text-sm font-bold mb-2">Provincia:</label>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus} // Aggiungi il focus listener
          onBlur={handleInputBlur} // Aggiungi il blur listener
          onSelect={() => setIsOpen(true)}
          placeholder="Cerca provincia..."
          className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            {filteredProvinces.length > 0 ? (
              filteredProvinces.map((province) => (
                <div
                  key={province.prov_name}
                  className={`p-2 cursor-pointer ${selectedProvince && selectedProvince.prov_name === province.prov_name
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : "hover:bg-gray-300"
                    }`}
                  onClick={() => handleSelect(province)}
                >
                  {province.prov_name}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-700">Nessuna provincia trovata</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProvinceSelector;
