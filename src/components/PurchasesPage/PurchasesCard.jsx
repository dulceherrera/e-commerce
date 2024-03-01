import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/purchasesCard.css'

const PurchasesCard = ({purchase}) => {

  const navigate = useNavigate()

  return (
    <li
    key={purchase.id}
    onClick={() => navigate(`/product/${purchase.product.id}`)}
    className='product-item'
    >
      <div className='image'>
        <img src={purchase?.product.images[0].url} alt='image-product' />
      </div>
      <div className='name'>
        {purchase?.product.title}
      </div>
      <div className='quantity'>
        <div className='box'>{purchase.quantity}</div>
      </div>
      <div className='price'>
        $ {purchase.product?.price * purchase.quantity}
      </div>
    </li>
  )
}

export default PurchasesCard
