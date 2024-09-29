import InputForces from "../../Components/InputForces"
import SectionGeometry from "../../Components/SectionGeometry"
import ServiceClassSelector from "../../Components/ServiceClassSelector"
import DurationClassSelector from "../../Components/DurationClassSelector"
import SectionGeometryMass from "../../Components/SectionGeometryMass"
import WoodClass from "../../Components/WoodClass"
import ActionSectionDraw from "../../Components/ActionSectionDraw"
import NavigationPage from "../../Components/NavigationPage"


export default function WoodProject(params) {


    const route = {

        prevLink: '/loadCombination',
        prevTitle: 'Combinazioni di carico',
        currentTitle: 'Progetto',
        nextLink: '/checksslu',
        nextTitle: 'Verifiche SLU'
    }

    return (

        <>
            <div className='shadow-lg sticky'>
                <NavigationPage route={route} />
            </div>

            <div className="h-[90vh] overflow-y-scroll">
                <DurationClassSelector />
                <ServiceClassSelector />
                <WoodClass />
                <SectionGeometry />
                <InputForces />
                <div className='flex justify-center mt-5'>
                    <ActionSectionDraw />
                </div>
                <SectionGeometryMass />
            </div>
        </>
    )


}