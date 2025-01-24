import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import { useEffect, useState } from 'react';
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
import ProjectPage from './Pages/HomePage/ProjectPage';



export default function App() {

  const [currentLocation, setCurrentLocation] = useState('efs')

  useEffect(() => {
    document.title = "UniStruct";
  }, []);

  function hangleLocation(e){
    setCurrentLocation(e)
  }



  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout sidebarItems={sidebarItems} navbarItems={navbarItems} isVisibleBreadCrumbs={false} isVisibleSidebar={currentLocation !== '/ProjectPage'} isVisibleNavbar={true} onLinkChange={(e)=>hangleLocation(e)}/>}>
          <Route path="/ProjectPage" element={<ProjectPage />} />
          <Route path="/loadCombination" element={<LoadCombination />} />
          <Route path="/project" element={<WoodProject />} />
          <Route path="/checksslu" element={<WoodChecksSLU />} />
          <Route path="/checkssle" element={<WoodChecksSLE />} />
          <Route path="/specialBeamsProject" element={<WoodSpecialBeams />} />
          <Route path="/specialBeamsChecksslu" element={<WoodSpecialBeams />} />
          <Route path="/joins" element={<WoodJoin />} />
          <Route path="/madepdf" element={<MadePDF />} />
          <Route path="/notchbearing" element={<NotchBearing />} />
          {/* <Route path="/" element={<TestPage />} /> */}
        </Route>
      </Routes>
    </HashRouter>

  );
}