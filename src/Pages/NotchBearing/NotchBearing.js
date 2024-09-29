import NavigationPage from "../../Components/NavigationPage"




export default function NotchBearing(params) {


    const route = {
        prevLink: '/specialBeams',
        prevTitle: 'Travi speciali',
        currentTitle: "Intagli all'appoggio",
        nextLink: '/joins',
        nextTitle: 'Collegamenti'
    }


    return (

        <div>
            <div className='shadow-lg sticky'>
                <NavigationPage route={route} />
            </div>
            Intaglio all'appoggio
        </div>

    )


}