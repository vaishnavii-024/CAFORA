import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Explore from './pages/Explore'
import CafeDetails from './pages/CafeDetails'
import Favorites from './pages/Favorites'
import Manage from './pages/Manage'
import AddCafe from './pages/AddCafe'
import EditCafe from './pages/EditCafe'


function App() {


  return (
    <>
    <Header/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/explore' element={<Explore/>}/>
<Route path='/cafedetails' element={<CafeDetails/>}/>
<Route path='/favorites' element={<Favorites/>} />
<Route path='/manage' element={<Manage/>}/>
<Route path='/add-cafe' element={<AddCafe/>}/>
<Route path='/edit-cafe' element={<EditCafe/>} />
    </Routes>
  <Footer/>
    </>
  )
}

export default App
