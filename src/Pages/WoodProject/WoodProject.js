import InputForces from "../../Components/InputForces"
import SectionGeometry from "../../Components/SectionGeometry"
import ServiceClassSelector from "../../Components/ServiceClassSelector"
import DurationClassSelector from "../../Components/DurationClassSelector"
import SectionGeometryMass from "../../Components/SectionGeometryMass"
import WoodClass from "../../Components/WoodClass"
import ActionSectionDraw from "../../Components/ActionSectionDraw"

export default function WoodProject(params) {



    return (

        <div className="h-[92vh] overflow-y-scroll">
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

    )


}