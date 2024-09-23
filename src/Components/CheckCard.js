import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { ReactComponent as FormulaIcon } from '../Assets/formulaIcon.svg';
import { ReactComponent as FormulaValIcon } from '../Assets/formulaValcon.svg';

export default function CheckCard({ props }) {
  const { title = 'title', centralContent = 'centralContent', finalContent = 'finalContent', check = 0, isDisabled = false } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isFormulaIconSelected, setIsFormulaIconSelected] = useState(false);
  const [isFormulaValIconSelected, setIsFormulaValIconSelected] = useState(false);
  const cardRef = useRef(null);

  const toggleCard = () => {
    setIsOpen(!isOpen);

    // Controlla se la card è aperta e previene lo scroll forzato
    if (!isOpen && cardRef.current) {
      cardRef.current.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  };


  const handleFormulaIconClick = (e) => {
    e.stopPropagation();
    setIsFormulaIconSelected(!isFormulaIconSelected);
    if (isFormulaValIconSelected) {
      setIsFormulaValIconSelected(false);
    }
  };


  const handleFormulaValIconClick = (e) => {
    e.stopPropagation();
    if (isFormulaValIconSelected) {

      setIsFormulaValIconSelected(false);
    } else {
      setIsFormulaValIconSelected(true);
      setIsFormulaIconSelected(true);
    }
  };

  return (
    <div className={`p-5 ${isDisabled ? 'text-gray-400' : null}`} ref={cardRef}>
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 ">
        <div
          className={`flex justify-between items-center cursor-pointer p-6 transition-colors duration-300 ease-in-out ${isOpen ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
          onClick={toggleCard}
        >
          <div className="flex items-center">
            <button className="focus:outline-none mr-2">
              <FaChevronDown
                className={`transform transition-transform duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`}
              />
            </button>
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          <div className="flex">
            <button
              className={`bg-white border border-gray-300 rounded-lg p-3 mx-2  transition duration-100 ${isFormulaIconSelected ? 'bg-blue-100 hover:bg-blue-200' : 'hover:bg-gray-200'}`}
              onClick={handleFormulaIconClick}
            >
              <FormulaIcon width="20" height="20" className={`text-black ${isFormulaIconSelected ? 'fill-blue-700' : ''}`} />
            </button>
            <button
              className={`bg-white border border-gray-300 rounded-lg p-3 mx-2 hover:bg-gray-200 transition duration-100 ${isFormulaValIconSelected ? 'bg-blue-100 hover:bg-blue-200' : 'hover:bg-gray-200'}`}
              onClick={handleFormulaValIconClick}
            >
              <FormulaValIcon width="20" height="20" className={`text-black hover:text-blue-500 ${isFormulaValIconSelected ? 'fill-blue-700' : ''}`} />
            </button>
          </div>
        </div>
        <hr />

        {/* Sezione centrale */}
        <div
          className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
        >
          {isOpen && (
            <div>
              <div className="p-6">{centralContent}</div>
            </div>
          )}
        </div>

        {/* Sezione finale */}
        <div className="flex p-6 justify-between items-center pt-5">
          {finalContent}
        </div>
      </div>
    </div>
  );
}
