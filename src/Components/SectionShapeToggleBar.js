export default function SectionShapeToggleBar({ props }) {

    const {
        sectionShape = 'rettangolare',
        handleSectionTypeChange = handleSectionTypeChange
    } = props;

    return (
        <>
       
            <div className="flex space-x-4">
                <button
                    className={`px-4 py-2 border w-full font-semibold rounded-lg transition ${sectionShape === 'rettangolare' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('rettangolare')}
                >
                    Rettangolare
                </button>
                <button
                    className={`px-4 py-2 borde w-full rounded-lg font-semibold transition ${sectionShape === 'circolare' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('circolare')}
                >
                    Circolare
                </button>
                </div>
 
        </>
    )
}
