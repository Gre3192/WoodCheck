export default function SectionShapeToggleBar({ props }) {

    const {
        sectionShape = 'rettangolare',
        handleSectionTypeChange = handleSectionTypeChange
    } = props;

    return (
        <>
            <div className="flex gap-3 mb-5">
                <button
                    className={`px-4 py-2 border ${sectionShape === 'rettangolare' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('rettangolare')}
                >
                    Rettangolare
                </button>
                <button
                    className={`px-4 py-2 border ${sectionShape === 'circolare' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => handleSectionTypeChange('circolare')}
                >
                    Circolare
                </button>
            </div>
        </>
    )
}