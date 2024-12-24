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

import ActionSectionDraw from "../../Components/ActionSectionDraw"
import WoodClass from '../../Components/WoodClass';
import ServiceClassSelector from "../../Components/ServiceClassSelector"
import DurationClassSelector from '../../Components/DurationClassSelector';
import NavigationPage from '../../Components/NavigationPage';

import VisibilityButton from '../../Components/ElementUI/Button/VisibilityButton';
import { useRecoilState } from 'recoil';
import { sectionPropAtom } from '../../Atom/sectionPropAtom';
import SectionSvg from '../../Components/SvgComponent/SectionSvg';
import { sectionGeometryMassAtom } from '../../Atom/sectionGeometryMassAtom';
import { useLocation } from 'react-router-dom';



export default function WoodChecksSLU(params) {

    const [showAll, setShowAll] = useState(true)
    const [sectionProp, setSectionProp] = useRecoilState(sectionPropAtom);
    const [sectionGeometryMass, setSectionGeometryMass] = useRecoilState(sectionGeometryMassAtom);

    const handleOpen = () => {
        setShowAll(!showAll)
    }

    // const route = {

    //     prevLink: '/project',
    //     prevTitle: 'Progetto',
    //     currentTitle: 'Verifiche SLU',
    //     nextLink: '/checkssle',
    //     nextTitle: 'Verifiche SLE'
    // }

    return (
        <>

            {/* <NavigationPage route={route} /> */}

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