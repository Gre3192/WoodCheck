import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importa le icone da FontAwesome
import { Link } from 'react-router-dom';





export default function NavigationPage({ route }) {

    const { prevLink, prevTitle, currentTitle, nextLink, nextTitle } = route

    return (
        <div className="px-6 pb-3 grid grid-cols-3 items-center sticky">


            {!prevLink && !prevTitle ?
                <div></div> 
                :
                <Link to={prevLink} className="flex items-center gap-2 justify-start">
                    <FaArrowLeft />
                    {prevTitle}
                </Link>
            }

            <div className="uppercase font-bold text-lg text-center">
                {currentTitle}
            </div>


            {!nextLink && !nextTitle ?
                <div></div> 
                :
                <Link to={nextLink} className="flex items-center gap-2 justify-end">
                    {nextTitle}
                    <FaArrowRight  />
                </Link>
            }
        </div>
    )

}