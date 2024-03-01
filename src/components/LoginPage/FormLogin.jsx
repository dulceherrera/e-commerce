import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import './styles/formLogin.css'

const FormLogin = () => {

  const navigate = useNavigate()
  const {register, handleSubmit, reset} = useForm()
  const createToken = useAuth();

  const submit = data => {
    console.log(data)
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    createToken(url, data)
    reset({
      email: '',
      password: ''
    })
  }

  return (
    <div className='login-container'>
      <div className='main-container'>
        <form onSubmit={handleSubmit(submit)} className='login'>
          <strong className='title-login'>Welcome! Enter your email and password to continue</strong>
          <div className='test-data-container'>
            <b>Test data</b>
            <div className='field'>
              <i className="fa-regular fa-envelope"></i> john@gmail.com
            </div>
            <div className='field'>
              <i className="fa-solid fa-lock"></i> john1234
            </div>
          </div>
          <div className='input-container'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='user' {...register('email')}></input>
          </div>
          <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='key' {...register('password')}></input>
          </div>
          <div className='error-message'>'Error'</div>
          <button className='submit-button-login'>Login</button>
          <div className='switch-signup'>
            Don't have an account? {" "}
            <button type='button' onClick={() => navigate('/register')}>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormLogin
