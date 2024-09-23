import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage"
import { useEffect } from 'react';
import WoodChecks from './Pages/WoodChecks/WoodChecks';
import 'katex/dist/katex.min.css';
import Layout from './Layout/Layout';


function App() {

  useEffect(() => {
    document.title = "WoodCheck";
  }, []);





  return (

    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<WoodChecks />} /> 

          
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
