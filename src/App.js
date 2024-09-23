import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage"
import { useEffect } from 'react';
import WoodChecks from './Pages/WoodChecks/WoodChecks';
import 'katex/dist/katex.min.css';
import Layout from './Layout/Layout';
import WoodProject from './Pages/WoodProject/WoodProject';
import WoodJoin from './Pages/WoodJoin/WoodJoin';


function App() {

  useEffect(() => {
    document.title = "WoodCheck";
  }, []);




  return (

    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/checks" element={<WoodChecks />} />
          <Route path="/project" element={<WoodProject />} />
          <Route path="/joins" element={<WoodJoin />} />
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
