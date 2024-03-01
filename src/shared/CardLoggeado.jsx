import React from 'react'
import './styles/cardLoggeado.css'

const CardLoggeado = () => {

  const handleOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    setTimeout(() => {
      window.location.reload(true)
    }, 2000);
  }

  return (
      <div className='card-logeado-container'>
        <header className='logeado-header'></header>
        <h3 className='logeado-name'>{localStorage.getItem('name')}</h3>
        <button onClick={handleOut} className='logeado-btn'>Log out</button>
      </div>
  )
}

export default CardLoggeado
