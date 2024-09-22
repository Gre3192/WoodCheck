import { ReactComponent as DoubleTicon } from '../Assets/doubleTicon.svg';

export default function SectionShapeToggleBar({ props }) {

    const {
        sectionShape = 'doppioT',
        handleSectionTypeChange = handleSectionTypeChange
    } = props;

    return (
        <>
            {/* <p className="text-lg font-semibold mb-3">Seleziona la forma della sezione:</p> */}
            <div className="flex gap-3 mb-5">

                <button
                    className={`px-3 py-2 border rounded-md transition-all duration-300 ease-in-out ${sectionShape === 'doppioT' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('doppioT')}
                >
                    <DoubleTicon alt="Icona del pulsante" className="w-12 h-12" />
                </button>
                <button
                    className={`px-4 py-2 border rounded-md transition-all duration-300 ease-in-out ${sectionShape === 'T' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('T')}
                >
                    T
                </button>
                <button
                    className={`px-4 py-2 border  rounded-md transition-all duration-300 ease-in-out ${sectionShape === 'Ocava' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('Ocava')}
                >
                    Ocava
                </button>
                <button
                    className={`px-4 py-2 border rounded-md transition-all duration-300 ease-in-out ${sectionShape === 'rettangolarePiena' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('rettangolarePiena')}
                >
                    RettangolarePiena
                </button>
                <button
                    className={`px-4 py-2 border rounded-md transition-all duration-300 ease-in-out ${sectionShape === 'L' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('L')}
                >
                    L
                </button>
                <button
                    className={`px-4 py-2 border rounded-md transition-all duration-300 ease-in-out ${sectionShape === 'C' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('C')}
                >
                    C
                </button>
                <button
                    className={`px-4 py-2 border rounded-md transition-all duration-300 ease-in-out ${sectionShape === 'Z' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('Z')}
                >
                    Z
                </button>
                <button
                    className={`px-4 py-2 border rounded-md transition-all duration-300 ease-in-out ${sectionShape === 'Opiena' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('Opiena')}
                >
                    Opiena
                </button>

            </div>
        </>
    )
}