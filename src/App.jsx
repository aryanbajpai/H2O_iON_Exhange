import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import { Footer } from './Basics';
import MainNavBar from './Components/MainNavBar';
import AboutUs from './Components/AboutUs';
import ServicesComponent from './Components/ServicesComponent';
import Products from './Components/Products';
import ContactUs from './Components/ContactUs';
import ROBased from './Components/Products/ROBased';
import FullyAutomatic from './Components/Products/FullyAutomatic';

function App() {

  return (
    <>
        <Router>
          <MainNavBar />
          <Routes>
             <Route path='/' exact Component={LandingPage}/>
             <Route path='/about-us' exact Component={AboutUs}/>
             <Route path='/services' exact Component={ServicesComponent}/>
             <Route path='/products' exact Component={Products}/>
             <Route path='/contact-us' exact Component={ContactUs}/>
             <Route path='/ro-based-water-treatment-plant' exact Component={ROBased}/>
             <Route path='/fully-automatic-water-treatment-plant' exact Component={FullyAutomatic}/>
          </Routes>
          <Footer />        
        </Router>
    </>
  )
}

export default App
