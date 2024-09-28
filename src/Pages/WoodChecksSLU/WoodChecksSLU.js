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


import InputForces from "../../Components/InputForces"
import ControlPanel from "../../Components/ControlPanel"
import SectionGeometry from "../../Components/SectionGeometry"
import ServiceClassSelector from "../../Components/ServiceClassSelector"
import DurationClassSelector from "../../Components/DurationClassSelector"
import SectionGeometryMass from "../../Components/SectionGeometryMass"
import WoodClass from "../../Components/WoodClass"
import ActionSectionDraw from "../../Components/ActionSectionDraw"




export default function WoodChecksSLU(params) {







    return (
        <>
            <div className="h-[92vh] overflow-y-scroll">
            <div className='flex justify-center mt-5'>
                <ActionSectionDraw />
            </div>
                <div className="px-5">
                    <h1 className="text-lg font-bold" >
                        Verifiche di Resistenza
                    </h1>
                    <Trazione0Check />
                    <Trazione90Check />
                    <Compressione0Check />
                    <Compressione90Check />
                    <CompressioneAlphaCheck />
                    <FlessioneCheck />
                    <TensoFlessioneCheck />
                    <PressoFlessioneCheck />
                    <TaglioCheck />
                    <TorsioneCheck />
                    <TaglioTorsioneCheck />
                </div>
                <div className="px-5">
                    <h1 className="text-lg font-bold" >
                        Verifiche di Stabilità
                    </h1>
                    <InstabilitaLateroTorsionaleCheck />
                    <InstabilitaCompressioneCheck />
                    <InstabilitaPressoFlessioneCheck />
                </div>
            </div>
        </>
    )
}