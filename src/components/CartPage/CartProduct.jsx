import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {deleteProductCartThunk, updateCartThunk} from '../../store/slices/cart.slice'

const CartProduct = ({prod, handleClose}) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteProductCartThunk(prod.id))
  }

  const handleMinus = () => {
    if(prod.quantity > 1) {
      dispatch(updateCartThunk(prod.id, prod.quantity - 1))
    }
  }

  const handlePlus = () => {
    dispatch(updateCartThunk(prod.id, prod.quantity + 1))
  }
  console.log(prod)

  return (
  <li key={prod.id}>
    <div className='product-info'>
     <img src={prod.product.images?.[0].url} alt='product image'/>
     <div className='details'>
      <span className='brand'>{prod.product.brand}</span>
      <Link
        className='name'
        onClick={handleClose}
        to={`/product/${prod.product.id}`}
      >{prod.product.title}</Link>
      <div className='quantity-box'>
        <div className='flex'>
          <button onClick={handleMinus}><i className="fa-solid fa-minus"></i></button>
          <div className='value'>
            {prod.quantity}
          </div>
          <button onClick={handlePlus}><i className="fa-solid fa-plus"></i></button>
      </div>
      </div>
    </div>
    <div className='btn-delete'>
      <button onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button>
    </div>
  </div>
  <div className='total'>
    <span className='label'>Total: </span>
    <b>$ {prod.product.price * prod.quantity}</b>
    </div>
  </li>
  )
}

export default CartProduct
