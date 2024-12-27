import './App.css'
import Navbar from './components/navbar/Navbar'
import Contactus from './pages/Contactus'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import { Routes,Route ,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar location={location}/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/contact-us' element={<Contactus/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
