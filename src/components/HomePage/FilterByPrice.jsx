import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterByPrice.css'
import { useState } from 'react'

const FilterByPrice = ({setPriceRange}) => {

  const [isOpen, setIsOpen] = useState(true)
  const {register, handleSubmit, reset} = useForm()

  const submit = data => {
    const from = +data.from;
    const to = +data.to;

    setPriceRange({
      from,
      to: to === 0 ? Infinity : to
    })

    reset();
  }


  return (
      <div className={`filter-dropdown ${isOpen ? '' : 'closed'}`}>
        <div className='header' onClick={() => setIsOpen(!isOpen)}>
          <span>Price</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className='content'>
          <form className='filter-price-form' onSubmit={handleSubmit(submit)}>
            <label className='filter-price-form-label'>
              <span className='filter-price-form-label-sp'>From</span>
              <input className='filter-price-form-label-in' {...register('from')} type='number' />
            </label>
            <label className='filter-price-form-label'>
              <span className='filter-price-form-label-sp'>To</span>
              <input className='filter-price-form-label-in' {...register('to')} type='number' />
            </label>
            <button className='price-filter-btn'>Filter price</button>
          </form>
        </div>
      </div>
  )
}

export default FilterByPrice
