import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function VisibilityButton({ isOpen, onClick }) {

    return (
        <button
            onClick={onClick}
            className="flex items-center p-3 border border-gray-300 rounded-lg text-gray-500 bg-white font-semibold hover:bg-gray-200 transition duration-300 hover:scale-110"
            title={isOpen ? 'Visualizza le verifiche necessarie' : 'Visualizza tutte le verifiche'}
        >
            {isOpen ? <FaEye /> : <FaEyeSlash />}
        </button>
    )
}