import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import getTokenConfig from '../utils/getTokenConfig'
import { getCartThunk, setCart } from '../store/slices/cart.slice'
import CartProduct from '../components/CartPage/CartProduct'
import './styles/cartPage.css'

const CartPage = ({handleClose}) => {

  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  const totalPriceCart = cart.reduce((acc, cv) => {
    return acc + (cv.product?.price*cv.quantity)
  }, 0)

  const handlePurchase = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url, '', getTokenConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCart([]))
      })
      .catch(err => console.log(err))
  }

  //console.log(cart)
  return (
    <div className='cart'>
      <div className='scrollbar'>
        <h4>Carrito de compras</h4>
        <ul className='cart-product-list'>
          {
            cart.map(prod => (
              <CartProduct
                prod = {prod}
                key = {prod.id}
                handleClose = {handleClose}
              />
            ))
          }
        </ul>
      </div>
      <div className='checkout-container'>
        <div className='total'>
          <span className='label'>Total:</span>
          <b>$ {totalPriceCart}</b>
        </div>
        <button className='buy-btn' onClick={handlePurchase}>Checkout</button>
      </div>
    </div>
  )
}

export default CartPage
