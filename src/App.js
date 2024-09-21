import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage"
import { useEffect } from 'react';
import WoodStructures from './Pages/WoodStructures/WoodStructures';



function App() {

  useEffect(() => {
    document.title = "WoodCheck";
  }, []);





  return (

    <HashRouter>
      <Routes>
        <Route>
          {/* <Route path="/" element={<ActionsOnStructures />} />  */}
          <Route path="/" element={<WoodStructures />} /> 

          
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
