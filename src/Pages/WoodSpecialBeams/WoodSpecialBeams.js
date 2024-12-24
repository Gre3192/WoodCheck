import NavigationPage from "../../Components/NavigationPage"
import SpecialBeamsSvg from "../../Components/SvgComponent/SpecialBeamsSvg"



export default function WoodSpecialBeams(params) {


    const route = {
        prevLink: '/checksslu',
        prevTitle: 'Verifiche SLE',
        currentTitle: "Travi speciali",
        nextLink: '/notchbearing',
        nextTitle: "Intagli all'appoggio"
    }



    return (

        <>
            {/* <div className='shadow-lg sticky'>
                <NavigationPage route={route} />
            </div> */}
            <div className='flex flex-col items-center justify-center'>
                <SpecialBeamsSvg />
            </div>
        </>

    )


}