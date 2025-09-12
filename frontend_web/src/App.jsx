import { Routes,Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'

const App = () => {
  const isSellerPath=useLocation().pathname.includes("seller");
  const {showUserLogin} =useAppContext();
  return (
    <div>
      <Toaster />
      {!isSellerPath && (
             <Navbar/>
      )}
      {showUserLogin ? <Login /> : null}
      
      <div className={`${isSellerPath ? "" :"px-6 md:px-16 lx:px-24"}`} >
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/products' element={<AllProducts/>}></Route>
          <Route path='/products/:category' element={<ProductCategory/>}></Route>
        </Routes>
      </div>
      {!isSellerPath &&  <Footer/>}
    </div>
  )
}

export default App