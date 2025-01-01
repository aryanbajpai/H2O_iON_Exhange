import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import { Footer } from './Basics';
import MainNavBar from './Components/MainNavBar';
import AboutUs from './Components/AboutUs';
import ServicesComponent from './Components/ServicesComponent';
import { AddedMinerals, SoftnerBased, DMPlant, FullyAutomatic, PoolFiltration, SeaWaterPlant, TrunkeyProject, UltraFiltration, UltraViolate } from './Components/Products';
import ContactUs from './Components/ContactUs';
import { AllProducts, ROBased } from './Components/Products';
import EffluentTreatment from './Components/Products/AllProducts/ProductList/EffluentTreatment';
import OnlineChiller from './Components/Products/AllProducts/ProductList/OnlineChiller';
import WaterCooler from './Components/Products/AllProducts/ProductList/WaterCooler';
import Ozonator from './Components/Products/AllProducts/ProductList/Ozonator';
import AntiScallant from './Components/Products/AllProducts/ProductList/AntiScallant';
import Meter from './Components/Products/AllProducts/ProductList/Meter';
import Micron from './Components/Products/AllProducts/ProductList/Micron';
import FilterHousing from './Components/Products/AllProducts/ProductList/FilterHousing';
import Membrane from './Components/Products/AllProducts/ProductList/Membrane';
import IndustrialPumps from './Components/Products/AllProducts/ProductList/IndustrialPumps';
import Vessel from './Components/Products/AllProducts/ProductList/Vessel';
import Accessories from './Components/Products/AllProducts/ProductList/Accessories';

function App() {

  return (
    <>
        <Router>
          <MainNavBar />
          <Routes>
             <Route path='/' exact element={<LandingPage/>}/>
             <Route path='/about-us' Component={AboutUs}/>
             <Route path='/services' Component={ServicesComponent}/>
             <Route path='/contact-us' Component={ContactUs}/>
             <Route path='/ro-based-water-treatment-plant' element={<ROBased/>}/>
             <Route path='/fully-automatic-water-treatment-plant' Component={FullyAutomatic}/>
             <Route path='/packaged-drinking-water-turnkey-project' Component={TrunkeyProject}/>
             <Route path='/added-minerals' Component={AddedMinerals}/>
             <Route path='/utra-filteration-water-treatent-plant' Component={UltraFiltration}/>
             <Route path='/utra-violate-water-treatent-plant' Component={UltraViolate}/>
             <Route path='softner-base-water-treatment-plant' Component={SoftnerBased}/>
             <Route path='/dm-plant-filtration-plant' Component={DMPlant}/>
             <Route path='/swimming-pool-filtration-plant' Component={PoolFiltration}/>
             <Route path='/sea-water-plant' Component={SeaWaterPlant}/>
             <Route path='/products' Component={AllProducts}/>

             <Route path='/effluent-treatent-plant-or-sewage-treatent-plant' exact element={<EffluentTreatment/>}/>
             <Route path='/online-chillers' exact element={<OnlineChiller/>}/>
             <Route path='/water-cooler' exact element={<WaterCooler  />}/>
             <Route path='/ozonator-or-oxygen-concentrator-greenz' exact element={<Ozonator/>}/>
             <Route path='/anti-scallant-d-scallant-chemicals' exact element={<AntiScallant/>}/>
             <Route path='/meter-or-industrail-pane' exact element={<Meter/>}/>
             <Route path='/micron-cartridge-filter' exact element={<Micron/>}/>
             <Route path='/filter-housing-or-industrial-housing' exact element={<FilterHousing/>}/>
             <Route path='/membrane' exact element={<Membrane/>}/>
             <Route path='/industrial-pumps' exact element={<IndustrialPumps/>}/>
             <Route path='/vessel' exact element={<Vessel/>}/>
             <Route path='/accessories' exact element={<Accessories/>}/>
          </Routes>
          <Footer />        
        </Router>
    </>
  )
}

export default App
