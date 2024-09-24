import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage"
import { useEffect } from 'react';
import WoodChecks from './Pages/WoodChecks/WoodChecks';
import 'katex/dist/katex.min.css';
import Layout from './Layout/Layout';
import WoodProject from './Pages/WoodProject/WoodProject';
import WoodJoin from './Pages/WoodJoin/WoodJoin';
import WoodSpecialBeams from './Pages/WoodSpecialBeams/WoodSpecialBeams';
import LoadCombination from './Pages/LoadCombination/LoadCombination';

function App() {

  useEffect(() => {
    document.title = "WoodCheck";
  }, []);


  return (

    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/loadCombination" element={<LoadCombination />} />
          <Route path="/project" element={<WoodProject />} />
          <Route path="/checks" element={<WoodChecks />} />
          <Route path="/specialBeams" element={<WoodSpecialBeams />} />
          <Route path="/joins" element={<WoodJoin />} />
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
