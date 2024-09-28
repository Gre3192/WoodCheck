import React from 'react';
import { useRecoilState } from 'recoil';
import { serviceDurationClassAtom } from '../Atom/serviceDurationClassAtom';

const ServiceClassTable = () => {

    const [serviceClass, setServiceClass] = useRecoilState(serviceDurationClassAtom);

    const handleCheck = (event) => {
        const { value } = event.target;
        setServiceClass((prevState) => ({
            ...prevState,
            serviceClass: value,
        }));
    };

    const classes = [
        {
            value: '1',
            label: 'Classe di servizio 1',
            description: "È caratterizzata da un'umidità del materiale in equilibrio con l'ambiente a una temperatura di 20 °C e un'umidità relativa dell'aria circostante che non superi il 65%, se non per poche settimane all'anno.",
            places: "Ambiente al chiuso, riscaldato d'inverno."
        },
        {
            value: '2',
            label: 'Classe di servizio 2',
            description: "È caratterizzata da un'umidità del materiale in equilibrio con l'ambiente a una temperatura di 20 °C e un'umidità relativa dell'aria circostante che superi l'85% solo per poche settimane all'anno.",
            places: "Ambiente al chiuso, anche non riscaldato d'inverno; Ambiente all'aperto ma non direttamente esposto alle intemperie."
        },
        {
            value: '3',
            label: 'Classe di servizio 3',
            description: "È caratterizzata da umidità più elevata di quella della classe di servizio 2.",
            places: "Ambiente in cui le strutture sono direttamente esposte alle intemperie o frequentemente sottoposte ad inumidimento o immerse."
        },
    ];

    return (
        <div className="p-5 items-center">

            <div className='flex justify-between items-center mb-4'>
                <h2 className="text-lg font-bold ">Classe di servizio</h2>
            </div>

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
                            <tr key={index}  >
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
            </div>
        </div>
    );
};

export default ServiceClassTable;
