import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { serviceDurationClassAtom } from '../Atom/serviceDurationClassAtom';
import { FaMinus, FaPlus } from 'react-icons/fa';

const ServiceClassTable = ({ viewType = 'table' }) => {
    const [serviceClass, setServiceClass] = useRecoilState(serviceDurationClassAtom);
    const [isOpen, setisOpen] = useState(false);

    const handleCheck = (event) => {
        const { value } = event.target;
        setServiceClass((prevState) => ({
            ...prevState,
            serviceClass: value,
        }));
    };

    const handleOpen = () => {
        setisOpen(!isOpen);
    };

    const classes = [
        {
            value: '1',
            label: 'Classe di servizio 1',
            description: "È caratterizzata da un'umidità del materiale in equilibrio con l'ambiente a una temperatura di 20 °C e un'umidità relativa dell'aria circostante che non superi il 65%, se non per poche settimane all'anno.",
            places: 'Ambiente al chiuso, riscaldato d’inverno.',
        },
        {
            value: '2',
            label: 'Classe di servizio 2',
            description: "È caratterizzata da un'umidità del materiale in equilibrio con l'ambiente a una temperatura di 20 °C e un'umidità relativa dell'aria circostante che superi l’85% solo per poche settimane all'anno.",
            places: "Ambiente al chiuso, anche non riscaldato d'inverno; Ambiente all'aperto ma non direttamente esposto alle intemperie.",
        },
        {
            value: '3',
            label: 'Classe di servizio 3',
            description: "È caratterizzata da umidità più elevata di quella della classe di servizio 2.",
            places: "Ambiente in cui le strutture sono direttamente esposte alle intemperie o frequentemente sottoposte ad inumidimento o immerse.",
        },
    ];

    return (
        <>

            {viewType === 'table' ? (

                <div className="p-5 items-center">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold flex gap-2">
                            <p>
                                Classe di servizio{!isOpen ? `:` : null}
                            </p>
                            <p className="font-normal">
                                {!isOpen ? `${serviceClass.serviceClass}` : null}
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
                                        <th className="border border-gray-300 px-4 py-2 text-left">Descrizione</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Luoghi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {classes.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border flex items-center gap-2 border-gray-300 px-4 py-2">
                                                <div>
                                                    <input
                                                        type="radio"
                                                        name="serviceClass"
                                                        value={item.value}
                                                        checked={serviceClass.serviceClass === item.value}
                                                        onChange={handleCheck}
                                                        className="h-5 w-5 text-blue-600 cursor-pointer"
                                                    />
                                                </div>
                                                <p>{item.label}</p>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                                            <td className="border border-gray-300 px-4 py-2">{item.places}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div> : null}
                </div>


            ) :
                <div className="">
                    <select
                        className="w-full py-2 px-3 border border-gray-300 rounded-md cursor-pointer"
                        value={serviceClass.serviceClass}
                        onChange={handleCheck}
                    >
                        {classes.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>
            }
        </>
    );
};

export default ServiceClassTable;
