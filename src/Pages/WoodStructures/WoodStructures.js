import Compressione0Check from "../../Components/Compressione0Check"
import Compressione90Check from "../../Components/Compressione90Check"
import CompressioneAlphaCheck from "../../Components/CompressioneAlphaCheck"
import FlessioneCheck from "../../Components/FlessioneCheck"
import InputForces from "../../Components/InputForces"
import PressoFlessioneCheck from "../../Components/PressoFlessioneCheck"
import TaglioCheck from "../../Components/TaglioCheck"
import TaglioTorsioneCheck from "../../Components/TaglioTorsioneCheck"
import TensoFlessioneCheck from "../../Components/TensoFlessioneCheck"
import TorsioneCheck from "../../Components/TorsioneCheck"
import Trazione0Check from "../../Components/Trazione0Check"
import Trazione90Check from "../../Components/Trazione90Check"

export default function WoodStructures(params) {



    return (

        <>
            <InputForces />
            
            <Trazione0Check/>
            <Trazione90Check/>
            <Compressione0Check/>
            <Compressione90Check/>
            <CompressioneAlphaCheck/>
            <FlessioneCheck/>
            <TensoFlessioneCheck/>
            <PressoFlessioneCheck/>
            <TaglioCheck/>
            <TorsioneCheck/>
            <TaglioTorsioneCheck/>
            
        </>

    )


}