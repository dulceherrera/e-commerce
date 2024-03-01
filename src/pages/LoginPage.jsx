import React from 'react'
import FormLogin from '../components/LoginPage/FormLogin'
import CardLoggeado from '../shared/CardLoggeado'

const LoginPage = () => {

  return (
    <div>
      {
        localStorage.getItem('name') ? (
          <CardLoggeado />
        ) : (
          <FormLogin />
        )
      }

    </div>
  )
}

export default LoginPage
