export default function SectionShapeToggleBar({ props }) {

    const {
        sectionShape = 'rettangolare',
        handleSectionTypeChange = handleSectionTypeChange
    } = props;

    return (
        <>
       
            <div className="flex space-x-4">
                <button
                    className={`px-4 py-2 border w-full font-semibold rounded-lg transition ${sectionShape === 'rettangolare' ? 'bg-blue-100 hover:bg-blue-200' : 'bg-white hover:bg-gray-200'}`}
                    onClick={() => handleSectionTypeChange('rettangolare')}
                >
                    Rettangolare
                </button>
                <button
                    className={`px-4 py-2 border w-full rounded-lg font-semibold transition ${sectionShape === 'circolare' ? 'bg-blue-100 hover:bg-blue-200' : 'bg-white hover:bg-gray-200'}`}
                    onClick={() => handleSectionTypeChange('circolare')}
                >
                    Circolare
                </button>
                </div>
 
        </>
    )
}
