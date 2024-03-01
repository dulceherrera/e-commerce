import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import './styles/formRegister.css'

const FormRegister = () => {

  const {register, handleSubmit, reset} = useForm()

  const registerUser = useAuth()

  const navigate = useNavigate()

  const submit = data =>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
      registerUser(url, data);
      reset({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
      })
      navigate('/login')
    }
  return (
    <div className='register-container'>
      <div className='main-container'>
        <form className='register-form' onSubmit={handleSubmit(submit)}>
          <strong className='register-title'>Sign Up</strong>
          <div className='input-container'>
            <label className='register-form-label'>First Name</label>
            <input className='register-form-label-input' {...register('firstName')} type='text' />
          </div>
          <div className='input-container'>
            <label className='register-form-label'>Last Name</label>
            <input className='register-form-label-input' {...register('lastName')} type='text' />
          </div>
          <div className='input-container'>
            <label className='register-form-label'>Email</label>
            <input className='register-form-label-input' {...register('email')} type='email' />
          </div>
          <div className='input-container'>
            <label className='register-form-label'>Password</label>
            <input className='register-form-label-input' {...register('password')} type='password' />
          </div>
          <div className='input-container'>
            <label className='register-form-label'>Phone</label>
            <input className='register-form-label-input' {...register('phone')} type='password' />
          </div>
          <button className='register-form-btn'>Sign up</button>
          <div className='switch-login'>
            Already have an account? {" "}
            <button type='button' onClick={() => navigate('/login')}>Log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormRegister
