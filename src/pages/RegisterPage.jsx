import React from 'react'
import FormRegister from '../components/RegisterPage/FormRegister'
import CardLoggeado from '../shared/CardLoggeado'

const RegisterPage = () => {
  return (
    <div>
      {
        localStorage.getItem('name') ? (
          <CardLoggeado />
        ) : (
          <FormRegister />
        )
      }
    </div>
  )
}

export default RegisterPage
