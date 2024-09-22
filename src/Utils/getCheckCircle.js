import { FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';
import React from 'react';

export default function getCheckCircle(check = 0.1) {
    if (check < 1) {
        return (
            <div className="relative group">
                <FaCheckCircle className="h-6 w-6 text-green-500" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 px-2 py-1 text-xs text-white bg-green-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Verificato
                </span>
            </div>
        );
    } else if (check === 1) {
        return (
            <div className="relative group">
                <FaExclamationCircle className="h-6 w-6 text-yellow-500" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 px-2 py-1 text-xs text-white bg-yellow-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Al limite
                </span>
            </div>
        );
    } else if (check > 1) {
        return (
            <div className="relative group">
                <FaTimesCircle className="h-6 w-6 text-red-500" />
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 px-2 py-1 text-xs text-white bg-red-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Non verificato
                </span>
            </div>
        );
    }

    return null;
}
