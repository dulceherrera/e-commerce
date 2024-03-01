import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../HomePage/ProductCard'
import useFetch from '../../hooks/useFetch'
import './styles/similarProduct.css'

const SimilarProduct = ({categoryId, idProd}) => {

  const [productsByCategory, getProductsByCategory] = useFetch()

  useEffect(() => {
    if (categoryId){
      const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`
      getProductsByCategory(url)
    }
  }, [categoryId])

  return (
    <article className='similar-items'>
      <h2>Discover similar items</h2>
      <ul className='list-similar'>
        {
          productsByCategory?.filter(prod => {
            if (prod.id !== idProd){
              return prod
            }
          }).map(prod => (
            <li key={prod.id}>
              <ProductCard
                key = {prod.id}
                prod = {prod}
              />
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default SimilarProduct
