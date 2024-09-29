import NavigationPage from "../../Components/NavigationPage"



export default function WoodJoin(params) {

    const route = {
        prevLink: '/notchbearing',
        prevTitle: "Intagli all'apposggio",
        currentTitle: "Collegamenti",
        nextLink: '',
        nextTitle:''
    }



    

    return (

        <div>
            <div className='shadow-lg sticky'>
                <NavigationPage route={route} />
            </div>
            Collegamenti
        </div>

    )


}