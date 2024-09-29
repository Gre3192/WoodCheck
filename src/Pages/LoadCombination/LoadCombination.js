import NavigationPage from "../../Components/NavigationPage"




export default function LoadCombination(params) {


    const route = {
        prevLink: '',
        prevTitle: '',
        currentTitle: 'Combinazioni di carico',
        nextLink: '/project',
        nextTitle: 'Progetto'
    }




    return (

        <>
            <div className='shadow-lg sticky'>
                <NavigationPage route={route} />
            </div>
            Combinazioni di carico




        </>

    )


}