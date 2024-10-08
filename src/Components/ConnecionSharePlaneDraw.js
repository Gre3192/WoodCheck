import { useRecoilValue } from 'recoil';
import { sectionGeometryAtom } from '../Atom/sectionGeometryAtom';
import { forcesStateAtom } from '../Atom/forcesStateAtom';
import { joinProprertiesAtom } from '../Atom/joinProprertiesAtom';




export default function ConnecionSharePlaneDraw() {

    const joinProprerties = useRecoilValue(joinProprertiesAtom);

    const { shearPlane } = joinProprerties

    return (

        <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" >



            {/* Connessione Legno-Legno (2 piano di taglio)  */}
            {shearPlane == 2 ?
                <g transform="translate(150, 150)">
                    <rect x="0" y="0" width="100" height="200" fill="#EAD9C8" stroke="black" strokeWidth="2" />
                    <rect x="100" y="100" width="100" height="200" fill="#EAD9C8" stroke="black" strokeWidth="2" />
                    <rect x="200" y="0" width="100" height="200" fill="#EAD9C8" stroke="black" strokeWidth="2" />
                </g> : null
            }


            {/* Connessione Legno-Legno (1 piano di taglio)  */}
            {shearPlane == 1 ?
                <g transform="translate(200, 150)">
                    <rect x="0" y="0" width="100" height="200" fill="#EAD9C8" stroke="black" strokeWidth="2" />
                    <rect x="100" y="100" width="100" height="200" fill="#EAD9C8" stroke="black" strokeWidth="2" />
                </g> : null
            }



            {/* Connessione Piastra acciaio-Legno (1 piano di taglio)  */}
            {false ?
                <g transform="translate(160, 120)">
                    <rect x="90" y="0" width="10" height="200" fill="#A9A9A9" stroke="black" strokeWidth="2" />
                    <rect x="100" y="100" width="100" height="200" fill="#EAD9C8" stroke="black" strokeWidth="2" />
                </g> : null
            }



            {/* Piastra di acciaio esterna (2 piano di taglio)  */}
            {false ?
                <g transform="translate(150, 120)">
                    <rect x="90" y="0" width="10" height="200" fill="#A9A9A9" stroke="black" strokeWidth="2" />
                    <rect x="100" y="100" width="100" height="200" fill="#EAD9C8" stroke="black" strokeWidth="2" />
                    <rect x="200" y="0" width="10" height="200" fill="#A9A9A9" stroke="black" strokeWidth="2" />
                </g> : null
            }



            {/* Piastra di acciaio interna (2 piano di taglio)  */}
            {false ?
                <g transform="translate(100, 120)">
                    <rect x="100" y="100" width="100" height="200" fill="#EAD9C8" stroke="black" strokeWidth="2" />
                    <rect x="200" y="0" width="10" height="200" fill="#A9A9A9" stroke="black" strokeWidth="2" />
                    <rect x="210" y="100" width="100" height="200" fill="#EAD9C8" stroke="black" strokeWidth="2" />
                </g> : null
            }


        </svg >
    )
}