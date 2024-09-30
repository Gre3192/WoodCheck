import SharePlaneSelector from "../../Components/SharePlaneSelector";
import JoinTypeSelector from "../../Components/JoinTypeSelector";
import NavigationPage from "../../Components/NavigationPage"
import ConnecionSharePlaneDraw from "../../Components/ConnecionSharePlaneDraw";



export default function WoodJoin(params) {

    const route = {
        prevLink: '/notchbearing',
        prevTitle: "Intagli all'apposggio",
        currentTitle: "Collegamenti",
        nextLink: '',
        nextTitle: ''
    }






    return (

        <div>

            <NavigationPage route={route} />



            <div className='flex justify-between px-6 py-3 shadow-lg sticky'>

                <div className='flex gap-8 '>
                    <div className='flex flex-col'>
                        <JoinTypeSelector  />
                    </div>
                    <div className='flex flex-col'>
                        <SharePlaneSelector  />
                    </div>
                </div>


            </div>

            <ConnecionSharePlaneDraw/>

        </div>

    )


}