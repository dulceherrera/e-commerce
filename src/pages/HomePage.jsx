import React from 'react'
import { getProductsThunk } from '../store/slices/products.slice'
import {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import FilterByPrice from '../components/HomePage/FilterByPrice'
import FilterByCategory from '../components/HomePage/FilterByCategory'
import ProductCard from '../components/HomePage/ProductCard'
import './styles/homePage.css'

const HomePage = () => {

  const [nameValue, setNameValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [categorySelected, setCategorySelected] = useState('all')
const [priceRange, setPriceRange] = useState({
  from: 0,
  to: Infinity
})

  const products = useSelector(store => store.products)

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    dispatch(getProductsThunk(url))
  }, [])


    const textInput = useRef()

    const handleInput = (e) => {
      e.preventDefault()
      setNameValue(textInput.current.value.toLowerCase().trim());
      e.target.reset()
    }

    const cbFilter = prod => {
      const filterName = prod.title.toLowerCase().includes(nameValue)
      const filterCategory = categorySelected === 'all'? true : categorySelected === prod.category.id
      const filterPrice = priceRange.from <= +prod.price && +prod.price <= priceRange.to
      return filterName &&filterCategory && filterPrice
    }

  return (
    <div className='homepage-container'>
      <aside>
        <div className='modal-fixed'>
          <div className='filters'>
            <FilterByPrice
              setPriceRange = {setPriceRange}
              handleClose={() => {}}
            />
            <FilterByCategory
              categorySelected = {categorySelected}
              setCategorySelected = {setCategorySelected}
              handleClose={() => {}}
            />
          </div>
        </div>
      </aside>
      <section className='main-container'>
        <div className='search-input'>
          <form className='form-input' onSubmit={handleInput}>
            <input className='homepage-input' ref={textInput} type='text' placeholder='What are you looking for?'/>
            <button className='search-btn-icon'><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <button className='filter-btn'
            onClick={() => setIsOpen(!isOpen)}
            style={{color: isOpen ?'#f85555' : ''}}
          ><i className="fa-solid fa-filter"></i>Filters</button>
          <div className={`filters-modal ${isOpen ? 'open' : ''}`}>
            <button className='close' onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h5>Filters</h5>
            <FilterByPrice handleClose = {() => setIsOpen(!isOpen) } setPriceRange = {setPriceRange} />
            <FilterByCategory handleClose={() => setIsOpen(!isOpen)} categorySelected = {categorySelected}
              setCategorySelected = {setCategorySelected} />
          </div>
          {
            isOpen && <div className='overlay' onClick={() => setIsOpen(false)}></div>
          }
        </div>
        <ul className='products-list'>
          {
            products?.filter(cbFilter).map(prod => (
              <li key={prod.id}>
                <ProductCard
                  key = {prod.id}
                  prod = {prod}
                />
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}

export default HomePage
