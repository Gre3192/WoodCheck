import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import Trazione0Check from "../../Components/Checks/Trazione0Check"
import Trazione90Check from "../../Components/Checks/Trazione90Check"

import Compressione0Check from "../../Components/Checks/Compressione0Check"
import Compressione90Check from "../../Components/Checks/Compressione90Check"
import CompressioneAlphaCheck from "../../Components/Checks/CompressioneAlphaCheck"

import FlessioneCheck from "../../Components/Checks/FlessioneCheck"
import PressoFlessioneCheck from "../../Components/Checks/PressoFlessioneCheck"
import TensoFlessioneCheck from "../../Components/Checks/TensoFlessioneCheck"

import TaglioCheck from "../../Components/Checks/TaglioCheck"
import TorsioneCheck from "../../Components/Checks/TorsioneCheck"
import TaglioTorsioneCheck from "../../Components/Checks/TaglioTorsioneCheck"

import InstabilitaCompressioneCheck from "../../Components/Checks/InstabilitaCompressioneCheck"
import InstabilitaLateroTorsionaleCheck from "../../Components/Checks/InstabilitaLateroTorsionaleCheck"
import InstabilitaPressoFlessioneCheck from "../../Components/Checks/InstabilitaPressoFlessioneCheck"

import ActionSectionDraw from "../../Components/ActionSectionDraw"
import WoodClass from '../../Components/WoodClass';




export default function WoodChecksSLU(params) {

    const [showAll, setShowAll] = useState(false)



    const handleOpen = () => {
        setShowAll(!showAll)
    }



    return (
        <>
            <div className='flex justify-between pr-6 pb-3'>

                <div className='flex gap-8 '>
                    <div className='flex flex-col'>
                        <label htmlFor="mySelect">Classe di sevizio</label>
                        <select id="mySelect" value={''} onChange={() => { }}>
                            <option value="opzione1">Opzione 1</option>
                            <option value="opzione2">Opzione 2</option>
                            <option value="opzione3">Opzione 3</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="mySelect">Classe di durata</label>
                        <select id="mySelect" value={''} onChange={() => { }}>
                            <option value="opzione1">Opzione 1</option>
                            <option value="opzione2">Opzione 2</option>
                            <option value="opzione3">Opzione 3</option>
                        </select>
                    </div>
                    <WoodClass isMinimalTable={false} isTitle={false} />
                </div>


                <button
                    onClick={handleOpen}
                    className="flex items-center p-3 border border-gray-300 rounded-lg text-gray-500 bg-white font-semibold hover:bg-gray-200 transition duration-100"
                    title={showAll ? 'Visualizza le verifiche necessarie' : 'Visualizza tutte le verifiche'}
                >
                    {showAll ? <FaEye /> : <FaEyeSlash />}
                </button>
            </div>
            
            <div className="h-[85vh] overflow-y-scroll">
                <div className='flex justify-center mt-5'>
                    <ActionSectionDraw />
                </div>
                <div className="px-5">
                    <h1 className="text-lg font-bold" >
                        Verifiche di Resistenza
                    </h1>
                    <Trazione0Check showAll={showAll} />
                    <Trazione90Check showAll={showAll} />
                    <Compressione0Check showAll={showAll} />
                    <Compressione90Check showAll={showAll} />
                    <CompressioneAlphaCheck showAll={showAll} />
                    <FlessioneCheck showAll={showAll} />
                    <TensoFlessioneCheck showAll={showAll} />
                    <PressoFlessioneCheck showAll={showAll} />
                    <TaglioCheck showAll={showAll} />
                    <TorsioneCheck showAll={showAll} />
                    <TaglioTorsioneCheck showAll={showAll} />
                </div>
                <div className="px-5">
                    <h1 className="text-lg font-bold" >
                        Verifiche di Stabilità
                    </h1>
                    <InstabilitaLateroTorsionaleCheck showAll={showAll} />
                    <InstabilitaCompressioneCheck showAll={showAll} />
                    <InstabilitaPressoFlessioneCheck showAll={showAll} />
                </div>
            </div>
        </>
    )
}