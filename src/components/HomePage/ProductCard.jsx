import React from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addProductCartThunk } from '../../store/slices/cart.slice'
import { Link } from 'react-router-dom'
import './styles/productCard.css'


const ProductCard = ({prod}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addToCart = e => {
    e.stopPropagation()
    if(localStorage.getItem('token')){
      dispatch(addProductCartThunk(prod.id, 1))
    }else{
      navigate('/login')
    }
  }

  return (
    <div className='product'>
      <Link to ={`/product/${prod.id}`}>
        <div className='image'>
          <img src={prod?.images[0]?.url} alt='' className='product-img product-img-1' />
          <img src={prod?.images[1]?.url} alt='' className='product-img product-img-2' />
        </div>
        <div className='info'>
          <span className='product-brand'>{prod?.brand}</span>
          <strong>{prod?.title}</strong>
          <span className='product-price-label'>Price</span>
          <span className='product-price-value'>$ {prod?. price}</span>
        </div>
      </Link>
      <button className='cart-button' onClick={addToCart}>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  )
}

export default ProductCard
