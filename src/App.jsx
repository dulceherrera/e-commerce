import './App.css'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import CartPage from './pages/CartPage'
import PurchasesPage from './pages/PurchasesPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProductIdPage from './pages/ProductIdPage'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div>
     <NavBar />
     <div className='content'>
      <Routes>
          <Route path='/' element = { <HomePage /> } />
          <Route path='/product/:id' element = { <ProductIdPage /> } />
          <Route path='/register' element = { <RegisterPage /> } />
          <Route path='/login' element = { <LoginPage /> } />
          <Route element={<ProtectedRoutes />}>
            <Route path='/cart' element={<CartPage />} />
            <Route path='/purchases' element={<PurchasesPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
