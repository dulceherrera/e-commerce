import React from 'react'
import './styles/productInfo.css'
import { useState } from 'react'
import '../../pages/styles/productIdPage.css'
import { useDispatch } from 'react-redux'
import { addProductCartThunk } from '../../store/slices/cart.slice'


const ProductInfo = ({product}) => {

  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  const handleLess = () => {
    if (quantity - 1 >= 1){
      setQuantity(quantity - 1)
    }
  }

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleAddtoCart = () => {
    dispatch(addProductCartThunk(product.id, quantity))
  }

  return (
    <div className='productinfo-container'>
      <div className='brand'>
        {product?.brand}
      </div>
      <h2>{product?.title}</h2>
      <div className='product-data'>
        <div className='product-options'>
          <div className='flex'>
            <div className='price'>
              <span className='label'>Price </span>
              <span className='value'>${product?.price}</span>
            </div>
            <div className='quantity-box'>
              <div className='label'>Quantity</div>
              <div className='flex'>
                <button onClick={handleLess}
                disabled={quantity <= 1}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <div className='value'>{quantity}</div>
                <button onClick={handlePlus}>
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <button className='add-cart-button' onClick={handleAddtoCart}>
            Add to Cart <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
        <p className='product-description'>
          {product?.description}
        </p>
      </div>
    </div>
  )
}

export default ProductInfo
