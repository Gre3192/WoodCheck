import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage"
import { useEffect } from 'react';
import ActionsOnStructures from './Pages/ActionsOnStructures/ActionsOnStructures';
import SteelStructures from './Pages/SteelStructures/SteelStructures';




function App() {

  useEffect(() => {
    document.title = "Structural Engineering";
  }, []);





  return (

    <HashRouter>
      <Routes>
        <Route>
          {/* <Route path="/" element={<ActionsOnStructures />} />  */}
          <Route path="/" element={<SteelStructures />} /> 

          
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
