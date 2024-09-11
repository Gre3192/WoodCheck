import getSteelGeometryMass from "../../Utils/getSteelGeometryMass"
import CompressioneCheck from "../../Components/Steel/Verifiche/CompressioneCheck";
import FlessioneRettaCheck from "../../Components/Steel/Verifiche/FlessioneRettaCheck";
import InputForces from "../../Components/InputForces";
import InstabilitàCompressioneCheck from "../../Components/Steel/Verifiche/InstabilitàCompressioneCheck";
import SteelSectionClassification from "../../Components/Steel/Classificazione/SteelSectionClassification";
import SteelSectionGeometry from "../../Components/Steel/Geometrie/SteelSectionGeometry";
import TaglioCheck from "../../Components/Steel/Verifiche/TaglioCheck";
import TrazioneCheck from "../../Components/Steel/Verifiche/TaglioCheck";


export default function SteelStructures() {







    return (

        <>
            <SteelSectionGeometry />
            <SteelSectionClassification />
            <InputForces />

            <div className="px-5">
                <h1 className="text-lg font-bold" >
                    Verifiche di Resistenza
                </h1>
                <TrazioneCheck />
                <CompressioneCheck />
                <FlessioneRettaCheck />
                <TaglioCheck />
            </div>
            <div className="px-5">
                <h1 className="text-lg font-bold">
                    Verifiche di Instabilità
                </h1>
                <InstabilitàCompressioneCheck />
            </div>


            {/* <p className="font-medium mt-10">STATO LIMITE ULTIMO</p>
            <div className="border-8 py-5">
                <p className="font-medium ml-10">Verifiche di Resistenza</p>
                <div className="ml-16">
                    <p>Resistenza a trazione</p><hr/>
                    <p>Resistenza a compressione</p><hr/>
                    <p>Flessione</p><hr/>
                    <p>Taglio</p><hr/>
                    <p>Torsione</p><hr/>
                    <p>Flessione e Taglio</p><hr/>
                    <p>Presso o Tenso-Flessione Retta</p><hr/>
                    <p>Presso o Tenso-Flessione Biassiale</p><hr/>
                    <p>Flessione, Taglio e Sforzo assiale</p><hr/>
                </div>
                <p className="font-medium mt-5 ml-10" >Verifiche di Stabilità</p>
                <div className="ml-16">
                    <p>Aste compresse</p><hr/>
                    <p>Travi inflesse</p><hr/>
                </div>
            </div> */}



            {/* <p className="font-medium mt-10">STATO LIMITE DI ESERCIZIO</p>
            <div className="border-8 py-5">
                <div className="ml-16">
                    <p>Spostamenti verticali - Deformabilità freccia</p><hr/>
                    <p>Spostamenti laterali</p><hr/>
                </div>
            </div> */}



            {/* <p className="font-medium mt-10">UNIONI</p>
            <div className="border-8 py-5">
                <div className="ml-16">

                </div>
            </div>   */}
        </>

    )


}