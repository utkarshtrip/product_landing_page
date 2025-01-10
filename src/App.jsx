import './App.css'
import Navbar from './components/navbar/Navbar'
import Contactus from './pages/contact/Contactus'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login'
import { Routes,Route ,BrowserRouter} from 'react-router-dom'
import CreateUser from './pages/createUser/CreateUser'
import Dashboard from './pages/dashboard/Dashboard'
import Protected from './components/protected/Protected'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar location={location}/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/dashboard/create-user' element={<Protected allowedRoles={[]}> <CreateUser/></Protected>}/>
      <Route exact path='/dashboard/login' element={<Login/>}/>
      <Route exact path='/dashboard' element={<Protected allowedRoles={['all']}><Dashboard/></Protected> }/>
      <Route exact path='/contact-us' element={<Contactus/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
