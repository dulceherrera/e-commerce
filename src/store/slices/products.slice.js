import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const productsSlice = createSlice({
  name: 'products',
  initialState: null,
  reducers: {
    setProducts: (currentValue, action) => action.payload
  }
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer

export const getProductsThunk = (url) => (dispatch) => {
  axios.get(url)
    .then(res => dispatch(setProducts(res.data)))
    .catch(err=>console.log(err))
}
