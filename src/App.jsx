import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import { Footer, Header } from './Basics';
import MainNavBar from './Components/MainNavBar';

function App() {

  return (
    <>
        <Router>
          <MainNavBar />
          <Routes>
             <Route path='/' exact Component={LandingPage}/>
          </Routes>
          <Footer />        
        </Router>
    </>
  )
}

export default App
