import React from 'react'
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useState } from 'react'
import './styles/filterByCategory.css'

const FilterByCategory = ({categorySelected, setCategorySelected}) => {

  const [categories, getCategories] = useFetch()

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
    getCategories(url)
  }, [])

  const [isOpen, setIsOpen] = useState(true)

  const handleCategory = (id) => {
    setCategorySelected(id)
  }

  return (
    <div className={`filter-dropdown ${isOpen ? '' : 'closed'}`}>
      <div className='header' onClick={() => setIsOpen(!isOpen)}>
        <span>Category</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className='content'>
        <ul className='category-filter'>
          {
            categories?.map(category => (
              <li key={category.id}>
                <button onClick={() => handleCategory(category.id)}>{category.name}</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default FilterByCategory
