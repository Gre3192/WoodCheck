export default function SectionShapeToggleBar({ props }) {

    const {
        sectionShape = 'doppioT',
        isDoppioT = true,
        isT = true,
        isCircle = true,
        isRectangle = true,
        isL = true,
        isU = true,
        handleSectionTypeChange = handleSectionTypeChange
    } = props;

    return (
        <>
            {/* <p className="text-lg font-semibold mb-3">Seleziona la forma della sezione:</p> */}
            <div className="flex gap-3 mb-5">
                {
                    isDoppioT ? <button
                        className={`px-4 py-2 border ${sectionShape === 'doppioT' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        onClick={() => handleSectionTypeChange('doppioT')}
                    >
                        Doppio T
                    </button> : null
                }
                {
                    isT ? <button
                        className={`px-4 py-2 border ${sectionShape === 'T' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        onClick={() => handleSectionTypeChange('T')}
                    >
                        T
                    </button> : null
                }
                {
                    isCircle ? <button
                        className={`px-4 py-2 border ${sectionShape === 'circolare' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        onClick={() => handleSectionTypeChange('circolare')}
                    >
                        Circolare
                    </button> : null
                }
                {
                    isRectangle ? <button
                        className={`px-4 py-2 border ${sectionShape === 'rettangolare' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        onClick={() => handleSectionTypeChange('rettangolare')}
                    >
                        Rettangolare
                    </button> : null
                }
                {
                    isL ? <button
                        className={`px-4 py-2 border ${sectionShape === 'L' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        onClick={() => handleSectionTypeChange('L')}
                    >
                        L
                    </button> : null
                }
                {
                    isU ? <button
                        className={`px-4 py-2 border ${sectionShape === 'U' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        onClick={() => handleSectionTypeChange('U')}
                    >
                        U
                    </button> : null
                }
            </div>
        </>
    )
}