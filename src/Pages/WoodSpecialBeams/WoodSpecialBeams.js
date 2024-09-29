import NavigationPage from "../../Components/NavigationPage"




export default function WoodSpecialBeams(params) {


    const route = {
        prevLink: '/checksslu',
        prevTitle: 'Verifiche SLE',
        currentTitle: "Travi speciali",
        nextLink: '/notchbearing',
        nextTitle: "Intagli all'appoggio"
    }



    return (

        <div>
            <div className='shadow-lg sticky'>
                <NavigationPage route={route} />
            </div>
            Travi Speciali
        </div>

    )


}