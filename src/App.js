import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage"
import { useEffect } from 'react';
import WoodChecksSLU from './Pages/WoodChecksSLU/WoodChecksSLU';
import WoodChecksSLE from './Pages/WoodChecksSLE/WoodChecksSLE';
import 'katex/dist/katex.min.css';
import WoodProject from './Pages/WoodProject/WoodProject';
import WoodJoin from './Pages/WoodJoin/WoodJoin';
import WoodSpecialBeams from './Pages/WoodSpecialBeams/WoodSpecialBeams';
import LoadCombination from './Pages/LoadCombination/LoadCombination';
import MadePDF from './Pages/MadePDF/MadePDF';
import NotchBearing from './Pages/NotchBearing/NotchBearing';
import TestPage from './Pages/TestPage/TestPage';
import Layout from './Layout/Layout';
import PageTransition from './Components/Wrappers/PageTransition';
import { sidebarItems, navbarItems, breadCrumbsItems } from './Json/NavigationConfig';
import SezioniNormali from './Pages/Wood/Sezioni Normali/SezioniNormali';
import EntryPoint from './Pages/HomePage/EntryPoint';


export default function App() {

  useEffect(() => {
    document.title = "UniStruct";
  }, []);


  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={<EntryPoint />} />
        <Route element={<Layout sidebarItems={sidebarItems} navbarItems={navbarItems} isVisibleBreadCrumbs={false} />}>
          <Route path="/loadCombination" element={<LoadCombination />} />
          <Route path="/project" element={<WoodProject />} />
          <Route path="/checksslu" element={<WoodChecksSLU />} />
          <Route path="/checkssle" element={<WoodChecksSLE />} />
          <Route path="/specialBeamsProject" element={<WoodSpecialBeams />} />
          <Route path="/specialBeamsChecksslu" element={<WoodSpecialBeams />} />
          <Route path="/joins" element={<WoodJoin />} />
          <Route path="/madepdf" element={<MadePDF />} />
          <Route path="/notchbearing" element={<NotchBearing />} />
          <Route path="/SezioniNormali" element={<SezioniNormali />} />
          {/* <Route path="/" element={<TestPage />} /> */}
        </Route>
      </Routes>
    </HashRouter>

  );
}