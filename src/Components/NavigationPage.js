import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importa le icone da FontAwesome
import { Link } from 'react-router-dom';





export default function NavigationPage({route}) {

    const { prevLink, prevTitle, nextLink, nextTitle } = route

    return (
        <>
            <div className='px-6 pb-3 flex justify-between'>
                <Link to={prevLink} className='flex items-center gap-2'>
                    <FaArrowLeft />
                    {prevTitle}
                </Link>
                <Link to={nextLink} className='flex items-center gap-2'>
                    {nextTitle}
                    <FaArrowRight />
                </Link>
            </div>
        </>
    )

}