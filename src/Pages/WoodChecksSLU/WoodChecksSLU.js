import React, { useEffect, useState } from 'react';


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

import { useRecoilState } from 'recoil';
import { sectionPropAtom } from '../../Atom/sectionPropAtom';
import SectionSvg from '../../Components/SvgComponent/SectionSvg';
import { sectionGeometryMassAtom } from '../../Atom/sectionGeometryMassAtom';



export default function WoodChecksSLU({}) {

    const [showAll, setShowAll] = useState(true)
    const [sectionProp, setSectionProp] = useRecoilState(sectionPropAtom);
    const [sectionGeometryMass, setSectionGeometryMass] = useRecoilState(sectionGeometryMassAtom);

    const handleOpen = () => {
        setShowAll(!showAll)
    }


    return (
        <>

            {/* <VisibilityButton isOpen={showAll} onClick={handleOpen} /> */}


            <div className="">

                <SectionSvg />

                <div className="px-5">
                    <h1 className="text-lg font-bold" >
                        Verifiche di Resistenza
                    </h1>
                    <Trazione0Check showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <Trazione90Check showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <Compressione0Check showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <Compressione90Check showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <CompressioneAlphaCheck showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <FlessioneCheck showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <TensoFlessioneCheck showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <PressoFlessioneCheck showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <TaglioCheck showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <TorsioneCheck showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <TaglioTorsioneCheck showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                </div>
                <div className="px-5">
                    <h1 className="text-lg font-bold" >
                        Verifiche di Stabilità
                    </h1>
                    <InstabilitaLateroTorsionaleCheck showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <InstabilitaCompressioneCheck showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                    <InstabilitaPressoFlessioneCheck showAll={showAll} sectionProp={sectionProp} sectionGeometryMass={sectionGeometryMass} />
                </div>
            </div>
        </>
    )
}