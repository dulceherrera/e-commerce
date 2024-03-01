import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CartPage from '../../pages/CartPage'
import { getCartThunk } from '../../store/slices/cart.slice'
import './styles/navBar.css'

const NavBar = () => {

  const [isCartOpen, setIsCartOpen] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const openCart = () => {
    if (localStorage.getItem('token')){
      setIsCartOpen(!isCartOpen)
      dispatch(getCartThunk())
    }else {
      navigate('/login')
      alert('You have to Log In to access to your cart')
    }
  }

  const openPurchases = () => {
    navigate('/purchases')
  }
  return (
    <div className='navbar'>
      <div className='fixed'>
        <nav>
          <div className='title-navbar'>
            <strong onClick={() => navigate('/')}>e-commerce</strong>
          </div>
          <button className='icon'><Link to='/register'><i className="fa-solid fa-user-plus"></i></Link></button>
          <button className='icon'><Link to='/login'><i className="fa-regular fa-user"></i></Link></button>
          <button className='icon' onClick={openPurchases}><i className="fa-solid fa-box-archive"></i></button>
          <button className='icon' onClick={openCart} style={{color: isCartOpen ? '#f85555' : ''}}><i className="fa-solid fa-cart-shopping"></i></button>
        </nav>
        <div className={`cart-modal ${isCartOpen ? 'open' : ''}`}>
          <CartPage
            handleClose = {() => setIsCartOpen(false)}
          />
        </div>
        {
          isCartOpen &&
          <div className='overlay' onClick={() => setIsCartOpen(false)}></div>
        }
      </div>
    </div>
  )
}

export default NavBar
