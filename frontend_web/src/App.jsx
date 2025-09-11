import { Routes,Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const isSellerPath=useLocation().pathname.includes("seller");
  return (
    <div>
      <Toaster />
      {!isSellerPath && (
             <Navbar/>
      )}
      
      <div className={`${isSellerPath ? "" :"px-6 md:px-16 lx:px-24"}`} >
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App