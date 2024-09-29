import NavigationPage from "../../Components/NavigationPage"






export default function WoodChecksSLE(params) {


    const route = {
        prevLink: '/checksslu',
        prevTitle: 'Verifiche SLU',
        currentTitle: 'Verifiche SLE',
        nextLink: '/specialBeams',
        nextTitle: 'Travi speciali'
    }


    return (
        <>
            <div className='shadow-lg sticky'>
                <NavigationPage route={route} />
            </div>
            Verifiche SLE
        </>
    )
}