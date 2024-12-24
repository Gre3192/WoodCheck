import { useRecoilState } from 'recoil';
import { sectionPropAtom } from '../../Atom/sectionPropAtom';

export default function SectionSvg(params) {
  const [sectionProp] = useRecoilState(sectionPropAtom);

  const maxDimension = 236; // Dimensione massima per il rettangolo scalato
  const minScaleFactor = 100000000000000; // Fattore di scala per rendere visibili valori molto piccoli


  const calculateScaledDimensions = (base = 1, height = 1) => {
    const aspectRatio = base / height;
    let scaledBase = base * minScaleFactor;
    let scaledHeight = height * minScaleFactor;
    if (scaledBase > maxDimension || scaledHeight > maxDimension) {
      if (aspectRatio >= 1) {
        scaledBase = maxDimension;
        scaledHeight = maxDimension / aspectRatio;
      } else {
        scaledBase = maxDimension * aspectRatio;
        scaledHeight = maxDimension;
      }
    }
    return { base: scaledBase, height: scaledHeight };
  };




  // Calcolo delle dimensioni aggiornate
  const { base: scaledBase, height: scaledHeight } = calculateScaledDimensions(
    sectionProp.geometry?.b?.value || 1, // Usa 1 se b.value non è definito
    sectionProp.geometry?.h?.value || 1  // Usa 1 se h.value non è definito
  );


  const rectX = (300 - scaledBase) / 2; // Centra il rettangolo orizzontalmente
  const rectY = (300 - scaledHeight) / 2; // Centra il rettangolo verticalmente



  return (
    <div className="flex">
      <svg width="100%" height="200" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">

        {/* Rettangolo */}
        <rect
          x={rectX < 0 ? 0 : rectX} // Usa 0 se rectX è negativo
          y={rectY < 0 ? 0 : rectY} // Usa 0 se rectY è negativo
          width={scaledBase}
          height={scaledHeight}
          fill="#D2B48C"
          stroke="black"
        />

        {/* Freccia orizzontale (base) */}
        <line x1={rectX} y1={rectY + scaledHeight + 10} x2={rectX + scaledBase} y2={rectY + scaledHeight + 10} stroke="black" />
        <line x1={rectX} y1={rectY + scaledHeight + 10} x2={rectX + 5} y2={rectY + scaledHeight + 15} stroke="black" />
        <line x1={rectX} y1={rectY + scaledHeight + 10} x2={rectX + 5} y2={rectY + scaledHeight + 5} stroke="black" />
        <line x1={rectX + scaledBase} y1={rectY + scaledHeight + 10} x2={rectX + scaledBase - 5} y2={rectY + scaledHeight + 15} stroke="black" />
        <line x1={rectX + scaledBase} y1={rectY + scaledHeight + 10} x2={rectX + scaledBase - 5} y2={rectY + scaledHeight + 5} stroke="black" />

        {/* Freccia verticale (altezza) */}
        <line x1={rectX + scaledBase + 10} y1={rectY} x2={rectX + scaledBase + 10} y2={rectY + scaledHeight} stroke="black" />
        <line x1={rectX + scaledBase + 10} y1={rectY} x2={rectX + scaledBase + 15} y2={rectY + 5} stroke="black" />
        <line x1={rectX + scaledBase + 10} y1={rectY} x2={rectX + scaledBase + 5} y2={rectY + 5} stroke="black" />
        <line x1={rectX + scaledBase + 10} y1={rectY + scaledHeight} x2={rectX + scaledBase + 15} y2={rectY + scaledHeight - 5} stroke="black" />
        <line x1={rectX + scaledBase + 10} y1={rectY + scaledHeight} x2={rectX + scaledBase + 5} y2={rectY + scaledHeight - 5} stroke="black" />

        {/* Testo per b e h */}
        <text x={rectX + scaledBase / 2 - 10} y={rectY + scaledHeight + 30} fontFamily="Arial" fontSize="15" fill="black">
          b = {sectionProp.geometry?.b?.value || 1}
        </text>
        <text x={rectX + scaledBase + 20} y={rectY + scaledHeight / 2} fontFamily="Arial" fontSize="15" fill="black" transform={`rotate(90, ${rectX + scaledBase + 20}, ${rectY + scaledHeight / 2})`}>
          h = {sectionProp.geometry?.h?.value || 1}
        </text>
      </svg>
    </div>
  );
}
