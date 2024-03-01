import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getTokenConfig from '../../utils/getTokenConfig'


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (currentValue, action) => [...currentValue, action.payload],
    removeFromCart: (currentValue, action) => currentValue.filter(prod => prod.id !== action.payload),
    setCart: (currentValue, action) => action.payload,
    updateCart: (currentValue, action) => currentValue.map(prod => (prod.id == action.payload.id) ? action.payload : prod)
  }
})

export const { addToCart, removeFromCart, setCart, updateCart } = cartSlice.actions

export default cartSlice.reducer

const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

export const getCartThunk = () => (dispatch) => {
  const url = `${baseUrl}`
  axios.get(url, getTokenConfig() )
    .then(res => dispatch(setCart(res.data)))
    .catch(err => console.log(err))
}

export const addProductCartThunk = (productId, quantity = 1) => (dispatch) => {
  const url = `${baseUrl}`
  const data = {
    productId,
    quantity
  }
  axios.post(url, data, getTokenConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

export const updateCartThunk = (id, quantity) => (dispatch) => {
  const url = `${baseUrl}/${id}`
  const data = {
    quantity
  }
  axios.put(url, data, getTokenConfig())
  .then(res => {
    console.log(res.data)
    dispatch(getCartThunk())
  })
  .catch(err => console.log(err))
}

export const deleteProductCartThunk = (id) => (dispatch) => {
  const url = `${baseUrl}/${id}`
  axios.delete(url, getTokenConfig())
    .then(res => {
      console.log(res.data)
      dispatch(removeFromCart(id))
    })
    .catch(err => console.log(err))
}
