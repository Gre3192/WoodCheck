import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa"; // Freccia per aprire/chiudere la card
import customDecimal from "../Utils/customDecimal";
import getCheckCircle from "../Utils/getCheckCircle";

export default function CheckCard({ props }) {

    const { title = 'title', centralContent = 'centralContent', finalContent = 'finalContent', check = 0, isDisabled = false } = props

    const [isOpen, setIsOpen] = useState(false);

    const cardRef = useRef(null);

    const toggleCard = () => {
        setIsOpen(!isOpen);

        // Controlla se la card è aperta e previene lo scroll forzato
        if (!isOpen && cardRef.current) {
            cardRef.current.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
    };

    function isObject(data) {
        return typeof data === 'object' && data !== null && !Array.isArray(data);
      }

    return (
        <div className={`p-5 ${isDisabled ? 'text-gray-400' : null}`} ref={cardRef}>
            <div className="bg-white shadow-lg rounded-lg border border-gray-200 ">
                <div className={`flex justify-between items-center cursor-pointer p-6 hover:bg-gray-100 transition-colors duration-300 ease-in-out ${isOpen ? 'bg-gray-100' : null}`} onClick={toggleCard}>
                    <div className="flex items-center ">
                        <button className="focus:outline-none mr-2">
                            <FaChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
                        </button>
                        <h2 className="text-lg font-semibold ">{title}</h2>
                    </div>
                    <div className="flex flex-col gap-3">
                        {
                            !isObject(check) && !Array.isArray(check) ?
                                <div className="flex gap-2">
                                    {`Lavoro= ${customDecimal(check, 2) * 100}\u0025`}
                                    {getCheckCircle(check)}
                                </div> :
                                check.map((item, index) => {
                                    return (
                                        <div key={index} className="flex gap-2 justify-end">
                                            {`Lavoro= ${customDecimal(item, 2) * 100}\u0025`}
                                            {getCheckCircle(item)}
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
                <hr />

                {/* Sezione centrale */}
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {isOpen && <div>
                        <div className="p-6">
                            {centralContent}
                        </div>
                    </div>}
                </div>

                {/* Sezione finale */}
                <div className="flex p-6 justify-between items-center pt-5">
                    {finalContent}
                </div>
            </div>
        </div>
    );
}
