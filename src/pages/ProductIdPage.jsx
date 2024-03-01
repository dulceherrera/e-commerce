import React from 'react'
import ProductInfo from '../components/ProductIdPage/ProductInfo'
import SliderImg from '../components/ProductIdPage/SliderImg'
import SimilarProduct from '../components/ProductIdPage/SimilarProduct'
import { useParams, Link } from "react-router-dom"
import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/productIdPage.css'
import '../components/ProductIdPage/styles/productInfo.css'

const ProductIdPage = () => {

  const { id } = useParams()

  const [product, getProductId] = useFetch()

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    getProductId(url)
  }, [id])

  return (
    <div className='productid-container main-container'>
      <div className='history'>
        <Link to='/'>Home</Link>
        <div className='separator'></div>
        <b>{product?.title}</b>
      </div>
      <div className='product-info-flex'>
        <div className='col'>
          < SliderImg
              images = {product?.images}
          />
        </div>
        <div className='col'>
          <ProductInfo
              product = {product}
          />
        </div>
      </div>
      <div className='similar-products-container'>
        <SimilarProduct
            categoryId = {product?.categoryId}
            idProd = {product?.id}
        />
      </div>
    </div>
  )
}

export default ProductIdPage
