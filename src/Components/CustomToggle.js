function CustomToggle({ props }) {
    
    const {
      isSelected = false, 
      handleCustomInputToggle = () => {}, 
      firstLabel = 'firstLabelDefault', 
      secondLabel = 'secondDefault', 
    } = props;
  
    return (
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`relative inline-block w-40 h-10 transition duration-200 ease-linear rounded-full cursor-pointer ${
            isSelected ? 'bg-green-500' : 'bg-gray-400'
          }`}
          onClick={handleCustomInputToggle}
        >
          <span
            className={`absolute left-0 inline-block w-20 h-10 transform bg-white rounded-full shadow-md transition-transform duration-200 ease-linear ${
              isSelected ? 'translate-x-20' : ''
            }`}
          >
            <span className="flex justify-center items-center h-full text-sm font-bold text-black">
              {isSelected ? 'Manuale' : 'Sezione'}
            </span>
          </span>
          {/* Testo all'interno del toggle */}
          <div className="absolute inset-0 flex justify-between items-center px-3 text-white text-sm font-bold">
            <span className={isSelected ? 'text-gray-400' : 'text-white'}>{firstLabel}</span>
            <span className={isSelected ? 'text-white' : 'text-gray-400'}>{secondLabel}</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default CustomToggle;
  