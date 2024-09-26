export default function inputAlert(sectionGeometry,mecchanicProps,serviceClass,durabilityClass) {
    

    if(!mecchanicProps) return  <div> Selezione la classe della sezione </div>
    else if(!sectionGeometry) return  <div> Definisci la geometria della sezione </div>
    else if(!serviceClass) return  <div> Seleziona la classe di servizio </div>
    else if(!durabilityClass) return  <div> Seleziona la classe di durata </div>


}