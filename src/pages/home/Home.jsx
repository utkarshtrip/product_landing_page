import ProductsIdea1 from '../ProductsIdea1'
import './Home.css'
import Hero from '../../components/hero/Hero'
import UserDetailsModal from '../../components/userDetailsModal/UserDetailsModal'
import { useSelector } from 'react-redux'

const Home = () => {
  const {open}=useSelector(state=>state.userDetailsModal)
  return (
    <div className='home'>
      <Hero/>
      <ProductsIdea1/>
      {open&&<UserDetailsModal/>}
      
    </div>
  )
}

export default Home