import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import { Footer } from './Basics';
import MainNavBar from './Components/MainNavBar';
import AboutUs from './Components/AboutUs';
import ServicesComponent from './Components/ServicesComponent';
import { AddedMinerals, SoftnerBased, DMPlant, FullyAutomatic, PoolFiltration, SeaWaterPlant, TrunkeyProject, UltraFiltration, UltraViolate } from './Components/Products';
import ContactUs from './Components/ContactUs';
import { AllProducts, ROBased } from './Components/Products';

function App() {

  return (
    <>
        <Router>
          <MainNavBar />
          <Routes>
             <Route path='/' exact Component={LandingPage}/>
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
             <Route path='/dm-plant-filteration-plant' Component={DMPlant}/>
             <Route path='/swimming-pool-filteration-plant' Component={PoolFiltration}/>
             <Route path='/sea-water-plant' Component={SeaWaterPlant}/>
             <Route path='/products' Component={AllProducts}/>
          </Routes>
          <Footer />        
        </Router>
    </>
  )
}

export default App
