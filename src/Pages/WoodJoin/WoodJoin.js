import SharePlaneSelector from "../../Components/SharePlaneSelector";
import JoinTypeSelector from "../../Components/JoinTypeSelector";
import NavigationPage from "../../Components/NavigationPage"
import ConnecionSharePlaneDraw from "../../Components/ConnecionSharePlaneDraw";
import get_Johansen from "../../Utils/get_Johansen";
import Latex from "react-latex-next";



export default function WoodJoin(params) {

    const route = {
        prevLink: '/notchbearing',
        prevTitle: "Intagli all'appoggio",
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
                        <JoinTypeSelector />
                    </div>
                    <div className='flex flex-col'>
                        <SharePlaneSelector />
                    </div>
                </div>
            </div>



            <div className="h-[83vh] overflow-y-scroll">
                <ConnecionSharePlaneDraw />
                <div>
                    <h1 className="text-lg font-bold" >Verifica diametri minimi</h1>
                    <div>

                    </div>
                    <h1 className="text-lg font-bold" >Verifica preforatura</h1>
                    <div>

                    </div>
                    <h1 className="text-lg font-bold" >Resistenze a rifollamento</h1>
                    <div>

                    </div>
                    <h1 className="text-lg font-bold" >Momento caratteristico di snervamento</h1>
                    <div>

                    </div>
                    <h1 className="text-lg font-bold" >Resistenze a estrazione</h1>
                    <div>

                    </div>
                    <h1 className="text-lg font-bold" >Johansen</h1>
                    <div className="flex flex-col gap-5">
                        <Latex>
                            {`$${get_Johansen().rk1a_title}$`}
                            {`$${get_Johansen().rk1a_formula}$`}
                            {`$${get_Johansen().rk1a_formulaVal}$`}
                            {`$${get_Johansen().rk1a}$`}
                        </Latex>
                        <Latex>
                            {`$${get_Johansen().rk1b_title}$`}
                            {`$${get_Johansen().rk1b_formula}$`}
                            {`$${get_Johansen().rk1b_formulaVal}$`}
                            {`$${get_Johansen().rk1b}$`}
                        </Latex>
                        <Latex>
                            {`$${get_Johansen().rk2a_prev_title}$`}
                            {`$${get_Johansen().rk2a_prev_formula}$`}
                            {`$${get_Johansen().rk2a_prev_formulaVal}$`}
                            {`$${get_Johansen().rk2a_prev}$`}
                        </Latex>
                        <Latex>
                            {`$${get_Johansen().rk2a_title}$`}
                            {`$${get_Johansen().rk2a_formula}$`}
                            {`$${get_Johansen().rk2a_formulaVal}$`}
                            {`$${get_Johansen().rk2a}$`}
                        </Latex>
                        <Latex>
                            {`$${get_Johansen().rk3_title}$`}
                            {`$${get_Johansen().rk3_formula}$`}
                            {`$${get_Johansen().rk3_formulaVal}$`}
                            {`$${get_Johansen().rk3}$`}
                        </Latex>

                    </div>
                    <h1 className="text-lg font-bold" >Spaziature minime</h1>
                    <div>

                    </div>
                    <h1 className="text-lg font-bold" >Massimo numero di righe</h1>
                    <div>

                    </div>
                    <h1 className="text-lg font-bold" >Minimo numero di connettori per riga</h1>
                    <div>

                    </div>
                    <h1 className="text-lg font-bold" >Verifica connessione</h1>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}